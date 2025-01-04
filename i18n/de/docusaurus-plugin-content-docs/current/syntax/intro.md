---
sidebar_position: 1
---

# Funktionen und Variablen

## Einführung

Die zentrale Designphilosophie der Wave-Programmiersprache besteht darin, eine effiziente und flexible Umgebung für die Softwareentwicklung zu bieten, indem sie niedrige Leistung und hohe Abstraktion miteinander in Einklang bringt.
In diesem Abschnitt werden die grundlegenden Komponenten eines Wave-Programms, nämlich Funktionen und Variablen, vorgestellt. Diese Komponenten sind unerlässlich, um die Logik eines Programms zu strukturieren und Daten zu verwalten.
Das Verständnis, wie man Funktionen und Variablen definiert und verwendet, wird Ihnen helfen, das volle Potenzial von Wave auszuschöpfen.

---

## Funktionen
In Wave sind Funktionen **wiederverwendbare Codeblöcke**, die unabhängig ausgeführt werden können.
Funktionen kapseln spezifische Aktionen und können im gesamten Programm aufgerufen werden, wenn sie benötigt werden.
Sie ermöglichen es, Berechnungen durchzuführen, I/O-Operationen zu verwalten oder Code in handhabbare Einheiten zu unterteilen.

In Wave beginnt die Funktionssignatur mit dem Schlüsselwort `fun` und besteht aus dem Funktionsnamen, den Parametern (falls vorhanden) und dem Funktionskörper, der in geschweifte Klammern `{}` eingeschlossen ist.

### Eine Funktion definieren
Eine grundlegende Funktion in Wave wird wie folgt definiert:

```wave
fun main() {
    // Hier kommt der Code
}
```

* Die `main`-Funktion ist immer der Einstiegspunkt des Programms und daher erforderlich.
* Funktionen können Parameter haben und Werte zurückgeben. Der Rückgabetyp wird hinter dem Funktionsnamen angegeben.

### Beispiel: Eine einfache Funktion

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Aufruf der add-Funktion
    println(result);            // Ausgabe: 12
}
```

In diesem Beispiel:

* Die Funktion `add` nimmt zwei Ganzzahlen `a` und `b` entgegen und gibt deren Summe zurück.
* Die `main`-Funktion ruft `add` auf und gibt das Ergebnis aus.

## Variablen
Variablen werden verwendet, um Daten innerhalb eines Programms zu speichern und zu manipulieren.
Wave unterstützt sowohl **veränderliche** als auch **unveränderliche** Variablen und gibt dem Entwickler somit Kontrolle über die Datenverwaltung.

### Veränderliche Variablen
In Wave sind Variablen standardmäßig **veränderlich (mutable)**, das heißt, ihre Werte können während der Programmausführung geändert werden.

Veränderliche Variablen werden mit dem Schlüsselwort var deklariert.
```wave
var x :i32 = 10; // Veränderliche Variable
x = 20;
```

In diesem Beispiel:
* `x` ist eine veränderliche Variable mit dem Initialwert `10`, der später auf `20` geändert werden kann.

### Unveränderliche Variablen
Eine Variable kann als **unveränderlich (immutable)** deklariert werden, sodass ihr Wert nach der Zuweisung nicht mehr geändert werden kann.

Unveränderliche Variablen werden mit dem Schlüsselwort `var imm` deklariert.
```wave
var imm y :i32 = 5;     // Unveränderliche Variable
// y = 10;              // Fehler: Der Wert einer unveränderlichen Variable kann nicht geändert werden
```

Hier:
* `y` ist eine unveränderliche Variable. Ein Versuch, ihren Wert zu ändern, würde zu einem Kompilierungsfehler führen.

### Beispiel für die Deklaration von Variablen
Ein Beispiel für die Deklaration von verschiedenen veränderlichen und unveränderlichen Variablen:

```wave
var x :i32 = 10;                    // Veränderliche Ganzzahl-Variable
var imm y :f64 = 3.14159;           // Unveränderliche Fließkomma-Variable
var name :str = "Wave";             // Veränderliche Zeichenketten-Variable
var imm is_active :bool = true;     // Unveränderliche boolesche Variable
```

* `x` ist eine veränderliche Ganzzahl.
* `y` ist eine unveränderliche Fließkommazahl.
* `name` ist eine veränderliche Zeichenkette.
* `is_active` ist eine unveränderliche boolesche Variable.

In Wave wird das Schlüsselwort `var` verwendet, um veränderliche Variablen zu deklarieren, und `var imm`, um unveränderliche Variablen zu deklarieren, deren Wert nach der Initialisierung nicht mehr verändert werden kann.

Durch die Unterscheidung zwischen veränderlichen und unveränderlichen Variablen ermöglicht es Wave, die Konsistenz von Daten und den Zustand des Programms effektiver zu steuern.
Dies führt zu robusterem und vorhersehbarerem Code.