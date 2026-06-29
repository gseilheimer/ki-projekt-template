# KI-Projektvorlage — Hochschule Offenburg

> Vorlage für KI-gestützte Teamprojekte im Studium  
> Grundlage: WeberHaus Hackathon, Mai 2026  
> Zielgruppe: Wirtschaftsinformatik, E-Business, Marketing, Web-Technologien

---

## Was ist das?

Diese Vorlage ist das Grundgerüst für ein KI-gestütztes Teamprojekt. Sie enthält alle Dateien, die ein KI-Agent (Claude Code, Cursor, GitHub Copilot, Anti Gravity, Codex) automatisch einliest, um euer Projekt zu verstehen und konsistent mitzuarbeiten.

Das Prinzip: **Die Intelligenz steckt nicht im Einzelprompt — sie steckt in euren Markdown-Dateien.**

---

## Schnellstart — 3 Schritte

### Schritt 1: Eigene Kopie anlegen

Dieses Repository ist ein **GitHub-Template**. Klickt oben auf **„Use this template" → „Create a new repository"** und legt eure eigene Kopie an.

```bash
# Danach lokal klonen (URL aus eurem neuen Repo übernehmen):
git clone https://github.com/EUER-NAME/ki-projekt-template.git
cd ki-projekt-template
```

> **Zugang zu GitHub:** HSO-Studierende melden sich über das **GitHub Campus**-Programm der Hochschule an. Alle anderen (HSLU, extern) legen ein kostenloses Konto auf [github.com](https://github.com) an. Der Workflow ist für alle identisch.

### Schritt 2: KI-Werkzeug einrichten

→ Anleitung je nach Werkzeug: **[docs/setup.md](docs/setup.md)**

| Werkzeug | Kontextdatei | Anleitung |
|---|---|---|
| **Claude Code** (Terminal) | `CLAUDE.md` | [setup.md#claude-code](docs/setup.md#claude-code) |
| **Cowork** (Desktop-Anwendung) | `CLAUDE.md` | [setup.md#cowork](docs/setup.md#cowork) |
| **Cursor** | `.cursorrules` | [setup.md#cursor](docs/setup.md#cursor) |
| **GitHub Copilot** | `.github/copilot-instructions.md` | [setup.md#copilot](docs/setup.md#copilot) |
| **Anti Gravity** (HS-Lizenz) | `.github/copilot-instructions.md` | [setup.md#antigravity](docs/setup.md#antigravity) |
| **Codex** | `CLAUDE.md` (als Systemauftrag) | [setup.md#codex](docs/setup.md#codex) |

### Schritt 3: Projekt anpassen

1. **`requirements/REQUIREMENTS.md`** — Anforderungen eintragen (User Stories + Abnahmekriterien)
2. **`requirements/BACKLOG.md`** — Features auflisten, Prioritäten setzen
3. **`CLAUDE.md`** — Projektname und Teamregeln anpassen, dann committen
4. **`ARCHITECTURE.md`** — Technologieentscheidungen festhalten
5. **Beispiel-Feature löschen** — `requirements/01-example-feature/` durch eigene Features ersetzen

---

## Dateistruktur

```
ki-projekt-template/
├── README.md                              ← Diese Datei — Einstieg
├── LICENSE                                ← MIT-Lizenz
├── CLAUDE.md                              ← KI-Kontext: Verhaltensregeln für den Agenten
├── ARCHITECTURE.md                        ← Systemaufbau und Technologieentscheidungen
├── ROADMAP.md                             ← Phasenplan, Abhängigkeitsgraph, Git-Workflow
├── .gitignore                             ← Vom Versionskontrolle ausgeschlossene Dateien
├── .cursorrules                           ← Spiegelung von CLAUDE.md für Cursor
├── .github/
│   └── copilot-instructions.md           ← Spiegelung von CLAUDE.md für Copilot / Anti Gravity
├── requirements/
│   ├── REQUIREMENTS.md                    ← Vollständige Anforderungen (Lastenheft / SRS)
│   ├── BACKLOG.md                         ← Aktueller Stand aller Features
│   └── 01-example-feature/               ← Beispiel — durch echte Features ersetzen
│       ├── USERSTORY.md                   ← Fachliche Beschreibung (Nutzerperspektive)
│       ├── FEATURE.md                     ← Abnahmekriterien
│       └── IMPLEMENTATION.md             ← Schrittweiser Umsetzungsplan (TDD)
└── docs/
    ├── setup.md                           ← Werkzeug-Einrichtungsanleitung
    └── lehrkonzept-ki-gestuetzte-entwicklung.md  ← Pädagogisches Quelldokument
```

### Dateinamenskonvention

**GROSSBUCHSTABEN** — Kritische Projektdateien, die der KI-Agent und alle Teammitglieder lesen und pflegen müssen:
`CLAUDE.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `REQUIREMENTS.md`, `BACKLOG.md`, `USERSTORY.md`, `FEATURE.md`, `IMPLEMENTATION.md`

**Kleinbuchstaben** — Unterstützende Dateien, Konfiguration, Dokumentation:
`README.md`, `.gitignore`, `.cursorrules`, `setup.md`

---

## Wichtig: KI-Kontext im Team synchronisieren

`CLAUDE.md`, `.cursorrules` und `.github/copilot-instructions.md` sind **Projektdateien** — keine persönliche Editor-Konfiguration. Sie müssen committed und gepusht werden, damit alle Teammitglieder denselben KI-Kontext haben — unabhängig davon, welches Werkzeug sie verwenden.

→ Details zum Workflow: **[ROADMAP.md](ROADMAP.md)** → Abschnitt „KI-Kontext synchronisieren"

---

## Für Lehrende: GitHub Classroom (optional)

Für größere Kurse lässt sich diese Vorlage über **GitHub Classroom** verteilen — aus
einem Einladungslink entsteht automatisch pro Team ein eigenes Repository. Funktioniert
auch für gemischte Kohorten (HSO über GitHub Campus, HSLU und externe Teilnehmende mit
eigenem Konto).

→ Anleitung: **[docs/github-classroom.md](docs/github-classroom.md)**

---

## Hintergrund

Diese Vorlage basiert auf dem WeberHaus Hackathon (Mai 2026) an der Hochschule Offenburg. Das vollständige Lehrkonzept liegt unter **[docs/lehrkonzept-ki-gestuetzte-entwicklung.md](docs/lehrkonzept-ki-gestuetzte-entwicklung.md)** (sowie im Moodle-Kurs).

Fragen → Betreuungsteam über Moodle.

---

## Lizenz

[MIT](LICENSE) © 2026 Gilbert Seilheimer / CONTIC
