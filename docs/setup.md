# setup.md — Werkzeug-Einrichtung

> Wählt euer KI-Werkzeug und folgt der jeweiligen Anleitung.  
> Die Arbeitsweise (Markdown-Dateien, Backlog, testgetriebene Entwicklung) ist für alle Werkzeuge identisch —  
> nur die Einrichtung unterscheidet sich.

---

## Werkzeugübersicht

| Werkzeug | Art | Zugang | Empfohlen für |
|---|---|---|---|
| **Claude Code** | Terminal-Agent | claude.ai/code | Erfahrene mit Programmierkenntnissen |
| **Cowork** | Desktop-Anwendung | claude.ai/download | Einsteiger ohne Terminalerfahrung |
| **Cursor** | KI-Editor | cursor.com | VS Code-Nutzende mit integriertem Agenten |
| **GitHub Copilot** | VS Code-Plugin | github.com/copilot | Wer bereits das GitHub Student Pack hat |
| **Anti Gravity** | VS Code-basiert | HS-Offenburg IT (Lizenz) | Studierende mit Hochschullizenz |
| **Codex** | Terminal | platform.openai.com | Experimentierfreudige |

---

<a name="claude-code"></a>
## Claude Code (Terminal)

**Voraussetzung:** Node.js installiert (nodejs.org → LTS-Version)

```bash
# Einmalige Installation:
npm install -g @anthropic-ai/claude-code

# In das geklonte Repo-Verzeichnis wechseln:
cd pfad/zum/repo

# Claude Code starten:
claude
# → CLAUDE.md wird automatisch eingelesen
```

**Erster Prompt zum Einstieg:**
```
Lies CLAUDE.md, ARCHITECTURE.md und requirements/BACKLOG.md.
Fasse zusammen: Was ist das Projekt und was ist der nächste offene Task?
```

---

<a name="cowork"></a>
## Cowork (Desktop-Anwendung)

**Voraussetzung:** Cowork-App installiert (Link im Moodle-Kurs)

```
1. Cowork öffnen
2. „Ordner auswählen" → geklontes Repo-Verzeichnis auswählen
3. CLAUDE.md wird automatisch eingelesen
4. Erster Prompt: „Lies CLAUDE.md und erkläre mir das Projekt."
```

Cowork ist derselbe Agent wie Claude Code — vollständig über Chat bedienbar, ohne Terminal.

---

<a name="cursor"></a>
## Cursor

**Voraussetzung:** Cursor installiert (cursor.com — kostenloser Einstieg möglich)

```
1. Cursor öffnen
2. Datei → Ordner öffnen → geklontes Repo-Verzeichnis
3. .cursorrules wird automatisch eingelesen
4. Chat öffnen: Cmd+K (macOS) oder Strg+K (Windows)
5. Erster Prompt: „Lies .cursorrules und erkläre mir das Projekt."
```

**Hinweis:** `.cursorrules` und `CLAUDE.md` immer synchron halten — bei Änderungen beide committen.

---

<a name="copilot"></a>
## GitHub Copilot

**Voraussetzung:** GitHub Student Pack (students.github.com) oder Copilot-Abonnement

```
1. VS Code installieren (code.visualstudio.com)
2. Erweiterung „GitHub Copilot" installieren
3. Mit GitHub-Konto anmelden
4. Repo-Verzeichnis in VS Code öffnen
5. .github/copilot-instructions.md wird automatisch eingelesen
6. Copilot-Chat öffnen (Seitenleiste) → Erster Prompt:
   „Lies die Projektdokumentation und erkläre mir den Aufbau."
```

---

<a name="antigravity"></a>
## Anti Gravity (HS-Offenburg-Lizenz)

**Voraussetzung:** Hochschullizenz über den IT-Servicedesk der HS Offenburg aktivieren

```
1. Anti Gravity installieren (Anleitung über IT-Servicedesk)
2. Repo-Verzeichnis öffnen
3. Anti Gravity liest .github/copilot-instructions.md als Kontext
   (VS Code-basiert, unterstützt die Copilot-Konvention)
4. Falls Anti Gravity eine andere Kontextdatei erwartet:
   → Inhalt von CLAUDE.md in die entsprechende Datei kopieren
   → IT-Servicedesk oder Werkzeug-Dokumentation konsultieren
```

---

<a name="codex"></a>
## Codex (OpenAI)

**Voraussetzung:** OpenAI-Konto + API-Schlüssel (platform.openai.com)

```bash
# Einmalige Installation:
npm install -g @openai/codex

# API-Schlüssel setzen:
export OPENAI_API_KEY="euer-schluessel"

# Mit CLAUDE.md als Systemauftrag starten:
codex --system-prompt "$(cat CLAUDE.md)" "Was ist der nächste offene Task im Backlog?"
```

**Hinweis:** Codex liest keine Dateien automatisch. `CLAUDE.md`-Inhalt als `--system-prompt` zu übergeben ist die pragmatischste Lösung.

---

## App lokal starten & prüfen — statische PWA (z. B. Touristik Guide)

> Gilt für eine **statische Vanilla-PWA** (HTML + CSS + Vanilla-JS, kein Build, kein npm).
> Für Projekte mit echtem Node-Stack siehe „Verifikation: PWA vs. Test-Stack" unten.

Eine PWA (ServiceWorker, Cache, Geolocation, Kamera) läuft nur im **„secure context"** —
`http://localhost` zählt als sicher. Die Datei direkt per Doppelklick (`file://…/index.html`)
zu öffnen **funktioniert nicht** (der ServiceWorker registriert sich nicht). Daher immer über
einen lokalen Server starten. Identisch unter Windows und macOS.

**Empfohlen (VS Code, kein Node nötig): Erweiterung „Live Server"**
```
1. VS Code: Erweiterung „Live Server" (Ritwick Dey) installieren
2. Repo-Ordner öffnen, index.html im Editor öffnen
3. Unten rechts „Go Live" klicken → öffnet http://localhost:5500
```

**Alternativen:**
```bash
python3 -m http.server 5500      # macOS eingebaut; Windows: py -m http.server 5500
npx serve                        # falls Node vorhanden
```

**Prüfen (Browser-DevTools, Chrome/Edge — auf beiden Betriebssystemen gleich):**
- *Application* → *Service Workers*: registriert/aktiv? Bei Änderungen *Update*/*Unregister*.
- *Application* → *Cache Storage*: enthält der Cache die Kern-Assets?
- *Network* → Schalter *Offline*: lädt die App weiterhin (cache-first)?
- *Console*: keine offenen `console.log("ToDo: …")`-Stubs, keine Fehler.

Randnotizen: Google Maps braucht einen API-Key; Kamera/Geolocation/QR brauchen eine echte
Kamera + Browser-Freigabe — auf `localhost` aber **ohne** HTTPS-Zertifikat nutzbar.

### Verifikation: PWA vs. Test-Stack

Die generische Vorlage geht von **testgetriebener Entwicklung** (`npm test`, z. B. vitest) aus
— passend für Projekte mit Node-/Test-Stack. Eine **statische Vanilla-PWA** hat keinen
Test-Runner; dort ist die **Browser-Verifikation oben der „grüne Test"**. Grund: der Code
nutzt Browser-APIs (ServiceWorker, Cache, Geolocation, MediaDevices) und das globale
IIFE-Muster — beides ist in Node/jsdom nicht ohne Umbau + Mocking testbar, der ServiceWorker
gar nicht. Wählt also nach Projekt:

| Projektart | „Fertig"-Nachweis |
|---|---|
| Statische PWA (vanilla) | Browser-DevTools (Application/Cache/Offline), Abnahmekriterien durchgehen |
| App mit Node-/Test-Stack | `npm test` (TDD: Test rot → Umsetzung → Test grün) |

*Optional (Kür):* Reine Logik **ohne** Browser-Abhängigkeit (z. B. eine Distanz- oder
Validierungsfunktion) lässt sich auch in einer PWA mit vitest unit-testen — kein Muss.

---

## Diagramme (Mermaid)

Alle Diagramme werden als **Mermaid** im Markdown notiert — GitHub und VS Code rendern das
ohne Zusatzsoftware, und Änderungen erscheinen als lesbarer Diff im Pull Request. Der
KI-Agent kann Diagramme **direkt erzeugen**, z. B.:

> *„Erzeuge ein Mermaid-UseCase-Diagramm nach `docs/diagramme.md` für die Use Cases in
> `requirements/REQUIREMENTS.md`."*

Konventionen + fertige Vorlagen (UCD, Klassen-, Sequenz-, Komponentendiagramm …):
[`docs/diagramme.md`](diagramme.md). Wo welches Diagramm hingehört — UCD → `USERSTORY.md`,
Klassen-/Komponentendiagramm → `ARCHITECTURE.md`, Sequenzdiagramm → `IMPLEMENTATION.md`
(in der Beispiel-Feature-Vorlage sind die Gerüste bereits eingebettet).

---

## Häufige Probleme

**„Der Agent kennt mein Projekt nicht"**  
→ Prüfen: Liegt `CLAUDE.md` / `.cursorrules` / `copilot-instructions.md` im Stammverzeichnis des Repos?  
→ Prüfen: Habt ihr den richtigen Ordner geöffnet (nicht einen Unterordner)?

**„Der Agent verhält sich für alle im Team unterschiedlich"**  
→ `CLAUDE.md`, `.cursorrules` und `.github/copilot-instructions.md` committen und pushen  
→ Alle Teammitglieder: `git pull` ausführen  
→ Details: `ROADMAP.md` → „KI-Kontext synchronisieren"

**„Der Agent ändert Dateien, die er nicht ändern soll"**  
→ In `CLAUDE.md` unter „Teamregeln" explizit eintragen, welche Dateien tabu sind

**„Zwei Teammitglieder erhalten bei gleicher Frage unterschiedliche Antworten"**  
→ Sind alle drei Kontextdateien synchron und eingecheckt?  
→ Arbeiten alle aus demselben Branch (nicht veralteten Ständen)?
