const V3_PAYMENTS_URL = "https://api.flutterwave.com/v3/payments";

export function isV4ChargeId(id) {
  return typeof id === "string" && id.startsWith("chg_");
}

/** Returns null if valid, or a user-facing error string. */
export function validateFlutterwaveSecretKey(secretKey) {
  if (!secretKey) return "FLUTTERWAVE_SECRET_KEY is not set.";

  if (secretKey.startsWith("FLWPUBK")) {
    return "FLUTTERWAVE_SECRET_KEY looks like a Public Key (FLWPUBK-...). Use your Secret Key (FLWSECK-...) from Flutterwave → Settings → API Keys.";
  }

  if (
    !secretKey.startsWith("FLWSECK_TEST-") &&
    !secretKey.startsWith("FLWSECK-")
  ) {
    return "FLUTTERWAVE_SECRET_KEY must be your Flutterwave Secret Key (FLWSECK-... or FLWSECK_TEST-...), not Client Secret or Encryption Key. Find it under Flutterwave → Settings → API Keys.";
  }

  return null;
}

export async function createV3HostedPayment({
  secretKey,
  reference,
  amount,
  currency,
  redirectUrl,
  registration,
}) {
  const res = await fetch(V3_PAYMENTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tx_ref: reference,
      amount,
      currency,
      redirect_url: redirectUrl,
      customer: {
        email: registration.parentEmail.trim(),
        name: registration.parentFullname.trim(),
        phonenumber: registration.parentPhone || undefined,
      },
      customizations: {
        title: "The Proxy Academy — FocusFlow Cohort",
        description: `FocusFlow cohort for ${registration.childFullname || "student"}`,
        logo: "https://theproxyacademy.com/logo512.png",
      },
      meta: {
        cohort: "focusflow",
        child_name: registration.childFullname,
        child_age: registration.childAge,
        schedule: registration.schedulePreference || "unspecified",
        plan: registration.paymentPlan,
      },
    }),
  });

  const json = await res.json().catch(() => null);
  if (!res.ok || json?.status !== "success" || !json?.data?.link) {
    const message = json?.message || "Flutterwave hosted payment link failed";
    const err = new Error(message);
    err.details = json;
    throw err;
  }

  return {
    checkoutUrl: json.data.link,
    reference,
    provider: "v3",
  };
}

export async function verifyV3Transaction({
  secretKey,
  transactionId,
  tx_ref,
  expectedAmount,
  expectedCurrency = "NGN",
}) {
  const verifyRes = await fetch(
    `https://api.flutterwave.com/v3/transactions/${encodeURIComponent(transactionId)}/verify`,
    {
      headers: { Authorization: `Bearer ${secretKey}` },
    }
  );

  const verifyJson = await verifyRes.json();
  if (!verifyRes.ok) {
    const err = new Error("Flutterwave verify failed");
    err.details = verifyJson;
    throw err;
  }

  const data = verifyJson?.data;
  const status = data?.status;
  const amount = data?.amount;
  const currency = data?.currency;
  const fwTxRef = data?.tx_ref;

  const okStatus = status === "successful";
  const okCurrency = currency === expectedCurrency;
  const okAmount =
    typeof expectedAmount === "number" ? Number(amount) === Number(expectedAmount) : true;
  const okRef = tx_ref ? fwTxRef === tx_ref : true;

  if (!okStatus || !okCurrency || !okAmount || !okRef) {
    return {
      verified: false,
      reason: { okStatus, okCurrency, okAmount, okRef },
      flutterwave: {
        id: data?.id,
        tx_ref: fwTxRef,
        status,
        amount,
        currency,
        charged_amount: data?.charged_amount,
        created_at: data?.created_at,
        customer: data?.customer,
      },
    };
  }

  return {
    verified: true,
    flutterwave: {
      id: data?.id,
      tx_ref: fwTxRef,
      reference: fwTxRef,
      status,
      amount,
      currency,
      charged_amount: data?.charged_amount,
      created_at: data?.created_at,
      customer: data?.customer,
    },
  };
}
