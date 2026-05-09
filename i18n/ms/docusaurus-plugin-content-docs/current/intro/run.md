---
sidebar_position: 3
---

# Menjalankan program pertama anda

Jika anda telah memasang Wave daripada artikel pemasangan sebelumnya, kini tiba masanya untuk menjalankan program Wave pertama secara langsung.
Bahagian ini membimbing anda melalui keseluruhan proses menulis dan menjalankan program Wave langkah demi langkah menggunakan contoh mudah.

## Buat fail `hello.wave`

Mula-mula, buat fail baharu bernama `hello.wave` dalam direktori kerja anda.
Nama fail dan sambungan boleh ditentukan secara bebas, tetapi kami akan menggunakan `hello.wave` sebagai contoh.

## Tulis kod

Tulis kod di bawah dalam fail `hello.wave` yang dibuat.

```wave
fun main() {
    println("Hello Wave");
}
```

Dalam kod ini, `fun main()` merujuk kepada titik permulaan pelaksanaan program Wave.
Program Wave sentiasa berjalan bermula dari fungsi `main`.

Fungsi `println` ialah fungsi yang mengeluarkan rentetan kepada output standard.
Ia paling biasa digunakan apabila memaparkan teks pada skrin.

## Jalankan program

Sebaik sahaja anda selesai menulis kod, buka terminal dan jalankan arahan berikut dari direktori tempat fail itu berada.

```bash
wavec run hello.wave
```

Perintah ini dilaksanakan selepas pengkompil Wave menyusun fail sumber.
Mengarahkan anda untuk melaksanakan serta-merta.

## Semak output

Jika program berjalan seperti biasa, anda akan melihat output berikut dalam terminal:

```
Hello Wave
```

Jika anda melihat output ini, Wave dipasang dengan betul.
Ini bermakna program telah ditulis dan dilaksanakan dengan betul.

Anda kini telah berjaya menjalankan program Wave pertama anda.
Mulai sekarang, anda boleh melihat sintaks dan fungsi Wave satu demi satu dan menulis atur cara yang lebih kompleks.

Pilihan arahan yang tepat (`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`)
Anda boleh menyemaknya dalam dokumen `wavec` CLI.
