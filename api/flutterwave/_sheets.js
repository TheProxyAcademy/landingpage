/**
 * Google Apps Script web apps often 302-redirect POST → GET, which drops the body
 * and causes "Cannot read properties of undefined (reading 'postData')".
 * Re-POST JSON to the redirect URL when needed.
 */
async function postToGoogleAppsScript(url, payload) {
  const body = JSON.stringify(payload);
  const headers = { "Content-Type": "application/json" };

  // Apps Script /exec URLs 302 to googleusercontent.com; follow redirects and keep POST body.
  const response = await fetch(url, {
    method: "POST",
    headers,
    body,
    redirect: "follow",
  });

  const text = await response.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }

  return { response, json };
}

export function mockFocusflowRegistration(overrides = {}) {
  const stamp = Date.now();
  return {
    parentFullname: "Test Parent",
    parentEmail: `test.parent+${stamp}@example.com`,
    parentPhone: "+2348012345678",
    childFullname: "Test Child",
    childAge: "10",
    studentPhone: "",
    schedulePreference: "weekday-evenings",
    paymentPlan: "full",
    ...overrides,
  };
}

export function mockFlutterwavePayment(overrides = {}) {
  const stamp = Date.now();
  return {
    id: 900000000 + (stamp % 1000000),
    tx_ref: `fftest${stamp}`,
    reference: `fftest${stamp}`,
    status: "successful",
    amount: 75000,
    currency: "NGN",
    charged_amount: 75000,
    created_at: new Date().toISOString(),
    customer: {
      name: "Test Parent",
      email: `test.parent+${stamp}@example.com`,
      phone_number: "+2348012345678",
    },
    ...overrides,
  };
}

export async function storeRegistration({ registration, flutterwave }) {
  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const sheetsToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN;
  if (!sheetsUrl) {
    return {
      stored: false,
      storeError: { error: "GOOGLE_SHEETS_WEBHOOK_URL is not set" },
    };
  }

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

    const htmlError =
      typeof storeJson?.raw === "string" &&
      storeJson.raw.includes("Page not found");

    return {
      stored: false,
      storeError:
        storeJson ||
        {
          status: storeRes.status,
          hint: htmlError
            ? "Google returned Page not found. Redeploy the Apps Script web app and copy the new /exec URL into GOOGLE_SHEETS_WEBHOOK_URL."
            : storeJson?.error ||
              "Sheet webhook failed. Redeploy Apps Script and use the /exec URL.",
        },
    };
  } catch (e) {
    return { stored: false, storeError: { message: e?.message || String(e) } };
  }
}
