# KI-gestützte Prototypenentwicklung
## Lehrkonzept für kollaborative Studienprojekte — Hochschule Offenburg

> Destilliert aus dem WeberHaus Hackathon, Mai 2026  
> Zielgruppe: Wirtschaftsinformatik, E-Business, Marketing, Web-Technologien  
> Schwerpunkt: Teamarbeit mit KI — von der Anforderung zur laufenden Anwendung

---

## 0. Warum das mehr ist als „einfach mit KI chatten"

Wer ChatGPT oder Claude im Browser nutzt, kennt das Muster: Frage stellen, Antwort bekommen, nächste Frage stellen. Jede Konversation fängt neu an, der KI-Assistent vergisst alles nach jedem Gespräch. Das reicht für Einzelaufgaben — aber nicht für ein Teamprojekt über Wochen.

**Das Problem mit einfachem Prompting im Team:**
- Die KI kennt weder euer Projekt noch eure bisherigen Entscheidungen
- Drei Teammitglieder, drei verschiedene Prompts → drei inkonsistente Ergebnisse
- Niemand weiß, was die anderen bereits implementiert haben
- Die KI "erfindet" Lösungen, die nicht zu eurem Systemdesign passen

**Der Unterschied mit Claude Code / Cowork:**

Claude Code ist kein Chat-Fenster. Es ist ein Entwicklungs-Agent, der:
- Dateien auf eurem Computer lesen, schreiben und ausführen kann
- beim Start automatisch eure Projekt-Dokumentation einliest
- sich an Architektur-Entscheidungen hält, weil diese in Dateien festgehalten sind
- Checkboxen in euren Aufgabenlisten abhaken kann, wenn Aufgaben erledigt sind
- Code testen und bei Fehlern eigenständig korrigieren kann

Der entscheidende Unterschied: **Die Intelligenz steckt nicht im Prompt — sie steckt in euren Markdown-Dateien.** Diese bilden das kollektive Gedächtnis des Projekts, das alle KI-Agenten und alle Teammitglieder gemeinsam nutzen.

Einfach gesagt: Ein guter Prompt hilft einmalig. Eine gute Projektdokumentation hilft das gesamte Semester.

### Welche Werkzeuge kommen infrage?

Der Hackathon wurde mit **Claude Code als VS Code-Plugin** umgesetzt — aber das ist nicht der einzige Weg. Entscheidend ist das Prinzip, nicht das spezifische Werkzeug. Studierende können dasselbe Vorgehen mit verschiedenen Tools umsetzen:

| Werkzeug | Typ | Zugangspunkt | Anmerkung |
|---|---|---|---|
| **Claude Code** | KI-Agent (Anthropic) | VS Code Plugin, Terminal | Im Hackathon verwendet. Nativ mit `CLAUDE.md`. |
| **Cowork** | Desktop-App (Anthropic) | Windows / macOS App | Gleicher Agent wie Claude Code, aber ohne Terminal — zugänglicher für Nicht-Entwickler. |
| **GitHub Copilot / Codex** | KI-Assistent (OpenAI / GitHub) | VS Code Plugin | Weit verbreitet; Kontext-Datei heißt `.github/copilot-instructions.md`. |
| **Cursor** | KI-Editor (VS Code-Basis) | Eigene App (Win/macOS) | VS Code-Fork mit KI tief integriert; Kontext-Datei heißt `.cursorrules`. |
| **Anti Gravity** | KI-Editor (VS Code-Basis) | HS-Offenburg-Lizenz | Universitätsseitig bereitgestelltes Tool auf VS Code-Basis; Kontext-Datei gemäß Tool-Dokumentation. |
| **API + eigenem Client** | Direktzugang | OpenAI / Anthropic API Key | Maximale Freiheit, höchster Einrichtungsaufwand; Kontext wird als System-Prompt übergeben. |
| **Superpowers** *(optional)* | Plugin / Methodology-Layer | Über Plugin-Marketplace | Werkzeugübergreifend installierbar (Claude Code, Cursor, Codex, Gemini); erweitert jeden Agenten um strukturierte Workflows. |

**Das Wichtigste dabei:** Die Methodik — `REQUIREMENTS.md`, `backlog.md`, `architecture.md`, `implementation.md` — funktioniert werkzeugunabhängig. Diese Dateien bilden das kollektive Projektgedächtnis, das von jedem dieser Werkzeuge gelesen werden kann.

**Was sich je nach Werkzeug ändert: die Kontext-Einstiegsdatei.**

Jedes agentische KI-Werkzeug hat eine eigene Konvention, wie es beim Projektstart automatisch Kontext lädt:

```
Claude Code   →  CLAUDE.md          (im Projekt-Root)
Cursor        →  .cursorrules       (im Projekt-Root)
GitHub Copilot → .github/copilot-instructions.md
Windsurf      →  .windsurfrules
Anti Gravity  →  gemäß Tool-Doku    (oft ähnliche Konvention)
API direkt    →  System-Prompt      (im eigenen Skript/Client)
```

Das bedeutet: Die `CLAUDE.md` aus dem Hackathon bleibt wie sie ist — und dient als Vorlage. Wer ein anderes Werkzeug nutzt, kopiert den Inhalt in das entsprechende Format seines Tools. Der Inhalt (Engineering-Präferenzen, Dateipfade, Verhalten) bleibt identisch — nur der Dateiname und ggf. die Syntax passen sich an.

> **Hinweis für Teams mit gemischten Tools:** Legt fest, welches Werkzeug "führend" ist. Die `CLAUDE.md` bleibt die Referenz. Wer Cursor verwendet, erstellt zusätzlich eine `.cursorrules`, die auf die `CLAUDE.md` verweist und deren Inhalt spiegelt — so gibt es keine doppelte Pflege.

### ⚡ Optional: Superpowers — strukturierte Workflows für jeden Agenten

Beim WeberHaus-Hackathon wurde **Superpowers** ([github.com/obra/superpowers](https://github.com/obra/superpowers)) als Plugin eingesetzt. Es ist kein weiteres KI-Modell, sondern ein **Methodology-Layer**: eine Sammlung von Arbeitsanweisungen (sog. Skills), die den KI-Agenten zwingen, strukturiert vorzugehen statt sofort Code zu schreiben.

**Was Superpowers konkret tut:**

Der Agent springt nicht sofort in die Implementierung. Er folgt stattdessen automatisch einem definierten Workflow:

```
1. brainstorming       → Erst Anforderungen klären, dann Design
2. using-git-worktrees → Isolierten Branch für jedes Feature anlegen
3. writing-plans       → Implementierungsplan in Bite-sized Tasks aufteilen
4. subagent-driven-development → Je Task einen frischen Subagenten starten
5. test-driven-development     → RED-GREEN-REFACTOR erzwingen
6. requesting-code-review      → Zwischen Tasks automatisch reviewen
7. finishing-a-development-branch → Merge/PR sauber abschließen
```

Das ist dieselbe Methodik, die im Hackathon von Hand in die `implementation.md`-Dateien eingebaut wurde — Superpowers automatisiert sie und macht sie damit von Anfang an verfügbar, ohne dass das Team alle Details selbst ausarbeiten muss.

**Installation je nach Werkzeug:**

```bash
# Claude Code (offizieller Marketplace)
/plugin install superpowers@claude-plugins-official

# Claude Code (Superpowers Marketplace)
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace

# Cursor
/add-plugin superpowers

# OpenAI Codex CLI
/plugins  →  "superpowers" suchen  →  Install

# GitHub Copilot CLI
copilot plugin marketplace add obra/superpowers-marketplace
copilot plugin install superpowers@superpowers-marketplace

# Gemini CLI
gemini extensions install https://github.com/obra/superpowers
```

**Für Studierende:** Superpowers ist besonders nützlich für Teams, die das strukturierte Vorgehen aus diesem Lehrkonzept nutzen wollen, ohne alle Markdown-Dateien von Hand zu pflegen. Es erzwingt gute Gewohnheiten — TDD, Git Worktrees, Reviews — automatisch. Gleichzeitig: Wer versteht, *warum* diese Schritte existieren (siehe Kapitel 1–4 dieses Dokuments), arbeitet effektiver damit als jemand, der es als Black Box benutzt.

> **Empfehlung:** Erst das Konzept verstehen (dieses Dokument), dann Superpowers als Beschleuniger einsetzen — nicht umgekehrt.

---

## 1. Das Dokumenten-System: Fünf Dateien, die alles steuern

Das WeberHaus-Hackathon-Team hat fünf Typen von Markdown-Dateien eingesetzt, die zusammen das komplette Projektwissen abbilden. Jede hat eine klare Rolle.

### Übersicht

```
Projekt-Root/
├── CLAUDE.md                          ← Verhaltensvertrag mit dem KI-Agenten
├── architecture.md                    ← Technisches Bauprinzip
├── requirements/
│   ├── REQUIREMENTS.md                ← Vollständige Anforderungen (Lastenheft)
│   ├── backlog.md                     ← Aufgabenstand (das "Kanban-Board")
│   └── 01-customer-search/
│       ├── userstory.md               ← Fachliche Beschreibung (Perspektive des Nutzers)
│       ├── feature.md                 ← Akzeptanzkriterien (Was muss erfüllt sein?)
│       └── implementation.md         ← Ausführungsplan (Schritt für Schritt mit Code)
```

---

### 1.1 REQUIREMENTS.md — das Lastenheft

Für BWL- und WI-Studierende ist das der vertrauteste Dokumenttyp: **Was soll das System können?** — aus der Perspektive der Nutzerinnen und Nutzer formuliert.

Die `REQUIREMENTS.md` enthält für jedes Feature:
- **Ziel:** Wer profitiert, und warum?
- **Akzeptanzkriterien:** Konkrete, überprüfbare Aussagen. Nicht "die App soll gut sein", sondern "Suchergebnisse erscheinen auch bei Teilbegriffen ('Müll' findet 'Müller')".
- **User Stories:** Aussagen nach dem Schema *"Als [Rolle] möchte ich [Aktion], damit [Nutzen]"*

**Aus dem Hackathon — Beispiel Feature 01, Kundensuche:**

> Als Ausstattungsberater möchte ich einen Kunden nach seinem Namen suchen können, damit ich schnell das richtige Kundenprofil öffnen kann, ohne die interne Kundennummer kennen zu müssen.
>
> Akzeptanzkriterien: Eingabe von mindestens 2 Zeichen startet die Suche. Ergebnisse erscheinen für Vor- und Nachname. Bei mehreren Treffern werden alle angezeigt.

**Für Studierende:** Die `REQUIREMENTS.md` ist das gemeinsame Verständnis-Dokument. Wenn alle (Team, KI-Agent, Auftraggeber) aus der gleichen Quelle lesen, werden Missverständnisse vermieden. Die Akzeptanzkriterien sind gleichzeitig die späteren Test-Grundlagen.

---

### 1.2 backlog.md — das Kanban-Board des Projekts

Das Backlog ist die **zentrale Statusübersicht** aller Features. Hier sieht man auf einen Blick: Was ist fertig? Was ist offen? Was ist als nächstes dran?

**Aus dem Hackathon:**

```markdown
## MVP — Kernfunktionen

| # | Feature               | Status    | Beschreibung                                    |
|---|---|---|---|
| 01 | Kundensuche          | ✅ done   | Kunden nach Name, E-Mail oder Kundennummer      |
| 02 | Projekt & Hausansicht | ✅ done   | Grundriss, Außenansicht, Basiskonfiguration     |
| 04 | Scannen & Konfigurieren | ✅ done | Artikel per Kamera-Scan identifizieren          |
| 07 | Echtzeit-Visualisierung | open   | Artikel live im Grundriss einblenden            |
```

**Wichtiges Prinzip:** Wenn ein Feature abgeschlossen ist, wird der Status im Backlog von `open` auf `✅ done` geändert. Das geschieht nicht manuell — der KI-Agent aktualisiert diese Datei automatisch, wenn er die Aufgaben erledigt hat.

**Für Studierende:** Stellt euch das Backlog wie ein Scrum-Board vor. Es ist die einzige Wahrheitsquelle für den Projektstand. Kein "ich glaube, das war schon fertig" — der Status steht in der Datei.

---

### 1.3 CLAUDE.md — der Verhaltensvertrag mit dem KI-Agenten

Diese Datei liest Claude Code automatisch beim Start jeder Sitzung. Sie ist das Briefing-Dokument, das dem Agenten erklärt: Wie arbeiten wir hier? Was sind unsere Qualitätsstandards?

**Typische Inhalte:**

```markdown
# CLAUDE.md

## Projektverweis
Siehe architecture.md für den Systemaufbau.
Siehe requirements/backlog.md für offene Aufgaben.

## Engineering-Präferenzen
- DRY (Don't Repeat Yourself): Wiederholungen immer benennen
- Tests sind nicht verhandelbar
- Explizit und lesbar > kurz und clever

## Arbeitsregel
Vor jeder Codeänderung: Architektur lesen.
Nach Fertigstellung einer Aufgabe: backlog.md aktualisieren.
Niemals gemeinsam genutzte Dateien (shared/types.ts) ändern ohne Teamabsprache.
```

**Für Studierende:** `CLAUDE.md` ist wie das Einarbeitungs-Handbuch für einen neuen Mitarbeiter — nur eben für den KI-Agenten. Je klarer das Briefing, desto konsistenter und zuverlässiger die Ergebnisse. Zeit in diese Datei zu investieren spart vielfach mehr Zeit bei der Implementierung.

---

### 1.4 implementation.md — der ausführbare Arbeitsplan

Das ist der **mächtigste Baustein** des Systems. Für jedes Feature gibt es eine `implementation.md`, die nicht nur beschreibt, *was* gebaut werden soll, sondern *wie* — Schritt für Schritt, inklusive konkretem Code und Testcode.

**Die entscheidende Eigenschaft:** Diese Datei folgt dem Prinzip von Test-Driven Development (TDD). Jede Aufgabe beginnt mit einem Test der zeigt, wie die fertige Funktion aussehen soll — und schlägt erst fehl. Dann wird die Funktion implementiert, bis der Test erfolgreich ist.

```markdown
### Task 1: Backend — Kundensuche

- [ ] Schritt 1: Test schreiben (wird fehlschlagen)
  [konkreter Testcode]
- [ ] Schritt 2: Test ausführen — FAIL erwarten
- [ ] Schritt 3: Funktion implementieren
  [konkreter Implementierungscode]
- [ ] Schritt 4: Test ausführen — PASS erwarten
- [ ] Schritt 5: Commit
  git commit -m "feat: customer search service"
```

**Warum Checkboxen?** Der KI-Agent hakt erledigte Schritte in der Datei ab. Wenn er unterbrochen wird oder ein neuer Agent die Arbeit übernimmt, sieht man sofort, wo der letzte Stand war. Die Datei ist das Gedächtnis der laufenden Arbeit.

**Für Studierende:** Stellt euch die `implementation.md` wie eine Arbeitsanweisung in der Produktion vor: präzise, reproduzierbar, jederzeit von einem anderen Mitarbeiter (oder Agent) fortsetzbar.

---

### 1.5 vorgehensmodell.md — der Phasenplan

Diese Datei hält fest: Wer arbeitet in welcher Phase an was? Sie enthält den Abhängigkeitsgraph (Feature A muss vor Feature B fertig sein) und die Aufgabenverteilung im Team.

**Aus dem Hackathon:**

```
✅ 00-foundation
    ├── 01-customer-search
    │       └── 02-project-view
    │               └── 04-scan-configure
    │                       └── 05-cart-management
    │                               └── 06-review-export  ← MVP-Ende
```

Kritischer Pfad: `00 → 01 → 02 → 04 → 05 → 06` — das ist die minimale, demo-fähige Kette.

---

### 1.6 diagramme.md — Modelle als Mermaid

Alle Modelle (UseCase-, Klassen-, Sequenz-, Komponentendiagramm …) werden als **Mermaid**
direkt im Markdown notiert. Vorteil: GitHub und VS Code rendern Mermaid ohne Zusatzsoftware,
und Diagramm-Änderungen sind im Pull Request als lesbarer Diff sichtbar — kein Bild-Anhang,
keine separate Toolchain. Der **KI-Agent kann die Diagramme direkt erzeugen** („Erzeuge ein
Mermaid-UseCase-Diagramm nach `docs/diagramme.md` für …"). Konventionen und Vorlagen stehen
in `docs/diagramme.md`; in den Feature-Dateien sind die Gerüste schon eingebettet
(UCD → `USERSTORY.md`, Klassen-/Komponentendiagramm → `ARCHITECTURE.md`,
Sequenzdiagramm → `IMPLEMENTATION.md`).

---

## 2. Der Workflow: Von der Idee zur laufenden Anwendung

### Phase 0 — Gemeinsames Verständnis schaffen (vor dem ersten Code)

Bevor irgendjemand Code schreibt oder einen KI-Agenten startet, legt das Team gemeinsam drei Dinge fest:

**Schritt 1: Anforderungen formulieren**  
`REQUIREMENTS.md` schreiben: Wer sind die Nutzer? Was brauchen sie? Als User Stories: *"Als [Rolle] möchte ich [Aktion], damit [Nutzen]."* Mit konkreten Akzeptanzkriterien.

**Schritt 2: Abhängigkeitsgraph zeichnen**  
Welche Features hängen voneinander ab? Welche können parallel entwickelt werden? Dieser Graph entscheidet, wer wann mit was anfangen kann.

**Schritt 3: Backlog anlegen**  
Alle Features mit Status `open` ins `backlog.md`. Kritischer Pfad klar markieren.

**Schritt 4: CLAUDE.md schreiben**  
Dem Agenten erklären, wie das Team arbeitet, was wichtig ist, welche Dateien nicht ohne Absprache geändert werden dürfen.

Das dauert beim ersten Mal ein paar Stunden — spart aber Tage an Reibung und Missverständnissen später.

---

### Phase 1 — Parallele Entwicklung

Jedes Teammitglied startet in seinem Feature-Branch mit dem Lesen seiner `implementation.md`:

```bash
# Das ist der Startpunkt für jeden Entwickler
cat requirements/01-customer-search/implementation.md
# Dann: Claude Code starten — der Agent liest CLAUDE.md und arbeitet die Checkliste ab
```

Der Agent:
1. Liest `CLAUDE.md` (Verhaltensregeln)
2. Liest `architecture.md` (Systemstruktur)
3. Liest die `implementation.md` des Features (konkrete Aufgaben)
4. Schreibt Test → führt Test aus → schreibt Funktion → führt Test aus → hakt Checkbox ab → Commit
5. Markiert das Feature im `backlog.md` als `✅ done`

---

### Phase 2 — Integration und Demo-Readiness

Pull Requests auf den gemeinsamen Branch, Code Reviews, Integration testen. Das Backlog zeigt, ob der kritische Pfad vollständig ist.

---

## 3. Geteilte Verantwortung: Was das Team koordinieren muss

Nicht alles kann parallelisiert werden. Einige Dateien gehören allen — und Änderungen daran betreffen das gesamte Team sofort.

| Datei | Warum kritisch | Regel |
|---|---|---|
| Datenmodell / gemeinsame Typen | Ändert die Grundlage für alle Features | Nur nach Team-Absprache, einer ändert, alle rebasen |
| API-Design | Betrifft Frontend und Backend | Vor Umsetzung im Team abstimmen |
| Docker-Konfiguration | Deployment für alle | Wie Datenmodell behandeln |

**Analogie für BWL-Studierende:** Das ist wie der gemeinsame Kontenrahmen in der Buchhaltung. Jeder kann auf "seinem" Konto arbeiten — aber den Kontenrahmen selbst ändert man nicht ohne Abstimmung.

---

## 4. Automatische Dokumentationspflege

Ein häufiges Problem in Projekten: Code und Dokumentation laufen auseinander. Das Feature ist längst fertig, aber im Backlog steht noch `open`. Die `implementation.md` hat noch unbeantwortete Checkboxen. Niemand weiß, was wirklich gilt.

**Das System löst dieses Problem durch drei Automatismen:**

**1. Checkboxen in implementation.md**  
Der KI-Agent hakt jeden abgeschlossenen Schritt ab. Die `implementation.md` ist damit gleichzeitig Aufgabenliste und Fortschrittsdokumentation. Wer wissen will, wie weit Feature 04 ist, liest die Datei.

**2. Status-Updates im backlog.md**  
Wenn alle Checkboxen eines Features abgehakt sind, ändert der Agent den Status im Backlog auf `✅ done`. Das Backlog ist immer aktuell — ohne manuelle Pflege.

**3. Commit-Messages als Changelog**  
Jeder Commit folgt dem Schema `feat(bereich): beschreibung`. Aus diesen Nachrichten entsteht automatisch ein Verlaufsprotokoll: Was wurde wann von wem hinzugefügt?

```bash
feat(backend): customer search service
feat(frontend): customer search component
feat(api): customer REST routes (GET, POST, PATCH)
```

**Für Studierende:** Ihr müsst keine separate "Projektdokumentation" schreiben, die sowieso niemand liest. Die Dokumentation *ist* die Arbeit — sie entsteht parallel zur Implementierung, durch den Agenten.

---

## 5. Werkzeuge: Was auf dem Rechner läuft

Für Wirtschaftsinformatik- und BWL-Studierende ohne tiefe Programmiererfahrung ist es wichtig zu verstehen, wie die Werkzeuge zusammenspielen.

### Auf welchen Systemen läuft das?

Claude Code und die zugehörigen Werkzeuge laufen auf **Windows und macOS**. Es gibt zwei Zugangswege:

**Weg 1: Claude Code (Terminal)**  
Für Studierende mit Programmiererfahrung. Claude Code läuft im Terminal (Eingabeaufforderung / PowerShell unter Windows, Terminal unter macOS). Der Agent hat direkten Zugriff auf Dateien und kann Code ausführen.

```bash
# Installation (einmalig, auf beiden Plattformen gleich)
npm install -g @anthropic/claude-code

# Projekt starten
cd mein-projekt
claude
```

**Weg 2: Cowork (Desktop-App)**  
Für Studierende ohne Programmierhintergrund. Cowork ist eine grafische Desktop-Anwendung (Windows und macOS), die Claude Code zugrunde liegt, aber ohne Terminal bedienbar ist. Die KI hat denselben Dateizugriff — aber die Bedienung ist zugänglicher.

### VS Code als gemeinsame Oberfläche

Visual Studio Code ist ein kostenloser Editor (Windows/macOS/Linux), der während der Entwicklung neben dem Terminal läuft. Er zeigt:
- Alle Dateien des Projekts im Baum-Explorer
- Dateiänderungen des KI-Agenten in Echtzeit
- Git-Verlauf und Branch-Status
- Testergebnisse direkt im Editor

Empfohlene Erweiterungen: GitLens (Branch-Übersicht), Vitest Explorer (Test-Status), Markdown Preview (MD-Dateien anzeigen).

### Die Kette im Überblick

```
Ihr (Team)
    → schreibt REQUIREMENTS.md, backlog.md, CLAUDE.md
    → öffnet VS Code (zeigt alle Dateien)
    → startet Claude Code oder Cowork (KI liest Dateien)
         → KI implementiert Feature für Feature
         → KI hakt Checkboxen ab
         → KI updated backlog.md
         → KI committed Code mit aussagekräftigen Messages
    → Ihr reviewt die Änderungen in VS Code
    → Ihr merged den Branch
```

---

## 6. Rollen im Team: Wer macht was?

Ein wichtiges Missverständnis ausräumen: KI-gestützte Entwicklung bedeutet nicht, dass das Team nichts mehr tut. Die Rollenverteilung verschiebt sich.

| Aufgabe | Wer |
|---|---|
| Anforderungen aufnehmen (Requirements) | Team (mit KI als Sparringspartner) |
| User Stories formulieren | Team |
| Akzeptanzkriterien definieren | Team — das ist die eigentliche Denkarbeit |
| Abhängigkeitsgraph und Phasenplan | Team |
| CLAUDE.md schreiben | Team |
| Architecture-Entscheidungen | Team (ggf. mit KI-Beratung) |
| implementation.md ausdetaillieren | Team + KI gemeinsam |
| Feature-Implementierung Schritt für Schritt | KI-Agent |
| Tests schreiben und ausführen | KI-Agent nach Vorlage |
| Backlog-Status aktualisieren | KI-Agent automatisch |
| Code-Review der KI-Ausgaben | Team — menschliches Urteil bleibt nötig |
| Geteilte Dateien ändern | Team (nach Absprache) |
| Finale Demo vorbereiten | Team |

**Für BWL-lastige Teams:** Der Wert liegt in der Anforderungs- und Konzeptarbeit. Ein Team, das präzise User Stories mit klaren Akzeptanzkriterien schreiben kann, bekommt vom KI-Agenten präzise Ergebnisse. Ein Team, das vage bleibt, bekommt vage Ergebnisse — unabhängig vom Werkzeug.

---

## 7. Qualitätssicherung: Was kann schiefgehen?

KI-Agenten sind leistungsfähig, aber nicht unfehlbar. Folgende Probleme treten regelmäßig auf:

**"Halluzinierte" Abhängigkeiten**  
Der Agent erstellt Code, der auf Bibliotheken oder Modulen basiert, die nicht installiert sind. Abhilfe: Nach jeder abgeschlossenen Aufgabe `npm run build` oder `tsc --noEmit` ausführen. Fehler sofort adressieren.

**Eigenständige Änderungen an gemeinsamen Dateien**  
Der Agent ändert leise eine Datei, die das gesamte Team betrifft. Abhilfe: In `CLAUDE.md` explizit festhalten, welche Dateien koordinationspflichtig sind.

**Zu "cleverer" Code**  
KI neigt zu abstrakter, schwer lesbarer Implementierung. Abhilfe: In `CLAUDE.md` explizit "explizit > clever" fordern.

**Sicherheitsrelevante Bereiche**  
Authentifizierung, Datenschutz, Passwortverwaltung — diese Bereiche müssen immer manuell überprüft werden. KI-generierter Code ist kein Sicherheitsaudit-Ersatz.

**Checkliste vor jedem Merge:**

```
□ Laufen alle Tests durch?
□ Wurden geteilte Dateien geändert? (Falls ja: Team informiert?)
□ Sind alle Checkboxen in der implementation.md abgehakt?
□ Ist der Status im backlog.md aktualisiert?
□ Sind Commit-Messages aussagekräftig?
```

---

## 8. Vertiefung: Eigenes Projekt Schritt für Schritt aufsetzen

Dieser Abschnitt ist kein Aufgabenkatalog mit Zeitvorgaben, sondern ein **geführter Setup-Pfad**. Wer ihn einmal durchgearbeitet hat, hat ein funktionsfähiges erstes Feature und alle Projektdateien korrekt aufgesetzt. Das ist die Grundlage für jedes spätere Semester-Projekt mit KI-Unterstützung.

> **Empfohlene Projektidee für den Einstieg:** Nehmt etwas, das ihr kennt — eine einfache Verwaltungsanwendung aus eurem Studienumfeld. Beispiele: Lerngruppen-Koordination, Buchungssystem für Seminarräume, Produktkatalog für ein fiktives Unternehmen. Kein E-Commerce-System, kein soziales Netzwerk — zu komplex für den ersten Durchlauf.

---

### Schritt 1: Voraussetzungen prüfen und Accounts anlegen

**Was ihr braucht:**

- **GitHub-Account** (kostenlos): [github.com](https://github.com) — hier liegt euer gemeinsamer Code
- **Git** installiert: [git-scm.com](https://git-scm.com) — Versionsverwaltung, auf der alles aufbaut
- **Node.js** (LTS-Version): [nodejs.org](https://nodejs.org) — Laufzeitumgebung, Voraussetzung für Claude Code
- **VS Code**: [code.visualstudio.com](https://code.visualstudio.com) — Editor für alle Plattformen
- **Claude-Zugang**: Entweder Claude Pro-Abo ([claude.ai](https://claude.ai)) oder API-Key ([console.anthropic.com](https://console.anthropic.com))

**Zu den Kosten:** Claude Code läuft über die Anthropic API. Für Studienprojekte ist das Nutzungsvolumen typischerweise gering — ein paar Euro pro Monat. Alternativ: Claude Pro-Abo (~20 €/Monat) deckt Claude Code mit ab. Klärt im Team, wer den API-Zugang bereitstellt, oder nutzt die Hochschullizenz (Anti Gravity / universitätsseitig bereitgestelltes Tool).

**Claude Code installieren:**
```bash
npm install -g @anthropic/claude-code
claude --version   # Erfolgreiche Installation zeigt die Versionsnummer
```

**Verifikation Schritt 1:** Ihr könnt `git --version`, `node --version` und `claude --version` im Terminal ausführen und bekommt jeweils eine Versionsnummer zurück.

---

### Schritt 2: Git-Repository anlegen und schützen

```bash
# Neues Projektverzeichnis anlegen
mkdir mein-projekt
cd mein-projekt
git init

# .gitignore anlegen — WICHTIG: API-Keys dürfen nie ins Repo!
```

Legt sofort eine `.gitignore`-Datei an:

```
# .gitignore
.env
.env.local
*.env
node_modules/
.DS_Store
```

Die `.env`-Datei ist der Ort für euren API-Key. Sie darf **niemals** in Git landen — weder versehentlich noch absichtlich. Wer einen API-Key auf GitHub veröffentlicht, kann innerhalb von Minuten hohe Kosten verursachen, weil automatisierte Bots GitHub nach solchen Keys durchsuchen.

```bash
# Auf GitHub: neues Repository anlegen (ohne README)
# Dann lokal verknüpfen:
git remote add origin https://github.com/euername/mein-projekt.git
git add .gitignore
git commit -m "chore: initial repo setup with .gitignore"
git push -u origin main
```

**Verifikation Schritt 2:** Das Repository ist auf GitHub sichtbar, enthält nur `.gitignore`, enthält keine Passwörter oder Keys.

---

### Schritt 3: Projektidee klären und REQUIREMENTS.md schreiben

Bevor eine einzige Zeile Code entsteht, schreibt das Team gemeinsam die Anforderungen auf. Öffnet eine neue Datei `requirements/REQUIREMENTS.md`.

**Mindestinhalt:**

```markdown
# [Projektname] — Anforderungen

## Projektbeschreibung
[Ein Satz: Was tut die Anwendung, für wen, in welchem Kontext?]

## Rollen
| Rolle | Hauptaufgaben |
|---|---|
| [Rolle 1] | ... |
| [Rolle 2] | ... |

## Feature 01 — [Name]
**Ziel:** ...
**Akzeptanzkriterien:**
- [ ] ...
- [ ] ...

### User Story
Als [Rolle] möchte ich [Aktion], damit [Nutzen].
```

Schreibt **mindestens 3 Features**, davon eines als "Foundation" (Login, Datenbankstruktur o.ä.), zwei als fachliche Kernfunktionen.

**Qualitätscheck:** Lest die Akzeptanzkriterien laut vor. Kann eine außenstehende Person danach testen, ob das Feature korrekt umgesetzt wurde? Wenn nicht — zu unscharf.

---

### Schritt 4: backlog.md anlegen

Erstellt `requirements/backlog.md`:

```markdown
# Product Backlog — [Projektname]

## Foundation

| # | Feature | Status | Beschreibung |
|---|---|---|---|
| 00 | Foundation | open | Projektstruktur, gemeinsame Typen, Basis-Setup |

## Kernfunktionen

| # | Feature | Status | Beschreibung |
|---|---|---|---|
| 01 | [Feature 1] | open | [Kurzbeschreibung] |
| 02 | [Feature 2] | open | [Kurzbeschreibung] |

## Implementierungsreihenfolge
00 → 01 → 02
```

**Verifikation Schritt 4:** Alle Features sind mit Status `open` eingetragen. Der kritische Pfad ist als Kette notiert.

---

### Schritt 5: CLAUDE.md schreiben

Erstellt `CLAUDE.md` im Projekt-Root:

```markdown
# CLAUDE.md

## Projektreferenz
- Anforderungen: requirements/REQUIREMENTS.md
- Aufgabenstand: requirements/backlog.md
- Architektur: architecture.md

## Arbeitsregeln
- Lies IMMER zuerst architecture.md, bevor du Code schreibst.
- Aktualisiere backlog.md wenn ein Feature abgeschlossen ist.
- Hake Checkboxen in implementation.md ab, wenn Schritte erledigt sind.
- Ändere NIEMALS [gemeinsame Datei, z.B. shared/types.ts] ohne Teamabsprache.

## Engineering-Präferenzen
- Lesbarkeit vor Cleverness: expliziter Code, sprechende Variablennamen
- Tests sind Pflicht, nicht optional
- Lieber kleine, klare Funktionen als große, abstrakte

## Was du NICHT tun sollst
- Keine globalen Abhängigkeiten installieren ohne Rückfrage
- Keine Datenbankstruktur ändern ohne Rückfrage
- Kein Code für Features, die nicht im Backlog stehen
```

**Verifikation Schritt 5:** Zeigt die `CLAUDE.md` einem Kommilitonen ohne Kontext. Versteht er, wie das Team arbeiten will?

---

### Schritt 6: architecture.md skizzieren

Ihr müsst keine vollständige Systemarchitektur kennen — aber das Minimum: Was sind die Bausteine, wie kommunizieren sie?

```markdown
# Architektur — [Projektname]

## Ziel
[Ein Satz]

## Stack
| Schicht | Technologie | Warum |
|---|---|---|
| Frontend | [z.B. HTML/JS, React, Lit] | [Begründung] |
| Backend | [z.B. Node.js, Python Flask] | [Begründung] |
| Daten | [z.B. JSON-Dateien, SQLite] | [Begründung] |

## Verzeichnisstruktur
[Grober Baum: backend/, frontend/, shared/, requirements/]

## API-Übersicht (Kernrouten)
GET  /api/[ressource]
POST /api/[ressource]
```

**Für Nicht-Techniker:** Ihr müsst den Stack nicht alleine entscheiden. Fragt Claude: *"Wir bauen eine einfache Verwaltungsanwendung für [Kontext]. Empfiehl uns einen minimalen, wartbaren Stack ohne Frameworks-Overhead."* — und diskutiert den Vorschlag als Team.

---

### Schritt 7: implementation.md für Feature 01 schreiben

Erstellt `requirements/01-[feature-name]/implementation.md`. Beginnt einfach:

```markdown
# Feature 01 — [Name]: Implementation Plan

**Ziel:** [Ein Satz aus der REQUIREMENTS.md]
**Abhängigkeiten:** 00-foundation abgeschlossen

### Task 1: [Beschreibung]

**Dateien:**
- Erstellen: [Pfad]
- Testen: [Pfad]

- [ ] Schritt 1: Test schreiben (schlägt fehl)
- [ ] Schritt 2: Test ausführen — FAIL bestätigen
- [ ] Schritt 3: Implementierung schreiben
- [ ] Schritt 4: Test ausführen — PASS bestätigen
- [ ] Schritt 5: Commit
  `git commit -m "feat: [kurze Beschreibung]"`
```

**Tipp:** Lasst Claude die `implementation.md` mitschreiben. Prompt: *"Lies die REQUIREMENTS.md und die architecture.md. Schreib mir eine implementation.md für Feature 01 nach dem Red-Green-Commit-Schema."*

---

### Schritt 8: Claude Code starten und erstes Feature implementieren

```bash
cd mein-projekt
claude
```

Claude Code liest beim Start automatisch `CLAUDE.md`. Dann:

```
> Lies requirements/01-[feature-name]/implementation.md und implementiere Task 1.
  Folge dem Red-Green-Commit-Schema. Hake Schritte in der Datei ab wenn sie erledigt sind.
```

Beobachtet, was der Agent tut:
- Liest er die richtigen Dateien?
- Schreibt er zuerst den Test?
- Hakt er Checkboxen ab?
- Ist die Commit-Message aussagekräftig?

Falls nicht: Passt die `CLAUDE.md` an und startet erneut.

---

### Schritt 9: Ergebnis reviewen — auch ohne Programmierkenntnisse

Öffnet VS Code nach der Implementierung. Was zu prüfen ist:

**Strukturell (jeder kann das):**
- Sind alle Checkboxen in der `implementation.md` abgehakt?
- Steht Feature 01 im `backlog.md` als `✅ done`?
- Gibt es Dateien, die nicht im Plan standen? (Falls ja: warum?)
- Sind Commit-Messages verständlich?

**Inhaltlich (soweit möglich):**
- Entsprechen die erstellten Dateien der Verzeichnisstruktur aus `architecture.md`?
- Gibt es eine Testdatei? Laufen die Tests? (`npm test` oder entsprechender Befehl)
- Hat der Agent eine Datei geändert, die als koordinationspflichtig markiert war?

**Wenn etwas nicht stimmt:** Sagt dem Agenten konkret, was falsch ist. *"Die Testdatei fehlt. Schreib bitte den Test zuerst, bevor du die Implementierung fortsetzt."* KI-Agenten reagieren auf Feedback — ihr müsst nicht wissen, wie man den Code schreibt, um zu erkennen, dass etwas fehlt.

---

### Schritt 10: Status dokumentieren und nächstes Feature starten

```bash
# Aktuellen Stand auf GitHub sichern
git push origin main

# Backlog prüfen: Was ist als nächstes dran?
cat requirements/backlog.md
```

Das Backlog zeigt euch, was offen ist. Wiederholt Schritte 7–9 für jedes weitere Feature.

**Ihr habt die Vertiefung abgeschlossen, wenn:**
- [ ] Mindestens ein Feature ist vollständig implementiert und getestet
- [ ] Das Backlog spiegelt den aktuellen Stand wider
- [ ] `CLAUDE.md`, `architecture.md` und `REQUIREMENTS.md` sind konsistent
- [ ] Kein API-Key oder Passwort ist im Repository
- [ ] Ihr könnt erklären, warum jede der fünf Kerndateien existiert

---

## 9. Kompetenzen, die Studierende erwerben

Diese Methoden vermitteln sowohl technische als auch betriebswirtschaftliche Kompetenzen:

**Anforderungsmanagement**  
User Stories schreiben, Akzeptanzkriterien definieren, Stakeholder-Perspektiven aufnehmen — Kernkompetenzen im Requirements Engineering und in der Produktentwicklung.

**Projektplanung unter Abhängigkeiten**  
Abhängigkeitsgraphen, kritischer Pfad, parallele Arbeitsstränge — das ist Netzplantechnik in der Praxis.

**KI-Agenten briefen und führen**  
`CLAUDE.md` schreiben, Ergebnisse reviewen, Korrekturen geben — das ist ein wichtiger Skill für alle, die in Zukunft mit KI-Systemen arbeiten.

**Qualitätssicherung in KI-Workflows**  
Wann kann man KI-Ausgaben vertrauen? Wo ist menschliches Urteil zwingend erforderlich? Was muss manuell geprüft werden?

**Dokumentationspflege als Systemeigenschaft**  
Dokumentation nicht als separaten Aufwand, sondern als integralen Bestandteil der Arbeit verstehen — die Checkboxen, das Backlog, die Commit-Messages entstehen automatisch.

---

## 10. Weiterführende Ressourcen

- [Claude Code Dokumentation](https://docs.claude.com) — Slash Commands, CLAUDE.md Format, Agent-Konfiguration
- [Claude Cowork](https://claude.ai) — Desktop-App (Windows und macOS) für KI-gestützte Arbeit ohne Terminal
- [Conventional Commits](https://www.conventionalcommits.org) — Standard für Commit-Messages
- [Git Worktrees](https://git-scm.com/docs/git-worktree) — Parallele Branch-Arbeit ohne Konflikte
- [Visual Studio Code](https://code.visualstudio.com) — kostenloser Editor für alle Plattformen

### ⚡ Optionale Vertiefung

**Superpowers** — [github.com/obra/superpowers](https://github.com/obra/superpowers)  
Plugin-Sammlung mit fertigen Arbeitsabläufen für KI-Agenten (Claude Code, Cursor, Codex, Gemini). Enthält u.a. `test-driven-development`, `subagent-driven-development`, `using-git-worktrees` und `brainstorming` als automatisch ausgelöste Skills. 176k Stars auf GitHub — de-facto-Standard für strukturierte Agentenentwicklung. Beim WeberHaus-Hackathon eingesetzt.

**Andrej Karpathy — LLM Wiki** — [gist.github.com/karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f#file-llm-wiki-md)  
Karpathy war KI-Forschungsdirektor bei Tesla und Mitgründer von OpenAI. Sein LLM Wiki ist ein kompaktes Nachschlagewerk darüber, *wie* Sprachmodelle intern funktionieren — Tokenisierung, Kontextfenster, Halluzinationen, Temperaturen, Grenzen. Keine Programmierkenntnisse nötig. Für Studierende, die verstehen wollen, warum KI-Agenten manchmal präzise sind und manchmal nicht — und wie man damit umgeht. Empfehlenswert vor dem ersten größeren Projektstart.

---

*Erstellt aus dem WeberHaus Hackathon-Projekt, Hochschule Offenburg, Mai 2026*  
*Gilbert Seilheimer — CONTIC / HS Offenburg*
