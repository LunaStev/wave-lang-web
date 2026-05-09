---
sidebar_position: 2
---

# Pengurus Pakej Vex

## Gambaran keseluruhan

Vex ialah pengurus pakej khusus dan sistem binaan untuk bahasa pengaturcaraan Wave.
Vex menyokong pengurusan projek secara keseluruhan, termasuk pengurusan pergantungan kod sumber, tetapan binaan, penetapan platform sasaran dan pemasangan dan penggunaan modul.
Keserasian dengan bahasa atau sistem luaran tidak dipertimbangkan dan ia direka bentuk untuk beroperasi hanya dalam ekosistem Wave.

## matlamat reka bentuk
Vex telah direka dengan matlamat berikut dalam fikiran:

Direka secara eksklusif untuk Wave: Disasarkan hanya untuk projek Wave, ia dioptimumkan untuk sintaks, struktur modul dan persekitaran pelaksanaan Wave.

* Struktur arahan intuitif: Dianjurkan untuk melaksanakan tugas utama dengan satu arahan, tanpa skrip binaan yang kompleks.
* Sokongan berbilang sasaran: Anda boleh menukar sasaran binaan dengan mudah bergantung pada sistem pengendalian dan seni bina.
* Pengurusan konfigurasi berasaskan WSON: Semua maklumat konfigurasi projek ditakrifkan dalam format WSON (Wave Serialization Object Notation).
* Binaan dan penggunaan statik: Boleh laku dibina secara statik dan boleh digunakan secara bebas tanpa bergantung pada masa jalan luaran.
