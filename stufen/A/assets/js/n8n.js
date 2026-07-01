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

    // API - Öffentliche Methoden
    return {

        getAttractions: async function() {
            console.log("getAttractions B4 // Teil A: is hard coded (non dynamic)");
        },

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