<!-- Hinweis: Diese Anleitung richtet sich an Lehrende. Studierende brauchen sie nicht —
     sie erhalten am Ende nur einen Einladungslink. GitHub Classroom ist optional:
     Ohne Classroom funktioniert die Vorlage genauso über „Use this template". -->

# GitHub Classroom — Anleitung für Lehrende

GitHub Classroom automatisiert das Verteilen dieser Vorlage: Statt dass jedes Team
manuell „Use this template" klickt, erzeugt Classroom aus **einem Einladungslink**
automatisch pro Team (oder pro Person) ein eigenes Repository — vorausgefüllt mit
dem Inhalt dieser Vorlage.

> **Optional.** Ohne Classroom funktioniert die Vorlage genauso: Teams legen ihre
> Kopie über den grünen **„Use this template"**-Button selbst an (siehe
> [README.md](../README.md)). Classroom lohnt sich ab ca. 3–4 Teams oder wenn du
> Abgaben zentral überblicken willst.

---

## Voraussetzungen

- **GitHub-Konto mit Lehrenden-Status** — kostenlos über
  [GitHub Education / Teacher](https://education.github.com/teachers). Über das
  **GitHub Campus**-Programm der HSO ist dieser Zugang in der Regel bereits gedeckt;
  für HSLU / extern reicht die individuelle Teacher-Verifizierung.
- **Eine GitHub-Organisation** für den Kurs (z. B. `hso-ebusiness-ss26`).
  Classroom hängt immer an einer Organisation, nicht an einem Privatkonto.
- **Diese Vorlage als Template-Repository** (Einstellung `Template repository`
  ist bereits aktiviert — siehe README).

---

## Einrichtung in 6 Schritten

### 1. Organisation anlegen
[github.com/organizations/new](https://github.com/organizations/new) → kostenloser
Plan genügt. Name z. B. nach Kurs + Semester.

### 2. Classroom erstellen
[classroom.github.com](https://classroom.github.com) öffnen → **New classroom** →
die eben erstellte Organisation auswählen.

### 3. (Optional) Teams/Roster anlegen
Studierendenliste (Namen oder Matrikelnummern) als Roster hochladen. Damit ordnet
Classroom später Repos den richtigen Personen zu. Kann auch leer bleiben — dann
verknüpfen sich Studierende beim Annehmen selbst.

### 4. Assignment erstellen
**New assignment → Group assignment** (für Teamprojekte; „Individual" nur für
Einzelarbeiten).

- **Repository prefix:** z. B. `projekt` → ergibt `projekt-team-mueller` etc.
- **Template repository:** dieses Repo auswählen
  (`gseilheimer/ki-projekt-template`).
- **Sichtbarkeit:** `Private` empfohlen (Abgaben kursintern).
- **Team-Größe:** Maximum setzen (z. B. 4).

### 5. (Optional) Autograding
Unter **Add tests** lassen sich Befehle hinterlegen, die bei jedem Push laufen
(z. B. `npm test`). Passt zu Projekten mit **Node-/Test-Stack** (TDD) — die Abnahmekriterien
aus `FEATURE.md` werden so automatisch geprüft. Für den Einstieg nicht nötig.

> **Achtung — statische PWA:** Eine Vanilla-PWA (wie der „Touristik Guide") hat keinen
> Test-Runner; `npm test` greift dort nicht. Die Abnahme erfolgt per Browser-Verifikation
> (DevTools), siehe `docs/setup.md` → „Verifikation: PWA vs. Test-Stack". Autograding hier
> also weglassen oder nur auf reine Logik-Helfer (ohne Browser-APIs) beschränken.

### 6. Einladungslink verteilen
Classroom erzeugt einen **Invitation link**. Diesen Link teilst du im Kurs (Moodle).
Jedes Team:
1. öffnet den Link,
2. erstellt oder tritt einem Team bei,
3. bekommt automatisch ein eigenes Repo mit dem Vorlageninhalt.

---

## Gemischte Kohorten (HSO + HSLU + extern)

Classroom unterscheidet **nicht**, von welcher Hochschule jemand kommt — entscheidend
ist nur ein gültiges GitHub-Konto. Damit lassen sich interne und externe
Teilnehmende in **derselben** Classroom-Organisation führen:

| Gruppe | Zugang |
|---|---|
| HSO-Studierende | GitHub Campus (HSO) → Konto vorhanden |
| HSLU-Studierende | eigenes kostenloses GitHub-Konto |
| Externe Kursteilnehmende | eigenes kostenloses GitHub-Konto |

Für Lehrenden-Features (Classroom, Autograding-Minuten) zählt dein eigener
Teacher-Status — nicht der der Teilnehmenden.

---

## Ohne Classroom (Mindestvariante)

Wenn du Classroom (noch) nicht nutzen willst, genügt:

1. Link zu diesem Template-Repo im Kurs teilen.
2. Teams klicken **„Use this template" → „Create a new repository"**.
3. Fertig — der weitere Workflow ist identisch.

---

*Bei Fragen zur Einrichtung: Betreuungsteam über Moodle.*
