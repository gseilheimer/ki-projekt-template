# stufen/ — PWA-Code der „Touristik Guide"-Übung (LB3)

Lauffähiger Vanilla-PWA-Code in **drei Stufen** (`A` → `B` → `C`). Jede Stufe enthält die
Lösung der vorigen Stufe und führt neue Aufgaben als Marker ein (`// ToDo <Label>` +
`//------`-Rahmen + `console.log("ToDo: …")`-Stub). So baut sich die App schrittweise auf.

> Die zugehörigen **Musterlösungen** (`*_ML`) liegen **nicht** hier, sondern im privaten
> Repo `ki-projekt-musterloesung` (der `.gitignore`-Guard hält `*_ML` aus diesem Repo).

## Die Stufen

| Stufe | Bereits gelöst | Offene Aufgaben (Marker) | Passt zu `requirements/` |
|---|---|---|---|
| `A` | — (reiner Startpunkt) | **A1–A5** (Grundgerüst, ServiceWorker) | `00-foundation` |
| `B` | 00-foundation | **B2–B5** (n8n: CONFIG, addPanel, getAttractions, sendDataToN8N) | `01-attraktionen-laden`, `02-bewertung-senden` |
| `C` | 00 + 01 + 02 | **C1–C10** (Standort, Karte, Foto, QR) | `03-standort` … `06-qr-scan` |

Die fachliche Beschreibung, Abnahmekriterien und Schritt-für-Schritt-Anleitung je Aufgabe
stehen in `requirements/NN-*/` (USERSTORY / FEATURE / IMPLEMENTATION). Das maschinenlesbare
Stufen-Manifest (welche Datei/Funktion/Marker) liegt in `ki-projekt-musterloesung/STAGES.md`.

## Aufbau je Stufe

Statische Vanilla-PWA — **kein Build, kein npm**:

```
<Stufe>/
├── index.html          Bulma-UI, Seiten (Start, Liste, Detail, Karte, Foto, QR)
├── manifest.json       PWA-Manifest (Add to Homescreen)
├── serviceworker.js    install/activate/fetch (cache-first)
├── assets/
│   ├── css/bulma.css
│   └── js/             app.js, n8n.js, position.js, map.js, camera.js, qr.js
└── media/              Bilder/Icons
```

## Lokal starten

Über einen Server auf `http://localhost` (nicht per Doppelklick / `file://`, sonst lädt der
ServiceWorker nicht) — am einfachsten VS Code **„Live Server"**. Details + DevTools-Prüfung:
[`docs/setup.md`](../docs/setup.md) → „App lokal starten & prüfen".

## Vor dem Loslegen anpassen

- **`serviceworker.js` → `PATH_ROOT`** auf den eigenen Deploy-/Server-Pfad setzen (Marker `// TODO: Pfad anpassen`).
- **`assets/js/n8n.js` → `CONFIG`** (Aufgabe **B2**) auf den eigenen n8n-Workspace anpassen.
- **`04-karte`** braucht einen **Google-Maps-API-Key**: in `C/index.html` steht der Platzhalter
  `DEIN_GOOGLE_MAPS_API_KEY` — eigenen Key einsetzen, aber **nicht committen** (am besten pro
  Deploy setzen und per HTTP-Referrer einschränken). **`06-qr-scan`** braucht die Bibliothek **jsQR**.

> **Hinweis:** Für ein *eigenes* Projekt (nicht die LB3-Übung) ersetzt ihr `stufen/` durch
> euren eigenen Code — die Arbeitsweise (requirements/, Marker, Browser-Verifikation) bleibt gleich.
