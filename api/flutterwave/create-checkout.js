import {
  flwRequest,
  makeReference,
  makeTraceId,
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
      "Flutterwave v4 checkout session did not include checkout_url. Enable Checkout Sessions on your Flutterwave account, or set FLUTTERWAVE_SECRET_KEY for hosted checkout."
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

  const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;
  const hasV4 =
    process.env.FLUTTERWAVE_CLIENT_ID && process.env.FLUTTERWAVE_CLIENT_SECRET;
  const reference = makeReference();
  const origin = resolveRedirectOrigin(req, redirectOrigin);
  const redirectUrl = `${String(origin).replace(/\/$/, "")}/focusflow-cohort/register?payment=return`;

  if (!secretKey && !hasV4) {
    res.status(500).json({
      ok: false,
      error:
        "Payment is not configured. Add FLUTTERWAVE_SECRET_KEY (hosted checkout) or FLUTTERWAVE_CLIENT_ID + FLUTTERWAVE_CLIENT_SECRET (v4) to your environment.",
    });
    return;
  }

  let lastError = null;

  // v3 Standard hosted checkout — reliable link for local dev and production
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
      lastError = e;
    }
  }

  // v4 checkout sessions — when Flutterwave returns checkout_url on your account
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
      lastError = e;
      const flwCode = e?.details?.error?.code;
      const env = (process.env.FLUTTERWAVE_ENV || "test").toLowerCase();

      if (flwCode === "10403" && env === "test") {
        res.status(502).json({
          ok: false,
          error:
            "Flutterwave v4 rejected the request (Forbidden). Your keys look like live credentials but FLUTTERWAVE_ENV defaults to test/sandbox. Set FLUTTERWAVE_ENV=live, or add FLUTTERWAVE_SECRET_KEY for hosted checkout.",
          details: e?.details || null,
        });
        return;
      }
    }
  }

  res.status(502).json({
    ok: false,
    error: lastError?.message || "Could not start Flutterwave checkout",
    details: lastError?.details || null,
  });
}
