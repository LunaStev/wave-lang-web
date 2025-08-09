---
sidebar_position: 1
---

# Funktionen und Variablen

## Einführung

Die zentrale Designphilosophie der Wave-Programmiersprache ist es, eine Balance zwischen niedrigem Leistungsniveau und hoher Abstraktion zu schaffen, um eine effiziente und flexible Entwicklungsumgebung zu bieten.
In diesem Abschnitt werden die grundlegenden Bausteine des Wave-Programms, nämlich Funktionen und Variablen, vorgestellt. Diese Komponenten sind entscheidend, um die Logik innerhalb eines Programms zu strukturieren und Daten zu verwalten.
Wenn Sie verstehen, wie Funktionen und Variablen definiert und gehandhabt werden, können Sie das Potenzial von Wave maximal nutzen.

---

## Funktionen

In Wave fungieren Funktionen als **wiederverwendbare Codeblöcke**, die unabhängig ausgeführt werden können.
Funktionen kapseln bestimmte Aktionen und können überall im gesamten Programm bei Bedarf aufgerufen werden.
Dies ermöglicht es, Berechnungen durchzuführen, Ein- und Ausgabeoperationen zu verwalten oder Code in überschaubare Einheiten zu unterteilen.

Die Signatur einer Funktion in Wave beginnt mit dem `fun`-Schlüsselwort, gefolgt vom Funktionsnamen, den Parametern (falls vorhanden) und einem Funktionskörper in geschweiften Klammern `{}`.

### Definition von Funktionen

In Wave wird eine grundlegende Funktion folgendermaßen definiert:

```wave
fun main() {
    // Schreiben Sie hier Ihren Code
}
```

- Die `main`-Funktion ist der Einstiegspunkt für die Programmausführung und immer notwendig.
- Funktionen können Parameter haben und Werte zurückgeben. Der Rückgabetyp wird nach dem Funktionsnamen angegeben.

### Beispiel: Einfache Funktion

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Aufruf der add-Funktion
    println(result);            // Ausgabe: 12
}
```

Im obigen Beispiel:

- Die `add`-Funktion nimmt zwei ganze Zahlen `a` und `b` und gibt ihre Summe zurück.
- Die `main`-Funktion ruft `add` auf und gibt das Ergebnis aus.

## Variablen

Variablen werden verwendet, um Daten innerhalb eines Programms zu speichern und zu manipulieren.
Wave unterstützt sowohl **veränderliche** als auch **unveränderliche** Variablen in der Deklaration, was dem Entwickler Kontrolle über die Datenverwaltung gibt.

### Veränderliche Variablen

In Wave sind Variablen standardmäßig **veränderlich (mutable)**. Das bedeutet, dass ihr Wert während der Programmausführung geändert werden kann.

Veränderliche Variablen werden mit dem Schlüsselwort var deklariert.

```wave
var x :i32 = 10; // veränderliche Variable
x = 20;
```

Im obigen Beispiel:

- `x` ist eine veränderliche Variable mit dem anfänglichen Wert `10`, der später auf `20` geändert werden kann.

### Unveränderliche Variablen

Wenn eine Variable als **unveränderlich (immutable)** deklariert ist, kann ihr Wert nach der Zuweisung nicht mehr geändert werden.

Unveränderliche Variablen werden mit dem Schlüsselwort `let` deklariert.

```wave
let y :i32 = 5;         // unveränderliche Variable
// y = 10;              // Fehler: unveränderliche Variablen können nicht verändert werden.
```

Hier:

- `y` ist eine unveränderliche Variable und jede Änderung führt zu einem Kompilierungsfehler.

Falls Sie eine mit `let` deklarierte Variable veränderlich machen möchten, können Sie `mut` verwenden, um eine vorübergehende Veränderlichkeit zu erreichen.

```wave
let mut y :i32 = 5;
y = 10; 
```

### Beispiel für Variablendeklaration

Ein Beispiel zur Deklaration von variablen und unveränderlichen Variablen verschiedener Typen:

```wave
var x :i32 = 10;                    // veränderliche Ganzzahlvariable
let y :f64 = 3.14159;               // unveränderliche Fließkommazahlvariable
var name :str = "Wave";             // veränderliche Zeichenfolgenvariable
let is_active :bool = true;         // unveränderliche boolesche Variable
```

- `x` ist eine veränderliche Ganzzahl.
- `y` ist eine unveränderliche Fließkommazahl.
- `name` ist eine veränderliche Zeichenfolge.
- `is_active` ist ein unveränderlicher boolescher Wert.

In Wave wird das Schlüsselwort `var` verwendet, um veränderliche Variablen zu deklarieren, und das Schlüsselwort `let`, um unveränderliche Variablen zu deklarieren, die nach der ersten Zuweisung nicht mehr geändert werden können.

Durch die Unterscheidung zwischen veränderlichen und unveränderlichen Variablen ermöglicht Wave eine effektivere Kontrolle von Datenkonsistenz und Programmzustand.
Damit kann stabilerer und besser vorhersagbarer Code geschrieben werden.