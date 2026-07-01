'use strict';
const CACHE_NAME = 'app-2-v01'; // veraendern bei Update des cached content


//TODO: Pfad anpassen
//-----------------------------------
const PATH_ROOT = '/pwa00/B'; // pathRoot bezeichnet den Pfad vom Server-Stammverzeichnis aus
const URLS_TO_CACHE = [
    '',
    '/media/home_gemini.png',
    '/assets/css/bulma.css',
    '/manifest.json'
];
//-----------------------------------


//TODO A3: Installation des ServiceWorkers
//-----------------------------------
// Wird bei install ausgeloest
self.addEventListener('install', ev => {
    console.log('ServiceWorker ' + CACHE_NAME + ': installation');
    ev.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(cache => {
            console.log('ServiceWorker ' + CACHE_NAME + ': caching of app');
            // cache alle Dateien aus Liste
            return cache.addAll(URLS_TO_CACHE.map(el => PATH_ROOT + el));
        }).catch(err => {
            console.log('Fehler!', err);
        })
    );
});
//-----------------------------------

//TODO A4: Aktivierung des ServiceWorkers
//-----------------------------------
// Wird nach install ausgeloest
self.addEventListener('activate', ev => {
    console.log('ServiceWorker ' + CACHE_NAME + ': activation');
    ev.waitUntil(
        caches
        .keys() // caches.keys() liefert Array mit Cache-Namen zurueck
        .then(keyList => { // loesche ungenutzte caches = alle ausser CACHE_NAME
            return Promise.all(keyList.map(key => {
                if (key !== CACHE_NAME) {
                    console.log('Key deleted: ', key);
                    return caches.delete(key); // loeschen
                }
            }));
        })
    );
    return self.clients.claim(); // serviceworker wird controller fuer alle clients
});
//-----------------------------------

//TODO A5: Fetch events des ServiceWorkers
//-----------------------------------
// Wird ausgeloest wenn eine URL angefordert wird
self.addEventListener('fetch', ev => {
    console.log('ServiceWorker '+ CACHE_NAME + ' Fetch: ', ev.request.url);
    ev.respondWith( // erwartet ein Promise
        caches // suche im Cache
        .match(ev.request) // Antwort aus Cache
        .then(response => {
            if (response) { // response != undefined
                console.log('Loading from cache: ', ev.request.url);
                return response; // Falls Daten im Cache, liefere diese aus
            }
            // console.log('Cache miss for: ', ev.request.url); // Optional auskommentieren für weniger Log-Noise
            return fetch(ev.request) // Falls nicht, fordere Daten an
                .then(response => {
                    return response;
                })
                .catch(err => {
                    console.log('Fetch error for:', ev.request.url, err);
                    // Es wird eine leere 404-Antwort zurückgeliefert, damit der Promise erfüllt wird.
                    return new Response('', {
                        status: 404,
                        statusText: 'Network Error'
                    });
                });
        })
    );
});
//-----------------------------------