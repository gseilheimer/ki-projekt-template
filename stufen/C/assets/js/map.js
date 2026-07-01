const MapService = (function() {
    // Private Variablen und Funktionen
    let map;

    // API - Öffentliche Methoden
    return {
        showMap: function() {
            // Werte fuer LocationID und aktueller Position aus localStorage laden
            // locationID wurde in toDetailPage() definiert
            const locationID = parseInt(localStorage.getItem('locationID'));
            //const myLocation = N8nService.getResponse()[locationID].fields;
            const myLocation = N8nService.getResponse()[locationID];

            //Fehlerbehandlung: Aktuelle Position wurde noch nicht bestimmt
            if(localStorage.getItem('currentLat') === null) {
                alert('Bitte vorher Position bestimmen!');
                return; //weitere Codeausfuehrung von showMap verhindern
            }
            
            // aktuelle Position wurde in distToLocation() gesetzt
            const currentPosition = {
                lat: parseFloat(localStorage.getItem('currentLat')),
                lng: parseFloat(localStorage.getItem('currentLng'))
            };

            const locationPosition = {
                lat: parseFloat(myLocation.Latitude),
                lng: parseFloat(myLocation.Longitude)
            };

            // ToDo C4: showMap vervollstaendigen: Karte einzeichnen, Marker setzen, Kartenausschnitt eingrenzen
            //--------------------------------------------------------------------
            console.log("ToDo: C4");
            //--------------------------------------------------------------------

            // ToDo C5 (Optional): Postalische Adresse der aktuellen Pos. ermitteln und darstellen
            //--------------------------------------------------------------------
            console.log("ToDo: C5");
            //--------------------------------------------------------------------
        }
    };
})();