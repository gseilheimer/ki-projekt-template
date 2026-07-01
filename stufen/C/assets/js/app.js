'use strict';

const AppService = (function() {

    const CONFIG = {
        clickEvent: window.PointerEvent ? "pointerup" : "click",
        scrollThreshold: 800 // Mindestzeit zwischen Seitenwechseln in ms
    };

    // ToDo A1: loesche alle childNodes des Wrappers, sie werden bei getAttractions() neu hinzugefuegt
    // Info: wird vor Wechsel zur Liste der Attraktionen aufgerufen werden (btnToAttraction)
    //--------------------------------------------------------------------
    function clearPanelWrapper() {
        const panelWrapper = document.getElementById("panelWrapper");
        while (panelWrapper.firstChild) {
            panelWrapper.removeChild(panelWrapper.firstChild);
        }
    }
    //--------------------------------------------------------------------

    //ToDo A2: Pruefen ob on- oder offline
    //--------------------------------------------------------------------
    function checkOnlineStatus() {
        const statusElement = document.getElementById('status');
        statusElement.textContent = navigator.onLine ? 'online' : 'offline';
    }
    //--------------------------------------------------------------------

    function handleHashChange() {
        // Event-Listener für Hash-Änderungen
        if (window.location.hash && window.location.hash.startsWith('#page')) {
            const pageId = window.location.hash.substring(5); // '#page2' → '2'
            if (pageId && !isNaN(pageId) && document.getElementById('page' + pageId)) {
                AppService.navigateToPage(pageId);
            }
        }
    }

    function registerServiceWorker() {
        // Pruefen ob Browser ServiceWorker unterstuetzt
        if (!('serviceWorker' in navigator)) {
            alert('This Browser does not support ServiceWorkers.');
            return;
        }

        // Pruefen ob ServiceWorker laeuft
        if (navigator.serviceWorker.controller) {
            console.log('ServiceWorker runs');
            return;
        }

        // ServiceWorker registirieren
        console.log('Registering ServiceWorker ...');
        navigator.serviceWorker
            .register('serviceworker.js')
            .catch(function(err) {
                console.log('ServiceWorker has not been registered!', err);
            });
    }

    //Header und Footer mit HTML Inhalt befuellen
    function fillHeaderFooter() {
        let content = `<div class="hero-head">
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item" href="#" onclick="AppService.navigateToPage(1);">
                <img src="media/home_gemini.png" alt="Home_Logo" style="width:100%;">
                </a>
              </div>
            </div>
          </header>
        </div>`;
        document.querySelectorAll('.TravelHeader').forEach(el => el.innerHTML = content);
      
        content = `<div class="hero-foot">
          <div class="columns">
            <div class="column container has-text-centered"><p>&copy; ${new Date().getFullYear()} Travel Website</p></div>
            <div class="column container has-text-centered"><img src="media/bulma.png" style="height:20px;" alt="Logo"></div>            
            </div>
        </div>`;                
        document.querySelectorAll('.TravelFooter').forEach(el => el.innerHTML = content);
    }

    // Öffentliche API
    return {
        getConfig: function(){
            return CONFIG;
        },        
        openModal: function(modalName) {
            document.getElementById(modalName).classList.add('is-active');
        },
        closeModal: function() {
            document.querySelectorAll(".modal").forEach(modal => {
                modal.classList.remove('is-active');
            });
        },

        // Navigation zwischen Seiten
        navigateToPage: function(pageId) {
            // Prüfe, ob die pageId gültig ist
            const targetPage = document.getElementById('page' + pageId);
            if (!targetPage) {
                console.error('Seite mit ID "page' + pageId + '" existiert nicht!');
                return;
            }
            // Aktuelle Seite deaktivieren (nur wenn eine aktive Seite existiert)
            const activePage = document.querySelector('.page.active');
            if (activePage) {
                activePage.classList.remove('active');            }

            // Zielseite aktivieren
            targetPage.classList.add('active');
            // Optional: URL-Hash aktualisieren
            window.location.hash = 'page' + pageId;
        },

        // Funktion init wird ohne Nutzeraktion aufgerufen, siehe letzte Zeile
        init: function() {
            //Header und Footer mit Inhalt fuellen
            fillHeaderFooter();

            // Event-Listener für Hash-Änderungen
            window.addEventListener('hashchange', handleHashChange);
            // Initial einmalig Hash feststellen
            handleHashChange();

            // loeschen der Liste und Seitenwechsel auf Attraktionsliste
            document.getElementById("btnToAttraction").addEventListener(CONFIG.clickEvent, ev => {
                clearPanelWrapper();
                //Lade Daten aus n8n
                N8nService.getAttractions();
                //Seitenwechsel zur zweiten Seite
                AppService.navigateToPage(2);
            });

            //Verknuepfe Klick/Touchevent auf btnComment mit der Funktion zum oeffnen/schliessen des modal
            document.getElementById("btnComment").addEventListener(CONFIG.clickEvent, ev => {
                AppService.openModal("modalComment");
            });
            //Verknuepfe Klick/Touchevent auf btnSendComment mit der Funktion
            document.getElementById("btnSendComment").addEventListener(CONFIG.clickEvent, ev => {
                N8nService.sendDataToN8N('comment'); // Kommentar in n8n data table speichern
                //N8nService.sendDataToN8N('email'); // Kommentar als Email versenden
            });

            //Verknuepfe Klick/Touchevent auf btnToCamera mit der Funktion
            document.getElementById("btnToCamera").addEventListener(CONFIG.clickEvent, ev => {
                CameraService.loadPic();
                AppService.openModal("modalCamera");
            });
            //Verknuepfe Klick/Touchevent auf btnTakePic mit der Funktion
            document.getElementById("btnTakePic").addEventListener(CONFIG.clickEvent, ev => {
                CameraService.takePic();
            });

            //Verknuepfe Klick/Touchevent auf btnShowMap mit der Funktion
            document.getElementById("btnShowMap").addEventListener(CONFIG.clickEvent, ev => {
                MapService.showMap();
                //oeffne Modalfenster, auch wenn Position nicht verfuegbar
                AppService.openModal("modalMap");
            });

            //Verknuepfe alle Buttons zum schliessen eines Modals mit der Funktion closeModal()
            document.querySelectorAll(".btnCloseModal").forEach(button => {
                button.addEventListener(CONFIG.clickEvent, AppService.closeModal);
            });

            //Verknuepfe Klick/Touchevent auf btnOpenStartQR mit der Funktion zum oeffnen/schliessen des modal und Start QR Scanner
            document.getElementById("btnOpenStartQR").addEventListener(CONFIG.clickEvent, ev => {
                AppService.openModal("modalQR");
                QRService.startQRScanner();
            });
            document.getElementById("btnStopQR").addEventListener(CONFIG.clickEvent, ev => {
                QRService.stopScanner();
            });

            //Verknuepfe Klick/Touchevent auf btnModalAddAttraction mit der Funktion zum oeffnen/schliessen des modal
            document.getElementById("btnModalAddAttraction").addEventListener(CONFIG.clickEvent, ev => {
                AppService.openModal("modalAddAttraction");
            });
            //Verknuepfe Klick/Touchevent auf btnAddAttraction mit der Funktion
            document.getElementById("btnAddAttraction").addEventListener(CONFIG.clickEvent, ev => {
                //ContactService.writeAttractionToN8N();
                N8nService.sendDataToN8N('attraction');
            });

            //Verknuepfe Klick/Touchevent auf btnModalChat mit der Funktion zum oeffnen/schliessen des modal
            document.getElementById("btnModalChat").addEventListener(CONFIG.clickEvent, ev => {
                AppService.openModal("modalChat");
            });

            //Verknuepfe Klick/Touchevent auf btnChat mit der Funktion
            document.getElementById("btnChat").addEventListener(CONFIG.clickEvent, ev => {
                //ContactService.writeAttractionToN8N();
                N8nService.sendDataToN8N('chat');
            });

            // Online-Status überwachen
            document.addEventListener('online', checkOnlineStatus);
            document.addEventListener('offline', checkOnlineStatus);
            checkOnlineStatus();

            // ServiceWorker initialisieren
            registerServiceWorker();
        }
    };
})();

// Initialisierung bei DOM-Ready
AppService.init();