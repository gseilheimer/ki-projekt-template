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
