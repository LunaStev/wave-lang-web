---
sidebar_position: 3
---

# Menjalankan Program Pertama

Jika anda telah memasang Wave sebelum ini dalam dokumen pemasangan, kini adalah masa untuk menjalankan program Wave pertama anda.
Dalam seksyen ini, kami akan melihat keseluruhan proses menulis dan menjalankan program Wave melalui contoh yang mudah.

## Membuat Fail `hello.wave`

Pertama, cipta fail baru bernama `hello.wave` dalam direktori kerja.
Anda boleh menentukan nama dan sambungan fail sesuka hati, tetapi untuk contoh ini, kami akan menggunakan `hello.wave`.

## Menulis Kod

Tulis kod di bawah dalam fail `hello.wave` yang telah dibuat.

```wave
fun main() {
    println("Halo Wave");
}
```

Dalam kod ini, `fun main()` menandakan titik permulaan pelaksanaan program Wave.
Program Wave selalu dimulakan dari fungsi `main`.

Fungsi `println` adalah fungsi untuk mencetak rantaian ke output standard, dan digunakan paling asas untuk memaparkan teks di layar.

## Menjalankan Program

Setelah selesai menulis kod, buka terminal dan jalankan arahan berikut dalam direktori yang mengandungi fail.

```bash
wavec run hello.wave
```

Perintah ini memberitahu pengkompil Wave untuk mengkompilasi fail sumber dan sekaligus melaksanakannya.

## Pengesahan Output

Sekiranya program berjaya dijalankan, output berikut akan dipaparkan di terminal.

```
Hello Wave
```

Jika output ini muncul, ia bermakna Wave telah dipasang dengan betul, dan pengarang serta pelaksanaan program telah dilakukan dengan tepat.

Anda telah berjaya menjalankan program Wave pertama.
Sekarang anda boleh menjelajahi tatabahasa dan fungsi Wave satu persatu dan mencipta program yang lebih kompleks.

Pilihan perintah yang tepat (`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`) boleh disemak dalam dokumentasi CLI `wavec`.
