import {
  getChargeById,
  getChargeByReference,
  normalizeEnv,
} from "./_flw-v4.js";
import { isV4ChargeId, verifyV3Transaction } from "./_hosted-checkout.js";

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

async function storeRegistration({ registration, flutterwave }) {
  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const sheetsToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN;
  if (!sheetsUrl) return { stored: false, storeError: null };

  try {
    const payload = {
      token: sheetsToken || null,
      source: "focusflow-cohort",
      storedAt: new Date().toISOString(),
      registration: registration || null,
      flutterwave,
    };

    const { response: storeRes, json: storeJson } = await postToGoogleAppsScript(
      sheetsUrl,
      payload
    );

    const stored = storeRes.ok && storeJson?.ok !== false;
    if (stored) return { stored: true, storeError: null };

    return {
      stored: false,
      storeError:
        storeJson ||
        {
          status: storeRes.status,
          hint:
            storeJson?.error ||
            "Sheet webhook failed. Redeploy Apps Script and use the /exec URL.",
        },
    };
  } catch (e) {
    return { stored: false, storeError: { message: e?.message || String(e) } };
  }
}

async function verifyV4Payment({
  chargeLookupId,
  chargeReference,
  expectedAmount,
  expectedCurrency,
}) {
  const data = chargeLookupId
    ? await getChargeById(chargeLookupId)
    : await getChargeByReference(chargeReference);

  if (!data) {
    return { verified: false, notFound: true };
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
    return {
      verified: false,
      reason: { okStatus, okCurrency, okAmount, okRef },
      flutterwave: {
        id: data.id,
        tx_ref: fwReference,
        reference: fwReference,
        status,
        amount,
        currency,
        created_at: data.created_datetime,
        customer: data.billing_details
          ? {
              name: data.billing_details.name,
              email: data.billing_details.email,
              phone_number: data.billing_details.phone,
            }
          : null,
      },
    };
  }

  return {
    verified: true,
    flutterwave: {
      id: data.id,
      tx_ref: fwReference,
      reference: fwReference,
      status,
      amount,
      currency,
      created_at: data.created_datetime,
      customer: data.billing_details
        ? {
            name: data.billing_details.name,
            email: data.billing_details.email,
            phone_number: data.billing_details.phone,
          }
        : null,
    },
  };
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
    const secretKey = normalizeEnv(process.env.FLUTTERWAVE_SECRET_KEY);
    const useV4 =
      isV4ChargeId(chargeLookupId) ||
      (!secretKey && normalizeEnv(process.env.FLUTTERWAVE_CLIENT_ID));

    let result;

    if (useV4 && !secretKey) {
      result = await verifyV4Payment({
        chargeLookupId,
        chargeReference,
        expectedAmount,
        expectedCurrency,
      });
    } else if (secretKey && chargeLookupId && !isV4ChargeId(chargeLookupId)) {
      result = await verifyV3Transaction({
        secretKey,
        transactionId: chargeLookupId,
        tx_ref: chargeReference,
        expectedAmount,
        expectedCurrency,
      });
    } else if (secretKey && chargeReference && !chargeLookupId) {
      result = await verifyV3Transaction({
        secretKey,
        transactionId: chargeLookupId,
        tx_ref: chargeReference,
        expectedAmount,
        expectedCurrency,
      });
    } else {
      result = await verifyV4Payment({
        chargeLookupId,
        chargeReference,
        expectedAmount,
        expectedCurrency,
      });
    }

    if (result.notFound) {
      res.status(404).json({
        ok: false,
        verified: false,
        error: "Payment not found",
      });
      return;
    }

    if (!result.verified) {
      res.status(400).json({
        ok: false,
        verified: false,
        reason: result.reason,
        flutterwave: result.flutterwave,
      });
      return;
    }

    const { stored, storeError } = await storeRegistration({
      registration,
      flutterwave: result.flutterwave,
    });

    res.status(200).json({
      ok: true,
      verified: true,
      stored,
      storeError,
      flutterwave: result.flutterwave,
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
}
