# FEATURE.md — 06-qr-scan

> **Hinweis:** Konkretes LB3-Feature (Stufe **C**). LB3-Aufgaben: **C9, C10**.
> Datei: `assets/js/qr.js`.

**Priorität:** Erweiterung
**Status:** offen
**Abhängigkeit:** 01-attraktionen-laden (QR-Seite erreichbar) — technisch unabhängig von 03/04/05

---

## Ziel

Nutzende scannen einen QR-Code per Kamera; der Inhalt wird ausgelesen und angezeigt. Zeigt
Kamera-Streaming + Bildanalyse (jsQR) in einer PWA inkl. sauberem Ressourcen-Handling.

---

## Beschreibung

`QRService.startQRScanner()` öffnet die Rückkamera (`getUserMedia`, `facingMode: "environment"`),
zeigt das Bild in `#videoQR` und analysiert die Frames in einer `requestAnimationFrame`-Schleife:
je Frame wird auf ein `canvas` gezeichnet und mit `jsQR(imageData…)` geprüft. Ein erkannter Code
landet in `#outputQR`, danach stoppt `stopScanner()`. `stopScanner()` beendet den Loop und stoppt
die Kamera-Tracks; ein `beforeunload`-Handler ruft es beim Verlassen der Seite auf.

---

## Abnahmekriterien

- [ ] **C9** — `startQRScanner()` greift auf die (Rück-)Kamera zu und startet den Scan-Loop; Kamerafehler werden in `#outputQR` gemeldet
- [ ] Ein erkannter QR-Code erscheint als Text in `#outputQR`, danach stoppt der Scanner
- [ ] **C10** — `beforeunload` ruft `stopScanner()`; Tracks werden gestoppt, `scanning = false`
- [ ] Bibliothek `jsQR` ist eingebunden

---

## Abgrenzung — was dieses Feature nicht leistet

- Kein Erzeugen von QR-Codes (nur Lesen)
- Keine Aktion auf den Inhalt (z. B. URL automatisch öffnen) — nur Anzeige
- Kein Barcode-Format außer QR

---

## Offene Fragen

- [ ] Soll ein erkannter Link direkt geöffnet werden (Sicherheitsabfrage)?
- [ ] jsQR lokal einbinden oder per CDN?
