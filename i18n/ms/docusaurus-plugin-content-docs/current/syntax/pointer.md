---
sidebar_position: 6
---

# Penunjuk

## Model Jenis Memori Eksplisit Wave

Reka bentuk penunjuk Wave berdasarkan **Model Jenis Memori Eksplisit Wave**.
Model ini bertujuan untuk mendefinisikan penunjuk dan array bukan sebagai trik sintaks atau pengabstrakan pustaka, tetapi sebagai **jenis memori eksplisit pada tahap bahasa**.

Menurut reka bentuk ini, Wave mempersembahkan penunjuk dalam bentuk jenis `ptr<T>`, yang dengan jelas menunjukkan bahawa jenis tersebut menunjukkan alamat memori yang menyimpan nilai jenis tertentu `T`.
Pendekatan ini menguruskan penunjuk sebagai sebahagian daripada sistem jenis, bukan sebagai pengendali atau tatabahasa penyataan, memudahkan untuk mempersembahkan struktur memori dengan lebih intuitif dan konsisten.

---

Dalam Wave, jenis penunjuk ditakrifkan dalam format `ptr<T>`.
Pengambilan alamat dilakukan dengan menggunakan `&`, dan referensi balik menggunakan `deref`.

## Penyataan dan Pengawalan

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

Jenis penunjuk boleh ditompok.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## Rujukan Terbalik

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## Peraturan Literals `null`

`null` adalah **literally sah**. Ia bukan pengenalan dan tidak boleh digunakan sebagai nama pembolehubah.

Peraturan Utama:

- `null` hanya boleh diberikan kepada objek bertujuan `ptr<T>`.
- Tipe bukan penunjuk seperti `i32`, `bool`, `array<...>` tidak boleh diberi nilai.
- Penunjuk tidak boleh diinisialisasi dengan literan integer (`0`, `123`, `-1`, dll). Menggunakan `null` secara eksplisit.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // ERROR
// var b: bool = null; // ERROR
```

## Arithmetik Penunjuk

Wave menyokong operasi aritmetik penunjuk berikut.

- `ptr + int`: Pembangunan Penunjuk Berdasarkan GEP
- `int + ptr`: Tindakan yang Sama
- `ptr - int`: Pembangunan Penunjuk Berdasarkan GEP
- `ptr - ptr`: Mengira perbezaan byte `i64`.

Point:

- `ptr<T> +/- n` bergerak berdasarkan ukuran `T` (`sizeof(T)`).
- Contohnya `ptr<i32> + 3` bergerak `+12` dalam ukuran byte.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (perbezaan byte) 
```

## Perbandingan Penunjuk

Penunjuk boleh digunakan untuk perbandingan.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## Hubungan dengan Array

Array Penunjuk:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

Pointer Array:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## Nota Keselamatan

Wave bukan model keselamatan penunjuk berasaskan pemilikan/kehidupan seperti Rust pada masa ini.
Oleh itu, ia tidak secara automatik menghalang rujukan terbalik `null`. Disarankan untuk memasukkan pola pemeriksaan `null` secara eksplisit sebelum `deref`.
