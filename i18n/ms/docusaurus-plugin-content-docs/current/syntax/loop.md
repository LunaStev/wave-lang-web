---
sidebar_position: 4
---

# gelung

## pengenalan

Bahasa Wave menyediakan pernyataan gelung untuk mengendalikan situasi di mana kod yang sama mesti dilaksanakan beberapa kali.
Penyataan gelung digunakan untuk meneruskan pelaksanaan kod sementara syarat tertentu dipenuhi atau untuk melaksanakannya berulang kali beberapa kali yang ditetapkan.

Ini membolehkan anda menyatakan tugasan berulang dalam kod yang ringkas dan jelas tanpa perlu menulis logik yang sama berulang kali.
Wave menyokong kedua-dua lelaran berasaskan keadaan dan lelaran berasaskan kiraan, dan juga menyediakan kata kunci untuk mengawal aliran pelaksanaan semasa lelaran.

Bahagian ini menerangkan cara menggunakan pernyataan `while` dan `for`, serta kata kunci `break` dan `continue` untuk mengawal aliran lelaran.

---

## manakala kenyataan

Pernyataan `while` berulang kali melaksanakan blok kod selagi ungkapan syarat yang diberikan dinilai kepada benar (`true`).
Apabila ungkapan keadaan menjadi palsu (`false`), lelaran tamat serta-merta.

Kaedah ini sesuai untuk situasi di mana bilangan lelaran tidak jelas dan mesti diulang sehingga syarat tertentu dipenuhi.

### struktur asas
Struktur asas pernyataan sementara dalam Wave adalah seperti berikut:

```wave
while (condition) {
    // kod untuk diulang
}
```

Ungkapan bersyarat mesti dinilai sebagai jenis `bool`.
Anda boleh menulis satu atau lebih pernyataan dalam blok kod yang disertakan dalam pendakap kerinting `{}`.

### Contoh: Cetak dari 0 hingga 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("saya ialah {}.", i);
    i = i + 1;
}
```

Dalam contoh ini, lelaran dilakukan manakala pembolehubah `i` kurang daripada 5.
Pada setiap lelaran, ia mencetak nilai semasa dan meningkatkan nilai `i` sebanyak 1 supaya keadaan akhirnya menjadi palsu.

---

## untuk kenyataan

Pernyataan `for` ialah pernyataan gelung yang sesuai digunakan apabila bilangan ulangan agak jelas.
Anda boleh menyatakan dengan jelas aliran pengulangan dengan mentakrifkan nilai awal, ungkapan bersyarat dan ungkapan tambah/kurangkan sekali gus.

Oleh kerana unsur-unsur yang diperlukan untuk kawalan ulangan dikumpulkan di satu tempat, ia mempunyai kelebihan kerana mudah memahami struktur ulangan sepintas lalu.

### struktur asas

```wave
for (init; condition; step) {
    // kod untuk diulang
}
```

Wave untuk permulaan menyokong beberapa bentuk.

- Permulaan jenis `var` tersirat
- Permulaan pengisytiharan `var` / `let mut` / `const`
- Mulakan ungkapan biasa (guna semula pembolehubah sedia ada)

### Contoh 1: Inisialisasi jenis tersirat

```wave
for (i :i32 = 1; i <= 5; i += 1) {
    println("i = {}", i);
}
```

### Contoh 2: Memulakan `var` / `let mut`

```wave
for (var i: i32 = 0; i < 3; i += 1) {
    println("var i = {}", i);
}

for (let mut j: i32 = 0; j < 3; j += 1) {
    println("let mut j = {}", j);
}
```

### Contoh 3: Inisialisasi berasaskan ungkapan (menggunakan semula pembolehubah sedia ada)

```wave
var i: i32 = 99;

for (i = 3; i <= 5; i += 1) {
    println("i = {}", i);
}

println("after loop: {}", i); // 6
```

Permulaan deklaratif (`var`, `let mut`, `i :i32 = ...`) beroperasi sebagai pembolehubah skop gelung,
Inisialisasi berasaskan ungkapan (`i = ...`) mengemas kini pembolehubah luar itu sendiri.

---

## gelung bersarang

Gelung boleh ditulis di dalam gelung lain, yang dipanggil gelung bersarang.
Gelung bersarang berguna apabila melintasi struktur data dua dimensi atau memproses gabungan berbilang keadaan.

### Contoh: pernyataan double while

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

Dalam contoh ini, setiap kali pernyataan `while` luar dilaksanakan, semua pernyataan `while` dalam dilaksanakan.
Ini membolehkan gabungan borang (`i`, `j`) diproses secara berurutan.

---

## pecah kenyataan

Pernyataan `break` segera menamatkan gelung dan mengalihkan aliran keluar daripada gelung.
Digunakan semasa lelaran apabila tiada lelaran lanjut perlu dilakukan.

### Contoh: Tamatkan lelaran pada nilai tertentu

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

Dalam contoh ini, apabila `i` menjadi 5 dalam gelung tak terhingga, `break` dilaksanakan dan pengulangan berakhir.
Seperti ini, pernyataan `break` berguna apabila anda ingin mengawal pengulangan secara bebas daripada keadaan pengulangan.

---

## sambung kenyataan

Pernyataan `continue` melangkau kod yang tinggal dalam lelaran semasa dan segera memulakan lelaran seterusnya.
Ini digunakan apabila anda ingin meninggalkan beberapa logik dalam keadaan tertentu.

### Contoh: Cetak nombor genap sahaja

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

Dalam kod ini, jika `i` ialah nombor ganjil, `continue` akan dilaksanakan, melangkau bahagian output.
Akibatnya, hanya nilai genap yang dikeluarkan.

---

## ringkasan

Gelung Wave direka untuk menyatakan pengulangan berasaskan keadaan dan kiraan secara semula jadi.
Pernyataan `while` sesuai untuk lelaran dipacu keadaan, dan pernyataan `for` berguna apabila bilangan lelaran dan aliran jelas.

Dengan menggunakan `break` dan `continue` bersama-sama, anda boleh mengawal aliran pelaksanaan dengan halus walaupun semasa lelaran.
Anda boleh membina logik berulang yang lebih canggih dan fleksibel.
