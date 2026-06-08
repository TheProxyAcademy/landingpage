import { makeReference, normalizeEnv } from "./_flw-v4.js";
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
  const keyError = validateFlutterwaveSecretKey(secretKey);
  if (keyError) {
    res.status(500).json({ ok: false, error: keyError });
    return;
  }

  const reference = makeReference();
  const origin = resolveRedirectOrigin(req, redirectOrigin);
  const redirectUrl = `${String(origin).replace(/\/$/, "")}/focusflow-cohort/register?payment=return`;

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
    const isTestKey = secretKey.includes("_TEST-");
    const invalidAuth =
      e?.message === "Invalid authorization key" ||
      e?.details?.message === "Invalid authorization key";

    let hint = isTestKey
      ? "You are using a TEST secret key. On your live site, set FLUTTERWAVE_SECRET_KEY to your live secret (FLWSECK-..., not FLWSECK_TEST-...) in Netlify → Environment variables → Production."
      : "Check that FLUTTERWAVE_SECRET_KEY is your live Flutterwave secret key in Netlify Production env vars.";

    if (invalidAuth) {
      hint =
        "Flutterwave rejected the key. Use the Secret Key from Flutterwave → Settings → API Keys (FLWSECK-... for live). Do not use Client Secret, Encryption Key, or Public Key.";
    }

    res.status(502).json({
      ok: false,
      error: e?.message || "Flutterwave hosted checkout failed",
      hint,
      details: e?.details || null,
    });
  }
}
