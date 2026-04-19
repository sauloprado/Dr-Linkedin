// Dr. LinkedIn — Service Worker
// Cache básico para funcionar offline e abrir instantaneamente.

const CACHE = 'drlinkedin-v1';
const ASSETS = [
  './',
  './App%20Dr.%20LinkedIn.html',
  './styles.css',
  './app.jsx',
  './components/icons.jsx',
  './components/tabbar.jsx',
  './screens/home.jsx',
  './screens/consultoria.jsx',
  './screens/livro.jsx',
  './screens/sobre.jsx',
  './screens/contato.jsx',
  './assets/alessandro-hero.png',
  './assets/alessandro-casual.png',
  './assets/alessandro-portrait.png',
  './assets/book-cover.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;

  // Network-first para HTML, cache-first para o resto
  if (request.mode === 'navigate' || request.destination === 'document') {
    e.respondWith(
      fetch(request).then((r) => {
        const copy = r.clone();
        caches.open(CACHE).then((c) => c.put(request, copy)).catch(() => {});
        return r;
      }).catch(() => caches.match(request).then((r) => r || caches.match('./App%20Dr.%20LinkedIn.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(request).then((cached) =>
      cached || fetch(request).then((r) => {
        if (r.ok && r.type === 'basic') {
          const copy = r.clone();
          caches.open(CACHE).then((c) => c.put(request, copy)).catch(() => {});
        }
        return r;
      }).catch(() => cached)
    )
  );
});
