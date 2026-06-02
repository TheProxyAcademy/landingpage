import {
  flwRequest,
  getFlutterwaveEnv,
  makeReference,
  makeTraceId,
  normalizeEnv,
  parseNgPhone,
  splitName,
} from "./_flw-v4.js";
import { createV3HostedPayment } from "./_hosted-checkout.js";

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

  const session = sessionJson?.data;
  if (!session?.checkout_url) {
    const err = new Error(
      "Flutterwave v4 checkout session did not include checkout_url. Use FLUTTERWAVE_SECRET_KEY for hosted checkout instead."
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
  const hasV4 =
    normalizeEnv(process.env.FLUTTERWAVE_CLIENT_ID) &&
    normalizeEnv(process.env.FLUTTERWAVE_CLIENT_SECRET);
  const reference = makeReference();
  const origin = resolveRedirectOrigin(req, redirectOrigin);
  const redirectUrl = `${String(origin).replace(/\/$/, "")}/focusflow-cohort/register?payment=return`;

  if (!secretKey && !hasV4) {
    res.status(500).json({
      ok: false,
      error:
        "Payment is not configured. Add FLUTTERWAVE_SECRET_KEY (recommended) or FLUTTERWAVE_CLIENT_ID + FLUTTERWAVE_CLIENT_SECRET.",
    });
    return;
  }

  // Prefer v3 Standard hosted checkout — works reliably with FLWSECK / FLWSECK_TEST keys
  if (secretKey) {
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
      return;
    } catch (e) {
      const isTestKey = secretKey.includes("_TEST-");
      const hint = isTestKey
        ? "You are using a TEST secret key. On your live site, set FLUTTERWAVE_SECRET_KEY to your live secret (FLWSECK-..., not FLWSECK_TEST-...) in Netlify → Environment variables → Production."
        : "Check that FLUTTERWAVE_SECRET_KEY is your live Flutterwave secret key in Netlify Production env vars.";

      res.status(502).json({
        ok: false,
        error: e?.message || "Flutterwave hosted checkout failed",
        hint,
        details: e?.details || null,
      });
      return;
    }
  }

  // v4 only when no secret key is configured
  if (hasV4) {
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
      const flwCode = e?.details?.error?.code;
      const env = getFlutterwaveEnv();

      if (flwCode === "10403" && env === "test") {
        res.status(502).json({
          ok: false,
          error:
            "Flutterwave v4 rejected the request (Forbidden). Set FLUTTERWAVE_ENV=live in Netlify Production env vars, or add FLUTTERWAVE_SECRET_KEY for hosted checkout.",
          details: e?.details || null,
        });
        return;
      }

      res.status(502).json({
        ok: false,
        error: e?.message || "Could not start Flutterwave checkout",
        details: e?.details || null,
      });
      return;
    }
  }
}
