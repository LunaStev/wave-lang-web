---
sidebar_position: 1
---

# Fungsi dan Pembolehubah

## Pengenalan

Falsafah reka bentuk teras bahasa pengaturcaraan Wave terletak pada mengekalkan keseimbangan antara prestasi rendah dan abstraksi tinggi, serta menyediakan persekitaran pengembangan perisian yang efisien dan fleksibel.
Bahagian ini memperkenalkan fungsi dan pembolehubah yang merupakan elemen paling asas dalam membina program Wave.

Fungsi adalah unit utama yang membentuk operasi dan logik program, manakala pembolehubah berperanan menyimpan dan mengurus data yang diperlukan dalam proses itu.
Memahami cara untuk mendefinisikan dan menggunakan fungsi serta pembolehubah secara tepat akan membantu anda menggunakan struktur dan tujuan reka bentuk bahasa Wave dengan lebih mendalam.

---

## Fungsi

Dalam Wave, fungsi adalah blok kod yang boleh digunakan semula dan boleh dijalankan secara bebas.
Ia membolehkan kita mengumpulkan dan menyatakan operasi atau pengiraan tertentu sebagai satu unit dan boleh dipanggil bila-bila saja diperlukan dalam keseluruhan program.

Menggunakan fungsi juga dapat mengurangkan kod yang diulang dan memisahkan program dengan logik yang lebih baik, meningkatkan kebolehbacaan dan penyelenggaraan.
Ia juga boleh digunakan untuk pelbagai tujuan seperti pengendalian pengiraan, pengurusan input-output, dan pemisahan logik.

Dalam Wave, fungsi ditakrifkan dengan kata kunci `fun`, yang terdiri daripada nama fungsi, senarai parameter, dan badan fungsi yang dibungkus dalam tanda kurung `{}`.

### Menentukan Fungsi

Bentuk paling asas bagi definisi fungsi dalam Wave adalah seperti berikut.

```wave
fun utama() {
    // Tulis kod di sini
}
```

Fungsi `main` adalah titik utama bagi menjalankan program, dan setiap program Wave mesti mempunyai sekurang-kurangnya satu fungsi `main`.
Program akan mula menjalankan dari fungsi ini.

Fungsi boleh mempunyai parameter mengikut keperluan, dan boleh juga mengembalikan hasil atau nilai kepada tempat yang memanggilnya.
Jika terdapat nilai pengembalian, jenis nilai harus dinyatakan dalam pengisytiharan fungsi.

### Contoh: Fungsi Ringkas

Contoh berikut adalah fungsi ringkas yang menerima dua integer dan mengembalikan jumlahnya.

```wave
fun tambah(a :i32, b :i32) -> i32 {
    return a + b;
}

fun utama() {
    var hasil = tambah(5, 7);     // Panggil fungsi tambah
    println(hasil);            // Output: 12
}
```

Dalam contoh ini, fungsi `add` mengambil dua parameter integer `a` dan `b`, mengumpulkan mereka, dan mengembalikan hasil.
Dalam fungsi `main`, panggil fungsi `add`, simpan nilai yang dikembalikan ke dalam variabel, dan cetaknya.

Dengan cara ini, fungsi mengenkapsulasi tindakan tertentu dan dapat digunakan semula di pelbagai bahagian program.

## Variabel

Variabel digunakan untuk menyimpan dan memanipulasi data dalam program.
Wave merancang untuk memisahkan dengan jelas antara variabel yang boleh diubah dan tidak boleh diubah semasa deklarasi variabel, menunjukkan niat perubahan data di peringkat kod.

Ini menjadikan perubahan status program lebih jelas dan mengurangkan kesalahan akibat perubahan nilai yang tidak disengajakan.

### Variabel yang boleh diubah

Dalam Wave, variabel pada asasnya adalah mutable.
Ini bermaksud bahawa setelah dinyatakan, nilai dapat diubah semasa pelaksanaan program.

Variabel mutable dinyatakan menggunakan kata kunci var.

```wave
var x :i32 = 10;
x = 20;
```

Dalam kod di atas, `x` mempunyai nilai awal `10`, dan nilai ini boleh diubah kepada `20`.
Untuk data yang perlu mengubah status, gunakan variabel mutable.

### Variabel yang tidak boleh diubah

Jika Anda menyatakan variabel sebagai immutable, setelah nilai awal ditetapkan, nilai tersebut tidak dapat diubah.
Variabel immutable dinyatakan menggunakan kata kunci let.

```wave
let y :i32 = 5;
// y = 10;   // Kesalahan: variabel immutable tidak dapat diubah.
```

Variabel immutable menjamin bahwa nilainya tidak berubah, yang membantu meningkatkan kestabilan program dan kebolehan ramal.
Disarankan untuk menggunakan variabel immutable untuk data konstan yang tidak memerlukan perubahan nilai.

Dalam Wave, Anda juga boleh menggunakan `mut` bersama dengan kata kunci `let` untuk membenarkan mutabilitas secara eksplisit.

```wave
let mut y :i32 = 5;
y = 10;
```

Variabel ini dinyatakan dengan `let`, tetapi nilai boleh diubah melalui kata kunci `mut`.

### Contoh Deklarasi Variabel

Berikut adalah contoh menyatakan variabel mutable dan immutable dengan pelbagai jenis.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = true;
```

Dalam contoh ini, `x` dan `name` adalah variabel mutable, manakala `y` dan `is_active` adalah variabel immutable.
Dalam Wave, `var` dan `let` ditakrifkan secara jelas untuk menunjukkan kemungkinan perubahan data pada tahap kod.

Dengan memisahkan penggunaan variabel mutable dan immutable dengan tepat, anda boleh membina program yang lebih ketat dan dapat diramal sambil mengekalkan konsistensi data.