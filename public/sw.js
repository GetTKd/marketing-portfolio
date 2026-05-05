self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheKeys = await caches.keys()
      await Promise.all(cacheKeys.map((key) => caches.delete(key)))
      await self.clients.claim()
    })()
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET') return

  const url = new URL(request.url)
  const isSameOrigin = url.origin === self.location.origin
  const isNavigation = request.mode === 'navigate'

  if (!isSameOrigin && !isNavigation) return

  event.respondWith(
    (async () => {
      try {
        return await fetch(request, { cache: 'reload' })
      } catch (error) {
        const cached = await caches.match(request)
        if (cached) return cached
        throw error
      }
    })()
  )
})