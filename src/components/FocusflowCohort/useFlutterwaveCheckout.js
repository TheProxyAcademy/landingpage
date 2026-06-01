const PENDING_PREFIX = "focusflow_pending_";

export function pendingRegistrationKey(reference) {
  return `${PENDING_PREFIX}${reference}`;
}

export function savePendingRegistration(reference, registration) {
  sessionStorage.setItem(pendingRegistrationKey(reference), JSON.stringify(registration));
}

export function loadPendingRegistration(reference) {
  try {
    const raw = sessionStorage.getItem(pendingRegistrationKey(reference));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearPendingRegistration(reference) {
  sessionStorage.removeItem(pendingRegistrationKey(reference));
}

export function useFlutterwaveCheckout() {
  const startCheckout = async ({ amount, currency = "NGN", registration }) => {

    const res = await fetch("/api/flutterwave/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        expectedAmount: amount,
        expectedCurrency: currency,
        registration,
        redirectOrigin: window.location.origin,
      }),
    });

    const json = await res.json().catch(() => null);
    if (!res.ok || !json?.ok || !json?.checkoutUrl) {
      const message = json?.error || "Could not start Flutterwave checkout";
      const err = new Error(message);
      err.details = json;
      throw err;
    }

    savePendingRegistration(json.reference, registration);
    window.location.assign(json.checkoutUrl);
    return json;
  };

  return {
    ready: true,
    startCheckout,
  };
}
