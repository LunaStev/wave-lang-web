---
sidebar_position: 6
---

# Zeiger

## Wave-Explizit-Speichermodell

Das Zeigerdesign von Wave basiert auf dem **Wave-Explizit-Speichermodell**.
Dieses Modell zielt darauf ab, Zeiger und Arrays nicht als syntaktische Tricks oder Bibliotheksabstraktionen, sondern als **explizite Speichertypen auf Sprachebene** zu definieren.

Gemäß diesem Entwurf drückt Wave Zeiger als Typ `ptr<T>` aus,
was klar verdeutlicht, dass es sich um einen Typ handelt, der auf die Speicheradresse zeigt, die einen bestimmten Wert des Typs `T` speichert.
Dieser Ansatz behandelt Zeiger als Teil des Typsystems, anstatt als Operatoren oder Deklarationssyntax,
was es ermöglicht, Speicherstrukturen intuitiver und konsistenter zu beschreiben.

---

In Wave sind Zeiger explizit als Typ `ptr<T>` definiert.
Zum Adressenerhalten wird `&` und für Dereferenzierungen `deref` verwendet.

## Deklaration und Initialisierung

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

Zeigertypen können verschachtelt werden.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## Dereferenzierung

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // Gibt 10 aus
deref p = 20;
println("{}", x); // Gibt 20 aus
```

## `null` Literal-Regeln

`null` ist ein **offizielles Literal**. Es ist kein Bezeichner und kann nicht als Variablenname verwendet werden.

Kernregeln:

- `null` kann nur einem `ptr<T>` Typen zugewiesen werden.
- Es kann nicht an Nicht-Zeigertypen wie `i32`, `bool`, `array<...>` zugewiesen werden.
- Zeiger können nicht mit Ganzzahlliteralen (`0`, `123`, `-1` usw.) initialisiert werden. Nutzen Sie explizit `null`.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // FEHLER
// var b: bool = null; // FEHLER
```

## Zeigerarithmetik

Wave unterstützt die folgende Zeigerarithmetik.

- `ptr + int`: Zeigervorschub basierend auf GEP
- `int + ptr`: gleiche Operation
- `ptr - int`: Zeigerrückschub basierend auf GEP
- `ptr - ptr`: Berechnung der Byte-Differenz als `i64`

Hinweis:

- `ptr<T> +/- n` bewegt sich basierend auf der Größe von `T` (`sizeof(T)`).
- Das bedeutet, `ptr<i32> + 3` bewegt sich um `+12` Bytes.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base; // 12 (Byte-Differenz)
```

## Zeigervergleich

Zeiger können zum Vergleichen verwendet werden.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## Beziehung zu Arrays

Zeigerarray:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

Array-Zeiger:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## Sicherheitsnotizen

Wave verwendet derzeit kein auf Eigentum/Lebensdauer basierendes Zeigersicherheitsmodell wie Rust.
Daher wird eine Dereferenzierung von `null` nicht automatisch verhindert. Es wird empfohlen, ein Muster zur expliziten `null`-Überprüfung vor `deref` zu implementieren.
