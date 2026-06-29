<!-- Hinweis: Diese Datei legt die Diagramm-Konventionen für das Projekt fest. Alle
     Diagramme werden in Mermaid notiert, weil GitHub, VS Code und die meisten
     Markdown-Tools Mermaid OHNE Zusatzsoftware rendern. So bleibt das Projekt
     werkzeugunabhängig, und Diagramm-Änderungen erscheinen als lesbarer Diff im
     Pull Request (leichtere Reviews/Korrektur). Die Beispiele nutzen die App
     „Touristik Guide" als roten Faden. -->

# Diagramm-Konventionen (Mermaid)

Alle Modelle in diesem Projekt werden als **Mermaid** im Markdown notiert. Vorteile:

- **Rendert nativ** auf GitHub, in VS Code (Extension „Markdown Preview Mermaid Support")
  und in den meisten Markdown-Tools — keine zusätzliche Toolchain.
- **Klartext im Repo** → Diagramm-Änderungen sind im Pull Request als Diff sichtbar.
- **Eine Sprache für alles** → einheitlich zu lesen, zu pflegen und zu korrigieren.

> **Tipp:** Den KI-Agenten kann man Diagramme direkt erzeugen lassen, z. B.:
> *„Erzeuge ein Mermaid-UseCase-Diagramm nach der Konvention aus `docs/diagramme.md`
> für die Use Cases in `requirements/REQUIREMENTS.md`."*

Wo welches Diagramm hingehört:

| Diagramm | Mermaid-Typ | Gehört in |
|---|---|---|
| UseCase-Diagramm (UCD) | `flowchart` (Konvention unten) | `USERSTORY.md` |
| Klassendiagramm | `classDiagram` | `ARCHITECTURE.md` |
| Objektdiagramm | `flowchart` (Konvention unten) | je Feature, wo hilfreich |
| Aktivitätsdiagramm | `flowchart` | `USERSTORY.md` / `FEATURE.md` |
| Sequenzdiagramm | `sequenceDiagram` | `IMPLEMENTATION.md` |
| Komponenten-/Architektur | `flowchart` | `ARCHITECTURE.md` |

---

## 1. UseCase-Diagramm (UCD)

<!-- Hinweis: Mermaid hat KEINEN nativen UCD-Typ. Wir bilden ihn als flowchart nach.
     Die Konvention unten ersetzt die UML-Notation 1:1 in der Aussage. -->

**Konvention:**
- **Akteur:** Rechteck mit 👤-Präfix — `akteur["👤 Name"]`
- **Use Case:** Stadion-Form (abgerundet) — `uc(["Use Case"])`
- **Systemgrenze:** `subgraph` mit dem Systemnamen
- **Assoziation** (Akteur ↔ Use Case): durchgezogene Linie `---`
- **«include»:** gestrichelter Pfeil mit Label `-. «include» .->`
- **«extend»:** gestrichelter Pfeil mit Label `-. «extend» .->`

```mermaid
flowchart LR
    tourist["👤 Tourist"]

    subgraph TG["Touristik Guide"]
        uc1(["Sehenswürdigkeit finden"])
        uc2(["Infos ansehen"])
        uc3(["Karte anzeigen"])
        uc4(["Foto aufnehmen"])
        uc5(["QR-Code scannen"])
        uc6(["Bewertung abgeben"])
        uc7(["Position bestimmen"])
    end

    tourist --- uc1
    tourist --- uc2
    tourist --- uc3
    tourist --- uc4
    tourist --- uc5
    tourist --- uc6

    uc1 -. «include» .-> uc7
    uc3 -. «include» .-> uc7
    uc2 -. «extend» .-> uc6
```

> Lesehilfe: „Sehenswürdigkeit finden" und „Karte anzeigen" brauchen immer die
> Positionsbestimmung (`«include»`). „Infos ansehen" *kann* um „Bewertung abgeben"
> erweitert werden (`«extend»`), muss aber nicht.

---

## 2. Klassendiagramm

<!-- Hinweis: classDiagram ist nativ. Multiplizitäten, Vererbung und Assoziationen
     werden direkt unterstützt. -->

```mermaid
classDiagram
    class Attraktion {
        +string id
        +string titel
        +string beschreibung
        +float lat
        +float lon
    }
    class Bewertung {
        +string name
        +string kommentar
        +date datum
    }
    class Position {
        +float lat
        +float lon
        +float distanzKm
    }

    Attraktion "1" --> "0..*" Bewertung : erhält
    Attraktion "1" --> "1" Position : liegt bei
```

**Vererbung** (Verallgemeinerung/Spezialisierung) wie im LB3-Beispiel:

```mermaid
classDiagram
    class Flug {
        +string flugNr
        +time abflug
        +time ankunft
    }
    class Linienflug {
        +string wochentage
    }
    class Charterflug {
        +date datum
    }
    Flug <|-- Linienflug
    Flug <|-- Charterflug
```

---

## 3. Objektdiagramm

<!-- Hinweis: Mermaid hat keinen Objektdiagramm-Typ. Konvention: flowchart-Knoten,
     deren Beschriftung "objekt : Klasse" plus Attribut=Wert enthält. -->

**Konvention:** Knotenbeschriftung `objekt : Klasse` (unterstrichen-Ersatz: Doppelpunkt),
darunter `attribut = wert`. Verknüpfungen als beschriftete Linien.

```mermaid
flowchart TB
    lx400["LX400 : Direktflug<br/>flugNr = LX400<br/>abflug = 9:30<br/>ankunft = 16:20"]
    a320["A320 : Flugzeugtyp<br/>name = Airbus A320<br/>economy = 120"]
    fra["FRA : Flughafen<br/>stadt = Frankfurt"]

    lx400 ---|wird geflogen mit| a320
    lx400 ---|von| fra
```

---

## 4. Aktivitätsdiagramm

<!-- Hinweis: Als flowchart. Start/Ende rund, Entscheidungen als Raute. -->

```mermaid
flowchart TD
    start((Start)) --> a[App öffnen]
    a --> b{Online?}
    b -- ja --> c[Attraktionen aus n8n laden]
    b -- nein --> d[Attraktionen aus Cache laden]
    c --> e[Liste anzeigen]
    d --> e
    e --> ende((Ende))
```

---

## 5. Sequenzdiagramm

<!-- Hinweis: sequenceDiagram ist nativ. Ideal, um Funktionsabläufe in
     IMPLEMENTATION.md zu dokumentieren (LB3 nutzt mehrere davon). -->

Beispiel: Laden der Attraktionen (`btnToAttraction` → `getAttractions`):

```mermaid
sequenceDiagram
    actor Tourist
    participant PWA as app.js / n8n.js
    participant n8n as n8n-Webhook

    Tourist->>PWA: Klick „Attraktionen"
    PWA->>n8n: GET getAttractions
    n8n-->>PWA: JSON (dbResponse)
    loop je Attraktion
        PWA->>PWA: addPanel(titel, index)
    end
    PWA-->>Tourist: Liste anzeigen
```

---

## 6. Komponenten-/Architekturdiagramm

<!-- Hinweis: Als flowchart. Gehört in ARCHITECTURE.md, zeigt Bausteine + Datenfluss. -->

```mermaid
flowchart LR
    subgraph Client["Endgerät (Browser)"]
        pwa[PWA: HTML + Bulma + JS]
        sw[ServiceWorker + Cache]
    end
    subgraph Backend
        n8n[n8n Workflows]
        db[(Data Tables)]
    end
    pwa <--> sw
    pwa <-->|fetch| n8n
    n8n <--> db
    pwa -->|Maps API| gmaps[Google Maps]
```
