---
sidebar_position: 2
---

# jenis data

Dokumen ini menerangkan pelbagai jenis data yang disediakan oleh bahasa pengaturcaraan Wave.
Dalam Wave, anda boleh menyimpan dan mengendalikan nilai melalui beberapa jenis jenis data, dan setiap jenis data dengan jelas mentakrifkan cara data dinyatakan dan cara memori diproses.

Menentukan jenis data dengan jelas ialah salah satu falsafah reka bentuk teras Wave.
Wave ialah sistem **benar-benar kuat**. All `var`/`fun` declarations and variable initializations require explicit types, and context-based type inference is not supported. Oleh itu, jika tiada jenis seperti `var x = 1;`, kompilasi akan gagal.
Ini membolehkan anda menyatakan dengan jelas maksud kod anda, menangkap ralat awal pada masa penyusunan, dan memastikan penggunaan memori yang cekap dan pelaksanaan yang stabil.

---

## jenis integer

Jenis integer digunakan untuk menyimpan nilai integer.
Secara lalai, Wave sering menggunakan `i32` (integer 32-bit yang ditandatangani) dan

Jenis integer yang ditandatangani tersedia daripada `i8` hingga `i1024`, dan jenis integer yang tidak ditandatangani tersedia daripada `u8` hingga `u1024`.
Ini boleh memenuhi pelbagai keperluan, daripada pengiraan mudah kepada operasi integer besar, pemprosesan kriptografi dan pengaturcaraan sistem peringkat rendah.

Berikut ialah contoh mudah menggunakan jenis integer:

```wave
var a: i32 = 100;
var b: u32 = 200;
```

---

## jenis titik terapung

Jenis titik terapung digunakan untuk menyimpan nilai sebenar.
Jenis titik terapung lalai yang digunakan dalam Wave ialah `f32`, dan jika ketepatan yang lebih tinggi diperlukan, jenis saiz yang lebih besar boleh dipilih.

Wave menyediakan jenis titik terapung daripada `f32` kepada `f128`, membolehkan pengguna memilih antara ketepatan pengiraan dan prestasi.
Ini membolehkan anda mengendalikan operasi nombor nyata untuk pelbagai tujuan, daripada pengiraan berangka am kepada pengiraan saintifik yang tepat.

Di bawah ialah contoh menggunakan jenis titik terapung.

```wave
var pi: f32 = 3.14;
var e: f64 = 2.71828;
```

---

## jenis rentetan

Jenis rentetan digunakan untuk mengendalikan data teks.
Dalam Wave, rentetan diisytiharkan menggunakan kata kunci `str`, dan literal rentetan dinyatakan dengan membungkusnya dalam tanda petikan berganda (`"`).

Rentetan digunakan secara meluas dalam atur cara untuk mengeluarkan mesej, memproses input pengguna dan memproses data berasaskan teks.

Berikut ialah contoh asas menggunakan jenis rentetan.

```wave
var text: str = "Hello Wave";
```

---

## Jenis jongkong

Jenis Boolean ialah jenis data yang mewakili nilai True atau False.
Wave menggunakan jenis `bool` dan nilainya ditentukan sebagai `true` atau `false`.

Jenis Boolean memainkan peranan penting dalam pernyataan bersyarat dan gelung dan digunakan untuk mengawal aliran program.

```wave
var isActive: bool = true;
var isAvailable: bool = true;
```

---

## jenis watak

Jenis aksara digunakan untuk menyimpan aksara tunggal.
Ia diisytiharkan menggunakan kata kunci `char` dan boleh mengandungi hanya satu aksara.

Character literals are expressed by surrounding them with single quotation marks (`'`).

```wave
var letter: char = 'A';
```

## jenis bait

Jenis bait digunakan untuk menyimpan data yang bersaiz 1 bait.
Jenis ini berguna terutamanya apabila pemprosesan data peringkat rendah diperlukan, seperti pemprosesan data binari, input/output fail dan pengaturcaraan rangkaian.

Dalam Wave, jenis bait diisytiharkan menggunakan kata kunci `byte`.

```wave
var byteData: byte = 0xFF;
```

## jenis penunjuk

Jenis penunjuk digunakan untuk merujuk terus alamat memori.
Dalam Wave, jenis penunjuk diisytiharkan dalam bentuk `ptr<T>`.

Penunjuk digunakan apabila akses memori tahap rendah diperlukan dan digunakan terutamanya dalam pengaturcaraan sistem atau kod kritikal prestasi.

```wave
var ptr: ptr<T> = &someVariable;
```

## `null` Literal

Wave hingga `null` ialah literal berkanun.

- `null` bukan pengecam. (Tidak tersedia dalam format `var null = ...`)
- `null` hanya boleh diberikan kepada jenis `ptr<T>`.

```wave
var p: ptr<i32> = null;  // OK

// var n: i32 = null;    // ERROR
// var b: bool = null;   // ERROR
```

## jenis tatasusunan

Jenis tatasusunan digunakan untuk menyimpan berbilang nilai secara berurutan daripada jenis data yang sama.
Dalam Wave, tatasusunan diisytiharkan dalam bentuk `array<type, size>`, dan saiz tatasusunan dinyatakan dengan jelas pada masa penyusunan.

Ini menjadikan struktur memori jelas dan membolehkan akses yang stabil.

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Setiap jenis data direka bentuk supaya anda boleh memilih julat dan saiz yang sesuai dengan tujuan dan cirinya.
Memilih jenis data yang betul membolehkan anda mengurus memori dengan cekap dan juga meningkatkan kestabilan dan kebolehbacaan kod anda.
