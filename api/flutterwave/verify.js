import {
  getChargeById,
  getChargeByReference,
} from "./_flw-v4.js";

/**
 * Google Apps Script web apps often 302-redirect POST → GET, which drops the body
 * and causes "Cannot read properties of undefined (reading 'postData')".
 * Re-POST JSON to the redirect URL when needed.
 */
async function postToGoogleAppsScript(url, payload) {
  const body = JSON.stringify(payload);
  const headers = { "Content-Type": "application/json" };

  let response = await fetch(url, {
    method: "POST",
    headers,
    body,
    redirect: "manual",
  });

  if (response.status >= 300 && response.status < 400) {
    const location = response.headers.get("location");
    if (location) {
      response = await fetch(location, {
        method: "POST",
        headers,
        body,
        redirect: "follow",
      });
    }
  }

  const text = await response.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }

  return { response, json };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const {
    chargeId,
    transactionId,
    tx_ref,
    reference,
    expectedAmount,
    expectedCurrency = "NGN",
    registration,
  } = req.body || {};

  const chargeLookupId = chargeId || transactionId;
  const chargeReference = reference || tx_ref;

  if (!chargeLookupId && !chargeReference) {
    res.status(400).json({ ok: false, error: "Missing chargeId or reference" });
    return;
  }

  try {
    const data = chargeLookupId
      ? await getChargeById(chargeLookupId)
      : await getChargeByReference(chargeReference);

    if (!data) {
      res.status(404).json({
        ok: false,
        verified: false,
        error: "Charge not found",
      });
      return;
    }

    const status = data.status;
    const amount = Number(data.amount);
    const currency = data.currency;
    const fwReference = data.reference;

    const okStatus = status === "succeeded";
    const okCurrency = currency === expectedCurrency;
    const okAmount =
      typeof expectedAmount === "number"
        ? Number(amount) === Number(expectedAmount)
        : true;
    const okRef = chargeReference ? fwReference === chargeReference : true;

    if (!okStatus || !okCurrency || !okAmount || !okRef) {
      res.status(400).json({
        ok: false,
        verified: false,
        reason: { okStatus, okCurrency, okAmount, okRef },
        flutterwave: {
          id: data.id,
          status,
          amount,
          currency,
          reference: fwReference,
        },
      });
      return;
    }

    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const sheetsToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN;
    let stored = false;
    let storeError = null;

    if (sheetsUrl) {
      try {
        const payload = {
          token: sheetsToken || null,
          source: "focusflow-cohort",
          storedAt: new Date().toISOString(),
          registration: registration || null,
          flutterwave: {
            id: data.id,
            reference: data.reference,
            tx_ref: data.reference,
            status: data.status,
            amount: data.amount,
            currency: data.currency,
            created_at: data.created_datetime,
            billing_details: data.billing_details || null,
            customer: data.billing_details
              ? {
                  name: data.billing_details.name,
                  email: data.billing_details.email,
                  phone_number: data.billing_details.phone,
                }
              : null,
          },
        };

        const { response: storeRes, json: storeJson } = await postToGoogleAppsScript(
          sheetsUrl,
          payload
        );

        stored = storeRes.ok && storeJson?.ok !== false;
        if (!stored) {
          storeError = storeJson || {
            status: storeRes.status,
            hint:
              storeJson?.error ||
              "Sheet webhook failed. Redeploy Apps Script and use the /exec URL.",
          };
        }
      } catch (e) {
        storeError = { message: e?.message || String(e) };
      }
    }

    res.status(200).json({
      ok: true,
      verified: true,
      stored,
      storeError,
      flutterwave: {
        id: data.id,
        reference: data.reference,
        status: data.status,
        amount: data.amount,
        currency: data.currency,
        billing_details: data.billing_details || null,
      },
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
}
