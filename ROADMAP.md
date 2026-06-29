# ROADMAP.md — Phasen, Abhängigkeiten & Git-Workflow

> Diese Datei legt fest: Wer arbeitet wann an was?  
> Enthält den Abhängigkeitsgraph, den kritischen Pfad und die Branch-Strategie.  
> **Änderungen nur nach Absprache im gesamten Team.**

---

## Abhängigkeitsgraph

```
[HIER EINTRAGEN: Welche Features hängen voneinander ab?]

Beispiel:
✅ 00-foundation (Server, Datenbankzugriff, Frontend-Grundstruktur)
    ├── 01-feature-a  (kann nach Foundation starten)
    │       └── 03-feature-c  (braucht Feature A)
    └── 02-feature-b  (kann parallel zu Feature A laufen)
            └── 04-feature-d  (braucht Feature B)
```

**Kritischer Pfad:** `00 → 01 → 03` (minimale, demo-fähige Kette)

---

## Aufgabenverteilung

| Feature | Verantwortlich | Branch | Abhängigkeit |
|---|---|---|---|
| 00-foundation | [Name] | `feature/00-foundation` | — |
| 01-[name] | [Name] | `feature/01-[name]` | 00 |
| 02-[name] | [Name] | `feature/02-[name]` | 00 |
| 03-[name] | [Name] | `feature/03-[name]` | 01 |

---

## Git-Workflow

### Branch anlegen

```bash
# Immer vom aktuellen Hauptbranch starten:
git checkout main
git pull origin main
git checkout -b feature/01-mein-feature
```

### Commit-Schema

```bash
# Neue Funktion:
git commit -m "feat(bereich): was wurde hinzugefügt"

# Fehlerbehebung:
git commit -m "fix(bereich): was wurde behoben"

# Dokumentation:
git commit -m "docs(bereich): was wurde aktualisiert"

# Tests:
git commit -m "test(bereich): was wurde getestet"
```

### KI-Kontext synchronisieren (Teampflicht)

`CLAUDE.md`, `.cursorrules` und `.github/copilot-instructions.md` sind **Projektdateien** — keine persönliche Editor-Konfiguration. Sie müssen immer im Repository eingecheckt sein.

```bash
# Nach jeder Änderung an CLAUDE.md:
git add CLAUDE.md .cursorrules .github/copilot-instructions.md
git commit -m "docs(context): KI-Kontext aktualisiert"
git push origin main   # oder der aktuelle Branch

# Alle anderen Teammitglieder danach:
git pull origin main
```

**Warum?** Jedes Teammitglied nutzt möglicherweise ein anderes KI-Werkzeug (Claude Code, Cursor, Copilot, Anti Gravity). Wenn der KI-Kontext nur lokal liegt, hat jeder einen anderen Agenten — mit unterschiedlichen Regeln, unterschiedlichem Projektwissen, inkonsistenten Ergebnissen. Der eingecheckte Kontext ist das geteilte Gedächtnis des Projekts.

### Feature abschließen

```bash
# Vor dem Merge: vom Hauptbranch rebasen (Konflikte früh lösen)
git fetch origin
git rebase origin/main

# Pull Request auf GitHub anlegen:
# → Titel: "feat: [Feature-Name]"
# → Beschreibung: Was wurde gebaut? Was wurde getestet?
# → Prüfer: Teamkollegen zuweisen
```

### Merge-Regeln (Teamvereinbarung)

- Kein direktes Pushen auf `main`
- Jeder Pull Request braucht mindestens eine Freigabe (Review / Approval)
- Tests müssen lokal laufen, bevor der Pull Request erstellt wird
- Gemeinsam genutzte Dateien (Datenmodell, Typen) nur nach Absprache ändern

---

## Phasenplan

### Phase 0 — Vorbereitung (vor dem ersten Code)

- [ ] Team zusammenstellen, Aufgaben verteilen
- [ ] `REQUIREMENTS.md` gemeinsam schreiben
- [ ] Abhängigkeitsgraph oben ausfüllen
- [ ] `BACKLOG.md` anlegen und priorisieren
- [ ] `CLAUDE.md` anpassen (Projektname, Team, Regeln) — und committen
- [ ] `ARCHITECTURE.md` ausfüllen (Technologieentscheidungen)
- [ ] Feature-Branches anlegen

### Phase 1 — Parallele Umsetzung

- [ ] Jedes Teammitglied arbeitet im eigenen Feature-Branch
- [ ] Basis: `IMPLEMENTATION.md` des jeweiligen Features Schritt für Schritt abarbeiten
- [ ] Täglicher kurzer Austausch im Team (10 Min): Was ist fertig? Was blockiert?

### Phase 2 — Integration & Demo

- [ ] Alle Feature-Branches in `main` gemergt
- [ ] Integrationstests: Funktioniert alles zusammen?
- [ ] `BACKLOG.md` zeigt kritischen Pfad als `✅ fertig`
- [ ] Demo vorbereiten
