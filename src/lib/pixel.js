// Thin wrapper around the Meta Pixel base code installed in index.html.
// On localhost the base code stubs window.fbq, so these calls are no-ops in dev.

const fbq = (...args) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq(...args);
};

export const trackPageView = () => fbq("track", "PageView");

export const track = (event, params) => fbq("track", event, params);

export const trackCustom = (event, params) => fbq("trackCustom", event, params);

// Some events (e.g. Lead) should only count once per page visit, no matter how
// many times the user re-triggers the interaction behind them.
const fired = new Set();

export const trackOnce = (key, event, params) => {
  if (fired.has(key)) return;
  fired.add(key);
  track(event, params);
};

export const resetOnce = (key) => fired.delete(key);
