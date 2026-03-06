---
sidebar_position: 8
---

# Struktur

## Übersicht

Strukturen in der Wave-Sprache sind ein zentraler Syntaxbestandteil zur Deklaration benutzerdefinierter Datentypen.
Mit Strukturen können Werte unterschiedlicher Typen zu einer logischen Einheit zusammengefasst werden, wodurch komplexe Datenstrukturen klar und sicher modelliert werden können.

Die Strukturen in Wave verhalten sich wie Werttypen.
Alle Felder müssen einen expliziten Typ haben, und beim Erstellen einer Strukturinstanz müssen alle Felder initialisiert werden.
Diese Regeln gewährleisten, dass der Zustand einer Struktur immer vollständig und vorhersehbar bleibt.
----------------------------------------------------------------------------------------------------------------------

## Syntax der Strukturdeklaration

Strukturen werden mit dem Schlüsselwort `struct` deklariert.
Der Name einer Struktur verwendet die PascalCase-Notation und der Strukturkörper kann ein oder mehrere Felder enthalten.

Felder werden im Format `Name: Typ;` deklariert, und hinter jeder Felderklärung ist ein Semikolon erforderlich.

```wave
struct Box {
    Größe: i32;
    Gewicht: f32;
}
```

Die Reihenfolge, in der die Felder bei der Strukturdeklaration angegeben werden, entspricht der Speicheranordnungsreihenfolge.
Innerhalb einer Struktur sind nur Felddeklarationen erlaubt; Funktionen oder Methoden können nicht enthalten sein.
Die Logik wird separat außerhalb der Struktur definiert.
------------------------------------------------------------------------

## Syntax der Strukturinstanziierung

Strukturen werden in einem Literalsyntax mit dem Strukturnamen erstellt.
Struktur-Literale werden als `StructName { Feldname: Wert; ... }` geschrieben.

```wave
var b: Box = Box {
    Größe: 42;
    Gewicht: 10.5;
};
```

Beim Erstellen einer Struktur müssen alle definierten Felder initialisiert werden; wird eines ausgelassen, führt dies zu einem Kompilierfehler.

Die Reihenfolge der Felder bei der Initialisierung muss nicht der Deklarationsreihenfolge der Struktur entsprechen, aber der Typ jeder Feldzuweisung muss genau dem in der Struktur definierten Typ entsprechen.
Wave erlaubt keine impliziten Typumwandlungen bei der Initialisierung von Strukturfeldern.

---

## Syntax des Zugriffs auf Strukturfelder

Auf die Felder einer Struktur wird mit der Punktnotation zugegriffen.
Feldzugriff verwendet für Lesen und Schreiben die gleiche Syntax.

```wave
println("Größe: {}", b.Größe);
println("Gewicht: {}", b.Gewicht);
```

Der Versuch, auf einen nicht vorhandenen Feldnamen zuzugreifen, führt zu einem Fehler beim Kompilieren.
Da Strukturen Werttypen sind, werden beim Zuweisen der gesamten Struktur oder beim Übergeben als Funktionsparameter alle Felder der Struktur kopiert.

---

## Syntax der Strukturmethodendefinition

Die Wave-Sprache definiert keine Methoden direkt innerhalb von Strukturen.
Stattdessen wird das Schlüsselwort `proto` verwendet, um eine Menge von Methoden mit einer Struktur zu verknüpfen.

Der `proto`-Block ist der Bereich für Funktionen, die zu einer bestimmten Struktur gehören, und die darin definierten Funktionen werden wie Methoden dieser Struktur verwendet.

Methoden empfangen eine Strukturinstanz als ersten Parameter mit `self`.
`self` steht für den gesamten Wert der Struktur und wird durch Wertkopie übergeben.

```wave
proto Box {
    fun drucken(self) {
        println("Größe={}, Gewicht={}", self.size, self.weight);
    }

    fun hinzugefügte_größe(self, x: i32) -> i32 {
        return self.size + x;
    }
}
```

`proto`-Blöcke müssen sich nicht im selben Datei wie die Strukturerklärung befinden, und mehrere `proto`-Blöcke können verwendet werden, um Methoden für dieselbe Struktur verteilt zu definieren.

Methodenaufrufe verwenden die Punktnotation und funktionieren wie normale Funktionsaufrufe.

```wave
b.drucken();
var n: i32 = b.hinzugefügte_größe(5);
```

---

## Verwendung von Strukturen als Funktionsargumente

Strukturen werden bei der Übergabe als Funktionsargumente durch Wertkopie verarbeitet.
Selbst wenn die Felder einer Struktur innerhalb der Funktion geändert werden, wird die Strukturinstanz auf der aufrufenden Seite nicht beeinflusst.

```wave
fun berechne(box: Box) -> i32 {
    return box.size * 2;
}
```

Auch bei der Rückgabe von Strukturen als Funktionswerte erfolgt eine Wertkopie.
Dieses Verhalten gewährleistet die Unveränderlichkeit der Struktur und einen vorhersehbaren Datenfluss.

---

## Verschachtelte Strukturen

In Wave können Strukturen als Feldtypen andere Strukturen verwenden.
Da Strukturen vollständige Typen sind, können sie problemlos andere Strukturen enthalten und beliebig verschachtelt werden.

```wave
struct Position {
    x: i32;
    y: i32;
}

struct Spieler {
    name: str;
    pos: Position;
}
```

Auf die Felder verschachtelter Strukturen wird mit kontinuierlicher Punktnotation zugegriffen.

```wave
var p: Spieler = Spieler {
    name: "Alice";
    pos: Position { x: 10; y: 20; };
};

println("Spieler X: {}", p.pos.x);
println("Spieler Y: {}", p.pos.y);
```

In Struktur-Literalen können weitere Struktur-Literale verschachtelt werden,
wobei auch hier alle Initialisierungsregeln für Felder gleich angewendet werden.

---

## Struktur-Array

Strukturen können als Elementtypen in Arrays verwendet werden.
Die Array-Syntax in Wave verwendet das Format `array<Typ, Länge>`, und die Typen der Strukturen können direkt spezifiziert werden.

```wave
var spieler: array<Spieler, 3> = [
    Spieler { name: "A"; pos: Position { x: 1; y: 2; }; },
    Spieler { name: "B"; pos: Position { x: 3; y: 4; }; },
    Spieler { name: "C"; pos: Position { x: 5; y: 6; }; }
];
```

Beim Zugriff auf Elemente eines Struktur-Arrays wird zuerst der Array-Index verwendet, gefolgt von Punktnotation, um auf interne Felder der Struktur zuzugreifen.

```wave
println("Zweiter Spieler X: {}", spieler[1].pos.x);
```

---

## Fähigkeit zur Grundoperation von Strukturen

Da Wave-Strukturen benutzerdefinierte Typen sind, nehmen sie nicht automatisch an arithmetischen oder Vergleichsoperationen teil.

Wenn man Gleichheitsvergleiche, Sortierungen, Hashings oder numerische Operationen für Strukturen benötigt,
müssen diese Aktionen ausdrücklich über `proto`-Blöcke definiert werden.
Wave bietet keine impliziten Operatoren für Strukturen,
alle Aktionen müssen ausdrücklich definiert werden.