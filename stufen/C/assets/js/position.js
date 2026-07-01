const PositionService = (function() {
  
    function handleError(error) {
        const messages = {
            [error.PERMISSION_DENIED]: "Der Benutzer hat die Positionsanfrage abgelehnt.",
            [error.POSITION_UNAVAILABLE]: "Informationen über den Standort sind nicht verfügbar.",
            [error.TIMEOUT]: "Die Anfrage zum Abrufen der Benutzerposition ist abgelaufen."
        };
        console.error(messages[error.code] || "Ein unbekannter Fehler ist aufgetreten.");
    }
    //ToDo C2: distToLocation erklären lassen
    //--------------------------------------------------------------------
    function distToLocation(position) {
        const dbResponse = N8nService.getResponse();
        const { longitude: currentLng, latitude: currentLat } = position.coords;
        
        let nearestAttraction = 35000;
        let nearestIndex = 0;
  
        // Für jede Attraktion berechnen
        dbResponse.forEach((location, i) => {
            // Destructuring: Holt Latitude und Longitude direkt aus dem Objekt
            const { Longitude: locLng, Latitude: locLat } = location;
  
            // Berechnung der Distanz (Pythagoras Approximation)
            const dx = 71.5 * (currentLng - locLng);
            const dy = 111.3 * (currentLat - locLat);
            const distance = Math.sqrt(dx * dx + dy * dy);
            const km = distance.toFixed(2); // Rundet auf 2 Nachkommastellen
  
            // Pruefung auf kuerzeste Distanz
            if (distance < nearestAttraction) {
                nearestAttraction = distance;
                nearestIndex = i;
            }
  
            //ToDo C3: Entfernung im HTML Element mit der ID = i ausgeben.
            //--------------------------------------------------------------------
            console.log("ToDo: C3");
            //--------------------------------------------------------------------
        });
  
        // Positionsdaten im localStorage speichern
        localStorage.setItem('currentLat', JSON.stringify(currentLat));
        localStorage.setItem('currentLng', currentLng);
    }          

  // API - Öffentliche Methoden
  return {
      //ToDo C1: Position mittels Geolocation API bestimmen
      //--------------------------------------------------------------------
      searchPosition: function() {
        console.log("ToDo: C1");
      }
  };
})();