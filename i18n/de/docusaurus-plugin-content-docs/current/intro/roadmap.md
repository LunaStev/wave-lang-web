---
sidebar_position: 4
---

# Wave + Whale integrierte Entwicklungs-Roadmap v2

Dieses Dokument ist eine Roadmap, die den Integrationsentwicklungsprozess der Wave-Sprache und der Whale-Compiler-Toolchain schrittweise zusammenfasst.
Wave und Whale beginnen zunächst als separate Komponenten, zielen jedoch darauf ab, schließlich vollständig zu einem eigenständigen Sprachökosystem integriert zu werden.

Der gesamte Entwicklungsablauf folgt folgendem Ablauf:

```matlab
pre-alpha → pre-beta → alpha → beta → rc → Veröffentlichung
```

Jede Phase basiert auf den Ergebnissen der vorherigen Phase und nimmt an, dass nach Abschluss einer Phase keine Rückkehr zur vorherigen Struktur erfolgt wird.

---

## Pre-Beta Stufe

Das Ziel der Pre-Beta-Phase ist es, das Frontend der Wave-Sprache zu vervollständigen und basierend auf dem LLVM-Backend die vollständige Funktionalität der Sprache zu implementieren.
In dieser Phase wird Whale nicht verwendet, sondern die Kompilierung und Ausführung erfolgen ausschließlich über LLVM.

In dieser Phase wird die Erweiterung der Syntax selbst nicht durchgeführt.
Das zentrale Ziel besteht darin, alle Syntaxelemente gemäß den bereits definierten Spezifikationen tatsächlich funktionsfähig zu machen.
Der Fokus liegt auf der Stabilisierung der Frontend-Struktur, einschließlich der Qualität von Fehlermeldungen, Typenprüfung und Variablenbereichsbehandlung.

Der Implementierungsumfang umfasst Variablendeklarationen und Ausgabe, Grundoperationen sowie die Definition und den Aufruf von Funktionen, bedingte Anweisungen (`if` / `else if` / `else`) und Schleifen (`while` / `break` / `continue`), die alle in dieser Phase abgeschlossen werden.
Ebenfalls eingeschlossen sind Format-Ausgabe, explizite Typdeklarationen, das Design von Zeigern in der Form `ptr<T>` und von Arrays in der Form `array<T, N>`.

In dieser Phase wird der Wave-Compiler vollständig in Rust geschrieben und verwendet Inkwell und LLVM-Sys zur Erzeugung von LLVM IR und AOT-Ausführung.

---

## Alpha-Stufe

Das Ziel der Alpha-Phase ist es, das Whale-Backend einzuführen und eine Struktur zu etablieren, die die parallele Nutzung von LLVM und Whale ermöglicht.
LLVM bleibt weiterhin das Standard-Backend, und Whale wird als optional nutzbares Backend hinzugefügt.

Beim Ausführen von Wave-Code kann mithilfe der Option `--backend` gewählt werden, ob der LLVM- oder der Whale-Backend verwendet werden soll.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

In dieser Phase wird die IR-Struktur von Whale selbst entworfen und definiert.
Die wesentlichen Komponenten wie Instruction, Value, Block werden zusammengefasst und ein IR-Generator wird implementiert, der das Wave-AST in Whale-IR umwandelt.

Außerdem wird ein Code-Generator für Whale implementiert, der die Ausführung in Form von Assembler oder Binärdateien ermöglicht.
Schwierig oder ineffizient zu implementierende Typen in LLVM, wie zum Beispiel `i1024` große Ganzzahltypen oder erweiterte Zeigerstrukturen, werden in dieser Phase als Whale-spezifische Funktionen eingeführt.

Als Checkpunkt muss der Whale-Backend in der Lage sein, Hello World auszugeben und die Deklaration und Zuweisung von Variablen, die Zeigerverarbeitung und IR-Debugging-Tools müssen einwandfrei funktionieren.
Dies ist die Phase, in der die tatsächliche Konvertierung von Wave zu Whale IR erfolgt.

---

## Beta-Stufe

Das Ziel der Beta-Phase ist der vollständige Übergang zu Whale und die Beseitigung der LLVM-Abhängigkeit.
Ab dieser Phase werden Wave-Kompilierung und -Ausführung ausschließlich mit Whale durchgeführt.

Alle Abhängigkeiten und Module, die mit LLVM zusammenhängen, werden entfernt, und der Codegenerierungs- und Ausführungspfad wird für Whale optimiert.
Das Hauptziel ist es, den Fluss vom IR-Generieren bis zur Ausführung einfach und schnell zu gestalten.

Optimierungspfade für Whale IR werden entworfen, um die Codeerzeugungsgeschwindigkeit und Ausführungseffizienz zu verbessern.
In dieser Phase muss die gesamte Wave-Syntax vollständig vom Whale-Backend unterstützt werden.

Im Hinblick auf Tests werden sowohl Unit-Tests als auch vollständige Test-Suites durchgeführt und gleichzeitig die Kompatibilität von WSON und der Standardbibliothek sowie Cross-Platform Whale-Builds überprüft.

---

## RC (Release Candidate) Phase

Das Ziel der RC-Phase ist es, das Bootstrapping von Wave zu starten.
Ab dieser Phase wird die Rust-Implementierung des Wave-Compilers schrittweise entfernt und er beginnt, den Wave-Compiler mit der Wave-Sprache selbst neu zu schreiben.

Der Wave IR-Generator wird auf Basis von Whale neu geschrieben und die zentrale Logik des Compilers sowie die std/core-Bibliotheken werden durch Wave-Code ersetzt.
Durch diesen Prozess wird Whale in die Self-Hosting-Phase eintreten.

Nach einem erfolgreichen Bootstrap entsteht der erste Wave-native Compiler.

---

## Release-Phase (v0.0.1)

Die Release-Phase bedeutet die offizielle erste Veröffentlichung von Wave.
Zu diesem Zeitpunkt bilden Wave und Whale ein vollständig integriertes unabhängiges Sprachökosystem.

Zu den Komponenten der Veröffentlichung gehören die Wave-Sprache und die Standardbibliothek, die Whale-Compiler-Toolchain, der Vex-Paketmanager und das WSON-Datenformat.

In dieser Phase sollte Wave einen vollständig in Wave-Code geschriebenen Compiler besitzen und die Optimierung von Whale abgeschlossen sein.
Der Aufbau- und Bereitstellungsfluss über Vex sollte etabliert sein, und es sollte möglich sein, auch plattformübergreifende Builds wie `vex build --windows` durchzuführen.

---

## Entwicklung Meta-Strategie

Die Entwicklung von Wave + Whale folgt nicht einfach nur Phasen, sondern basiert auf einer klaren Strategie.
Durch die Wahl einer Train+Rail-Strategie wird beim Entwickeln von Whale gleichzeitig das Wave-Backend entwickelt und die Backend-Struktur und Sprachgestaltung parallel vorangetrieben.

In der Alpha-Phase spielt die Strategie der Backend-Verzweigung über die `--backend`-Option eine wichtige Rolle und bietet die Grundlage für den direkten Vergleich und die Überprüfung von LLVM und Whale.

Nach der RC-Phase wird die Struktur umgekehrt und der Plan, dass Wave-Code sich über Whale selbst kompiliert, wird intensiv vorangetrieben.