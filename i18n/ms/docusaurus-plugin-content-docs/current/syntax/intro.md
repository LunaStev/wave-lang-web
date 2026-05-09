---
sidebar_position: 1
---

# Fungsi dan Pembolehubah

## pengenalan

Falsafah reka bentuk teras bahasa pengaturcaraan Wave adalah untuk menyediakan persekitaran pembangunan perisian yang cekap dan fleksibel sambil mengekalkan keseimbangan antara prestasi peringkat rendah dan abstraksi peringkat tinggi.
Bahagian ini memperkenalkan elemen paling asas yang membentuk program Wave: fungsi dan pembolehubah.

Fungsi ialah unit teras yang membentuk operasi dan logik program, dan pembolehubah memainkan peranan dalam menyimpan dan mengurus data yang diperlukan dalam proses.
Dengan memahami dengan tepat cara mentakrif dan menggunakan fungsi dan pembolehubah, anda boleh menggunakan struktur dan niat reka bentuk bahasa Wave dengan lebih mendalam.

---

## fungsi

Dalam Wave, fungsi ialah blok kod boleh guna semula yang boleh dilaksanakan secara bebas.
Tindakan atau pengiraan khusus boleh dinyatakan sebagai satu unit, dan boleh dipanggil apabila perlu sepanjang program.

Menggunakan fungsi boleh mengurangkan kod berulang dan secara logik memisahkan atur cara untuk meningkatkan kebolehbacaan dan kebolehselenggaraan.
Ia juga digunakan untuk pelbagai tujuan seperti pemprosesan pengiraan, pengurusan input/output, dan pemisahan logik.

Dalam Wave, fungsi ditakrifkan dengan

### Tentukan fungsi

Bentuk definisi fungsi paling asas dalam Wave adalah seperti berikut.

```wave
fun main() {
    // Tulis kod anda di sini
}
```

Fungsi `main` ialah titik masuk pelaksanaan program dan fungsi `main` mesti wujud dalam program Wave.
Program ini memulakan pelaksanaan daripada fungsi ini.

Fungsi boleh mengambil parameter mengikut keperluan, dan juga boleh mengembalikan hasil pengiraan atau nilai kepada pemanggil.
Jika terdapat nilai pulangan, jenis pulangan ditentukan dalam pengisytiharan fungsi.

### Contoh: Fungsi mudah

Contoh berikut ialah fungsi mudah yang mengambil dua integer dan mengembalikan jumlahnya.

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // tambah panggilan fungsi
    println(result);            // Keluaran: 12
}
```

Dalam contoh ini, fungsi `add` mengambil dua parameter integer, `a` dan `b`, menambahnya dan mengembalikan hasilnya.
Fungsi `main` memanggil fungsi `add`, menyimpan nilai yang dikembalikan dalam pembolehubah dan mengeluarkannya.

Dengan cara ini, fungsi merangkum tindakan tertentu dan membolehkannya digunakan semula dalam berbilang bahagian program.

## pembolehubah

Pembolehubah digunakan untuk menyimpan dan memanipulasi data dalam program.
Wave direka bentuk untuk membezakan dengan jelas antara pembolehubah dan pembolehubah tidak berubah semasa mengisytiharkan pembolehubah, supaya niat untuk menukar data boleh didedahkan pada peringkat kod.

Ini menjadikan perubahan keadaan program lebih jelas dan mengurangkan ralat yang disebabkan oleh perubahan nilai yang tidak disengajakan.

### pembolehubah boleh ubah

Dalam Wave, pembolehubah boleh diubah secara lalai.
Ini bermakna walaupun sekali diisytiharkan, nilainya boleh diubah semasa pelaksanaan program.

Pembolehubah boleh ubah diisytiharkan menggunakan kata kunci var.

```wave
var x :i32 = 10;
x = 20;
```

Dalam kod di atas, `x` mempunyai nilai awal `10`, dan kemudiannya boleh ditukar kepada `20`.
Pembolehubah pembolehubah digunakan untuk data yang keadaannya mesti berubah.

### pembolehubah tidak berubah

Apabila anda mengisytiharkan pembolehubah sebagai tidak berubah, nilainya tidak boleh diubah selepas ia diberikan nilai awal.
Pembolehubah tidak berubah diisytiharkan menggunakan kata kunci let.

```wave
let y :i32 = 5;
// y = 10;   // Ralat: Pembolehubah tidak berubah tidak boleh mengubah nilainya.
```

Pembolehubah tidak berubah membantu meningkatkan kestabilan dan kebolehramalan program kerana ia menjamin bahawa nilainya tidak akan berubah.
Adalah disyorkan untuk menggunakan pembolehubah tidak berubah untuk data tetap yang nilainya tidak perlu diubah.

Dalam Wave, anda juga boleh secara eksplisit membenarkan kebolehubah dengan menggunakan `let` dengan kata kunci `mut`.

```wave
let mut y :i32 = 5;
y = 10;
```

Pembolehubah diisytiharkan sebagai `let`, tetapi nilainya boleh diubah melalui kata kunci `mut`.

### Contoh pengisytiharan boleh ubah

Berikut ialah contoh pengisytiharan pembolehubah boleh ubah dan tidak berubah dari pelbagai jenis.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = true;
```

Dalam contoh ini, `x` dan `name` ialah pembolehubah boleh ubah, dan `y` dan `is_active` ialah pembolehubah tidak berubah.
Wave dengan jelas membezakan antara `var` dan `let`, mendedahkan pada tahap kod sama ada data boleh ditukar.

Dengan membezakan pembolehubah pembolehubah dan pemalar dengan betul, anda boleh mencipta program yang lebih mantap dan boleh diramal sambil mengekalkan ketekalan data.
