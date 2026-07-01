# FEATURE.md — 03-standort

> **Hinweis:** Konkretes LB3-Feature (Stufe **C**). LB3-Aufgaben: **C1, C2, C3**.
> Datei: `assets/js/position.js`.

**Priorität:** Kernanforderung
**Status:** offen
**Abhängigkeit:** 01-attraktionen-laden (braucht Liste + `N8nService.getResponse()`)

---

## Ziel

Nutzende sehen je Attraktion die Entfernung zu ihrem aktuellen Standort. Die ermittelte
Position wird zudem für die Karte (`04-karte`) benötigt.

---

## Beschreibung

`PositionService.searchPosition()` bestimmt via `navigator.geolocation.getCurrentPosition`
die aktuelle Position und ruft `distToLocation(position)`. Dort wird je Attraktion eine
Näherungsdistanz berechnet (Pythagoras auf Lat/Lng), die nächste ermittelt und die Entfernung
in den zugehörigen Listeneintrag (`getElementById(i)`) geschrieben. Aktuelle Koordinaten
werden in `localStorage` (`currentLat`/`currentLng`) gespeichert. `searchPosition()` wird nach
`getAttractions()` aufgerufen.

---

## Abnahmekriterien

- [ ] **C1** — `searchPosition()` nutzt die Geolocation-API; ohne Verfügbarkeit/Berechtigung → Meldung via `handleError` (kein Absturz)
- [ ] **C2** *(Lernaufgabe)* — `distToLocation` und die Distanz-Näherung sind im Team erklärbar
- [ ] **C3** — je Listeneintrag `i` wird `- Entfernung: X km` ergänzt (`getElementById(i)`)
- [ ] `currentLat`/`currentLng` liegen nach Ausführung im `localStorage`

---

## Abgrenzung — was dieses Feature nicht leistet

- Keine kartografische Darstellung (→ `04-karte`)
- Keine exakte Distanz (Haversine/Routing) — bewusst nur Näherung
- Kein Dauer-Tracking der Position (einmalige Bestimmung)

---

## Offene Fragen

- [ ] Reicht die Pythagoras-Näherung, oder ist Haversine gewünscht?
- [ ] Verhalten, wenn Attraktionen keine Koordinaten liefern?
