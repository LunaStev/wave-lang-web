---
sidebar_position: 1
---

# Standardbibliothek (std)

In diesem Abschnitt wird die tatsächliche Verwendung der Wave-Standardbibliothek erläutert.

## Module

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

## Verwendungsprinzipien

- In hochrangigem Code wird `std::*` verwendet.
- Betriebssystemabhängige Funktionen sind hinter `std::sys::*` verborgen.
- `std::libc` wird nur verwendet, wenn C-Kompatibilität erforderlich ist.

## Fehlerbehandlungsrichtlinien

Viele Funktionen folgen diesen Konventionen.

- `>= 0`: Erfolg
- `< 0`: Fehler (`-errno` oder modulspezifischer Fehlercode)

Beispiel:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // Fehlerbehandlung
        return;
    }

    // raw enthält eine NUL-terminierte Zeichenfolge
}
```
