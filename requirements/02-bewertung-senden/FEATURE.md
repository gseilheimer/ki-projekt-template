# FEATURE.md — 02-bewertung-senden

> **Hinweis:** Konkretes LB3-Feature (Stufe **B**). LB3-Aufgabe: **B5** (+ optional **D1–D4**).
> Datei: `assets/js/n8n.js`.

**Priorität:** Kernanforderung
**Status:** offen
**Abhängigkeit:** 01-attraktionen-laden (teilt `N8nService`/`CONFIG`)

---

## Ziel

Nutzende können Feedback abgeben; die Daten gehen validiert an einen n8n-Webhook. Eine
zentrale Funktion `sendDataToN8N(type)` deckt den Kernfall (Kommentar) und optionale Typen ab.

---

## Beschreibung

`sendDataToN8N(type)` liest die Felder je Typ aus (`comment` → `contactName`,
`contactComment`), validiert über `validateInputData` (nicht leer, Mindestlänge), baut ein
`payload`-Objekt und sendet es per `fetchWithTimeout` (POST, JSON) an den passenden
`CONFIG.endpoints`-Webhook. Bei Erfolg werden die Felder mit einer Bestätigung überschrieben.
Optional (D1–D4): Typen `email` (+ Push-Benachrichtigung), `attraction`, `chat`.

---

## Abnahmekriterien

- [ ] **B5** — `sendDataToN8N('comment')` liest Felder, validiert, POSTet Payload an `add-comment`, zeigt Bestätigung
- [ ] Leere/zu kurze Eingaben → `alert` mit klarer Meldung, kein Versand
- [ ] Netzw/HTTP-Fehler werden abgefangen (`alert` + Konsole), kein stiller Abbruch
- [ ] *(optional D1–D3)* Typen `email` / `attraction` / `chat` funktionieren analog
- [ ] *(optional D4)* Bei `email` erscheint eine ServiceWorker-Push-Benachrichtigung

---

## Abgrenzung — was dieses Feature nicht leistet

- Keine Speicherung/Anzeige vorhandener Bewertungen (nur Senden)
- Keine Authentifizierung der Absender
- Push-Infrastruktur (VAPID etc.) ist nicht Teil des Kernumfangs

---

## Offene Fragen

- [ ] Welche Pflichtfelder/Validierungsregeln gelten für den eigenen Workflow?
- [ ] Sollen optionale Typen (D1–D4) überhaupt Teil der Abgabe sein?
