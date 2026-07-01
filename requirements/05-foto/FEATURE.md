# FEATURE.md — 05-foto

> **Hinweis:** Konkretes LB3-Feature (Stufe **C**). LB3-Aufgaben: **C7, C8**.
> Datei: `assets/js/camera.js`.

**Priorität:** Erweiterung
**Status:** offen
**Abhängigkeit:** 01-attraktionen-laden (nutzt die Detailseite) — technisch unabhängig von 03/04

---

## Ziel

Nutzende nehmen ein Foto auf und sehen es in der App; das zuletzt aufgenommene Bild wird
wieder geladen. Zeigt den Umgang mit `MediaDevices`/`Canvas` in einer PWA.

---

## Beschreibung

`CameraService.takePic()` holt via `navigator.mediaDevices.getUserMedia` einen Video-Stream,
zeichnet einen Frame auf ein (nicht sichtbares) `canvas`, erzeugt daraus ein JPEG (Blob →
Object-URL), zeigt es in `#picOutput` und speichert den Pfad in `localStorage` (`FotoPfad`).
Die Kamera-Ressourcen werden anschließend über `releaseMediaResources` freigegeben.
`loadPic()` lädt ein vorhandenes `FotoPfad`-Bild erneut in `#picOutput`.

---

## Abnahmekriterien

- [ ] **C7** — `takePic()` greift auf die Kamera zu, nimmt ein Bild auf, zeigt es in `#picOutput`
- [ ] Kamera-Tracks werden nach Aufnahme gestoppt (Ressourcen frei), auch im Fehlerfall
- [ ] Ohne Kamerazugriff: `alert(...)` mit Hinweis auf Berechtigungen
- [ ] **C8** — `loadPic()` zeigt ein zuvor gespeichertes Bild (`localStorage` `FotoPfad`) wieder an

---

## Abgrenzung — was dieses Feature nicht leistet

- Kein Upload/keine dauerhafte Speicherung außerhalb des Browsers (Object-URL ist flüchtig)
- Keine Bildbearbeitung/Filter
- Keine Mehrfach-Galerie (nur letztes Foto)

---

## Offene Fragen

- [ ] Soll das Foto dauerhaft (z. B. an n8n) gespeichert werden?
- [ ] Vorder-/Rückkamera wählbar machen?
