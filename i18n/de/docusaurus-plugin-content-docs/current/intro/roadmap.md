---
sidebar_position: 4
---

# Wave + Whale Integrierte Entwicklungs-Roadmap v2

## Gesamtphasen

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta-Phase

> Ziel: Fertigstellung des Frontends der Wave-Sprache + vollständige Funktionalität mit LLVM-Backend

### Hauptmerkmale
* Nur Verwendung von LLVM (kein Whale)

* Keine neue Syntax, nur Umsetzung der bestehenden Spezifikationen

* Stabilisierung der frontendzentrierten Struktur: Fehlermeldungen, Typprüfung, Variablen-Gültigkeitsbereiche usw.

### Implementierungsumfang
* Variablendeklaration, Ausgabe, Operationen

* Funktionsdefinition und -aufruf

* if / else if / else

* while / break / continue

* Formatierte Ausgabe, explizite Typangabe

* Zeigerdesign (`ptr<T>`-Format)

* Array-Design (`array<T, N>`)

* Typprüfung und strukturierter AST

### Verwendete Technologien
* Rust (gesamter Wave-Compiler)

* LLVM (IR-Erzeugung, AOT-Ausführung)

* inkwell / llvm-sys

---

## Alpha-Phase

> Ziel: Einführung von Whale beginnen, parallele Nutzung mit LLVM / Start der Implementierung des Whale-Backends

### Hauptmerkmale
* LLVM ist das Standard-Backend

* Whale ist ein optionales Backend

* Wave-Code kann mit der Option `--backend` ausgeführt werden

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale-bezogene Aufgaben
* Entwurf und Definition der Whale-IR-Struktur (Instruction, Value, Block usw.)

* Implementierung eines IR-Generators für Whale

* Codegenerator für Whale (Assembly oder Binär)

* Implementierung Whale-exklusiver Typen (z.B. `i1024`, erweiterte Zeigertypen)

### Meilensteine
* „Hello World“-Ausgabe mit Whale

* Variablendeklaration/Zuweisung in Whale

* Entwicklung von Whale-IR-Debugging-Tools

* Zeigertyp-Behandlung in Whale

* Wave → Whale IR-Konvertierung beginnen

---

## Beta-Phase

> Ziel: Vollständiger Wechsel zu Whale, Entfernung von LLVM. Optimierung der Kombination Whale + Wave

### Hauptmerkmale
* Ausschließlich Whale wird verwendet

* Vollständige Entfernung von LLVM (Abhängigkeiten und Module)

* Fokus auf Codeoptimierung

* Effizienter und schneller Ablauf von IR zu Ausführung

### Optimierungsumfang
* Entwicklung von Optimierungs-Passes für Whale IR

* Verbesserung der Whale-Codegenerierungsgeschwindigkeit

* Vollständige Unterstützung aller Wave-Syntax in Whale

### Tests
* Unit-Tests + vollständige Testsuite

* Kompatibilitätstests mit WSON und Standardbibliothek

* Verifikation von plattformübergreifenden Whale-Builds

---

## RC-Phase (Release Candidate)

> Ziel: Start des Bootstrappings von Wave — vollständige Entfernung des Rust-Codes

### Hauptmerkmale
* Beginn der Neuschreibung des Wave-Compilers in Wave selbst

* Ausführung von Wave-Code mit Whale-Backend

* Whale erreicht Self-Hosting-Stadium

### Aufgaben
* Neuschreiben des Wave-IR-Generators auf Whale-Basis
* 
* Entfernung von Rust, Ersatz durch Wave-Code
* 
* Schreiben der std- und core-Bibliotheken in Wave
* 
* Erfolgreiches Bootstrapping führt zum ersten nativen Wave-Compiler

---

## Release-Phase (v0.0.1)

> Ziel: Offizieller Release / Bereitstellung eines vollständigen, Whale-basierten, unabhängigen Sprach-Ökosystems

### Komponenten
* Wave (Sprache und Standardbibliothek)

* Whale (Compiler-Toolchain)

* Vex (Paketmanager)

* WSON (Datenformat)

### Merkmale
* Vollständig Wave-only Compiler (erfolgreiches Bootstrapping)

* Whale vollständig optimiert

* Vex-Build- und Deployment-System etabliert

* Enthält WSON-Parser + Serialisierung

* Plattformübergreifendes Bauen möglich (`vex build --windows` usw.)

---

## Meta-Strategie für die Entwicklung

| Strategie               | Beschreibung                                                                   |
| ----------------------- | ------------------------------------------------------------------------------ |
| Zug-und-Gleis-Strategie | Gleichzeitige Entwicklung von Whale und Aufbau des Wave-Backends               |
| Backend-Verzweigung     | Auswahl zwischen LLVM/Whale mit `--backend`-Option, zentral in der Alpha-Phase |
| Strukturinversionsplan  | Ab der RC-Phase kompiliert Wave sich selbst über Whale                         |
