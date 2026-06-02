let cachedToken = null;
let tokenExpiresAt = 0;

const TOKEN_URL =
  "https://idp.flutterwave.com/realms/flutterwave/protocol/openid-connect/token";

export function normalizeEnv(value) {
  if (!value) return "";
  return String(value).trim().replace(/^["']|["']$/g, "");
}

/** test | live — inferred from FLUTTERWAVE_ENV, secret key prefix, or Netlify production. */
export function getFlutterwaveEnv() {
  const explicit = normalizeEnv(process.env.FLUTTERWAVE_ENV).toLowerCase();
  if (explicit === "live" || explicit === "test") return explicit;

  const secret = normalizeEnv(process.env.FLUTTERWAVE_SECRET_KEY);
  if (secret.includes("_TEST-")) return "test";
  if (secret.startsWith("FLWSECK")) return "live";

  if (
    process.env.CONTEXT === "production" ||
    process.env.NODE_ENV === "production"
  ) {
    return "live";
  }

  return "test";
}

export function hasV4Credentials() {
  return !!(
    normalizeEnv(process.env.FLUTTERWAVE_CLIENT_ID) &&
    normalizeEnv(process.env.FLUTTERWAVE_CLIENT_SECRET)
  );
}

/** v4 when OAuth creds exist unless FLUTTERWAVE_USE_V4=false */
export function shouldUseV4Payment() {
  if (!hasV4Credentials()) return false;
  const prefer = normalizeEnv(process.env.FLUTTERWAVE_USE_V4).toLowerCase();
  if (prefer === "false" || prefer === "0") return false;
  return true;
}

export function getApiBaseUrl() {
  const override = normalizeEnv(process.env.FLUTTERWAVE_API_BASE_URL);
  if (override) return override.replace(/\/$/, "");

  return getFlutterwaveEnv() === "live"
    ? "https://f4bexperience.flutterwave.com"
    : "https://developersandbox-api.flutterwave.com";
}

export function makeTraceId() {
  return `tpa-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

export function makeReference() {
  const raw = `ff${Date.now()}${Math.random().toString(16).slice(2, 10)}`;
  return raw.replace(/[^a-zA-Z0-9-]/g, "").slice(0, 42);
}

export function splitName(fullName) {
  const parts = String(fullName || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return { first: "Parent", last: "Guardian" };
  if (parts.length === 1) return { first: parts[0], last: "Guardian" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

export function parseNgPhone(phone) {
  let digits = String(phone || "").replace(/\D/g, "");
  if (digits.startsWith("234")) digits = digits.slice(3);
  if (digits.startsWith("0")) digits = digits.slice(1);
  const number = digits.slice(-10);
  return { country_code: "234", number };
}

export async function getAccessToken() {
  const clientId = normalizeEnv(process.env.FLUTTERWAVE_CLIENT_ID);
  const clientSecret = normalizeEnv(process.env.FLUTTERWAVE_CLIENT_SECRET);
  if (!clientId || !clientSecret) {
    throw new Error("Missing FLUTTERWAVE_CLIENT_ID or FLUTTERWAVE_CLIENT_SECRET");
  }

  const now = Date.now();
  if (cachedToken && tokenExpiresAt > now + 60_000) {
    return cachedToken;
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials",
  });

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const message =
      json?.error_description || json?.error || "Flutterwave OAuth token request failed";
    throw new Error(message);
  }

  cachedToken = json.access_token;
  tokenExpiresAt = now + (json.expires_in || 300) * 1000;
  return cachedToken;
}

export async function flwRequest(path, options = {}) {
  const { method = "GET", body, idempotencyKey, traceId } = options;
  const token = await getAccessToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "X-Trace-Id": traceId || makeTraceId(),
  };
  if (idempotencyKey) {
    headers["X-Idempotency-Key"] = idempotencyKey;
  }

  const res = await fetch(`${getApiBaseUrl()}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const message =
      json?.error?.message || json?.message || `Flutterwave API error (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    err.details = json;
    throw err;
  }

  return json;
}

export async function getChargeById(chargeId) {
  const json = await flwRequest(`/charges/${encodeURIComponent(chargeId)}`);
  return json?.data || null;
}

export async function getChargeByReference(reference) {
  const json = await flwRequest(
    `/charges?reference=${encodeURIComponent(reference)}&size=5`
  );
  const charges = Array.isArray(json?.data) ? json.data : [];
  return charges.find((c) => c.reference === reference) || charges[0] || null;
}
