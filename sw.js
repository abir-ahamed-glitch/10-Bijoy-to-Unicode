/**
 * Bijoy & Unicode Converter — Service Worker
 * Offline-first cache strategy for the app shell.
 */

const CACHE_NAME = 'bijoy-unicode-v1';
const APP_SHELL = [
  './',
  './index.html',
  './css/style.css',
  './fonts/SutonnyMJ.ttf',
  './manifest.json',
];

// Install: pre-cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for same-origin, network-first for everything else
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (!isSameOrigin) return; // let the browser handle cross-origin (Google Fonts, etc.)

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        // Cache successful basic responses for next time
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback: serve index.html for navigations
        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
