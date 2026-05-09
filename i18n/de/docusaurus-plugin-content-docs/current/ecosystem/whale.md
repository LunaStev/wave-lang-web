---
sidebar_position: 3
---

# Whale Compiler-Toolchain

## Übersicht

Whale ist eine dedizierte Compiler-Toolchain für die Programmiersprache Wave.
Whale ist für den gesamten Prozess der Analyse, Optimierung und Konvertierung des mit Wave geschriebenen Quellcodes in Binärdateien für die Zielplattform verantwortlich.
Diese Toolchain ist ausschließlich für die Sprache Wave konzipiert und berücksichtigt keine Unterstützung für andere Sprachen oder die Integration mit externen Toolchains.

## Gestaltungsziele
Die wichtigsten Designziele von Whale sind:

* Nur Wave-Unterstützung: Whale unterstützt nur die Wave-Sprache und berücksichtigt keine Integration mit anderen Sprachen.
* Modularer Aufbau: Jede Funktion besteht aus einem eigenständigen Modul, das je nach Bedarf hinzugefügt oder entfernt werden kann.
* Verwenden Sie unabhängiges IR: Whale definiert seine eigene Zwischendarstellung, anstatt vorhandenes externes IR wie LLVM zu verwenden.
* Unterstützung mehrerer Zielplattformen: Erstellen Sie unabhängig von Betriebssystem und Hardwarearchitektur für eine Vielzahl von Umgebungen.
* Präzise Steuerung: Es ist so strukturiert, dass Entwickler den gesamten Kompilierungsprozess im Detail steuern können.
* Entfernung externer Abhängigkeiten: Whale ist nicht von externen C/C++-Laufzeiten oder Compilern abhängig.

## Zielunterstützung

Whale zielt darauf ab, die folgenden Zielumgebungen zu unterstützen:

* Betriebssystem:
    * Linux
    * Windows
    * macOS
    * UEFI (außer BIOS)
    * WaveOS (selbst-OS)
* Architektur:
    * x86_64 (AMD64)
    * ARM64
    * Andere können durch das Hinzufügen von Modulen erweitert werden

## Externe Verknüpfung (FFI)

Whale ist technisch so konzipiert, dass es FFI (Foreign Function Interface) unterstützt.
Aufgrund der Philosophie von Wave wird die Integration mit externen Sprachen nicht empfohlen und ist nicht standardmäßig vorgesehen.
Wave ist so konzipiert, dass alle Funktionen in seiner eigenen Sprache implementiert werden können.

## Skalierbarkeit
Whale kann auf folgende Arten erweitert werden:

* Fügen Sie Module für neue Betriebssysteme oder Architekturen hinzu
* Einfügen benutzerdefinierter Optimierungsalgorithmen
* Anpassen von Build-Profilen und Linker-Einstellungen
* Definieren Sie Ihr eigenes ausführbares Format
