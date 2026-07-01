'use strict';
const CACHE_NAME = 'app-2-v01'; // veraendern bei Update des cached content

//TODO: Pfad anpassen
//-----------------------------------
const PATH_ROOT = '/pwa00/A_ML'; // pathRoot bezeichnet den Pfad vom Server-Stammverzeichnis aus
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
    console.log("ToDo: A3");
});
//-----------------------------------

//TODO A4: Aktivierung des ServiceWorkers
//-----------------------------------
// Wird nach install ausgeloest
self.addEventListener('activate', ev => {
    console.log("ToDo: A4");
});
//-----------------------------------

//TODO A5: Fetch events des ServiceWorkers
//-----------------------------------
// Wird ausgeloest wenn eine URL angefordert wird
self.addEventListener('fetch', ev => {
    console.log("ToDo: A5");
});
//-----------------------------------