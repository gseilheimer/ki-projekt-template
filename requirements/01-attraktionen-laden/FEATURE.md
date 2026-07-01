# FEATURE.md — 01-attraktionen-laden

> **Hinweis:** Konkretes LB3-Feature (Stufe **B**). LB3-Aufgaben: **B2, B3, B4**.
> Datei: `assets/js/n8n.js`.

**Priorität:** Kernanforderung
**Status:** offen
**Abhängigkeit:** 00-foundation

---

## Ziel

Nutzende sehen echte Attraktionsdaten aus einem n8n-Webhook als Liste und können Details
öffnen. Das ist der erste fachliche Inhalt der App und Basis für Standort, Karte und Foto.

---

## Beschreibung

`N8nService.getAttractions()` ruft den n8n-Webhook `get-attractions` per `fetch` ab, erhält
ein JSON-Array und rendert je Datensatz über `addPanel(titel, index)` einen Bulma-Panel-Button
in `#panelWrapper`. Ein Klick auf einen Button ruft `toDetailPage(index)` auf und zeigt die
Detailseite (Titel, Beschreibung, Adresse, Telefon, E-Mail). Die Endpunkte stehen in `CONFIG`
und werden auf den eigenen n8n-Workspace angepasst.

---

## Abnahmekriterien

- [ ] **B2** — `CONFIG` (baseUrl + `endpoints`) auf den eigenen n8n-Workflow angepasst
- [ ] **B3** — `addPanel(text, id)` erzeugt einen Panel-Button, hängt ihn an `#panelWrapper`, verknüpft Klick → `toDetailPage(id)` (außer `id === "dontLink"`)
- [ ] **B4** — `getAttractions()` lädt per `fetch` vom Webhook, schreibt `dbResponse`, rendert alle Panels; Fehlerfall zeigt „n8n Verbindung fehlgeschlagen"
- [ ] Liste erscheint nach Klick auf „Zu den Attraktionen"
- [ ] Detailseite zeigt Titel/Beschreibung/Kontakt; `tel:`/`mailto:` funktionieren

---

## Abgrenzung — was dieses Feature nicht leistet

- Keine Entfernungsberechnung/Standort (→ `03-standort`)
- Keine Karte (→ `04-karte`), kein Foto/QR (→ `05`/`06`)
- Kein Absenden von Formularen (→ `02-bewertung-senden`)

---

## Offene Fragen

- [ ] Welche Felder liefert der eigene n8n-Workflow (Feldnamen wie `Title`, `Address` …)?
- [ ] Maximale Anzahl Attraktionen / Paginierung nötig?
