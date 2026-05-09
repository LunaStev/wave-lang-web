---
sidebar_position: 4
---

# Peta jalan pembangunan integrasi Wave + Whale v2

Dokumen ini adalah peta jalan yang menyusun proses pembangunan terintegrasi antara bahasa Wave dan rangka kerja pengkompil Whale.
Wave dan Whale bermula sebagai komponen berasingan tetapi berhasrat untuk sepenuhnya berintegrasi menjadi ekosistem bahasa yang berdiri sendiri pada akhirnya.

Seluruh fasa pembangunan mengikuti aliran seperti berikut.

```matlab
pre-alpha → pre-beta → alpha → beta → rc → keluaran
```

Setiap langkah berlangsung berdasarkan keputusan dari langkah terdahulu, dan setelah satu langkah selesai, pembangunan satu arah yang tidak berpatah balik ke struktur awal.

---

## Fasa Pre-Beta

Tujuan fasa Pre-Beta adalah untuk menyelesaikan front-end bahasa Wave dan melaksanakan keseluruhan fungsi bahasa berdasarkan back-end LLVM.
Pada tahap ini, Whale tidak digunakan, dan pengkompilasi dan pelaksanaan dilakukan sepenuhnya melalui LLVM.

Kerja untuk memperluaskan tatabahasa itu sendiri tidak akan dilakukan dalam tahap ini.
Matlamat utama adalah untuk menjadikan semua elemen tatabahasa berfungsi berdasarkan spesifikasi yang telah ditentukan.
Kami memberi tumpuan kepada menstabilkan struktur front-end,
seperti kualiti pesanan ralat, pemeriksaan jenis, dan pengurusan skop Variabel.

Skop pelaksanaan merangkumi pengisytiharan dan output pemboleh ubah, operasi asas, definisi dan pemanggilan fungsi,
pernyataan bersyarat (`if` / `else if` / `else`), dan gelung (`while` / `break` / `continue`) juga akan disiapkan dalam fasa ini.
Ia juga merangkumi output format, penetapan jenis yang jelas, reka bentuk penunjuk bentuk `ptr<T>`,
dan reka bentuk array bentuk `array<T, N>`.

Penyusun Wave dalam fasa ini ditulis sepenuhnya dalam Rust dan menggunakan inkwell dan llvm-sys untuk menghasilkan LLVM IR dan pelaksanaan AOT.

---

## Tahap Alpha

Matlamat fasa Alpha adalah untuk memperkenalkan backend Whale dan membina struktur yang menggunakan LLVM dan Whale bersama.
LLVM masih kekal sebagai backend utama, dan Whale ditambah sebagai backend yang boleh digunakan secara pilihan.

Apabila menjalankan kod Wave, anda boleh memilih backend yang ingin digunakan sama ada LLVM atau Whale melalui pilihan `--backend`.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

Dalam fasa ini, struktur IR untuk Whale akan direka dan ditakrif.
Kami akan menyusun komponen utama seperti Instruction, Value, Block, dan mengimplementasikan IR Generator yang menukarkan Wave AST ke Whale IR.

Kami juga akan mengimplementasikan penjana kod untuk Whale agar boleh dijalankan dalam bentuk assembly atau binari.
Jenis-jenis yang sukar atau tidak efisien untuk diimplementasikan dalam LLVM, seperti jenis integer besar `i1024` atau
struktur pointer lanjutan, akan diperkenalkan sebagai ciri khusus Whale dalam fasa ini.

Sebagai titik semakan, ia harus dapat mencetak Hello World dari backend Whale, dan
pengisytiharan dan pengesahan pemboleh ubah, pengendalian pointer, dan alat penyahsulitan IR juga harus berfungsi dengan baik.
Fasa di mana penukaran Wave → Whale IR sebenarnya sedang dijalankan.

---

## Tahap Beta

Matlamat fasa Beta adalah untuk beralih sepenuhnya kepada Whale dan menghapuskan kebergantungan LLVM.
Dari fasa ini, penyusunan dan pelaksanaan Wave hanya akan menggunakan Whale.

Semua kebergantungan dan modul yang berkaitan dengan LLVM akan dihapuskan, dan
jalan pelaksanaan dan penjanaan kod akan dioptimumkan berdasarkan Whale.
Tujuan utama adalah untuk membuat aliran dari penjanaan IR hingga pelaksanaan menjadi mudah dan cepat.

Merancang laluan pengoptimuman untuk Whale IR dan
meningkatkan kelajuan penjanaan kod serta kecekapan pelaksanaan.
Semua tatabahasa Wave mesti disokong dengan sempurna berdasarkan backend Whale dalam fasa ini.

Dari segi ujian, ujian unit dan keseluruhan suite ujian akan dilakukan,
dan akan disahkan keserasian WSON dan pustaka standard serta apakah binaan Whale merentas platform.

---

## Tahap RC (Calon Pelepasan)

Matlamat fasa RC adalah untuk memulakan bootstrap Wave.
Dari fasa ini, pelaksanaan Rust penyusun Wave akan dihapuskan secara beransur-ansur,
dan penyusun Wave akan mula ditulis semula dengan bahasa Wave itu sendiri.

Menulis semula penjana IR Wave berdasarkan Whale,
dan menggantikan logik teras penyusun dan perpustakaan std / core dengan kod Wave.
Melalui proses ini, Whale akan memasuki fasa self-hosting.

Sekiranya bootstrap berjaya, penyusun Wave-native pertama akan dicipta.

---

## Tahap Pelepasan (v0.0.1)

Fasa Pelepasan menandakan pelepasan rasmi pertama Wave.
Pada ketika ini, Wave dan Whale akan membentuk ekosistem bahasa yang sepenuhnya terintegrasi dan berdikari.

Komponen pelepasan termasuk bahasa Wave dan perpustakaan standard,
toolchain penyusun Whale, pengurus pakej Vex,
dan format data WSON.

Wave pada fasa ini mesti mempunyai penyusun yang sepenuhnya ditulis dalam kod Wave,
dan pengoptimuman Whale harus disiapkan.
Aliran bina dan pengedaran melalui Vex harus diperkukuh,
dan binaan merentas OS seperti `vex build --windows` juga perlu disokong.

---

## Strategi Meta Pembangunan

Pembangunan Wave + Whale tidak hanya berkisar kepada kemajuan langkah demi langkah, tetapi dilakukan berdasarkan strategi yang jelas.
Mengambil strategi kereta api + rel yang membangunkan Whale sambil membina backend Wave,
membangunkan struktur backend dan reka bentuk bahasa secara serentak.

Dalam fasa Alpha, strategi cabang backend melalui pilihan `--backend` memainkan peranan penting,
dan menyediakan asas untuk membandingkan dan mengesahkan LLVM dan Whale secara langsung.

Selepas RC, struktur akan terbalik,
di mana kod Wave akan merampas dan menyusun Wave sendiri melalui Whale.