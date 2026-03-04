---
sidebar_position: 1
---

# Funktionen und Variablen

## Einführung

Die zentrale Designphilosophie der Wave-Programmiersprache besteht darin, eine Balance zwischen niedriger Performance und hoher Abstraktion zu wahren und dabei eine effiziente und flexible Softwareentwicklungsumgebung zu bieten.
Dieser Abschnitt stellt die grundlegenden Bausteine von Wave-Programmen vor, nämlich Funktionen und Variablen.

Funktionen sind die zentralen Einheiten eines Programms zur Strukturierung von Operationen und Logik, während Variablen die Aufgabe haben, dabei benötigte Daten zu speichern und zu verwalten.
Durch ein fundiertes Verständnis davon, wie Funktionen und Variablen definiert und verwendet werden, können Sie die Struktur und Designintentionen der Wave-Sprache umfassend nutzen.

---

## Funktionen

In Wave sind Funktionen wiederverwendbare Codeblöcke, die unabhängig ausgeführt werden können.
Funktionen können bestimmte Aktionen oder Berechnungen als eine Einheit bündeln und bei Bedarf im gesamten Programm aufgerufen werden.

Die Verwendung von Funktionen reduziert redundanten Code und fördert durch logische Trennung die Lesbarkeit und Wartbarkeit des Programms.
Sie können auch für verschiedene Zwecke wie Berechnungen, Input-/Output-Verwaltung und Logiktrennung eingesetzt werden.

In Wave werden Funktionen mit dem `fun`-Schlüsselwort definiert und bestehen aus einem Funktionsnamen, einer Parameterliste und einem in geschweifte Klammern `{}` eingeschlossenen Funktionskörper.

### Definition von Funktionen

Die grundlegendste Form der Funktionsdefinition in Wave sieht wie folgt aus.

```wave
fun main() {
    // Schreiben Sie hier Ihren Code
}
```

Die `main` Funktion ist der Einstiegspunkt der Programmausführung, und ein Wave-Programm muss über genau eine `main` Funktion verfügen.
Das Programm beginnt seine Ausführung mit dieser Funktion.

Funktionen können bei Bedarf Parameter haben und Berechnungsergebnisse oder Werte an die aufrufende Stelle zurückgeben.
Wenn es einen Rückgabewert gibt, wird der Rückgabetyp in der Funktionsdeklaration angegeben.

### Beispiel: Einfache Funktion

Das folgende Beispiel zeigt eine einfache Funktion, die zwei ganze Zahlen annimmt und deren Summe zurückgibt.

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Aufruf der add-Funktion
    println(result);            // Ausgabe: 12
}
```

In diesem Beispiel nimmt die `add` Funktion zwei ganzzahlige Parameter `a` und `b` an, addiert sie und gibt das Ergebnis zurück.
Die `main` Funktion ruft die `add` Funktion auf und speichert den zurückgegebenen Wert in einer Variablen, bevor sie ihn ausgibt.

So kapseln Funktionen bestimmte Aktionen und ermöglichen deren Wiederverwendbarkeit in verschiedenen Programmteilen.

## Variablen

Variablen werden verwendet, um Daten innerhalb eines Programms zu speichern und zu manipulieren.
Wave ist so konzipiert, dass es beim Deklarieren von Variablen klar zwischen veränderlichen und unveränderlichen Variablen unterscheidet, um die Absicht der Datenänderung auf Codeebene sichtbar zu machen.

Auf diese Weise werden Zustandsänderungen im Programm deutlicher, und Fehler durch unbeabsichtigte Wertänderungen werden reduziert.

### Veränderliche Variablen

In Wave sind Variablen standardmäßig veränderlich (mutable).
Das bedeutet, dass ihr Wert auch nach der Deklaration während der Programmausführung geändert werden kann.

Veränderliche Variablen werden mit dem `var` Schlüsselwort deklariert.

```wave
var x :i32 = 10;
x = 20;
```

In dem obigen Code hat `x` den Anfangswert `10` und kann später auf `20` geändert werden.
Für Daten, deren Zustand geändert werden muss, werden veränderliche Variablen verwendet.

### Unveränderliche Variablen

Wenn eine Variable als unveränderlich (immutable) deklariert wird, kann ihr Wert nach der Zuweisung nicht mehr geändert werden.
Unveränderliche Variablen werden mit dem `let` Schlüsselwort deklariert.

```wave
let y :i32 = 5;
// y = 10;   // Fehler: Unveränderliche Variablen können nicht verändert werden.
```

Da unveränderliche Variablen garantieren, dass ihr Wert nicht geändert wird, tragen sie zur Erhöhung der Stabilität und Vorhersehbarkeit eines Programms bei.
Für konstante Daten, bei denen keine Wertänderung erforderlich ist, wird die Verwendung unveränderlicher Variablen empfohlen.

In Wave kann zusammen mit dem `let` Schlüsselwort `mut` verwendet werden, um explizit Veränderlichkeit zuzulassen.

```wave
let mut y :i32 = 5;
y = 10;
```

Obwohl die Variable mit `let` deklariert wurde, wird durch das Schlüsselwort `mut` eine Wertänderung erlaubt.

### Beispiel für Variablendeklaration

Das folgende ist ein Beispiel zur Deklaration von variablen und unveränderlichen Variablen verschiedener Typen.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = true;
```

In diesem Beispiel sind `x` und `name` veränderliche Variablen, während `y` und `is_active` unveränderliche Variablen sind.
In Wave wird durch die klare Unterscheidung von `var` und `let` die Veränderlichkeit von Daten auf Codeebene offengelegt.

Durch die angemessene Unterscheidung zwischen veränderlichen und unveränderlichen Variablen kann man ein Programm erstellen, das die Konsistenz der Daten bewahrt und dennoch robuster und vorhersehbarer ist.