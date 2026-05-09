---
sidebar_position: 3
---

# Pernyataan IF

## Pengenalan

Seksyen ini menerangkan tatabahasa dan cara penggunaan salah satu pernyataan kawalan yang disediakan dalam bahasa Wave, yaitu pernyataan IF.
Pernyataan IF adalah struktur kawalan asas yang menilai keadaan dan hanya melaksanakan blok kod tertentu jika keadaan tersebut benar.

Ini membolehkan program untuk melakukannya berdasarkan pelbagai situasi dan kondisi, lebih daripada sekadar mengalir dari atas ke bawah.
Pernyataan IF adalah elemen penting dalam hampir semua program dan digunakan untuk mengimplementasikan cabang logik dan kawalan aliran.

## Struktur Dasar

Pernyataan IF pertama harus menilai ekspresi kemudian hanya melaksanakan blok kod di dalam kurungan `{}` jika keputusan adalah benar (True).
Sekiranya keadaan adalah palsu (False), ia akan melangkau blok tersebut dan bergerak ke kod berikutnya.

Struktur asas pernyataan IF dalam Wave adalah seperti berikut.

```wave
if (keadaan) {
    // Kod yang akan dilaksanakan jika keadaan benar
}
```

Operasi perbandingan dan logik boleh digunapakai dengan bebas dalam ekspresi tersebut.
Sebagai contoh, anda boleh membandingkan hubungan nilai menggunakan operator perbandingan seperti `==`, `!=`, `<`, `>`, `<=`, `>=`, dan menggunakan operator logik seperti `&&`, `||`, `!` untuk menggabungkan pelbagai syarat.

Keputusan ekspresi mesti sama ada benar atau palsu, dan sekiranya palsu, kod dalam blok IF tidak akan dilaksanakan.

## Contoh

Berikut adalah contoh mudah paling asas bagi pernyataan IF.

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Cuaca amat panas.");
}
```

Dalam kod di atas, nilai pembolehubah `temperature` dinilai untuk menentukan sama ada ia lebih besar daripada 25.
Jika keadaan adalah benar, mesej `"Cuaca sangat panas."` akan dipaparkan, dan jika tidak, tiada tindakan yang akan diambil.

Dengan cara ini, pernyataan IF digunakan apabila anda ingin menjalankan kod hanya apabila kondisi tertentu dipenuhi.

## Pernyataan IF-ELSE

Jika terdapat kod yang perlu dilaksanakan walaupun keadaan tidak benar, anda boleh menambah syarat ELSE kepada pernyataan IF.
Pernyataan IF-ELSE adalah struktur kawalan yang membolehkan salah satu dari dua blok kod dilaksanakan berdasarkan hasil keadaan.

Struktur asas adalah seperti berikut.

```wave
jika (syarat) {
    // kod yang akan dijalankan jika syarat benar
} else {
    // kod yang akan dijalankan jika syarat salah
}
```

Apabila syarat benar, blok IF akan dilaksanakan, dan apabila syarat salah, blok ELSE akan dilaksanakan.
Hanya satu daripada dua blok yang akan dilaksanakan, dan tidak ada situasi di mana kedua-duanya dilaksanakan.

Berikut adalah contoh menggunakan pernyataan IF-ELSE.

```wave
var skor :i32 = 70;

if (skor >= 60) {
    println("Anda lulus!");
} else {
    println("Anda gagal.");
}
```

Dalam kod ini, ia akan mencetak mesej yang berbeza bergantung kepada sama ada `skor` adalah 60 atau lebih.
Jika syarat benar, `"Anda lulus!"` akan dicetak, jika tidak `"Anda gagal."` akan dicetak.

## Pernyataan IF bersarang

Pernyataan IF boleh digunakan dalam pernyataan IF lain, dan ini dipanggil pernyataan IF bersarang.
Pernyataan IF bersarang berguna apabila perlu menilai pelbagai tahap syarat secara berurutan.

Contoh berikut adalah mengenai pernyataan IF bersarang yang mencetak hasil yang berbeza berdasarkan skor.

```wave
var skor :i32 = 85;

if (skor >= 60) {
    if (skor >= 90) {
        println("Keputusan cemerlang!");
    } else {
        println("Anda lulus!");
    } 
} else {
    println("Anda gagal.");
}
```

Dalam kod ini, ia terlebih dahulu memeriksa sama ada skor adalah 60 atau lebih.
Jika kurang dari 60, `"Anda gagal."` akan dicetak serta-merta.
Jika 60 atau lebih, ia akan menilai semula syarat, dan jika skornya 90 atau lebih, ia akan mencetak `"Keputusan cemerlang!"`, jika tidak, ia akan mencetak `"Anda lulus!"`.

Dengan menggunakan pernyataan IF bersarang seperti ini, anda boleh menyatakan cabang syarat yang kompleks secara berperingkat.

## Ringkasan

Pernyataan IF adalah pernyataan kawalan asas yang menilai syarat untuk mengawal aliran pelaksanaan program.
Menggunakan pernyataan ELSE bersama-sama memudahkan anda menetapkan secara jelas tindakan bagi situasi apabila syarat adalah salah, dan dengan pernyataan IF bersarang anda juga boleh mengendalikan cabang yang kompleks dengan gabungan pelbagai syarat.

Dengan menggunakan pernyataan IF dengan betul, anda boleh membangunkan aliran program yang lebih logik dan jelas.