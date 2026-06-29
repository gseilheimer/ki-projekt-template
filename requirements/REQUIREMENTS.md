# REQUIREMENTS.md — Anforderungen

> **Lastenheft / SRS (Software Requirements Specification)**
>
> Ein Lastenheft beschreibt aus Auftraggeberperspektive, *was* ein System leisten soll —  
> ohne festzulegen, *wie* es umgesetzt wird. Das englische Äquivalent ist die  
> **SRS (Software Requirements Specification)**, standardisiert in IEEE 830.  
> In der Praxis werden beide Begriffe oft synonym verwendet.  
> Diese Datei erfüllt diese Funktion für euer Projekt.
>
> **Änderungen nur gemeinsam als Team.**

---

## Projektbeschreibung

**Projektname:** [HIER EINTRAGEN]  
**Auftraggeber / Kontext:** [z.B. Hochschule Offenburg, Kurs E-Business SoSe 2026]  
**Zielgruppe:** [Wer nutzt die Anwendung? z.B. Studierende, Verwaltungsmitarbeitende]

### Kernnutzen (Zusammenfassung)

[2–4 Sätze: Was ist der Kernnutzen der Anwendung? Welches Problem löst sie?]

---

## Nutzerrollen

| Rolle | Beschreibung |
|---|---|
| [z.B. Gast] | [Was kann diese Rolle? Was nicht?] |
| [z.B. Angemeldete Person] | [Was kann diese Rolle zusätzlich?] |
| [z.B. Verwaltung] | [Zugang zur Verwaltungsansicht] |

---

## Features

### Feature 01: [Name]

**Priorität:** Kernanforderung / Erweiterung  
**Abhängigkeit:** — (oder: Feature 00)

**Ziel:** [Wer profitiert, und warum?]

**Nutzeranforderungen (User Stories):**

> Als [Rolle] möchte ich [Aktion], damit [Nutzen].

- Als [Rolle] möchte ich [Aktion], damit [Nutzen].
- Als [Rolle] möchte ich [Aktion], damit [Nutzen].

**Abnahmekriterien:**

- [ ] [Konkrete, überprüfbare Aussage — nicht „soll gut sein", sondern was genau passiert]
- [ ] [z.B. „Die Suche liefert Treffer auch bei Teilbegriffen"]
- [ ] [z.B. „Bei keinem Treffer erscheint eine klare Rückmeldung — kein stilles Scheitern"]

---

### Feature 02: [Name]

**Priorität:** Kernanforderung / Erweiterung  
**Abhängigkeit:** Feature 01

**Ziel:** [Wer profitiert, und warum?]

**Nutzeranforderungen:**

- Als [Rolle] möchte ich [Aktion], damit [Nutzen].

**Abnahmekriterien:**

- [ ] [Abnahmekriterium]
- [ ] [Abnahmekriterium]

---

### Feature 03: [Name]

**Priorität:** Erweiterung  
**Abhängigkeit:** Feature 01, Feature 02

**Ziel:** [Wer profitiert, und warum?]

**Nutzeranforderungen:**

- Als [Rolle] möchte ich [Aktion], damit [Nutzen].

**Abnahmekriterien:**

- [ ] [Abnahmekriterium]

---

## Nichtfunktionale Anforderungen

| Anforderung | Beschreibung |
|---|---|
| Leistung | [z.B. „Suchergebnisse erscheinen in unter einer Sekunde"] |
| Sicherheit | [z.B. „Keine vertraulichen Daten im Browser gespeichert"] |
| Bedienbarkeit | [z.B. „Ohne Einweisung für die Zielgruppe nutzbar"] |
| Umfang | [Was ist ausdrücklich NICHT Teil des Projekts?] |

---

## Abgrenzung — was wir nicht bauen

- [z.B. „Kein Bezahlsystem"]
- [z.B. „Keine mobile App — nur Webanwendung"]
- [z.B. „Keine automatischen Benachrichtigungen per E-Mail"]
