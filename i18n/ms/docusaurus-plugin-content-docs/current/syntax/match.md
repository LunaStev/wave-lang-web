---
sidebar_position: 14
---

# Kenyataan perlawanan

## pengenalan

Pernyataan `match` ialah pernyataan kawalan yang membandingkan satu nilai dengan berbilang corak dan cawangan.
Ini berguna untuk menyatakan niat cawangan dengan lebih jelas daripada rantai `if / else if`.

Pada masa ini, `match` daripada Wave ialah **penyataan** dan bentuk ungkapan yang dinilai secara langsung sebagai nilai tidak disokong.
Iaitu, borang seperti `var x = match (...) { ... }` tidak boleh digunakan.

---

## tatabahasa asas

```wave
match (value) {
    pattern1 => {
        // blok pelaksanaan
    }
    pattern2 => {
        // blok pelaksanaan
    }
    _ => {
        // blok lalai
    }
}
```

Peraturan tatabahasa:
- Pengepala menggunakan format `match (expr)`.
- Setiap lengan menggunakan format `pattern => { block }`.
- Badan lengan mestilah blok `{ ... }`.
- Anda hanya boleh menggunakan pemisah baris antara lengan, atau anda boleh menggunakan `,` atau `;` sebagai pemisah.

---

## jenis corak

Terdapat tiga corak yang disokong pada masa ini di bawah.

1. corak literal integer

```wave
0 => { ... }
1 => { ... }
42 => { ... }
```

2. corak pengecam

```wave
Off => { ... }
On => { ... }
```

Corak pengecam menggunakan **nilai yang boleh ditafsirkan sebagai pemalar integer** seperti varian enum.

3. Corak kad liar (`_`)

```wave
_ => { ... }
```

Ini ialah lengan lalai yang dilaksanakan apabila tiada corak dipadankan.

---

## Memadankan jenis sasaran

Setakat pelaksanaan semasa, nilai sasaran `match` mestilah **siri integer/enum**.
Rentetan, nombor titik terapung, struktur, dsb. tidak boleh digunakan sebagai sasaran `match`.

---

## Contoh 1: Cawangan integer

```wave
fun classify_num(v: i32) -> i32 {
    var result: i32 = -1;

    match (v) {
        0 => {
            result = 10;
        }
        1 => {
            result = 20;
        }
        _ => {
            result = 99;
        }
    }

    return result;
}
```

---

## Contoh 2: percabangan enum

```wave
enum Mode -> i32 {
    Off = 0,
    On = 1,
    Unknown = 2
}

fun classify_mode(m: Mode) -> i32 {
    match (m) {
        Off => {
            return 1;
        }
        On => {
            return 2;
        }
        _ => {
            return 3;
        }
    }
}
```

---

## Peraturan Tingkah Laku

- Sama seperti keluarga `switch`, **hanya satu lengan yang sepadan akan berjalan**.
- Tiada kegagalan automatik.
- Lengan `_` boleh digunakan paling banyak sekali.
- `_` Walaupun tanpa lengan, ia dibenarkan secara tatabahasa. (Jika tiada lengan yang sepadan, tiada lengan akan dilaksanakan)

---

## Langkah berjaga-jaga

1. Tiada kes pendua
- Pengisytiharan pendua bagi kes yang sama akan mengakibatkan ralat penyusunan.

2. `_` Tiada pertindihan
- Lengan `_` tidak boleh diisytiharkan lebih daripada sekali.

3. blok lengan diperlukan
- Anda mesti menggunakan blok `=>` selepas `{ ... }`.

4. Corak mestilah malar
- Untuk corak pengecam, hanya gunakan nilai yang boleh ditafsirkan sebagai pemalar integer/varian enum.

---

## ringkasan

`match` daripada Wave ialah pernyataan kawalan pernyataan yang dioptimumkan untuk percabangan integer/enum.
Ia menggunakan struktur blok `=>` + dan boleh mengkonfigurasi cawangan lalai melalui kad bebas (`_`).

Lebih banyak kes bercabang, lebih mudah dibaca daripada `if / else if` dan lebih jelas ia mendedahkan maksudnya.
