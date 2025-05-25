---
sidebar_position: 4
---

# Wave + Whale Integrationsentwicklungs-Roadmap v2

## Gesamte Etappen

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta Etappe

> Ziel: Fertigstellung des Frontends der Wave-Sprache + Implementierung der gesamten Funktionalität mit LLVM-Backend

### Hauptmerkmale
* Nur LLVM verwenden (kein Whale)

* Keine neuen Syntaxelemente, nur die bestehende Spezifikation implementieren

* Stabilisierung der Struktur in Bezug auf Fehlermeldungen, Typüberprüfung, Variablen-Scope usw.

### Implementierungsbereich
* Variablendeklaration, Ausgabe, Operationen

* Funktionsdefinition und -aufruf

* if / else if / else

* while / break / continue

* Formatierte Ausgabe, Typzuweisung

* Zeigerdesign (`ptr<i32>`)

* Array-Design (`array<i32, N>`)

* Typprüfung und strukturelles AST

### Verwendete Technologien
* Rust (gesamter Wave-Compiler)

* LLVM (IR-Erstellung, AOT-Ausführung)

* inkwell / llvm-sys

---

## Alpha Etappe

> Ziel: Beginn der Integration von Whale, parallele Verwendung von LLVM / Beginn der Implementierung des Whale-Backends

### Hauptmerkmale
* LLVM ist der Standard-Backend

* Whale ist der optionale Backend

* Ausführung von Wave-Code mit der Möglichkeit, den Backend über die Option --backend auszuwählen

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Aufgaben im Zusammenhang mit Whale
* Design und Definition der IR-Struktur für Whale (Instruction, Value, Block usw.)

* Implementierung eines IR-Generators für Whale

* Whale-Code-Generator (Assembly oder Binary)

* Implementierung von Typen, die nur für Whale verfügbar sind (i1024, fortgeschrittene Zeiger usw.)

### Meilensteine
* "Hello World"-Ausgabe mit Whale

* Variablendeklaration/ -zuweisung in Whale

* Implementierung von Debugging-Tools für Whale IR

* Zeigertypbehandlung in Whale

* Wave → Whale IR-Konvertierung

---

## Beta Etappe

> Ziel: Vollständiger Übergang zu Whale, Entfernung von LLVM. Optimierung der Kombination Whale + Wave

### Hauptmerkmale
* Nur Whale verwenden

* Entfernung von LLVM (Abhängigkeiten und Module)

* Fokus auf Code-Optimierung

* Schneller und effizienter Übergang von IR zur Ausführung

### Optimierungsbereich
* Design von Optimierungspässen für Whale IR

* Verbesserung der Whale-Code-Generierungsgeschwindigkeit

* Vollständige Unterstützung aller Wave-Syntaxe in Whale

### Tests
* Unit-Tests und vollständige Test-Suites

* WSON- und Standardbibliotheks-Kompatibilitätstests

* Überprüfung des plattformübergreifenden Whale-Bauens

---

## RC (Release Candidate) Etappe

> Ziel: Beginn der Bootstrap-Phase von Wave — vollständige Entfernung von Rust-Code

### Hauptmerkmale
* Neuimplementierung des Wave-Compilers mit Wave

* Ausführung von Wave-Code unter Verwendung von Whale

* Whale erreicht die Self-Hosting-Phase

### Arbeitsbereich
* Neuimplementierung des Wave IR-Generators auf Whale-Basis

* Entfernung von Rust und Ersetzung durch Wave-Code

* Schreiben der std- und core-Bibliotheken in Wave

* Erster Wave-native Compiler nach erfolgreichem Bootstrap

---

## Release Etappe (v0.0.1)

> Ziel: Offizielle Veröffentlichung / vollständiges Whale-basiertes, unabhängiges Sprach-Ökosystem bereitstellen

### Komponenten
* Wave (Sprache und Standardbibliothek)

* Whale (Compiler-Toolchain)

* Vex (Paketmanager)

* WSON (Datenformat)

### Hauptmerkmale
* Vollständig funktionierender Wave-Compiler (nach erfolgreichem Bootstrap)

* Whale-Optimierung abgeschlossen

* Etablierung des Vex-Bau- und Bereitstellungssystems

* WSON-Parser + Serialisierung enthalten

* Cross-OS-Bau möglich (`vex build --windows` usw.)

---

## Entwicklungsstrategie

| Strategie                     | Beschreibung                                                                         |
|-------------------------------|--------------------------------------------------------------------------------------|
| Zug+Schienen-Strategie        | Parallele Entwicklung von Whale und Wave-Backend während der Entwicklung             |
| Backend-Verzweigungsstrategie | Auswahl zwischen LLVM und Whale mit der Option --backend, wichtig in der Alpha-Phase |
| Strukturumkehrplan            | Nach der RC-Phase wird Wave seinen eigenen Code durch Whale kompilieren              |
