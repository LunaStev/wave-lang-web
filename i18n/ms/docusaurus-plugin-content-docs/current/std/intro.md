---
sidebar_position: 1
---

# perpustakaan standard (std)

Bahagian ini menerangkan penggunaan praktikal perpustakaan standard Wave.

## modul

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

## Prinsip penggunaan

- Kod peringkat tinggi menggunakan `std::*`.
- Fungsi bergantung kepada OS tersembunyi di sebalik `std::sys::*`.
- Gunakan `std::libc` hanya apabila keserasian C diperlukan.

## Ralat mengendalikan konvensyen

Banyak fungsi mengikut konvensyen ini:

- `>= 0`: Kejayaan
- `< 0`: Kegagalan (`-errno` atau kod ralat khusus modul)

Contoh:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // Ralat pengendalian
        return;
    }

    // mentah mengandungi rentetan yang ditamatkan NUL
}
```
