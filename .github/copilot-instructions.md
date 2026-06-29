# copilot-instructions.md — Copilot / Anti Gravity Kontext
#
# Spiegelung von CLAUDE.md — bei Änderungen beide Dateien aktualisieren.
# Gilt für: GitHub Copilot (VS Code), Anti Gravity (HS-Offenburg-Lizenz)
#
# TEAMPFLICHT: Diese Datei ist eine Projektdatei.
# Jede Änderung muss committed und gepusht werden, damit das gesamte Team denselben Stand hat.
# Details: ROADMAP.md → "KI-Kontext synchronisieren"
# ---------------------------------------------------------------

## Projektübersicht

**Projektname:** [HIER EINTRAGEN]  
**Team:** [HIER EINTRAGEN]  
**Hochschule:** Hochschule Offenburg  
**Kurs:** [HIER EINTRAGEN]

---

## Projektdokumentation

| Datei | Inhalt |
|---|---|
| `ARCHITECTURE.md` | Systemaufbau, Technologiestack |
| `requirements/REQUIREMENTS.md` | Anforderungen (Lastenheft / SRS) |
| `requirements/BACKLOG.md` | Aktueller Stand aller Features |
| `requirements/NN-feature/USERSTORY.md` | Fachliche Beschreibung je Feature |
| `requirements/NN-feature/FEATURE.md` | Abnahmekriterien je Feature |
| `requirements/NN-feature/IMPLEMENTATION.md` | Schrittweiser Umsetzungsplan |
| `ROADMAP.md` | Phasenplan, Abhängigkeiten, Git-Workflow |

Pflicht vor jeder Codeänderung: `ARCHITECTURE.md` lesen.  
Pflicht nach Fertigstellung: `BACKLOG.md` aktualisieren (Status → `fertig`).

---

## Arbeitsweise

Vor dem Start: `ARCHITECTURE.md` → `BACKLOG.md` → `IMPLEMENTATION.md` des Features lesen.  
Während der Umsetzung: Schritte in `IMPLEMENTATION.md` mit `[x]` abhaken.  
Nach Fertigstellung: Status in `BACKLOG.md` setzen, Commit erstellen.

---

## Qualitätsstandards

- Kein Duplikat-Code
- Tests sind nicht verhandelbar — TDD-Zyklus einhalten
- Lesbarkeit vor Kürze
- Grenzfälle behandeln
- Commit-Schema: `feat(bereich): beschreibung`

---

## Werkzeughinweis

Spiegelung von `CLAUDE.md`. Bei Änderungen alle drei Kontextdateien aktualisieren und einchecken:  
`CLAUDE.md`, `.cursorrules`, `.github/copilot-instructions.md`

Anti Gravity (Hochschule Offenburg): Diese Datei wird automatisch als Kontext geladen,
da Anti Gravity auf VS Code-Basis aufbaut und `.github/copilot-instructions.md` unterstützt.
