// Project Alpha Bistro — basic PWA service worker.
// Handles precache of app shell + offline navigation fallback + runtime caching.

const VERSION = "hcm-v1";
const APP_SHELL_CACHE = `${VERSION}-shell`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const APP_SHELL = ["/", "/manifest.json", "/web-app-manifest-192x192.png", "/web-app-manifest-512x512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(APP_SHELL_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k !== APP_SHELL_CACHE && k !== RUNTIME_CACHE && k.startsWith("alpha-bistro-"))
          .map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin && url.hostname !== "picsum.photos") return;

  // NetworkFirst for HTML navigations, offline fallback to cached "/".
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(req, fresh.clone());
          return fresh;
        } catch {
          const cached = await caches.match(req);
          return cached || (await caches.match("/")) || Response.error();
        }
      })(),
    );
    return;
  }

  // CacheFirst for everything else (assets, images).
  event.respondWith(
    (async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const fresh = await fetch(req);
        if (fresh && fresh.status === 200) {
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(req, fresh.clone());
        }
        return fresh;
      } catch {
        return cached || Response.error();
      }
    })(),
  );
});
