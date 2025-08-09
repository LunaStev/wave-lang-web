---
sidebar_position: 4
---

# Schleife

## Einführung

In der Wave-Sprache werden Schleifen bereitgestellt, mit denen Code wiederholt ausgeführt werden kann.
Schleifen werden verwendet, um Code entweder so lange auszuführen, bis eine bestimmte Bedingung erfüllt ist, oder für eine bestimmte Anzahl von Wiederholungen.

Die von Wave unterstützten Schleifen sind folgende:

- while Schleife: Bedingungsbasierte Wiederholung

- for Schleife: Wiederholung auf Basis der Anzahl

Außerdem werden die Schlüsselwörter break und continue zur Steuerung des Flusses innerhalb einer Schleife bereitgestellt.
In diesem Abschnitt werden sowohl die Verwendung von Schleifen als auch der Funktionen zur Steuerung des Ablaufs erklärt.

---

## while Schleife

Eine `while` Schleife führt einen Codeblock aus, solange der Ausdruck als `true` bewertet wird.
Wenn die Bedingung `false` wird, endet die Schleife.

### Grundstruktur

Hier ist die grundlegende Syntax der `while` Schleife:

```wave
while (Bedingung) {
    // Code zum Wiederholen
}
```

- Der Ausdruck muss von Typ `bool` sein.

- Der Codeblock wird durch `{}` begrenzt und kann eine oder mehrere Anweisungen enthalten.

### Beispiel: Ausgabe von 0 bis 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i ist {}.", i);
    i = i + 1;
}
```

Dieses Beispiel wiederholt sich, bis `i` kleiner als 5 ist, gibt den Wert in jeder Schleife aus und erhöht ihn um 1.

---

## for Schleife

Eine `for` Schleife wird nützlich eingesetzt, wenn die Anzahl der Wiederholungen festgelegt ist.
Durch die Angabe von Anfangswert, Endbedingung und Inkrement wird die Schleife konfiguriert.

### Grundstruktur

```wave
for (var Variablenname: Typ = Anfangswert; Bedingung; Inkrement) {
    // Code zum Wiederholen
}
```

- Variablenname: Variable zur Steuerung der Schleife

- Bedingung: Wiederholung, solange `true` ist

- Inkrement: Ändert den Wert der Schleifenvariable

### Beispiel: Ausgabe von 1 bis 5

```wave
for (var i: i32 = 1; i <= 5; i = i + 1) {
    println("i = {}", i);
}
```

---

## Verschachtelte Schleifen

Man kann eine Schleife innerhalb einer anderen Schleife schreiben, was als verschachtelte Schleife bezeichnet wird.
Zum Beispiel nützlich für das Durchlaufen von zweidimensionalen Arrays oder Kombinationen.

### Beispiel: doppelte while Schleife

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

---

## break Anweisung

Eine `break` Anweisung beendet sofort die Schleife und verlässt sie.
Nützlich, um die Schleife zu unterbrechen, wenn eine Bedingung erfüllt ist.

### Beispiel: Schleifenende bei einem bestimmten Wert

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

---

## continue Anweisung

Eine `continue` Anweisung überspringt den Rest der aktuellen Wiederholung und startet die nächste.
Wird verwendet, wenn nur ein Teil des Schleifenblocks unter bestimmten Bedingungen ausgeführt werden soll.

### Beispiel: nur gerade Zahlen ausgeben

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

---

## Zusammenfassung

| Syntax   | Beschreibung                                                           |
| -------- | ---------------------------------------------------------------------- |
| while    | Wiederholung, solange die Bedingung wahr ist                           |
| for      | Ausführung der Wiederholung durch Anfangswert, Bedingung und Inkrement |
| break    | Beendet die Schleife sofort                                            |
| continue | Überspringen zur nächsten Wiederholung                                 |

Die Schleifen in Wave sind so konzipiert, dass sie sowohl bedingungsbasierte als auch anzahlbasierte Wiederholungsvorgänge flexibel verarbeiten können.

Durch die gemeinsame Nutzung von `break` und `continue` Befehlen sind auch feinere Kontrollen des Wiederholungsflusses möglich.