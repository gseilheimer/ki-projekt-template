# FEATURE.md — 00-foundation (App-Grundgerüst)

> **Hinweis:** Konkretes LB3-Feature (Stufe **A** der „Touristik Guide"-PWA).
> Basis für alle weiteren Features. LB3-Aufgaben: **A1–A5**.

**Priorität:** Kernanforderung (Fundament)
**Status:** offen
**Abhängigkeit:** — (Startpunkt der Kette)

---

## Ziel

Nutzende erhalten eine lauffähige, installier- und offline-fähige PWA-Hülle: navigierbare
Seiten, sichtbarer Verbindungsstatus und ein ServiceWorker, der die Kern-Assets cached.
Das ermöglicht, die fachlichen Features (`01`–`06`) auf einer stabilen Basis aufzubauen.

---

## Beschreibung

Die App ist eine statische Vanilla-PWA (Bulma-CSS, kein Build, kein npm). `app.js`
(`AppService`) steuert Seitenwechsel (Hash-Navigation), Modals sowie Header/Footer und
registriert den ServiceWorker. `serviceworker.js` füllt beim `install` einen Cache mit den
Kern-Assets, räumt beim `activate` alte Caches auf und beantwortet `fetch`-Anfragen
**cache-first**. Eine Statusanzeige spiegelt `navigator.onLine` und reagiert auf
`online`/`offline`-Events. Das Backend (Daten) kommt erst ab Feature `01` über n8n-Webhooks.

---

## Abnahmekriterien

Müssen erfüllt sein, bevor `00-foundation` als `✅ fertig` gilt:

- [ ] **A1** — `clearPanelWrapper()` entfernt alle Kindknoten von `#panelWrapper` (Vorbereitung der Attraktionsliste)
- [ ] **A2** — `checkOnlineStatus()` setzt `#status` auf `online`/`offline` und reagiert auf `online`/`offline`-Events
- [ ] **A3** — ServiceWorker `install`: öffnet `CACHE_NAME`, cached `URLS_TO_CACHE` (mit `PATH_ROOT`-Präfix)
- [ ] **A4** — ServiceWorker `activate`: löscht alle Caches außer `CACHE_NAME`, ruft `clients.claim()`
- [ ] **A5** — ServiceWorker `fetch`: liefert cache-first (Treffer aus Cache, sonst Netz; Netzfehler → leere 404 statt Absturz)
- [ ] `PATH_ROOT` in `serviceworker.js` auf den eigenen Server-/Deploy-Pfad angepasst
- [ ] App startet nach erstem Laden auch **offline** (DevTools → Offline)
- [ ] App ist installierbar (gültiges `manifest.json`, „Zum Startbildschirm hinzufügen")

---

## Abgrenzung — was dieses Feature nicht leistet

- Keine fachlichen Daten/Inhalte (Attraktionen kommen erst mit `01-attraktionen-laden`)
- Keine Standort-, Karten-, Foto- oder QR-Funktion (Features `03`–`06`)
- Keine Push-Benachrichtigungen (optional, Stufe D / `07-erweiterungen`)
- Kein eigenes Backend — Datenanbindung später ausschließlich über n8n-Webhooks

---

## Offene Fragen

- [ ] Soll `PATH_ROOT` pro Deploy-Umgebung dokumentiert werden (lokal vs. Server)?
- [ ] Welche Assets gehören minimal in `URLS_TO_CACHE`, damit die App offline „nutzbar" wirkt?
