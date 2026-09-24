// Service Worker de Capilla Santa Ana — cachea el sitio para uso offline básico.
// Subí el número de versión cada vez que quieras forzar que los visitantes
// descarten el caché viejo y tomen los archivos nuevos.
const CACHE_VERSION = 'capilla-sa-v1';

const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/offline.html',
    '/manifest.json',
    '/icono.png',
    '/icon-192.png',
    '/profundiza/index.html',
    '/ayudanos/index.html',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((names) => Promise.all(
                names.filter((name) => name !== CACHE_VERSION).map((name) => caches.delete(name))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;

    // Páginas HTML: red primero (contenido siempre fresco), caché como respaldo offline
    if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
        event.respondWith(
            fetch(req)
                .then((res) => {
                    const clone = res.clone();
                    caches.open(CACHE_VERSION).then((cache) => cache.put(req, clone));
                    return res;
                })
                .catch(() => caches.match(req).then((cached) => cached || caches.match('/offline.html')))
        );
        return;
    }

    // Assets estáticos (css, js, imágenes, fuentes): caché primero, red de respaldo
    event.respondWith(
        caches.match(req).then((cached) => {
            if (cached) return cached;
            return fetch(req).then((res) => {
                if (res.ok) {
                    const clone = res.clone();
                    caches.open(CACHE_VERSION).then((cache) => cache.put(req, clone));
                }
                return res;
            }).catch(() => cached);
        })
    );
});
