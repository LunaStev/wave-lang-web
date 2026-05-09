---
sidebar_position: 3
---

# Rantai Alat Penyusun Whale

## Gambaran keseluruhan

Whale ialah rantai alat pengkompil khusus untuk bahasa pengaturcaraan Wave.
Whale bertanggungjawab untuk keseluruhan proses menganalisis, mengoptimumkan dan menukar kod sumber yang ditulis dengan Wave kepada binari untuk platform sasaran.
Rantai alat ini direka bentuk secara eksklusif untuk bahasa Wave dan tidak mempertimbangkan sokongan untuk bahasa lain atau penyepaduan dengan rantai alat luaran.

## matlamat reka bentuk
Matlamat reka bentuk utama Whale ialah:

* Sokongan Wave sahaja: Whale hanya menyokong bahasa Wave dan tidak mempertimbangkan penyepaduan dengan bahasa lain.
* Struktur modular: Setiap fungsi terdiri daripada modul bebas, yang boleh ditambah atau dikeluarkan mengikut keperluan.
* Gunakan IR bebas: Whale mentakrifkan perwakilan perantaraannya sendiri, dan bukannya menggunakan IR luaran sedia ada seperti LLVM,
* Sokongan platform berbilang sasaran: Bina terhadap pelbagai persekitaran tanpa mengira sistem pengendalian dan seni bina perkakasan.
* Kawalan tepat: Ia berstruktur supaya pembangun boleh mengawal keseluruhan proses penyusunan secara terperinci.
* Mengalih keluar kebergantungan luaran: Whale tidak bergantung pada masa jalan atau pengkompil C/C++ luaran.

## sokongan sasaran

Whale bertujuan untuk menyokong persekitaran sasaran berikut:

* Sistem pengendalian:
    * Linux
    * Windows
    * macOS
    * UEFI (tidak termasuk BIOS)
    * WaveOS (OS sendiri)
* Seni bina:
    * x86_64 (AMD64)
    * ARM64
    * Lain-lain boleh dikembangkan dengan menambah modul

## Pautan luar (FFI)

Whale direka bentuk secara teknikal untuk menyokong FFI (Antara Muka Fungsi Asing),
Disebabkan oleh falsafah Wave, penyepaduan dengan bahasa luar tidak disyorkan dan tidak disediakan sebagai standard.
Wave direka bentuk supaya semua fungsi boleh dilaksanakan dalam bahasanya sendiri.

## kebolehskalaan
Whale boleh dilanjutkan dengan cara berikut:

* Tambah modul untuk sistem pengendalian atau seni bina baharu
* Memasukkan algoritma pengoptimuman tersuai
* Menyesuaikan profil binaan dan tetapan pemaut
* Tentukan format boleh laku anda sendiri
