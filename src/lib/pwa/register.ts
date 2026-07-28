// Guarded service worker registration.
// Only register in production and not inside iframes.

export function registerServiceWorker(): void {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;

  const url = new URL(window.location.href);
  const inIframe = window.self !== window.top;
  const refuse = !import.meta.env.PROD || inIframe || url.searchParams.get("sw") === "off";

  if (refuse) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {});
  });
}
