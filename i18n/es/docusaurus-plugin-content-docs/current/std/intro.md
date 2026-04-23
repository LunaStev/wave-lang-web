---
sidebar_position: 1
---

# Biblioteca estándar (std)

Esta sección describe el uso práctico de la biblioteca estándar de Wave.

## Módulos

- [buffer](./buffer)
- [env](./env)
- [math](./math)
- [mem](./mem)
- [net](./net)
- [path](./path)
- [string](./string)
- [time](./time)
- [sys](./sys)
- [libc](./libc)

## Principios de uso

- En código de alto nivel, utilice `std::*`.
- Las funciones dependientes del SO están ocultas detrás de `std::sys::*`.
- `std::libc` se usa solo cuando se necesita compatibilidad con C.

## Convención de manejo de errores

Muchas funciones siguen la siguiente convención.

- `>= 0`: éxito
- `< 0`: fracaso (`-errno` o código de error específico del módulo)

Ejemplo:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // Manejo de errores
        return;
    }

    // raw contiene una cadena terminada en NUL
}
```
