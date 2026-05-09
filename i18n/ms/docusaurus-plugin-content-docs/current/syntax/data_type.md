---
sidebar_position: 2
---

# Jenis Data

Dokumen ini menerangkan pelbagai jenis data yang disediakan dalam bahasa pengaturcaraan Wave.
Dalam Wave, pelbagai jenis data membolehkan penyimpanan dan pengendalian nilai, dan setiap jenis data mendefinisikan cara representasi dan pengendalian memori.

Menetapkan jenis data dengan jelas adalah salah satu filosofi reka bentuk utama Wave.
Wave adalah sistem **tipus tegar lengkap**. Semua deklarasi `var`/`fun` dan penginisialisasian pembolehubah memerlukan jenis yang jelas, dan inferensi jenis berdasarkan konteks tidak disokong. Oleh itu, jika jenis tidak ditentukan seperti `var x = 1;`, kompilasi akan gagal.
Ini membolehkan niat kod dinyatakan dengan jelas, mengenal pasti kesilapan lebih awal semasa waktu pengkompilasian, dan memastikan penggunaan memori yang efisien serta pelaksanaan yang stabil.

---

## Jenis Integer

Jenis integer digunakan untuk menyimpan nilai integer.
Dalam Wave, `i32` (integer 32-bit bertanda) dan `u32` (integer 32-bit tidak bertanda) sering digunakan, tetapi anda dapat menyesuaikan saiz bit integer dengan sangat terperinci jika perlu.

Jenis integer bertanda tersedia dari `i8` hingga `i1024`, dan jenis integer tidak bertanda tersedia dari `u8` hingga `u1024`.
Ini memenuhi pelbagai keperluan dari pengiraan mudah hingga pengendalian integer besar, pemprosesan kriptografi, dan pengaturcaraan sistem rendah.

Berikut adalah contoh mudah menggunakan jenis integer.

```wave
var a: i32 = 100;
var b: u32 = 200;
```

---

## Jenis Point Apung

Jenis point apung digunakan untuk menyimpan nilai nombor nyata.
Jenis point apung yang biasa digunakan dalam Wave adalah `f32`, dan jika keperluan ketepatan lebih tinggi, anda boleh memilih jenis yang lebih besar.

Wave menyediakan jenis point apung dari `f32` hingga `f128`, membolehkan pengguna memilih antara ketepatan pengiraan dan prestasi.
Ini membolehkan pelbagai pengendalian operasi nombor sebenar dari pengiraan numerik umum hingga pengiraan saintifik yang tepat.

Berikut adalah contoh menggunakan jenis point apung.

```wave
var pi: f32 = 3.14;
var e: f64 = 2.71828;
```

---

## Jenis Rantaian

Jenis rantaian digunakan untuk mengendalikan data teks.
Dalam Wave, anda menggunakan kata kunci `str` untuk mengisytiharkan rantaian, dan literal rantaian diwakili dengan tanda petikan besar (`"`).

Rantaian digunakan secara meluas dalam program untuk output mesej, pengendalian input pengguna, dan pengendalian data berasaskan teks.

Berikut adalah contoh penggunaan asas jenis rantaian.

```wave
var text: str = "Hello Wave";
```

---

## Jenis Boolean

Jenis boolean adalah jenis data yang mewakili nilai benar (True) atau salah (False).
Dalam Wave, jenis `bool` digunakan, dan nilainya ditentukan sebagai `true` atau `false`.

Jenis boolean memainkan peranan penting dalam penyataan kondisi dan gelung, dan digunakan untuk mengawal aliran program.

```wave
var isActive: bool = true;
var isAvailable: bool = true;
```

---

## Jenis Watak

Jenis watak digunakan untuk menyimpan satu aksara.
Dikenali dengan menggunakan kata kunci `char`, ia boleh menyimpan hanya satu aksara.

Literal karakter diketengahkan menggunakan tanda petik kecil (`'`).

```wave
var letter: char = 'A';
```

## Jenis Byte

Jenis Byte digunakan untuk menyimpan data berukuran 1 byte.
Jenis ini biasanya berguna dalam pemprosesan data rendah seperti pemprosesan data binari, input/output fail, dan pengaturcaraan rangkaian.

Dalam Wave, jenis byte dinyatakan menggunakan kata kunci `byte`.

```wave
var byteData: byte = 0xFF;
```

## Jenis Penunjuk

Jenis Penunjuk digunakan untuk merujuk alamat memori secara langsung.
Wave에서는 `ptr<T>` 형태로 포인터 타입을 선언합니다.

Penunjuk digunakan apabila akses memori rendah diperlukan dan biasanya digunakan dalam pengaturcaraan sistem atau kod yang memerlukan prestasi tinggi.

```wave
var ptr: ptr<T> = &someVariable;
```

## `null` 리터럴

Wave에서 `null`은 정식 리터럴입니다.

- `null`은 식별자가 아닙니다. (`var null = ...` 형태 불가)
- `null`은 오직 `ptr<T>` 타입에만 대입할 수 있습니다.

```wave
var p: ptr<i32> = null;  // OK

// var n: i32 = null;    // ERROR
// var b: bool = null;   // ERROR
```

## Jenis Array

Jenis Array digunakan untuk menyimpan beberapa nilai dengan jenis data yang sama secara berurutan.
Dalam Wave, array dinyatakan dalam bentuk `array<jenis, saiz>` dan saiz array ditentukan dengan jelas semasa waktu kompilasi.

Ini memudahkan struktur memori menjadi jelas dan membolehkan akses yang stabil.

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Setiap jenis data direka untuk membolehkan pemilihan julat dan saiz yang sesuai dengan keperluan dan ciri.
Dengan memilih jenis data yang tepat, memori dapat diuruskan dengan cekap, dan kestabilan serta kebolehcetakan kod juga meningkat dengan ketara.
