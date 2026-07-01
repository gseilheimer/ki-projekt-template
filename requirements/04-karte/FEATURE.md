# FEATURE.md — 04-karte

> **Hinweis:** Konkretes LB3-Feature (Stufe **C**). LB3-Aufgaben: **C4, C5** *(optional)*.
> Datei: `assets/js/map.js`.

**Priorität:** Erweiterung
**Status:** offen
**Abhängigkeit:** 03-standort (aktuelle Position) + 01-attraktionen-laden (gewählte Attraktion)

---

## Ziel

Nutzende sehen ihre Position und die gewählte Attraktion auf einer Google-Karte mit passendem
Ausschnitt — die visuelle Ergänzung zur Entfernungsanzeige aus `03-standort`.

---

## Beschreibung

`MapService.showMap()` liest `locationID` (aus `toDetailPage`) und `currentLat`/`currentLng`
(aus `03-standort`) aus dem `localStorage`. Fehlt die Position, bricht es mit Hinweis ab. Sonst
erstellt es eine `google.maps.Map` in `#mapOutput`, setzt Marker für aktuelle Position und
Attraktion und grenzt den Ausschnitt via `LatLngBounds`/`fitBounds` ein. Optional (C5) ermittelt
ein `Geocoder` die postalische Adresse der aktuellen Position und zeigt sie in `#adressOutput`.

---

## Abnahmekriterien

- [ ] **C4** — Karte in `#mapOutput` mit zwei Markern (Position + Attraktion), `fitBounds` umfasst beide
- [ ] Ohne bestimmte Position: `alert('Bitte vorher Position bestimmen!')` und Abbruch
- [ ] **C5** *(optional)* — Reverse-Geocoding zeigt die aktuelle Adresse in `#adressOutput`
- [ ] Google-Maps-API-Key ist eingebunden und funktioniert

---

## Abgrenzung — was dieses Feature nicht leistet

- Keine Turn-by-Turn-Navigation / Routenberechnung
- Keine Offline-Karten (Google Maps benötigt Netz)
- Keine Kartenanbieter-Alternative (fix Google Maps in LB3)

---

## Offene Fragen

- [ ] Wie wird der API-Key sicher/pro Umgebung hinterlegt?
- [ ] Kartenanbieter-Wechsel (z. B. Leaflet/OSM) als Alternative sinnvoll?
