---
sidebar_position: 9.5
---

# export

`export` mendedahkan fungsi yang dilaksanakan dalam Wave sebagai simbol pemaut luaran. Jika `extern` mengimport fungsi luaran ke dalam Wave, `export` membolehkan fungsi Wave dipanggil daripada C, Rust, C++, Zig atau bahasa native lain melalui fail object.

---

## Gambaran keseluruhan

FFI Wave mempunyai dua arah.

- `extern(c)` mengisytiharkan fungsi daripada pustaka luaran supaya kod Wave boleh memanggilnya.
- `export(c)` mengeluarkan badan fungsi Wave sebagai simbol ABI luaran.

Kedua-dua bentuk berkongsi bentuk kepala ABI yang sama, tetapi maknanya bertentangan. Dengan `extern`, badan fungsi berada di luar Wave. Dengan `export`, badan fungsi berada di dalam Wave.

Buat masa ini, satu-satunya ABI export yang disokong ialah `c`.

---

## Export per fungsi

Bentuk asas ialah:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Kod ini menghasilkan simbol awam bernama `add`. Fail object yang dijana boleh dipautkan dengan kod luaran yang menjangka C ABI.

---

## Nama simbol

Nama fungsi Wave dan nama simbol pemaut yang diexport boleh berbeza.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Di sini nama Wave ialah `add_i32`, tetapi fail object mendedahkan `wave_add_i32`. Bahasa luaran mesti mengisytiharkan dan memanggil nama simbol tersebut.

---

## Export blok

Beberapa fungsi yang menggunakan ABI sama boleh dikumpulkan dalam satu blok.

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

Export blok menggunakan nama setiap fungsi sebagai simbol awam. `export(c, "symbol") { ... }` tidak dibenarkan kerana satu alias untuk banyak fungsi akan menyebabkan perlanggaran simbol.

---

## Memanggil daripada C

Bina fail Wave sebagai fail object.

```bash
wavec build math.wave --emit=obj -o math.o
```

Isytiharkan simbol yang diexport dalam C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

Kemudian pautkan kod C dan fail object Wave dengan pemaut biasa.

```bash
cc main.c math.o -o app
```

---

## extern dan export

`extern(c)` bermaksud Wave menggunakan simbol luaran.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` bermaksud kod luaran boleh menggunakan simbol Wave.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

Kedua-duanya ialah FFI, tetapi arahnya berbeza.

---

## Had

- Hanya `export(c)` disokong.
- Fungsi yang diexport tidak boleh generic.
- Export blok tidak boleh menggunakan satu alias simbol bersama.
- Untuk interop yang stabil, buat masa ini utamakan integer, floating-point, boolean dan pointer.
- Jenis aggregate seperti struct dan array memerlukan peraturan ABI yang lebih ketat dan mungkin distabilkan kemudian.
- `export` paling berguna untuk fail object dan pustaka, bukan executable biasa.

---

## Kegunaan disyorkan

- Menyediakan fungsi utiliti Wave sebagai pustaka C ABI.
- Memanggil fungsi Wave daripada Rust, C, C++, Zig atau bahasa native lain.
- Menyambungkan modul `front`, `utils` atau modul native tanpa runtime yang ditulis dalam Wave ke sistem build sedia ada secara berperingkat.
- Membolehkan Vex atau alat build lain memautkan object Wave ke dalam projek luaran.
