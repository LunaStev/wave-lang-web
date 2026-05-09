---
sidebar_position: 2
---

# Pengurus Pakej Vex

## Gambaran Keseluruhan

Vex adalah pengurus pakej dan sistem binaan khusus untuk bahasa pengaturcaraan Wave.
Vex menyokong pengurusan projek secara menyeluruh termasuk pengurusan kebergantungan kod sumber, tetapan binaan, pemilihan platform sasaran, pemasangan dan pengedaran modul.
Tidak mempertimbangkan keserasian dengan bahasa atau sistem luar, dan direka untuk beroperasi sepenuhnya di dalam ekosistem Wave.

## Matlamat Reka Bentuk

Vex direka berdasarkan matlamat berikut:

Reka bentuk khusus untuk Wave: Sasaran hanya bagi projek Wave dan dioptimumkan untuk tatabahasa, struktur modul, dan persekitaran pelaksanaan Wave.

- Sistem arahan intuitif: Direka untuk membolehkan pelaksanaan tugas utama dengan satu arahan tanpa skrip binaan yang rumit.
- Sokongan multi-target: Memudahkan peralihan target binaan berdasarkan sistem operasi dan seni bina.
- Pengurusan konfigurasi berdasarkan WSON: Semua maklumat konfigurasi projek ditakrifkan dalam format WSON (Wave Serialization Object Notation).
- Pembinaan dan pengedaran statik: Fail pelaksanaan dibina secara statik, boleh diedarkan secara beban sendiri tanpa bergantung pada runtime luar.