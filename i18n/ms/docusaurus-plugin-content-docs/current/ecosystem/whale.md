---
sidebar_position: 3
---

# Rantaian Alat Compiler Whale

## Gambaran Keseluruhan

Whale adalah rantaian alat compiler khusus untuk bahasa pengaturcaraan Wave.
Whale bertanggungjawab untuk analisis, pengoptimuman, dan penukaran kod sumber yang ditulis dalam Wave kepada binaan untuk platform sasaran.
Rantaian alat ini direka khusus untuk bahasa Wave, tidak mempertimbangkan sokongan bahasa lain atau integrasi dengan rantaian alat luar.

## Matlamat Reka Bentuk

Matlamat reka bentuk utama Whale adalah seperti berikut:

- Sokongan khusus untuk Wave: Whale hanya menyokong bahasa Wave dan tidak mengambil kira integrasi dengan bahasa lain.
- Struktur modular: Setiap fungsi terdiri daripada modul bebas yang boleh ditambah atau dibuang mengikut keperluan.
- Penggunaan IR yang berdikari: Whale mendefinisikan representasi tengah sendiri tanpa menggunakan IR luar yang ada seperti LLVM IR.
- Sokongan pelbagai platform sasaran: Anda boleh membina untuk pelbagai persekitaran tanpa mengira sistem operasi dan seni bina perkakasan.
- Pengawalan yang tepat: Proses pengkompilasian direka supaya pemaju boleh mengawasi setiap peringkat secara terperinci.
- Penghapusan kebergantungan luar: Whale tidak bergantung kepada runtime C/C++ atau pengkompil.

## Sokongan Sasaran

Whale mensasarkan untuk menyokong persekitaran sasaran berikut:

- Sistem Operasi:
  - Linux
  - Windows
  - macOS
  - UEFI (Tidak termasuk BIOS)
  - WaveOS (OS sendiri)
- Seni Bina:
  - x86_64 (AMD64)
  - ARM64
  - Lain-lain boleh diperluas melalui penambahan modul.

## Penyambungan Luar (FFI)

Whale secara teknikal direka untuk menyokong FFI (Antaramuka Fungsi Asing), tetapi menurut falsafah Wave, integrasi dengan bahasa luar tidak disarankan dan tidak disediakan secara standard.
Wave direka untuk melaksanakan semua fungsi dalam bahasanya sendiri.

## Kebolehan untuk Meluaskan

Whale boleh diperluaskan dalam cara berikut:

- Penambahan modul untuk sistem operasi atau seni bina baru.
- Penyisipan algoritma pengoptimuman yang ditentukan oleh pengguna.
- Penyesuaian profil binaan dan tetapan penghubung.
- Definisi format pelaksanaan sendiri.