---
sidebar_position: 12
---

# Globale/Regionale Speicherregeln

Wave unterscheidet klar zwischen Speicherdauer (storage) und Änderbarkeit (mutability) auf Schlüsselebene.

## Zusammenfassung

- Globale Konstante: `const`
- Globale Speichervariable: `static`
- Regionale Variable: `var`, `let`, `let mut`

Das bedeutet, **auf der obersten Ebene werden nur `const` und `static` deklariert**, während **innerhalb von Funktionen/Blöcken nur `var`- und `let`-Serien deklariert werden**.

## Globale Konstante: `const`

`const` wird als Konstante zur Kompilierzeit behandelt und kann nicht neu zugewiesen werden.

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## Globale Speichervariable: `static`

`static` ist eine Variable mit globalem Speicherplatz.
Es ist neu zuweisbar und wird auf den 0-Wert des Typs initialisiert, falls kein Anfangswert angegeben wird.

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## Lokale Variable: `var` / `let`

Im Inneren von Funktionen oder Blöcken werden nur lokale Variablen-Schlüsselwörter verwendet.

```wave
fun main() -> i32 {
    var x: i32 = 10;
    let y: i32 = 20;
    let mut z: i32 = 30;

    x = x + 1;
    z = z + 1;
    return x + y + z;
}
```

## Einschränkungen

- `var`, `let` können nicht auf der Top-Ebene verwendet werden.
- `const`, `static` können nicht innerhalb von Funktionen oder Blöcken verwendet werden.
- `let` ist unveränderlich und kann nicht neu zugewiesen werden.
