# CLAUDE.md — KI-Kontext

> Diese Datei wird von Claude Code und Cowork automatisch beim Start jeder Sitzung eingelesen.  
> Cursor-Nutzende: Inhalt ist identisch in `.cursorrules` gespiegelt.  
> Copilot- und Anti Gravity-Nutzende: Inhalt ist identisch in `.github/copilot-instructions.md` gespiegelt.
>
> **TEAMPFLICHT:** Diese Datei ist eine Projektdatei — keine persönliche Konfiguration.  
> Jede Änderung muss committed und gepusht werden, damit alle Teammitglieder  
> denselben KI-Kontext haben. Details: siehe `ROADMAP.md` → „KI-Kontext synchronisieren".

---

## Projektübersicht

**Projektname:** [HIER EINTRAGEN — z.B. „Campusbuchung"]  
**Team:** [HIER EINTRAGEN — Namen der Teammitglieder]  
**Hochschule:** Hochschule Offenburg  
**Kurs:** [HIER EINTRAGEN — z.B. „E-Business, SoSe 2026"]

---

## Projektdokumentation — Übersicht

| Datei | Inhalt |
|---|---|
| `ARCHITECTURE.md` | Systemaufbau, Technologiestack, Komponentenstruktur |
| `requirements/REQUIREMENTS.md` | Vollständige Anforderungen (Lastenheft / SRS) |
| `requirements/BACKLOG.md` | Aktueller Stand aller Features |
| `requirements/NN-feature/USERSTORY.md` | Fachliche Beschreibung je Feature |
| `requirements/NN-feature/FEATURE.md` | Abnahmekriterien je Feature |
| `requirements/NN-feature/IMPLEMENTATION.md` | Schrittweiser Umsetzungsplan je Feature |
| `ROADMAP.md` | Phasenplan, Abhängigkeitsgraph, Git-Workflow |

**Pflicht vor jeder Codeänderung:** `ARCHITECTURE.md` lesen.  
**Pflicht nach Fertigstellung:** `BACKLOG.md` aktualisieren (Status → `✅ fertig`).

---

## Arbeitsweise (für den KI-Agenten verbindlich)

### Vor dem Start jeder Aufgabe
1. `ARCHITECTURE.md` lesen — Systemaufbau verstehen
2. `requirements/BACKLOG.md` lesen — Was ist offen? Was ist bereits erledigt?
3. `IMPLEMENTATION.md` des zugewiesenen Features lesen — Aufgaben und Checkboxen prüfen

### Während der Umsetzung
- Jeden abgeschlossenen Schritt in `IMPLEMENTATION.md` mit `[x]` abhaken
- Gemeinsam genutzte Dateien (Datenmodell, API-Typen) nur nach Teamabsprache ändern
- Bei Unklarheiten: nachfragen, nicht raten

### Nach Fertigstellung eines Features
- Alle Checkboxen in `IMPLEMENTATION.md` abgehakt?
- Status in `BACKLOG.md` auf `✅ fertig` setzen
- Commit mit vollständiger Nachricht erstellen

---

## Qualitätsstandards

- **Kein Duplikat-Code** — Wiederholungen immer benennen und zusammenführen
- **Tests sind nicht verhandelbar** — Kein Feature gilt als fertig ohne bestandene Tests
- **TDD-Zyklus einhalten:** Test schreiben (schlägt fehl) → Umsetzung → Test besteht → Aufräumen
- **Lesbarkeit vor Kürze** — Verständlicher Code schlägt kurzen Code
- **Grenzfälle behandeln** — Leere Eingaben, Fehler und Grenzwerte immer abdecken
- **Commit-Schema einhalten:**
  ```
  feat(bereich): was wurde hinzugefügt
  fix(bereich): was wurde behoben
  docs(bereich): was wurde aktualisiert
  test(bereich): was wurde getestet
  ```

---

## Teamregeln

```
# Dateien, die nur nach Absprache geändert werden dürfen:
- [HIER EINTRAGEN — z.B. „shared/types.js", „data/schema.json"]

# Aufgabenverteilung:
- Feature 01: [Name]
- Feature 02: [Name]

# Branch-Strategie:
- main: nur lauffähiger, getesteter Code
- feature/NN-name: ein Branch je Feature
```

---

## Werkzeugkompatibilität

```
Claude Code / Cowork  →  CLAUDE.md                          (diese Datei)
Cursor                →  .cursorrules
GitHub Copilot        →  .github/copilot-instructions.md
Anti Gravity (HS)     →  .github/copilot-instructions.md
Codex                 →  CLAUDE.md (als Systemauftrag, siehe docs/setup.md)
```

Bei Änderungen: Inhalt in alle drei gespiegelten Dateien übertragen und committen.
