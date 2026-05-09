---
sidebar_position: 1
---

# Maktaba ya Kawaida (std)

Sehemu hii inaeleza jinsi ya kutumia maktaba ya kawaida ya Wave.

## Moduli

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

## Kanuni za matumizi

- Katika nambari ya kiwango cha juu, tumia `std::*`.
- Vipengele vinavyotegemea mfumo wa uendeshaji hufichwa nyuma ya `std::sys::*`.
- Tumia `std::libc` tu pale ambapo utangamano wa C unahitajika.

## Mkataba wa utunzaji wa makosa

Kazi nyingi hufuata mkataba ufuatao.

- `>= 0`: Mafanikio
- `< 0`: Kushindwa (`-errno` au msimbo wa makosa maalum kwa moduli)

Mfano:

```wave
ingiza("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    ikiwa (n < 0) {
        // Utunzaji wa makosa
        return;
    }

    // raw ina mfuatano wa maandishi unaoishia na NUL
}
```
