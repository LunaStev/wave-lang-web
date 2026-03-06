---
sidebar_position: 3
---

# IF-Anweisung

## Einführung

In diesem Abschnitt wird die Syntax und Verwendung der IF-Anweisung, einer der von der Wave-Sprache bereitgestellten Kontrollstrukturen, erläutert.
Die IF-Anweisung ist eine grundlegende Kontrollstruktur, die nach der Bewertung einer Bedingung nur dann einen bestimmten Codeblock ausführt, wenn diese Bedingung wahr ist.

Dies ermöglicht es einem Programm, über den einfachen Ablauf von oben nach unten hinaus, je nach Situation und Bedingung, unterschiedliche Operationen durchzuführen.
Die IF-Anweisung ist ein zentrales Element nahezu jedes Programms und wird unerlässlich zur Implementierung logischer Verzweigungen und Flusskontrollen verwendet.

## Grundstruktur

Die IF-Anweisung bewertet zuerst den Bedingungsausdruck und führt nur dann den in den geschweiften Klammern `{}` enthaltenen Codeblock aus, wenn das Ergebnis wahr (True) ist.
Ist die Bedingung falsch (False), wird der betreffende Block übersprungen und zum nächsten Code übergegangen.

Die Grundstruktur der IF-Anweisung in Wave sieht wie folgt aus.

```wave
if (Bedingung) {
    // Code, der ausgeführt wird, wenn die Bedingung wahr ist
}
```

In einer Kondition können Vergleichsoperatoren oder logische Operatoren frei verwendet werden.
Zum Beispiel können Vergleichsoperatoren wie `==`, `!=`, `<`, `>`, `<=`, `>=` verwendet werden, um Beziehungen zwischen Werten zu vergleichen, und logische Operatoren wie `&&`, `||`, `!` können verwendet werden, um mehrere Bedingungen zu kombinieren.

Das Ergebnis eines Konditionsausdrucks muss immer wahr oder falsch sein. Ist die Bedingung falsch, wird der Code innerhalb des IF-Blocks nicht ausgeführt.

## Beispiel

Hier ist ein einfaches Beispiel für eine IF-Anweisung.

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Es ist heiß.");
}
```

Im obigen Code wird geprüft, ob der Wert der Variablen `temperature` größer als 25 ist.
Wenn die Bedingung wahr ist, wird die Nachricht `"Das Wetter ist heiß."` ausgegeben. Andernfalls wird keine Aktion ausgeführt.

Die IF-Anweisung wird verwendet, wenn Code nur bei Erfüllung einer bestimmten Bedingung ausgeführt werden soll.

## IF-ELSE-Anweisung

Wenn Code auch ausgeführt werden soll, wenn die Bedingung nicht wahr ist, kann der IF-Anweisung ein ELSE-Teil hinzugefügt werden.
Die IF-ELSE-Anweisung ist eine Struktur, die je nach Ergebnis der Bedingung eines von zwei Codeblöcken ausführt.

Der grundlegende Aufbau ist wie folgt.

```wave
if (Bedingung) {
    // Code, der ausgeführt wird, wenn die Bedingung wahr ist
} else {
    // Code, der ausgeführt wird, wenn die Bedingung falsch ist
}
```

Wenn die Bedingung wahr ist, wird der IF-Block ausgeführt. Ist die Bedingung falsch, wird der ELSE-Block ausgeführt.
Nur einer der beiden Blöcke wird ausgeführt; sie werden niemals gleichzeitig ausgeführt.

Hier ist ein Beispiel für die Verwendung der IF-ELSE-Anweisung.

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Bestanden!");
} else {
    println("Nicht bestanden.");
}
```

In diesem Code wird je nach dem, ob der `score` 60 oder höher ist, eine andere Nachricht ausgegeben.
Wenn die Bedingung wahr ist, wird `"Bestanden!"` ausgegeben, andernfalls `"Nicht bestanden."`.

## Verschachtelte IF-Anweisung

Eine IF-Anweisung kann innerhalb einer anderen IF-Anweisung verwendet werden; dies nennt man eine geschachtelte IF-Anweisung.
Geschachtelte IF-Anweisungen sind nützlich, wenn mehrere Stufen von Bedingungen nacheinander bewertet werden müssen.

Das folgende Beispiel zeigt eine geschachtelte IF-Anweisung, die je nach Punktzahl unterschiedliche Ergebnisse ausgibt.

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

In diesem Code wird zuerst geprüft, ob die Punktzahl 60 oder höher ist.
Wenn sie unter 60 liegt, wird direkt `"Nicht bestanden."` ausgegeben.
Ist die Punktzahl 60 oder höher, wird eine weitere Bedingung geprüft: Wenn die Punktzahl 90 oder höher ist, wird `"Hervorragende Leistung!"` ausgegeben, andernfalls `"Bestanden."`.

Mit geschachtelten IF-Anweisungen können komplexe Konditionalverzweigungen schrittweise ausgedrückt werden.

## Zusammenfassung

Die IF-Anweisung ist eine grundlegende Kontrollstruktur, die Bedingungsauswertungen vornimmt, um den Programmfluss zu steuern.
Durch die Verwendung eines ELSE-Teils kann das Verhalten definiert werden, wenn die Bedingung falsch ist, und durch geschachtelte IF-Anweisungen sind komplexe Verzweigungen mit Kombinationen mehrerer Bedingungen möglich.

Durch die angemessene Verwendung von IF-Anweisungen kann der Programmfluss logischer und klarer strukturiert werden.