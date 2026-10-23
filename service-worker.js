// Migration worker: retire the former root-scoped WTUMC worker.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await caches.delete('wtumc');
    await self.registration.unregister();
  })());
});
