---
sidebar_position: 3
---

# Whale Compiler Toolchain

## Übersicht

Whale ist eine dedizierte Compiler-Toolchain für die Wave-Programmiersprache..
Whale übernimmt den gesamten Prozess des Analysierens, Optimierens und Transformierens von Quellcodes, die in Wave geschrieben wurden, in Binärdateien für Zielplattformen.
Diese Toolchain wurde speziell für die Wave-Sprache entwickelt und berücksichtigt keine Unterstützung für andere Sprachen oder die Integration externer Toolchains..

## Gestaltungsziele

Die Hauptziele der Gestaltung von Whale sind:

- Exklusive Unterstützung für Wave: Whale unterstützt ausschließlich die Wave-Sprache und berücksichtigt keine Integration mit anderen Sprachen.
- Modularstruktur: Jede Funktion ist als unabhängiges Modul konzipiert, das bei Bedarf hinzugefügt oder entfernt werden kann.
- Verwendung einer eigenen IR: Whale verwendet keine bestehenden externen IRs wie LLVM IR, sondern definiert seine eigene Zwischenrepräsentation.
- Unterstützung mehrerer Zielplattformen: Ermöglicht den Build für verschiedene Umgebungen, unabhängig vom Betriebssystem und der Hardwarearchitektur.
- Präzise Kontrolle: Entwickelt, damit Entwickler den gesamten Kompilierungsprozess detailliert steuern können.
- Abbau externer Abhängigkeiten: Whale ist nicht auf externe C/C++-Laufzeiten oder Compiler angewiesen.

## Zielunterstützung

Whale zielt darauf ab, die folgenden Zielumgebungen zu unterstützen:

- Betriebssysteme:
    - Linux
    - Windows
    - macOS
    - UEFI (BIOS ausgeschlossen)
    - WaveOS (eigenes OS)
- Architekturen:
    - x86_64 (AMD64)
    - ARM64
    - Andere können durch Hinzufügen von Modulen erweitert werden

## Externe Integration (FFI)

Whale은 기술적으로 FFI(Foreign Function Interface)를 지원할 수 있도록 설계되지만,
Wave의 철학상 외부 언어와의 연동은 권장되지 않으며 표준적으로 제공되지 않습니다.
Wave ist darauf ausgelegt, alle Funktionen innerhalb seiner eigenen Sprache zu implementieren.

## Erweiterbarkeit

Whale kann auf folgende Weise erweitert werden:

- Hinzufügen von Modulen für neue Betriebssysteme oder Architekturen
- Einfügen benutzerdefinierter Optimierungsalgorithmen
- Anpassung der Bauprofile und Linker-Einstellungen
- Definition eigener Ausführungsformate