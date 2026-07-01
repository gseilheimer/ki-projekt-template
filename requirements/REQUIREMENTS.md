# REQUIREMENTS.md — Anforderungen (Touristik Guide)

> **Lastenheft / SRS.** Beschreibt aus Auftraggebersicht, *was* die Anwendung leisten soll.
> Diese Datei ist mit der LB3-Beispiel-PWA „Touristik Guide" gefüllt. Für ein **eigenes**
> Projekt hier die Inhalte ersetzen (Struktur beibehalten). Detail je Feature:
> `requirements/NN-*/FEATURE.md` + `USERSTORY.md`.
>
> **Änderungen nur gemeinsam als Team.**

---

## Projektbeschreibung

**Projektname:** Touristik Guide (Progressive Web App)
**Auftraggeber / Kontext:** HSLU / HSO — E-Business / Mobile Commerce, LB3
**Zielgruppe:** Tourist:innen vor Ort (mobil, oft schlechtes Netz); Betreiber (erhält Feedback)

### Kernnutzen (Zusammenfassung)

Eine installier- und offline-fähige PWA, mit der Tourist:innen Sehenswürdigkeiten entdecken
(Liste + Details aus einem n8n-Webhook), die Entfernung zum eigenen Standort und eine Karte
sehen, Feedback abgeben sowie Fotos aufnehmen und QR-Codes scannen. Backend ist ein
n8n-Workflow (Low-Code) — kein eigener Server.

---

## Nutzerrollen

| Rolle | Beschreibung |
|---|---|
| Tourist:in (Gast) | Sieht Attraktionen, Entfernungen, Karte; gibt Bewertungen ab; nutzt Foto/QR. Keine Anmeldung. |
| Betreiber | Empfängt Bewertungen/Meldungen über n8n (E-Mail/Workflow). Nicht Teil der App-UI. |

---

## Features (Überblick)

> Kernanforderung = für die Demo nötig; Erweiterung = danach. Details in den Feature-Ordnern.

| Nr. | Feature | Priorität | Abhängigkeit | LB3 |
|---|---|---|---|---|
| 00 | Grundgerüst (App-Shell, ServiceWorker, Offline) | Kern | — | A1–A5 |
| 01 | Attraktionen laden (Liste + Detail aus n8n) | Kern | 00 | B2–B4 |
| 02 | Bewertung senden (Formular → n8n) | Kern | 01 | B5 (+D1–D4) |
| 03 | Standort (Geolocation + Entfernung) | Kern | 01 | C1–C3 |
| 04 | Karte (Google Maps) | Erweiterung | 03 | C4, C5 |
| 05 | Foto (Kamera aufnehmen/anzeigen) | Erweiterung | 01 | C7, C8 |
| 06 | QR-Scan (jsQR) | Erweiterung | 01 | C9, C10 |
| 07 | Erweiterungen (Push u. a.) *(optional)* | Kür | 02 | D1–D4 |

**Nutzeranforderungen & Abnahmekriterien:** je Feature in `requirements/NN-*/USERSTORY.md`
bzw. `FEATURE.md` (nicht hier duplizieren).

---

## Nichtfunktionale Anforderungen

| Anforderung | Beschreibung |
|---|---|
| Offline-Fähigkeit | Nach erstem Laden startet die App offline (ServiceWorker, cache-first) |
| Ausführung | Statische Vanilla-PWA (Bulma, kein Build); läuft über `http://localhost` (secure context), nicht `file://` |
| Sicherheit | Keine Anmeldung/keine vertraulichen Daten im Browser; Kamera/Standort nur nach Freigabe |
| Bedienbarkeit | Für Tourist:innen ohne Einweisung nutzbar; responsive (Bulma) |
| Backend | Datenanbindung ausschließlich über n8n-Webhooks (Low-Code) |
| Umfang | Siehe „Abgrenzung" |

---

## Abgrenzung — was wir nicht bauen

- Kein eigenes Backend/keine eigene Datenbank (nur n8n-Webhooks)
- Keine Nutzer-Anmeldung/Registrierung
- Keine Offline-Karten (Google Maps braucht Netz)
- Keine dauerhafte Server-Speicherung von Fotos
- Keine native App (PWA, „Add to Homescreen")
