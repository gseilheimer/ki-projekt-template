# quickstart.md — Tool-Setup

> Wählt euren KI-Agenten und folgt der entsprechenden Anleitung.  
> Die Methodik (Markdown-Dateien, Backlog, TDD) ist für alle Tools identisch —  
> nur der Einrichtungsschritt unterscheidet sich.

---

## Welches Tool nutze ich?

| Tool | Typ | Zugang | Empfohlen für |
|---|---|---|---|
| **Claude Code** | Terminal-Agent | claude.ai/code | Programmiererfahrene |
| **Cowork** | Desktop-App | claude.ai/download | Einsteiger ohne Terminal-Erfahrung |
| **Cursor** | KI-Editor | cursor.com | VS Code-Nutzer die tief integrierten KI-Agenten wollen |
| **GitHub Copilot** | VS Code Plugin | github.com/copilot | Wer bereits GitHub Student Pack hat |
| **Anti Gravity** | VS Code-basiert | HS-Offenburg IT (Lizenz) | HS-Studierende mit Hochschullizenz |
| **Codex CLI** | Terminal | platform.openai.com | Für Experimentierfreudige |

---

<a name="claude-code"></a>
## Claude Code (Terminal)

**Voraussetzung:** Node.js installiert (nodejs.org → LTS-Version)

```bash
# 1. Installation (einmalig):
npm install -g @anthropic-ai/claude-code

# 2. In euer Projekt-Verzeichnis wechseln:
cd pfad/zum/geklonten/repo

# 3. Claude Code starten:
claude

# Claude liest automatisch CLAUDE.md beim Start.
# Erste Frage an Claude: "Lies CLAUDE.md und erkläre mir das Projekt."
```

**Was passiert:** Claude Code liest `CLAUDE.md` automatisch und kennt damit euer Projekt, die Regeln und die Aufgabenstruktur. Ihr könnt direkt auf Englisch oder Deutsch mit dem Agenten sprechen.

**Erster Prompt zum Starten:**
```
Lies CLAUDE.md, architecture.md und requirements/backlog.md.
Fasse zusammen: Was ist das Projekt, und was ist der nächste offene Task?
```

---

<a name="cowork"></a>
## Cowork (Desktop-App)

**Voraussetzung:** Cowork-App installiert (über Moodle-Kurs-Link)

```
1. Cowork öffnen
2. "Ordner auswählen" → euer geklontes Repo-Verzeichnis auswählen
3. Cowork liest CLAUDE.md automatisch
4. Erste Nachricht: "Lies CLAUDE.md und erkläre mir das Projekt."
```

**Was passiert:** Cowork ist derselbe Agent wie Claude Code, aber ohne Terminal — vollständig über Chat bedienbar. Ideal für Teamarbeit ohne Programmierhintergrund.

---

<a name="cursor"></a>
## Cursor

**Voraussetzung:** Cursor installiert (cursor.com → Free-Plan reicht)

```
1. Cursor öffnen
2. File → Open Folder → euer geklontes Repo-Verzeichnis
3. Cursor liest .cursorrules automatisch beim Öffnen des Ordners
4. Cmd+K (macOS) oder Ctrl+K (Windows) → Chat öffnen
5. Erste Nachricht: "Lies .cursorrules und erkläre mir das Projekt."
```

**Was passiert:** Cursor liest `.cursorrules` (identischer Inhalt wie `CLAUDE.md`) und hat damit den vollständigen Projektkontext. Der Agent kann direkt Code schreiben, Dateien öffnen und Terminals ausführen.

**Hinweis:** `.cursorrules` und `CLAUDE.md` immer synchron halten!

---

<a name="copilot"></a>
## GitHub Copilot

**Voraussetzung:** GitHub Student Pack (students.github.com) oder Copilot-Abo

```
1. VS Code installieren (code.visualstudio.com)
2. Extension "GitHub Copilot" in VS Code installieren
3. Mit GitHub-Konto anmelden
4. Euer Repo-Verzeichnis in VS Code öffnen
5. Copilot liest .github/copilot-instructions.md automatisch
6. Copilot Chat öffnen (Sidebar) → Erste Nachricht:
   "Lies die Projektdokumentation und erkläre mir den Aufbau."
```

---

<a name="antigravity"></a>
## Anti Gravity (HS-Offenburg-Lizenz)

**Voraussetzung:** Hochschullizenz über IT-Servicedesk der HS Offenburg aktivieren

```
1. Anti Gravity installieren (Anleitung über IT-Servicedesk)
2. Euer Repo-Verzeichnis öffnen
3. Anti Gravity nutzt .github/copilot-instructions.md als Kontext
   (VS Code-basiert, unterstützt Copilot-Konvention)
4. Falls Anti Gravity eine andere Kontext-Datei erwartet:
   → Inhalt von CLAUDE.md in die entsprechende Datei kopieren
   → IT-Servicedesk oder Tool-Dokumentation fragen
```

**Hinweis:** Anti Gravity wird über die HS-Offenburg bereitgestellt. Bei Fragen zum Setup: IT-Servicedesk der Hochschule.

---

<a name="codex"></a>
## Codex CLI (OpenAI)

**Voraussetzung:** OpenAI-Konto + API-Key (platform.openai.com)

```bash
# 1. Installation:
npm install -g @openai/codex

# 2. API-Key setzen:
export OPENAI_API_KEY="euer-api-key"

# 3. Mit CLAUDE.md als System-Prompt starten:
codex --system-prompt "$(cat CLAUDE.md)" "Was ist der nächste offene Task im Backlog?"

# Oder: CLAUDE.md-Inhalt manuell in den ersten Prompt einfügen
```

**Hinweis:** Codex hat keine native Datei-Einbindung wie Claude Code. Den Inhalt von `CLAUDE.md` als `--system-prompt` übergeben ist die pragmatischste Lösung. Bei längerer Arbeit: Relevante Dateien manuell in den Prompt einfügen.

---

## Häufige Probleme

**"Der Agent kennt mein Projekt nicht"**  
→ Prüfen: Ist `CLAUDE.md` / `.cursorrules` / `copilot-instructions.md` im Root des Repos?  
→ Prüfen: Habt ihr den richtigen Ordner geöffnet (nicht einen Unterordner)?

**"Der Agent macht Dinge, die nicht zu unserem Projekt passen"**  
→ `CLAUDE.md` anpassen — der Agent folgt diesen Regeln. Je konkreter, desto besser.

**"Zwei Teammitglieder bekommen unterschiedliche Ergebnisse"**  
→ Prüfen: Sind `CLAUDE.md`, `.cursorrules` und `copilot-instructions.md` synchron?  
→ Prüfen: Lesen alle aus demselben Branch (nicht veralteten Ständen)?

**"Der Agent ändert Dateien, die er nicht ändern soll"**  
→ In `CLAUDE.md` unter "Arbeitsregeln" explizit eintragen, welche Dateien tabu sind.
