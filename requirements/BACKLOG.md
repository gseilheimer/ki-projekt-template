# BACKLOG.md — Featurestand

> Übersicht aller Features und ihr aktueller Status.  
> Der KI-Agent aktualisiert den Status automatisch, wenn Features abgeschlossen sind.  
> Manuell nur nach ausdrücklicher Teamabsprache ändern.

---

## Kernanforderungen — kritischer Pfad

| Nr. | Feature | Status | Verantwortlich | Branch |
|---|---|---|---|---|
| 00 | Grundgerüst (App-Shell, Offline) | offen | [Name] | `feature/00-foundation` |
| 01 | Attraktionen laden (n8n) | offen | [Name] | `feature/01-attraktionen-laden` |
| 02 | Bewertung senden (n8n) | offen | [Name] | `feature/02-bewertung-senden` |
| 03 | Standort (Geolocation) | offen | [Name] | `feature/03-standort` |

**Kritischer Pfad:** `00 → 01 → 02` (diese Kette muss für die Demo stehen; `03` für Karte)

---

## Erweiterungen (nach den Kernanforderungen)

| Nr. | Feature | Status | Verantwortlich | Branch |
|---|---|---|---|---|
| 04 | Karte (Google Maps) | offen | [Name] | `feature/04-karte` |
| 05 | Foto (Kamera) | offen | [Name] | `feature/05-foto` |
| 06 | QR-Scan (jsQR) | offen | [Name] | `feature/06-qr-scan` |
| 07 | Erweiterungen (Push u. a.) *(optional)* | offen | [Name] | `feature/07-erweiterungen` |

---

## Statusübersicht

| Status | Bedeutung |
|---|---|
| `offen` | Noch nicht begonnen |
| `in Arbeit` | Wird gerade umgesetzt |
| `Prüfung` | Pull Request offen, wartet auf Freigabe |
| `✅ fertig` | Abgeschlossen, eingemergt, Tests bestanden |
| `blockiert` | Wartet auf anderes Feature oder Teamentscheidung |

---

*Letzte Aktualisierung: [Datum — wird vom KI-Agenten gesetzt wenn Features abgeschlossen werden]*
