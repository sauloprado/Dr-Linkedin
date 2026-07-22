// Dr. LinkedIn — Service Worker DESATIVADO (autodestrutivo).
// Este app (Capacitor) já carrega os arquivos embutidos, então não há cache aqui.
// Qualquer versão antiga que ainda tenha um SW registrado será limpa por este:
// ele apaga todos os caches, se desregistra e recarrega as telas abertas.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    } catch (e) {}
  })());
});

// Nunca intercepta requisições: tudo vai direto para os arquivos do app.
