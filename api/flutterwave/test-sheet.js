import { normalizeEnv } from "./_flw-v4.js";
import {
  mockFlutterwavePayment,
  mockFocusflowRegistration,
  storeRegistration,
} from "./_sheets.js";

function isTestEndpointAllowed() {
  if (normalizeEnv(process.env.ALLOW_SHEET_TEST).toLowerCase() === "true") {
    return true;
  }
  return (
    process.env.NODE_ENV !== "production" ||
    process.env.CONTEXT === "dev" ||
    process.env.CONTEXT === "deploy-preview"
  );
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  if (!isTestEndpointAllowed()) {
    res.status(404).json({ ok: false, error: "Not found" });
    return;
  }

  const expectedToken = normalizeEnv(process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN);
  const providedToken = normalizeEnv(req.body?.token);
  if (expectedToken && providedToken !== expectedToken) {
    res.status(401).json({
      ok: false,
      error: "Unauthorized. Pass token matching GOOGLE_SHEETS_WEBHOOK_TOKEN.",
    });
    return;
  }

  const registration =
    req.body?.registration || mockFocusflowRegistration();
  const flutterwave =
    req.body?.flutterwave || mockFlutterwavePayment();

  const { stored, storeError } = await storeRegistration({
    registration,
    flutterwave,
  });

  if (!stored) {
    res.status(502).json({
      ok: false,
      stored: false,
      storeError,
      registration,
      flutterwave,
    });
    return;
  }

  res.status(200).json({
    ok: true,
    stored: true,
    message: "Test row sent to Google Sheet.",
    registration,
    flutterwave,
  });
}
