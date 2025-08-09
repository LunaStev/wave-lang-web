---
sidebar_position: 6
---

# Zeiger

## Einführung

Dieses Dokument beschreibt, wie Wave Zeiger verwendet.
Wave bietet als Sprache, die Systemprogrammierung auf niedriger Ebene unterstützt, Zeigerfunktionalität an, um explizite Speicheradressmanipulationen zu ermöglichen.
Ein Zeiger ist eine Variable, die auf eine Speicheradresse eines bestimmten Typs verweist und ermöglicht direkten Zugriff und Änderung von Werten.

---

## Zeigerdeklaration

In Wave werden Zeiger im Format `ptr<Typ>` deklariert. Zum Beispiel kann ein ganzzahliger Zeiger wie folgt deklariert werden:

```wave
var p: ptr<i32>;
```

Diese Deklaration erstellt den Zeiger `p`, der auf einen Wert des Typs `i32` zeigt.

---

## Zeigerinitialisierung

Ein Zeiger kann mit der Adresse einer Variablen unter Verwendung des `&` Operators initialisiert werden:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

Hier bezieht sich `&a` auf die Speicheradresse der Variable `a`, und `p` wird zum Zeiger, der auf diese Adresse zeigt.

---

## Zeiger-Dereferenzierung

Um den Wert zu lesen oder zu ändern, auf den ein Zeiger zeigt, wird das Schlüsselwort `deref` verwendet. Dies wird Dereferenzierung genannt:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // Gibt 10 aus

deref p = 20;
println("{}", a); // Gibt 20 aus
```

---

## NULL-Zeiger

In Wave werden Null-Zeiger durch das Schlüsselwort `null` dargestellt.
Zeigervariablen können mit `null` initialisiert werden, wobei sie in diesem Fall keinen gültigen Speicher verweisen:

```wave
var p: ptr<i32> = null;
```

Der Compiler wird einen Fehler auslösen, wenn versucht wird, einen Null-Zeiger zu dereferenzieren.

---

## Mehrfachzeiger

Wave unterstützt Mehrfachzeiger. Zeiger können in mehreren Ebenen verschachtelt deklariert und verwendet werden:

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

---

## Arrays und Zeiger

Zeiger können sowohl auf Array-Elemente als auch auf das Array selbst zeigen.

### Zeiger auf Array-Elemente

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];

println("deref arr[0] = {}, deref arr[1] = {}", deref arr[0], deref arr[1]); // 10, 20
```

### Zeiger auf das gesamte Array

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // Gibt Speicheradresse aus
```

---

## Sicherheit und Eigentum

Wave führt ein System ähnlich dem von Rust ein, um Speicherstabilität bei der Verwendung von Zeigern durch Besitz- und Lebensdauer zu gewährleisten.
Daher werden ungültige Zeigerdereferenzierung, doppelte Freigabe und Dangling-Pointer-Probleme gründlich überprüft, um sie zu verhindern.

```wave
fun main() {
    let x: i32 = 42;
    let p: ptr<i32> = &x;
    
    println("x = {}", deref p);
    
    deref p = 99;
    println("x = {}", x);
}
```

Ausgabe:

```text
x = 42
x = 99
```

---

## Fazit

Pointer sind eine der wichtigsten Funktionen in Wave, die leistungsstarkes Low-Level-Programmieren ermöglichen.
Sie sind sehr nützlich für die Systementwicklung, die native Bibliotheken und die Hardwaresteuerung, wo eine direkte Speicherverwaltung erforderlich ist, und dank der sicheren Compilerstruktur von Wave können die Risiken, die bei der Verwendung von Zeigern auftreten können, wirksam vermieden werden.