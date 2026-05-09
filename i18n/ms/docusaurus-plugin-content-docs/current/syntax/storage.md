---
sidebar_position: 12
---

# Peraturan storan global/tempatan

Wave dengan jelas membezakan antara storan dan kebolehubahan pada peringkat kata kunci.

## ringkasan

- Pemalar global: `const`
- Pembolehubah yang disimpan secara global: `static`
- Pembolehubah setempat: `var`, `let`, `let mut`

Dalam erti kata lain, hanya `const` dan `static` diisytiharkan pada **peringkat atas**,
**Hanya siri `var` dan `let` diisytiharkan dalam fungsi/bahagian dalam kawasan**.

## Pemalar global: `const`

`const` dianggap sebagai pemalar masa kompilasi dan tidak boleh ditugaskan semula.

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## Pembolehubah yang disimpan secara global: `static`

`static` ialah pembolehubah dengan ruang storan global.
Ia boleh ditugaskan semula dan jika tiada nilai awal diberikan, ia akan dimulakan kepada nilai 0 jenis.

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## Pembolehubah setempat: `var` / `let`

Di dalam fungsi atau blok, hanya kata kunci pembolehubah tempatan digunakan.

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

## Kekangan

- `var`, `let` tidak boleh digunakan di peringkat atas.
- `const`, `static` tidak boleh digunakan di dalam fungsi/blok.
- `let` tidak boleh diubah dan tidak boleh ditugaskan semula.
