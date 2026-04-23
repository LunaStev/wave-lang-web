---
sidebar_position: 14
---

# Match-Anweisung

## Einführung

Die `match`-Anweisung ist eine Kontrollstruktur, die einen Wert mit mehreren Mustern vergleicht und verzweigt.
Es ist nützlich, wenn die Absicht der Verzweigung klarer als mit einer `if / else if`-Kette ausgedrückt werden soll.

Derzeit ist `match` in Wave eine **Anweisung** und unterstützt keine Ausdrucksform, die direkt zu einem Wert ausgewertet wird.
Das bedeutet, `var x = match (...) { ... }`-ähnliche Formen können nicht verwendet werden.

---

## Grundsyntax

```wave
match (Wert) {
    Muster1 => {
        // Ausführungsblock
    }
    Muster2 => {
        // Ausführungsblock
    }
    _ => {
        // Standardblock
    }
}
```

Syntaxregel:

- Der Header verwendet das Format `match (expr)`.
- Jeder Arm verwendet das Format `Muster => { Block }`.
- Der Arm-Körper muss `{ ... }`-Block sein.
- Zwischen den Armen können nur Zeilenumbrüche verwendet werden, oder `,` bzw. `;` als Trennzeichen.

---

## Arten von Mustern

Derzeit werden die folgenden drei Muster unterstützt.

1. Ganzzahl-Literal-Muster

```wave
0 => { ... }
1 => { ... }
42 => { ... }
```

2. Bezeichner-Muster

```wave
Off => { ... }
On => { ... }
```

Das Bezeichner-Muster wird für Werte verwendet, die als **ganzzahlige Konstanten wie enum-Varianten** interpretiert werden können.

3. Wildcard-Muster (`_`)

```wave
_ => { ... }
```

Dies ist der Standardarm, der ausgeführt wird, wenn kein Muster übereinstimmt.

---

## Typen des Match-Ziels

Nach der aktuellen Implementierung müssen die Zielwerte von `match` **ganzzahlig/enum-artig** sein.
Strings, Gleitkommazahlen und Strukturen können nicht als `match`-Ziele verwendet werden.

---

## Beispiel 1: Ganzzahl-Verzweigung

```wave
fun classify_num(v: i32) -> i32 {
    var result: i32 = -1;

    match (v) {
        0 => {
            result = 10;
        }
        1 => {
            result = 20;
        }
        _ => {
            result = 99;
        }
    }

    return result;
}
```

---

## Beispiel 2: Enum-Verzweigung

```wave
enum Mode -> i32 {
    Off = 0,
    On = 1,
    Unknown = 2
}

fun classify_mode(m: Mode) -> i32 {
    match (m) {
        Off => {
            return 1;
        }
        On => {
            return 2;
        }
        _ => {
            return 3;
        }
    }
}
```

---

## Funktionsweise

- Ähnlich wie bei `switch` wird nur **ein übereinstimmender Arm** ausgeführt.
- Es gibt kein automatisches Durchfallen.
- Der `_`-Arm darf maximal einmal verwendet werden.
- Es ist erlaubt, keinen `_`-Arm zu verwenden. (Wenn kein Arm übereinstimmt, wird keiner ausgeführt)

---

## Vorsichtsmaßnahmen

1. Keine doppelten Fälle erlaubt

- Wenn der gleiche Fall doppelt deklariert wird, tritt ein Compiler-Fehler auf.

2. `_`-Duplikate sind nicht erlaubt

- Ein `_`-Arm kann nicht mehr als einmal deklariert werden.

3. Ein Arm-Block ist erforderlich

- Nach `=>` muss `{ ... Sie müssen einen `}\` Block verwenden.

4. Das Muster muss konstant sein.

- Für Identifikationsmuster sollten nur Werte verwendet werden, die als Ganzzahlkonstante/enum-Variante interpretiert werden können.

---

## Zusammenfassung

`match` von Wave ist eine Anweisungskontrollstruktur, die für Ganzzahl-/Enum-Zweige optimiert ist.
Es verwendet die Struktur `=>` + Block, wobei Standardzweige mittels Wildcard (`_`) erstellt werden können.

Je mehr Zweigfälle es gibt, desto lesbarer wird es im Vergleich zu `if / else if` und es kann die Absicht klarer ausdrücken.
