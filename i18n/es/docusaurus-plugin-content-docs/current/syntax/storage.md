---
sidebar_position: 12
---

# Reglas de almacenamiento global/local

Wave distingue claramente la duración del almacenamiento y la mutabilidad a nivel de palabras clave.

## Resumen

- Constante global: `const`
- Variable de almacenamiento global: `static`
- Variable local: `var`, `let`, `let mut`

Es decir, **en el nivel superior solo se declaran `const` y `static`** y, **en la región interna de funciones/bloques solo se declaran las series `var` y `let`**.

## Constante global: `const`

`const` se trata como una constante en tiempo de compilación y no se puede reasignar.

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## Variable de almacenamiento global: `static`

`static` es una variable que tiene un espacio de almacenamiento global.
Es reasignable y, si no se proporciona un valor inicial, se inicializa con el valor 0 del tipo.

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## Variable local: `var` / `let`

Dentro de una función o bloque, solo se utilizan palabras clave de variables locales.

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

## Restricciones

- `var`, `let` no se pueden usar en el nivel superior.
- `const`, `static` no se pueden usar dentro de funciones/bloques.
- `let` es inmutable y no se puede reasignar.
