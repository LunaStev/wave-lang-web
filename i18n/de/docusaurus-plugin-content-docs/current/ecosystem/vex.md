---
sidebar_position: 2
---

# Vex-Paketmanager

## Übersicht

Vex ist ein dedizierter Paketmanager und Build-System für die Wave-Programmiersprache.
Vex unterstützt das gesamte Projektmanagement einschließlich Abhängigkeitsverwaltung, Build-Konfiguration, Zielplattform-Spezifikation, Modulinstallation und -bereitstellung.
Es ist nicht auf Kompatibilität mit externen Sprachen oder Systemen ausgelegt, sondern wurde entwickelt, um ausschließlich innerhalb des Wave-Ökosystems zu arbeiten.

## Gestaltungsziele

Vex wurde auf Basis der folgenden Ziele konzipiert:

Speziell für Wave-Design: Nur für Wave-Projekte bestimmt und optimiert für die Syntax, Modulstruktur und Ausführungsumgebung von Wave.

- Intuitives Befehlssystem: Konzipiert, um mit einem einzigen Befehl die Hauptaufgaben ohne komplexe Build-Skripte auszuführen.
- Unterstützung mehrerer Zielplattformen: Ermöglicht ein einfaches Umschalten der Build-Ziele je nach Betriebssystem und Architektur.
- WSON-basierte Einstellungsverwaltung: Alle Projektkonfigurationsinformationen werden im WSON-(Wave Serialization Object Notation)-Format definiert.
- Statische Build- und Bereitstellung: Ausführbare Dateien werden statisch erstellt und können unabhängig ohne Abhängigkeit von externer Laufzeit bereitgestellt werden.