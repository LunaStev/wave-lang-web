---
sidebar_position: 4
---

# Wave + Whale pelan hala tuju pembangunan bersepadu v2

Dokumen ini ialah peta jalan yang mengatur proses pembangunan bersepadu bahasa Wave dan rantai alat pengkompil Whale langkah demi langkah.
Wave dan Whale pada mulanya akan bermula sebagai komponen yang berasingan, tetapi akhirnya bertujuan untuk disepadukan sepenuhnya ke dalam satu ekosistem bahasa bebas.

Seluruh fasa pembangunan mengikuti aliran berikut:

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

Setiap peringkat membina hasil peringkat sebelumnya dan menganggap pembangunan sehala, tanpa kembali ke struktur sebelumnya sebaik sahaja peringkat selesai.

---

## Peringkat Pra-Beta

Matlamat fasa Pra-Beta adalah untuk melengkapkan bahagian hadapan bahasa Wave dan melaksanakan kefungsian penuh bahasa berdasarkan bahagian belakang LLVM.
Langkah ini tidak menggunakan Whale; penyusunan dan pelaksanaan dilakukan sepenuhnya melalui LLVM.

Memanjangkan tatabahasa itu sendiri tidak dilakukan pada peringkat ini.
Matlamat teras adalah untuk menjadikan semua elemen tatabahasa benar-benar berfungsi berdasarkan spesifikasi yang telah ditetapkan.
Kami memberi tumpuan kepada menstabilkan struktur bahagian hadapan, termasuk kualiti mesej ralat, pemeriksaan jenis dan pemprosesan skop berubah-ubah.

Skop pelaksanaan termasuk pengisytiharan dan output pembolehubah, operasi asas, definisi fungsi dan panggilan,
Pernyataan bersyarat (`if` / `else if` / `else`) dan pernyataan gelung (`while` / `break` / `continue`) juga dilengkapkan pada peringkat ini.
Juga termasuk output berformat, penaipan eksplisit, reka bentuk penunjuk jenis `ptr<T>`,
Ia termasuk reka bentuk tatasusunan dalam bentuk `array<T, N>`.

Pada peringkat ini, semua penyusun Wave ditulis sebagai Rust,
LLVM IR Menggunakan inkwell dan llvm-sys untuk penciptaan dan pelaksanaan AOT.

---

## Peringkat alfa

Matlamat peringkat Alpha adalah untuk memperkenalkan bahagian belakang Whale dan mewujudkan struktur yang menggunakan LLVM dan Whale secara selari.
LLVM akan kekal sebagai hujung belakang lalai dan Whale akan ditambahkan sebagai hujung belakang pilihan.

Apabila menjalankan kod Wave, pilihan `--backend` membolehkan anda memilih bahagian belakang yang hendak digunakan, LLVM atau Whale.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

Dalam langkah ini, kami mereka bentuk dan mentakrifkan struktur IR Whale itu sendiri.
Susun komponen utama seperti Arahan, Nilai dan Blok,
Melaksanakan Penjana IR yang menukar Wave AST kepada Whale IR.

Kami juga melaksanakan penjana kod untuk Whale, menjadikannya boleh laku dalam bentuk pemasangan atau binari.
Dalam LLVM, jenis yang sukar atau tidak cekap untuk dilaksanakan, seperti jenis integer yang sangat besar seperti `i1024`,
Struktur penunjuk lanjutan diperkenalkan pada peringkat ini sebagai ciri khusus Whale.

Sebagai pusat pemeriksaan, keluaran Hello World mesti boleh dilakukan dari bahagian belakang Whale.
Pengisytiharan dan penugasan pembolehubah, pengendalian penuding dan alat penyahpepijatan IR mesti beroperasi secara normal.
Ini ialah peringkat di mana penukaran Wave → Whale IR sebenarnya sedang dijalankan.

---

## Peringkat beta

Matlamat fasa Beta adalah untuk beralih sepenuhnya kepada Whale dan mengalih keluar kebergantungan LLVM.
Mulai langkah ini dan seterusnya, kompilasi dan pelaksanaan Wave hanya akan menggunakan Whale.

Semua kebergantungan dan modul berkaitan LLVM dialih keluar.
Penjanaan kod dan laluan pelaksanaan dioptimumkan berdasarkan Whale.
Tugas utama adalah untuk membuat aliran daripada penciptaan IR kepada pelaksanaan yang mudah dan pantas.

Reka pas pengoptimuman untuk Whale IR,
Meningkatkan kelajuan penjanaan kod dan kecekapan pelaksanaan.
Semua tatabahasa Wave mesti disokong sepenuhnya oleh bahagian belakang Whale pada peringkat ini.

Di bahagian ujian, kami melakukan kedua-dua ujian unit dan suite ujian penuh.
Mengesahkan WSON dan keserasian perpustakaan standard dan binaan Whale merentas platform.

---

## Peringkat RC (Calon Pelepasan).

Matlamat fasa RC adalah untuk memulakan bootstrapping Wave.
Daripada langkah ini, kami akan mengalih keluar pelaksanaan Rust pengkompil Wave secara beransur-ansur,
Kita mulakan dengan menulis semula pengkompil Wave dalam bahasa Wave itu sendiri.

Berdasarkan Whale, kami menulis semula Wave
Menggantikan logik teras pengkompil dan perpustakaan std/teras dengan kod Wave.
Melalui proses ini, Whale memasuki fasa pengehosan sendiri.

Jika bootstrapping berjaya, pengkompil asli Wave yang pertama akan dibuat.

---

## Fasa keluaran (v0.0.1)

Fasa Keluaran menandakan keluaran rasmi pertama Wave.
Pada ketika ini, Wave dan Whale membentuk ekosistem bahasa bebas bersepadu sepenuhnya.

Komponen keluaran termasuk bahasa Wave dan perpustakaan standard;
Rantai alat pengkompil Whale, pengurus pakej Vex,
Dan ia termasuk format data WSON.

Wave pada peringkat ini mempunyai pengkompil yang ditulis sepenuhnya dalam kod Wave,
Pengoptimuman Whale harus lengkap.
Aliran binaan dan pengedaran melalui Vex ditubuhkan,
Binaan OS silang seperti `vex build --windows` juga sepatutnya boleh dilakukan.

---

## strategi meta pembangunan

Pembangunan Wave + Whale bukanlah satu kemajuan langkah yang mudah, tetapi berdasarkan strategi yang jelas.
Dengan menggunakan strategi kereta api+rel untuk membangunkan Whale dan mengkonfigurasi bahagian belakang Wave secara serentak,
Kami membangunkan struktur bahagian belakang dan reka bentuk bahasa secara selari.

Dalam peringkat Alpha, strategi percabangan bahagian belakang melalui pilihan `--backend` memainkan peranan penting.
Ia menyediakan asas untuk membandingkan dan mengesahkan secara langsung LLVM dan Whale.

Selepas RC, struktur diterbalikkan,
Pelan pembalikan struktur sedang giat dijalankan, dengan kod Wave menyusun Wave sendiri melalui Whale.
