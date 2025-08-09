---
sidebar_position: 4
---

# Wave + Whale integrierte Entwicklungs-Roadmap v2

## Alle Stufen

```matlab
pre-alpha → pre-beta → alpha → beta → rc → Veröffentlichung
```

---

## Pre-Beta Stufe

> Ziel: Vollständige Frontend-Entwicklung der Wave-Sprache + vollständige Implementierung der Funktionen mit LLVM Backend

### Hauptmerkmale

- Nur LLVM verwenden (kein Whale)

- Keine Hinzufügung von Syntax, nur Implementierung der bestehenden Spezifikationen

- Stabilisierung der frontend-zentrierten Struktur einschließlich Fehlermeldungen, Typenprüfung, Variablenscope

### Umfang der Implementierung

- Variable Deklaration, Ausgabe, Berechnung

- Funktionen definieren und aufrufen

- if / else if / else

- while / break / continue

- Formatierte Ausgabe, Typenangabe

- Zeigerdesign (`ptr<T>`-Format)

- Array-Design (`array<T, N>`)B

- Typenprüfung und strukturelles AST

### Verwendete Technologien

- Rust (gesamter Wave-Compiler)

- LLVM (IR-Erzeugung, AOT-Ausführung)

- inkwell / llvm-sys

---

## Alpha-Stufe

> Ziel: Einführung von Whale, parallel mit LLVM verwenden / Implementierung eines Whale-basierten Backends beginnen

### Hauptmerkmale

- LLVM ist das Standard-Backend

- Whale ist ein optionales Backend

- Beim Ausführen von Wave-Code mit der Option `--backend` steuerbar

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Arbeiten im Zusammenhang mit Whale

- Entwurf und Definition der Whale-IR-Struktur (Instruction, Value, Block usw.)

- Implementierung eines IR-Generators für Whale

- Whale-Code-Generator (Assembly oder Binary)

- Typenimplementierung, die nur mit Whale möglich ist (`i1024`, erweitere Zeiger usw.)

### Checkpoint

- Ausgabe von Hello World mit Whale

- Variablendeklaration/-zuweisung in Whale

- Implementierung eines IR-Debugging-Tools für Whale

- Zeigertypenbehandlung in Whale

- Umwandlung von Wave zu Whale IR

---

## Beta-Stufe

> Ziel: Vollständige Umstellung auf Whale, Entfernen von LLVM. Optimierung der Whale + Wave-Kombination

### Hauptmerkmale

- Nur Whale verwenden

- Vollständige Entfernung von LLVM (Abhängigkeiten und Module)

- Fokus auf Code-Optimierung

- Schnell und effizient von IR bis zur Ausführung

### Optimierungsbereich

- Whale IR Optimierung Pass Design

- Verbesserung der Whale-Code-Erstellungsgeschwindigkeit

- Alle Syntax von Wave wird von Whale vollständig unterstützt

### Test

- Einzeltest + vollständiges Testsuite

- WSON, Standardbibliothekskompatibilitätstest

- Überprüfung des plattformübergreifenden Whale-Builds

---

## RC (Release Candidate) Phase

> Ziel: Start des Wave-Bootstraps - vollständige Entfernung des Rust-Codes

### Hauptmerkmale

- Beginn der Neuschreibung des Wave-Compilers mit Wave

- Selbstausführung des Wave-Codes basierend auf Whale

- Whale tritt in die Self-Hosting-Phase ein

### Arbeitsumfang

- Neuschreibung des Wave IR-Generators auf Whale-Basis

- Entfernung von Rust + Ersatz durch Wave-Code

- Erstellung der std- und core-Bibliotheken mit Wave

- Bei erfolgreichem Bootstrap entsteht der erste native Wave-Compiler

---

## Release-Phase (v0.0.1)

> Ziel: Offizielle Veröffentlichung / Bereitstellung eines vollständigen Whale-basierten unabhängigen Sprachökosystems

### Komponenten

- Wave (Sprache und Standardbibliothek)

- Whale (Compiler Toolchain)

- Vex (Paketmanager)

- WSON (Datenformat)

### Merkmale

- Vollständiger Wave-only Compiler (Bootstrap-Erfolg)

- Whale-Optimierung abgeschlossen

- Implementierung des Vex-Build- und -Verteilungssystems

- Einschließlich WSON-Parser + Serialisierung

- Cross-OS-Build möglich (`vex build --windows` etc.)

---

## Entwicklung Meta-Strategie

| Strategie                  | Beschreibung                                                                    |
| -------------------------- | ------------------------------------------------------------------------------- |
| Zug+Schienen Strategie     | Parallel zur Entwicklung von Whale wird gleichzeitig das Wave-Backend aufgebaut |
| Backend-Zweigstrategie     | Auswahl von LLVM/Whale mit der `--backend`-Option, wichtige Struktur in Alpha   |
| Plan zur Strukturumkehrung | Nach rc kompiliert der Wave-Code sich selbst über Whale                         |
