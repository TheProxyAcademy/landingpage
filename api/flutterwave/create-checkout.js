import {
  flwRequest,
  makeReference,
  makeTraceId,
  parseNgPhone,
  splitName,
} from "./_flw-v4.js";

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

  try {
    const reference = makeReference();
    const origin =
      redirectOrigin ||
      req.headers.origin ||
      process.env.SITE_ORIGIN ||
      process.env.URL ||
      process.env.DEPLOY_PRIME_URL ||
      "https://theproxyacademy.com";
    const redirectUrl = `${String(origin).replace(/\/$/, "")}/focusflow-cohort/register?payment=return`;

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
      res.status(502).json({ ok: false, error: "Could not create Flutterwave customer" });
      return;
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
    const checkoutUrl = session?.checkout_url;
    if (!checkoutUrl) {
      res.status(502).json({
        ok: false,
        error:
          "Flutterwave created a checkout session but did not return checkout_url. Confirm Checkout Sessions is enabled on your Flutterwave account, or contact Flutterwave support.",
        details: sessionJson,
      });
      return;
    }

    res.status(200).json({
      ok: true,
      reference,
      checkoutUrl,
      sessionId: session.id,
      customerId,
    });
  } catch (e) {
    const flwCode = e?.details?.error?.code;
    const env = (process.env.FLUTTERWAVE_ENV || "test").toLowerCase();

    if (flwCode === "10403" && env === "test") {
      res.status(502).json({
        ok: false,
        error:
          "Flutterwave rejected this request (Forbidden). Your Client ID/Secret look like live/production keys, but FLUTTERWAVE_ENV=test uses the sandbox API. Set FLUTTERWAVE_ENV=live in .env.local, or use sandbox v4 credentials from your Flutterwave developer dashboard.",
        details: e?.details || null,
      });
      return;
    }

    res.status(500).json({
      ok: false,
      error: e?.message || String(e),
      details: e?.details || null,
    });
  }
}
