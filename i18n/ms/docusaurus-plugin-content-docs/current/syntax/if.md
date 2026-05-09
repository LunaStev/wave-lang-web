---
sidebar_position: 3
---

# kenyataan IF
## pengenalan
Bahagian ini menerangkan sintaks dan penggunaan pernyataan IF, salah satu pernyataan kawalan yang disediakan oleh bahasa Wave.
Pernyataan IF ialah struktur kawalan asas yang menilai keadaan dan kemudian melaksanakan blok kod tertentu hanya jika syarat itu benar.

Ini membolehkan program melangkaui aliran pelaksanaan atas-bawah yang mudah dan melakukan tindakan yang berbeza bergantung pada situasi dan keadaan.
Pernyataan IF ialah elemen teras hampir semua program dan penting untuk melaksanakan percabangan logik dan kawalan aliran.

## struktur asas

Pernyataan IF terlebih dahulu menilai ungkapan bersyarat dan melaksanakan blok kod yang ditulis dalam pendakap `{}` hanya jika hasilnya Benar.
Jika syaratnya Salah, langkau blok itu dan beralih ke kod seterusnya.

Struktur asas pernyataan IF dalam Wave adalah seperti berikut:

```wave
if (condition) {
    // Kod untuk dilaksanakan jika syarat adalah benar
}
```

Operator perbandingan dan operator logik boleh digunakan secara bebas dalam ungkapan bersyarat.
Sebagai contoh, anda boleh membandingkan perhubungan nilai melalui pengendali perbandingan seperti `==`, `!=`, `<`, `>`,
Anda juga boleh menggabungkan berbilang keadaan menggunakan operator logik seperti `&&`, `||` dan `!`.

Hasil ungkapan bersyarat mesti dinilai kepada benar atau salah, dan jika syarat itu salah, kod di dalam blok IF tidak akan dilaksanakan.

## contoh

Berikut ialah contoh pernyataan IF dalam bentuk yang paling mudah.

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Cuaca panas.");
}
```

Dalam kod di atas, ia dinilai berdasarkan sama ada nilai pembolehubah `temperature` lebih besar daripada 25.
Jika syarat adalah benar, mesej `"Cuaca panas."` adalah output, dan jika syarat itu palsu, tiada tindakan dilakukan.

Seperti ini, pernyataan IF digunakan apabila anda ingin melaksanakan kod hanya apabila syarat tertentu dipenuhi.

## pernyataan IF-ELSE

Jika anda mempunyai kod yang perlu dilaksanakan walaupun syaratnya tidak benar, anda boleh menambah klausa ELSE pada pernyataan IF.
Pernyataan IF-ELSE ialah struktur yang secara selektif melaksanakan satu daripada dua blok kod bergantung pada hasil keadaan.

Struktur asas adalah seperti berikut:

```wave
if (condition) {
    // Kod untuk dilaksanakan jika syarat adalah benar
} else {
    // Kod untuk dilaksanakan jika syarat adalah palsu
}
```

Jika syarat adalah benar, blok IF dilaksanakan, dan jika syarat adalah palsu, blok ELSE dilaksanakan.
Hanya satu daripada dua blok itu dilaksanakan, tidak sekali-kali serentak.

Di bawah ialah contoh menggunakan pernyataan IF-ELSE.

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Anda lulus!");
} else {
    println("Ia gagal.");
}
```

Kod ini mengeluarkan mesej yang berbeza bergantung pada sama ada `score` ialah 60 atau lebih tinggi.
Jika keadaan adalah benar, `"Anda lulus!"` ialah output; jika tidak, `"Ia gagal."` ialah output.

## pernyataan IF bersarang

Pernyataan IF juga boleh digunakan di dalam pernyataan IF lain, yang dipanggil pernyataan IF bersarang.
Penyataan IF bersarang berguna apabila keadaan dalam berbilang langkah perlu dinilai secara berurutan.

Contoh berikut ialah contoh pernyataan IF bersarang yang menghasilkan keputusan berbeza bergantung pada skor.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Gred cemerlang!");
    } else {
        println("saya lulus.");
    }
} else {
    println("Ia gagal.");
}
```

Kod ini mula-mula menyemak sama ada skor adalah 60 atau lebih tinggi.
Jika kurang daripada 60, `"Ia gagal."` dikeluarkan serta-merta.
Jika skor melebihi 60, keadaan dinilai sekali lagi dan jika skor melebihi 90, `"Gred cemerlang!"` ialah output, jika tidak, `"saya lulus."` ialah output.

Penyataan IF bersarang seperti ini membolehkan anda menyatakan cawangan bersyarat kompleks langkah demi langkah.

## ringkasan

Pernyataan IF ialah pernyataan kawalan asas yang mengawal aliran pelaksanaan program dengan menilai keadaan.
Dengan menggunakan klausa ELSE bersama-sama, anda boleh mentakrifkan dengan jelas tingkah laku apabila syarat itu palsu.
Cawangan kompleks yang menggabungkan berbilang syarat juga boleh dilakukan melalui pernyataan IF bersarang.

Penggunaan pernyataan IF yang betul boleh membantu anda mengatur aliran program anda dengan lebih logik dan jelas.
