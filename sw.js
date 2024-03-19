importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-window.prod.mjs'
);

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.destination === 'document') {
    return;
  }

  event.respondWith(fetch(request).catch(() => {}));
});
