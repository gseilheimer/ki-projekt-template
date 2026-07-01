/**
 *  by C. Merschroth
 */

const CameraService = (function() {
    const SETTINGS = {
        video: {
            width: { ideal: 640 },
            height: { ideal: 360 }
        },
        audio: false
    };
    
    // Hilfsfunktion zum Freigeben von Mediastream-Ressourcen
    function releaseMediaResources(mediaStream) {
        if (mediaStream && mediaStream.getTracks) {
            mediaStream.getTracks().forEach(track => {
                track.stop();
                console.log('Kamera-Ressource freigegeben:', track.kind);
            });
        }
    }

    // API - Öffentliche Methoden
    return {
        //ToDo C7: Funktion um auf Kamera zuzugreifen und Bild auf Seite darzustellen
        //--------------------------------------------------------------------
        takePic: function() {
            console.log("ToDo: C7");
        },
        //--------------------------------------------------------------------
        
        //ToDo C8: lade sofern vorhanden ein Bild aus dem localStorage und zeige es an. Funktion lautet loadPic()
        //--------------------------------------------------------------------
        loadPic: function() {
            console.log("ToDo: C8");
        }
        //--------------------------------------------------------------------
    };
})();