---
sidebar_position: 10
---

# Aufzählungstypen (enum) und Typ-Aliase (type alias)

Wave beibehält ein explizites Typsystem, ähnlich wie C,
unterstützt jedoch zur Lesbarkeit und ABI-Stabilität Typ-Aliase (type alias) und
integerbasierte Aufzählungen (enum).

---

## Typ-Alias (Type Alias)

### Übersicht

Das Schlüsselwort `type` verleiht einem bestehenden Typ einen neuen Namen.
Es erstellt keinen neuen Typ, sondern ist eine vollständige Entsprechung (Alias).

```wave
type MyInt = i32;
```

In der obigen Deklaration ist MyInt genau derselbe Typ wie i32.

---

### Merkmale

- Keine Laufzeit-Overhead
- Völlig identisch mit ABI
- Nur zur Kompilierzeit vorhanden
- Kann als repr-Typ von enum verwendet werden

---

### Beispielverwendung

```wave
type Größe = i64;
type Index = u32;

fun add(a: Größe, b: Größe) -> Größe {
    return a + b;
}
```

---

### Typ-Gleichheit

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

Der Typ ist kein neuer Typ, sondern nur ein umbenannter Typ.

---

## Aufzählungstyp (enum)

### Übersicht

Das enum von Wave ist eine ganzzahlbasierte Aufzählung.
Jede Aufzählung muss einen repr-Typ haben.

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### repr-Typ

-> i32 gibt an, in welchem ganzzahligen Typ dieses enum dargestellt wird.

Zulässige repr-Typen:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- `type alias` des entsprechenden Typs

```wave
type MyInt = i32;

enum Beispiel -> MyInt {
    X,
    Y
}
```

---

### Regeln zur Wertzuweisung

- Explizite Werte werden verwendet, wenn vorhanden
- Andernfalls vorheriger Wert + 1
- Wenn kein Startwert vorhanden ist, beginnt es bei 0

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum ist ein Werttyp

Ein enum ist ein ganzzahliger Wert und kann frei als Funktionsargument oder Rückgabewert verwendet werden.

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### Als Konstante verwendet

Eine enum-Variante ist eine Kompilierzeitkonstante.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## Konkretes Beispiel

```wave
type MeineInt = i32;

enum ShaderUniformType -> MeineInt {
    A = 0,
    B,
    C = 10,
    D
}

const X: MeineInt = 123;
const Y: MeineInt = B;
const Z: ShaderUniformType = D;

fun f(t: ShaderUniformType) -> MeineInt {
    return t;
}

fun g(v: MeineInt) -> MeineInt {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```