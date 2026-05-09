---
sidebar_position: 4
---

# Pernyataan Pengulangan

## Pengenalan

Dalam bahasa Wave, pernyataan pengulangan disediakan untuk mengendalikan situasi di mana kod yang sama perlu dilaksanakan berulang kali.
Pernyataan pengulangan digunakan untuk mengeksekusi kod berulang kali sehingga syarat tertentu dipenuhi, atau untuk mengulangi sejumlah kali yang ditetapkan.

Ini membolehkan anda menyatakan tugas yang diulang dengan kod yang pendek dan jelas tanpa perlu menulis logik yang sama berulang kali.
Wave menyokong kedua-dua pengulangan berdasarkan syarat dan pengulangan berdasarkan bilangan, dan juga menyediakan kata kunci untuk mengawal aliran pelaksanaan semasa pengulangan.

Bahagian ini menerangkan cara menggunakan pernyataan `while` dan `for`, serta kata kunci `break` dan `continue` untuk mengawal aliran pengulangan.

---

## Pernyataan while

Pernyataan `while` mengeksekusi blok kod berulang kali sementara syarat diberikan dinilai sebagai benar (`true`).
Pengulangan akan berhenti segera apabila syarat menjadi salah (`false`).

Ini adalah sesuai untuk situasi di mana bilangan pengulangan tidak jelas dan perlu diulang sehingga syarat tertentu dipenuhi.

### Struktur Asas

Struktur asas bagi pernyataan while dalam Wave adalah seperti berikut.

```wave
while (syarat) {
    // Kod yang akan diulang
}
```

Syarat harus dinilai sebagai jenis `bool`, dan kod yang dibungkus dalam kurungan `{}` boleh mengandungi satu atau lebih arahan.

### Contoh: Mencetak dari 0 hingga 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i = {}", i);
    i = i + 1;
}
```

Dalam contoh ini, pengulangan berlaku ketika variabel `i` adalah kurang daripada 5.
Setiap pengulangan mencetak nilai semasa dan meningkatkan nilai `i` sebanyak 1, membuat syarat jadi salah akhirnya.

---

## Pernyataan for

`for` adalah jenis gelung yang sesuai digunakan apabila bilangan pengulangannya agak jelas.
Anda boleh mendefinisikan nilai awal, ekspresi syarat, dan ekspresi pengurangan sekaligus untuk menjelaskan aliran gelung.

Karena elemen yang diperlukan untuk pengendalian gelung terkumpul di satu tempat, mudah untuk memahami struktur gelung dengan cepat.

### Struktur Asas

```wave
for (inialisasi; syarat; pengulangan) {
    // Kod yang akan diulang
}
```

Inisialisasi untuk gelung 'for' di Wave menyokong pelbagai bentuk.

- Inisialisasi jenis `var` yang tersirat.
- Inisialisasi untuk pengisytiharan `var` / `let mut` / `const`.
- Inisialisasi secara umum (menggunakan semula pembolehubah yang sedia ada).

### Contoh 1: Inisialisasi jenis tersirat.

```wave
for (i :i32 = 1; i <= 5; i += 1) {
    print("i = {}", i);
}
```

### Contoh 2: Inisialisasi `var` / `let mut`.

```wave
for (var i: i32 = 0; i < 3; i += 1) {
    print("var i = {}", i);
}

for (let mut j: i32 = 0; j < 3; j += 1) {
    print("let mut j = {}", j);
}
```

### Contoh 3: Inisialisasi berdasarkan ungkapan (menggunakan semula pembolehubah yang sedia ada).

```wave
var i: i32 = 99;

for (i = 3; i <= 5; i += 1) {
    print("i = {}", i);
}

print("selepas gelung: {}", i); // 6
```

Inisialisasi jenis pengisytiharan (`var`, `let mut`, `i :i32 = ...`) berfungsi dengan pembolehubah skop gelung, manakala inisialisasi berasaskan ungkapan (`i = ...`) mengemas kini pembolehubah luar itu sendiri.

---

## Gelung Dalam Gelung

Gelung boleh ditulis di dalam gelung lain, dan ini dinamakan gelung bersarang.
Gelung bersarang berguna untuk melintasi struktur data dua dimensi atau untuk memproses kombinasi beberapa syarat.

### Contoh: Gelung while 2-lapis

```wave
var i: i32 = 0;

while (i < 3) {
    var j: i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

Dalam contoh ini, setiap kali pernyataan `while` luar dijalankan, semua pernyataan `while` dalam akan dijalankan.
Ini membolehkan anda untuk memproses kombinasi dalam bentuk (`i`, `j`) secara berurutan.

---

## Pernyataan break

Pernyataan `break` segera menghentikan gelung dan memindahkan aliran ke luar gelung itu.
Digunakan apabila tiada lagi keperluan untuk meneruskan gelung.

### Contoh: Menghentikan gelung pada nilai tertentu

```wave
var i: i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

Dalam contoh ini, apabila `i` menjadi 5 dalam gelung tanpa henti, pernyataan `break` dilaksanakan dan gelung itu dihentikan.
Dengan cara ini, pernyataan `break` berguna apabila anda ingin mengawal gelung di luar syarat gelung.

---

## Pernyataan continue

Pernyataan `continue` melangkau sebarang kod yang tinggal untuk gelung semasa dan segera memulakan gelung seterusnya.
Digunakan apabila anda ingin mengabaikan sebahagian logik apabila syarat tertentu ditemui.

### Contoh: Hanya cetak angka genap

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

Dalam kod ini, apabila `i` adalah genap, pernyataan `continue` dilaksanakan dan bahagian cetakan dilangkau.
Hasilnya, hanya nilai genap yang akan dicetak.

---

## Ringkasan

Gelung Wave dirancang untuk secara semula jadi menyampaikan kedua-dua pengulangan berdasarkan syarat dan bilangan.
Pernyataan `while` sesuai untuk pengulangan berasaskan syarat, manakala pernyataan `for` berguna apabila bilangan pengulangan dan aliran adalah jelas.

Dengan menggunakan `break` dan `continue` bersamaan, anda boleh mengawal aliran pelaksanaan dengan lebih halus semasa pengulangan dan membina logik pengulangan yang lebih canggih dan fleksibel.
