import {
  getChargeById,
  getChargeByReference,
  normalizeEnv,
  shouldUseV4Payment,
} from "./_flw-v4.js";
import {
  isV4ChargeId,
  validateFlutterwaveSecretKey,
  verifyV3Transaction,
} from "./_hosted-checkout.js";
import { storeRegistration } from "./_sheets.js";

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
    const keyError = validateFlutterwaveSecretKey(secretKey);
    const useV4 =
      isV4ChargeId(chargeLookupId) ||
      (shouldUseV4Payment() && !!keyError);

    let result;

    if (useV4) {
      result = await verifyV4Payment({
        chargeLookupId,
        chargeReference,
        expectedAmount,
        expectedCurrency,
      });
    } else if (keyError) {
      res.status(500).json({ ok: false, error: keyError });
      return;
    } else {
      result = await verifyV3Transaction({
        secretKey,
        transactionId: chargeLookupId,
        tx_ref: chargeReference,
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
