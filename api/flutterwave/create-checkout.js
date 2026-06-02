import {
  flwRequest,
  getFlutterwaveEnv,
  makeReference,
  makeTraceId,
  normalizeEnv,
  parseNgPhone,
  shouldUseV4Payment,
  splitName,
} from "./_flw-v4.js";
import {
  createV3HostedPayment,
  validateFlutterwaveSecretKey,
} from "./_hosted-checkout.js";

function resolveRedirectOrigin(req, redirectOrigin) {
  return (
    redirectOrigin ||
    req.headers.origin ||
    process.env.SITE_ORIGIN ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "https://theproxyacademy.com"
  );
}

async function createV4HostedPayment({
  reference,
  expectedAmount,
  expectedCurrency,
  redirectUrl,
  registration,
}) {
  const customerJson = await flwRequest("/customers", {
    method: "POST",
    body: {
      email: registration.parentEmail.trim(),
      name: splitName(registration.parentFullname),
      phone: parseNgPhone(registration.parentPhone),
    },
    idempotencyKey: makeTraceId(),
  });

  const customerId = customerJson?.data?.id;
  if (!customerId) {
    throw new Error("Could not create Flutterwave customer");
  }

  const sessionJson = await flwRequest("/checkout/sessions", {
    method: "POST",
    body: {
      amount: expectedAmount,
      currency: expectedCurrency,
      customer_id: customerId,
      reference,
      redirect_url: redirectUrl,
      session_duration: 60,
      max_retry_attempts: 5,
    },
    idempotencyKey: makeTraceId(),
  });

  let session = sessionJson?.data;

  if (session?.id && !session?.checkout_url) {
    const retrieved = await flwRequest(
      `/checkout/sessions/${encodeURIComponent(session.id)}`
    );
    session = retrieved?.data || session;
  }

  if (!session?.checkout_url) {
    const err = new Error(
      "Flutterwave v4 checkout session did not include checkout_url. Ask Flutterwave support to enable hosted checkout on your account."
    );
    err.details = sessionJson;
    throw err;
  }

  return {
    checkoutUrl: session.checkout_url,
    reference,
    sessionId: session.id,
    customerId,
    provider: "v4",
  };
}

function v4ErrorResponse(e, res) {
  const flwCode = e?.details?.error?.code;
  const env = getFlutterwaveEnv();

  if (flwCode === "10403" && env === "test") {
    res.status(502).json({
      ok: false,
      error:
        "Flutterwave v4 rejected the request (Forbidden). Set FLUTTERWAVE_ENV=live in Netlify Production env vars.",
      hint:
        "Live Client ID/Secret must use the live API (FLUTTERWAVE_ENV=live). Test credentials use FLUTTERWAVE_ENV=test.",
      details: e?.details || null,
    });
    return;
  }

  res.status(502).json({
    ok: false,
    error: e?.message || "Could not start Flutterwave checkout",
    hint:
      "Confirm FLUTTERWAVE_CLIENT_ID, FLUTTERWAVE_CLIENT_SECRET, and FLUTTERWAVE_ENV match your Flutterwave dashboard (live vs test).",
    details: e?.details || null,
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const {
    registration,
    expectedAmount,
    expectedCurrency = "NGN",
    redirectOrigin,
  } = req.body || {};

  if (!registration?.parentEmail || !registration?.parentFullname) {
    res.status(400).json({ ok: false, error: "Missing registration details" });
    return;
  }

  if (typeof expectedAmount !== "number" || expectedAmount <= 0) {
    res.status(400).json({ ok: false, error: "Invalid payment amount" });
    return;
  }

  const secretKey = normalizeEnv(process.env.FLUTTERWAVE_SECRET_KEY);
  const validV3Key = secretKey && !validateFlutterwaveSecretKey(secretKey);
  const useV4 = shouldUseV4Payment();
  const reference = makeReference();
  const origin = resolveRedirectOrigin(req, redirectOrigin);
  const redirectUrl = `${String(origin).replace(/\/$/, "")}/focusflow-cohort/register?payment=return`;

  if (!useV4 && !validV3Key) {
    res.status(500).json({
      ok: false,
      error:
        "Payment is not configured. Add FLUTTERWAVE_CLIENT_ID + FLUTTERWAVE_CLIENT_SECRET (v4), or FLUTTERWAVE_SECRET_KEY (v3 FLWSECK-...).",
    });
    return;
  }

  // v4 OAuth checkout (default when Client ID + Secret are set)
  if (useV4) {
    try {
      const result = await createV4HostedPayment({
        reference,
        expectedAmount,
        expectedCurrency,
        redirectUrl,
        registration,
      });
      res.status(200).json({ ok: true, ...result });
      return;
    } catch (e) {
      v4ErrorResponse(e, res);
      return;
    }
  }

  // v3 Standard hosted checkout (only when FLUTTERWAVE_USE_V4=false and FLWSECK key is set)
  try {
    const result = await createV3HostedPayment({
      secretKey,
      reference,
      amount: expectedAmount,
      currency: expectedCurrency,
      redirectUrl,
      registration,
    });
    res.status(200).json({ ok: true, ...result });
  } catch (e) {
    const invalidAuth =
      e?.message === "Invalid authorization key" ||
      e?.details?.message === "Invalid authorization key";

    res.status(502).json({
      ok: false,
      error: e?.message || "Flutterwave hosted checkout failed",
      hint: invalidAuth
        ? "FLUTTERWAVE_SECRET_KEY must be FLWSECK-... from Flutterwave → Settings → API Keys, not Client Secret."
        : "Check FLUTTERWAVE_SECRET_KEY in your environment variables.",
      details: e?.details || null,
    });
  }
}
