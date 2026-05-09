---
sidebar_position: 6
---

# penunjuk

## Wave Explicit Memory Type Model

Reka bentuk penunjuk Wave adalah berdasarkan **Model Jenis Memori Eksplisit Wave**.
Model ini bertujuan untuk mentakrifkan penunjuk dan tatasusunan sebagai jenis ingatan eksplisit pada peringkat bahasa, dan bukannya sebagai helah sintaksis atau abstraksi perpustakaan.

Mengikut reka bentuk ini, Wave menyatakan penunjuk sebagai jenis `ptr<T>`.
Ini jelas mendedahkan bahawa ia adalah jenis yang menunjuk ke alamat memori yang menyimpan nilai jenis tertentu, `T`.
Pendekatan ini menganggap penunjuk sebagai sebahagian daripada sistem jenis dan bukannya sebagai pengendali atau sintaks pengisytiharan.
Membolehkan struktur ingatan dinyatakan dengan lebih intuitif dan konsisten.

---

Dalam Wave, penunjuk ialah jenis eksplisit jenis `ptr<T>`.
Gunakan `&` untuk pemerolehan alamat dan `deref` untuk penolakan rujukan.

## Pengisytiharan dan permulaan

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

Jenis penunjuk boleh bersarang.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## rujukan belakang

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## Peraturan Literal `null`

`null` ialah **harfiah kanonik**. Ia bukan pengecam dan tidak boleh digunakan sebagai nama pembolehubah.

Peraturan teras:
- `null` hanya boleh diberikan kepada sasaran `ptr<T>`.
- Ia tidak boleh diberikan kepada jenis bukan penuding seperti `i32`, `bool` dan `array<...>`.
- Penunjuk tidak boleh dimulakan dengan literal integer (`0`, `123`, `-1`, dsb.). Gunakan `null` secara eksplisit.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // ERROR
// var b: bool = null; // ERROR
```

## aritmetik penunjuk

Wave menyokong aritmetik penunjuk berikut:

- `ptr + int`: Kemajuan penunjuk berasaskan GEP
- `int + ptr`: Operasi yang sama
- `ptr - int`: Penunjuk berasaskan GEP ke belakang
- `ptr - ptr`: Kira perbezaan bait `i64`

mata:
- `ptr<T> +/- n` bergerak berdasarkan saiz `T` (`sizeof(T)`).
- Dalam erti kata lain, `ptr<i32> + 3` bergerak ke `+12` bait.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (byte diff)
```

## perbandingan penunjuk

Penunjuk boleh digunakan untuk perbandingan.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## Hubungan dengan Arrays

Tatasusunan penunjuk:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

Penunjuk tatasusunan:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## nota keselamatan

Wave pada masa ini tidak mempunyai model keselamatan penunjuk berasaskan pemilikan/seumur hidup seperti Rust.
Oleh itu, dereference `null` tidak dihalang secara automatik. Kami mengesyorkan corak yang secara eksplisit menyemak `deref` sebelum `null`.
