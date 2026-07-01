/**
 * n8n Integration Service
 * Verwaltet die Kommunikation mit n8n Workflows
 */

const N8nService = (function() {
    //dbResponse wird mit fixen Demodaten gefuellt, spaeter ueberschrieben
    let dbResponse = [
        {
            AttractionID: 0,
            Title: "Demo Schloss Rapperswil",
            Description: "Es ist ein besonderer Ort, aber Demodaten...",
            Latitude: 47.227533,
            Longitude: 8.815584,
            Address: "Lindenhügel 8640 Rapperswil",
            Telephone: "055 210 18 28",
            Email: "info@schlossrapperswil.ch",
            URL: "https://www.schlossrapperswil.ch"
        },
        {
            AttractionID: 1,
            Title: "Demo Kusthaus [...]",
            Description: "Weitere Attribute = gekuerzt"
        }
    ];

    //ToDo B2: CONFIG an eigenen n8n Workflow anpassen
    //--------------------------------------------------------------------
    const CONFIG = {
        baseUrl: 'https://n8n.edu-space.de/webhook/',
        endpoints: {
            ersterWF: 'demo1terWorkflow',
            zweiterWF: 'demo2terWorkflow'
        },
        timeout: 10000 // 10 Sekunden
    };
    //--------------------------------------------------------------------

    // Hilfsfunktion: Timeout für fetch
    function fetchWithTimeout(url, options, timeout = CONFIG.timeout) {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Request timeout')), timeout)
            )
        ]);
    }

    // Hilfsfunktion: Eingabevalidierung
    function validateInputData(val1, val2) {
        // 1. Sicherstellen, dass val1 existiert und ein String ist
        if (!val1 || typeof val1 !== 'string' || val1.trim() === '') { 
            return { valid: false, error: 'Oberes Eingabefeld ist leer!' };
        }
        // 2. Speziallogik: Wenn val2 explizit null/undefined ist, wird es uebersprungen (z.B. beim Chat)
        if (val2 !== undefined && val2 !== null) {
            const v2Trimmed = String(val2).trim();
            if (v2Trimmed === '') { 
                return { valid: false, error: 'Unteres Eingabefeld ist leer!' };
            }
            if (v2Trimmed.length < 5) {
                return { valid: false, error: 'Untere Eingabe muss mindestens 5 Zeichen lang sein' };
            }
        }
        return { valid: true };
    }

    // ToDo B3: addPanel erzeugen lassen: Hyperlink erstellen + anfuegen + Attribute&Klassen setzen
    //--------------------------------------------------------------------
    function addPanel(text, id) {
        console.log("ToDo: B3");
    }
    //--------------------------------------------------------------------

    // API - Öffentliche Methoden
    return {
        getResponse: function() {
            return dbResponse;
        },
        // ToDo B4: getAttractions erzeugen lassen: Attraktionen von n8n abrufen und in Panel eintragen
        //--------------------------------------------------------------------
        getAttractions: async function() {
            console.log("ToDo: B4");
        },
        //--------------------------------------------------------------------

        // ToDo B5: sendDataToN8N erzeugen: sendDataToN8N soll Workflow aufrufen und payload mitgeben
        // ToDo optional D1, D2, D3, D4
        //--------------------------------------------------------------------
        /**
         * Zentralisierte Funktion: Liest Felder aus, sendet an n8n und aktualisiert UI
         * @param {string} type - 'comment' oder 'demo'
         */        
        sendDataToN8N: async function(type) {
            console.log("ToDo: B5");
        },
        //--------------------------------------------------------------------

        // Navigiert zur Detailseite einer Attraktion und setzt die Inhalte zur ausgewaehlten Attraktion
        toDetailPage: function(index) {
            const data = dbResponse[index];
            document.getElementById("titleLocation").innerHTML = data.Title;
            document.getElementById("descriptionLocation").innerHTML = data.Description;
            document.getElementById("btnShowMap").innerHTML = data.Address + " | Karte anzeigen"; //Button Map erhaelt Adressangabe
            document.getElementById("telLocation").href = "tel:" + data.Telephone;
            document.getElementById("telLocation").innerHTML = data.Telephone;
            document.getElementById("mailLocation").href = "mailto:" + data.Email;
            document.getElementById("mailLocation").innerHTML = data.Email;

            localStorage.setItem('locationID', index); //wird in map.js benoetigt
            AppService.navigateToPage(3);
        }
    };
})();