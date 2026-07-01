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
            addComment: 'add-comment',
            getAttractions: 'get-attractions',
            d1: 'optionaleAufgabeD1'
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
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = text;
        btn.className = 'panel-block button is-fullwidth';

        if (id !== "dontLink") {
            btn.id = id;
            const eventType = AppService.getConfig().clickEvent;
            btn.addEventListener(eventType, (ev) => {
                ev.stopPropagation(); 
                N8nService.toDetailPage(id);
            });
        }

        const wrapper = document.getElementById("panelWrapper");
        if (wrapper) {
            wrapper.appendChild(btn);
        }
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
            const url = CONFIG.baseUrl + CONFIG.endpoints.getAttractions;

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });

                if (!response.ok) throw new Error(`Fehler: ${response.status}`);

                // n8n liefert ein Array von Objekten. Wird z.B. für die Detailseite gespeichert, Demodaten ueberschrieben.
                dbResponse = await response.json();
                console.log('Daten aus n8n geladen:', dbResponse);

                dbResponse.forEach((record, index) => {
                    // Der Index wird an addPanel weitergegeben, damit toDetailPage(index) funktioniert
                    console.log(`ID: ${index}, Title: ${record.Title}`);
                    addPanel(record.Title, index);
                });

                localStorage.setItem("dataFromN8N", JSON.stringify(dbResponse));
                PositionService.searchPosition();

                return dbResponse;
            } catch (error) {
                console.error('Fehler beim Laden der n8n Daten:', error);
                addPanel("n8n Verbindung fehlgeschlagen", "dontLink");
            }
        },
        //--------------------------------------------------------------------

        // ToDo B5: sendDataToN8N erzeugen: sendDataToN8N soll Workflow aufrufen und payload mitgeben
        // ToDo optional D1, D2, D3, D4
        //--------------------------------------------------------------------
        /**
         * Zentralisierte Funktion: Liest Felder aus, sendet an n8n und aktualisiert UI
         * @param {string} type - 'comment', 'email', 'attraction' oder 'chat'
         */        
        sendDataToN8N: async function(type) {
            // 1. Konfiguration der Felder und Erfolgsmeldungen pro Typ
            const typeConfig = {
                'comment': {
                    ids: ['contactName', 'contactComment'],
                    endpoint: CONFIG.endpoints.addComment,
                    msg: ["Bewertung erfolgreich gespeichert!", "Der Betreiber sieht den Kommentar."]
                },
                'd1': {
                    ids: ['d1_1', 'd1_2'],
                    endpoint: CONFIG.endpoints.d1,
                    msg: ["D1", "D1_2"]
                }
            };

            const config = typeConfig[type];
            if (!config) throw new Error("Ungueltiger Typ: " + type);

            // 2. DOM-Elemente abrufen und Werte extrahieren
            const el1 = document.getElementById(config.ids[0]);
            const el2 = config.ids[1] ? document.getElementById(config.ids[1]) : null;
            const val1 = el1 ? el1.value : '';
            const val2 = el2 ? el2.value : null;

            // 3. Validierung
            const validation = validateInputData(val1, val2);
            if (!validation.valid) {
                alert(validation.error);
                throw new Error(validation.error);
            }

            // 4. Payload-Erstellung via Switch-Case
            let payload = {};
            switch (type) {
                case 'comment':
                    payload = {
                        name: val1.trim(),
                        note: val2.trim()
                    };
                    break;
                case 'd1':
                    payload = {
                        datenFuerWorkFlowD1: 'Beispiel'
                    };
                    break;            
            }

            // 5. Netzwerk-Request
            try {
                const response = await fetchWithTimeout(CONFIG.baseUrl + config.endpoint,  {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) throw new Error(`HTTP Fehler: ${response.status}`);

                const result = await response.json();

                // 6. Erfolg: Eingabefelder im UI mit Erfolgsmeldungen überschreiben
                el1.value = config.msg[0];
                if (el2) el2.value = config.msg[1];
                
                console.log(`${type} erfolgreich verarbeitet`, result);
                return result;

            } catch (error) {
                console.error(`Fehler bei sendDataToN8N (${type}):`, error);
                alert('Fehler: ' + error.message); // Fehlermeldung an Nutzer
                throw error;
            }
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