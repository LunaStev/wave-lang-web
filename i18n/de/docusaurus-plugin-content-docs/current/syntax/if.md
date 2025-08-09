---
sidebar_position: 3
---

# IF-Anweisung

## Einführung

In diesem Abschnitt wird die Syntax der IF-Anweisung, einer der Steueranweisungen in Wave, erläutert.
Die IF-Anweisung ist eine Kontrollstruktur in der Programmierung, die eine Bedingung bewertet und bei wahrer Bedingung spezifischen Code ausführt.
Damit kann der Programmfluss basierend auf Bedingungen gesteuert werden, und es lassen sich flexible und logische Codes schreiben.

## Grundstruktur

Die IF-Anweisung bewertet eine spezifische Bedingung und führt den angegebenen Codeblock nur aus, wenn die Bedingung wahr ist.
Die Grundstruktur der IF-Anweisung in Wave sieht wie folgt aus:

```wave
if (Bedingung) {
    // Code, der ausgeführt wird, wenn die Bedingung wahr ist
}
```

Bedingungen werden mit Vergleichsoperatoren (`==`, `!=`, `<`, `>`, `<=`, `>=`) oder logischen Operatoren (`&&`, `||`, `!`) erstellt. Wenn die Bedingung falsch ist, wird der Codeblock nicht ausgeführt.

## Beispiel

Hier ist ein einfaches Beispiel für eine IF-Anweisung:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Es ist heiß.");
}
```

In diesem Code wird die Nachricht "Es ist heiß." ausgegeben, wenn der Wert von temperature größer als 25 ist.

## IF_ELSE-Anweisung

Wenn die Bedingung nicht wahr ist, wird die IF-ELSE-Anweisung verwendet, um alternativen Code auszuführen.
Die Struktur ist wie folgt:

```wave
if (Bedingung) {
    // Code, der ausgeführt wird, wenn die Bedingung wahr ist
} else {
    // Code, der ausgeführt wird, wenn die Bedingung falsch ist
}
```

### Beispiel:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Bestanden!");
} else {
    println("Nicht bestanden.");
}
```

Wenn der score 60 oder höher ist, wird "Bestanden!" ausgegeben. Andernfalls wird "Nicht bestanden." ausgegeben.

## Verschachtelte IF-Anweisung

Eine IF-Anweisung kann innerhalb einer anderen IF-Anweisung verwendet werden. Dies wird als verschachtelte IF-Anweisung bezeichnet und ist nützlich bei komplexen Bedingungen.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Ausgezeichnete Leistung!");
    } else {
        println("Bestanden.");
    } 
} else {
    println("Nicht bestanden.");
}
```

Dieses Beispiel gibt je nach Punktzahl die Nachricht "Ausgezeichnete Leistung!", "Bestanden." oder "Nicht bestanden." aus.

## Zusammenfassung

- Die IF-Anweisung ist eine Kontrollstruktur, die Bedingungen bewertet und bestimmte Codeblöcke ausführt.
- Mit der ELSE-Anweisung kann Code angegeben werden, der ausgeführt wird, wenn die Bedingung falsch ist.
- Verschachtelte IF-Anweisungen werden bei komplexen Bedingungen verwendet.

Durch die Verwendung von IF-Anweisungen können Sie den Programmfluss logischer und dynamischer gestalten!