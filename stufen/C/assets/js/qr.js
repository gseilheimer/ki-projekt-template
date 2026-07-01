const QRService = (function() {
    // Globaler Zustand für den aktiven Scanner
    let activeVideo = null;
    let scanning = false;

    // API - Öffentliche Methoden
    return {
        // Globale Variable um später das Scannen beenden zu können
        startQRScanner: function() {
            const video = document.getElementById('videoQR');
            const canvas = document.getElementById('canvasQR');
            const context = canvas.getContext('2d', { willReadFrequently: true });
            const output = document.getElementById('outputQR');
            
            // Speichere Video-Element global für Stop-Funktion
            activeVideo = video;
            scanning = false;

            // ToDo C9: Kamerazugriff implementieren
            //-------------------------------------------------------------------- 
            console.log("ToDo: C9");
            //--------------------------------------------------------------------

            function scan() {
                if (!scanning) return;

                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    // Canvas-Größe nur anpassen, wenn sie noch nicht stimmt
                    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                    }
                    // Zeichne Videobild auf Canvas (unsichtbar im Hintergrund)
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    
                    // Hole Bilddaten
                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    // Scanne nach QR-Code
                    const code = jsQR(imageData.data, imageData.width, imageData.height);
                    
                    if (code) {
                        console.log("QR-Code erkannt:", code.data);
                        output.textContent = code.data;
                        QRService.stopScanner();
                    }
                }
                
                if (scanning) requestAnimationFrame(scan);
            }

            // ToDo C10: Event-Handler und Aufräumen beim Verlassen der Seite
            //--------------------------------------------------------------------
            console.log("ToDo: C10");
            //--------------------------------------------------------------------
            return true;
        },
        
        // Zentrale Stop-Methode
        stopScanner: function() {
            if (activeVideo && activeVideo.srcObject) {
                // Stoppe alle Kamera-Tracks
                activeVideo.srcObject.getTracks().forEach(track => track.stop());
                activeVideo.srcObject = null;
            }
            // Beende den Scan-Loop
            scanning = false;
            return true;
        }
    };
})();