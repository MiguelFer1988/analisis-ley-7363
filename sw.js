// sw.js - Service Worker para capacidad offline

const CACHE_NAME = 'ley-ongs-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/reset.css',
  '/css/variables.css',
  '/css/layout.css',
  '/css/components.css',
  '/css/sections.css',
  '/css/animations.css',
  '/js/main.js',
  '/js/utils.js',
  '/js/charts.js',
  '/js/scroll-animations.js',
  '/assets/data/statistics.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalando...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('[Service Worker] Error cacheando archivos:', error);
      })
  );

  // Activar inmediatamente
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activando...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Eliminando cache antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );

  // Tomar control inmediatamente
  return self.clients.claim();
});

// Estrategia de fetch: Cache First, falling back to Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en cache, devolver desde cache
        if (response) {
          return response;
        }

        // Si no está en cache, hacer fetch a la red
        return fetch(event.request)
          .then((response) => {
            // No cachear si no es una respuesta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar la respuesta
            const responseToCache = response.clone();

            // Añadir al cache
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('[Service Worker] Error en fetch:', error);

            // Aquí se podría devolver una página offline de fallback
            // return caches.match('/offline.html');
          });
      })
  );
});

// Manejo de mensajes
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
