---
sidebar_position: 1
---

# Pemasangan

## Cara Pemasangan

Wave boleh dipasang dengan mudah melalui skrip pemasangan yang disediakan.
Menjalankan arahan di bawah di terminal akan memasang pengkompil Wave (`wavec`) versi yang ditentukan secara automatik.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

Skrip pemasangan akan mengesahkan persekitaran sistem dan secara automatik menyiapkan kebergantungan dan pengkompil yang diperlukan untuk menjalankan Wave.
Jika versi tidak dinyatakan, versi stabil terkini atau versi asas berdasarkan kriteria yang ditetapkan akan dipasang.

## Contoh Pemasangan

Untuk memasang versi terkini, jalankan seperti berikut.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

Jika anda ingin memasang versi tertentu, gunakan pilihan `--version`.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

Ia juga mungkin untuk menentukan versi yang lebih terperinci seperti binaan malam.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Tugasan yang dilakukan semasa pemasangan.

Skrip pemasangan secara automatik akan mengendalikan pelbagai langkah untuk memastikan Wave dapat berjalan dengan normal.
Pertama, pasang pakej yang diperlukan terkait dengan LLVM 14 melalui `apt-get`.
Kemudian, buat pautan simbolik kepada `/usr/lib/libllvm-14.so` agar sistem dapat merujuk kepada LLVM dengan stabil.

Tetapkan pembolehubah persekitaran `LLVM_SYS_140_PREFIX` agar Wave dapat mencari LLVM dengan betul, dan tetapan ini akan ditambah kepada `~/.bashrc` agar kekal dalam sesi terminal seterusnya.

Seterusnya, muat turun dan ekstrak pakej Wave (`.tar.gz`) versi yang ditetapkan oleh pengguna.
Selepas ekstrak, pasang fail eksekusi `wavec` ke dalam `/usr/local/bin` agar dapat menggunakan arahan `wavec` dari mana-mana dalam sistem.

Setelah pemasangan selesai, sahkan sama ada ia dipasang dengan betul menggunakan perintah `wavec --version`.

## Pengesahan Pemasangan

Selepas pemasangan selesai, anda boleh menjalankan arahan di bawah untuk memastikan pengkompil Wave telah dipasang dengan betul.

```bash
wavec --versi
```

Jika maklumat versi Wave yang dipasang dipaparkan semasa pelaksanaan arahan, maka ia telah dipasang dengan betul.

---

## Panduan penyingkiran Wave (`uninstall.sh`)

Jika anda ingin membuang Wave dari sistem, anda boleh menggunakan skrip penghapusan yang disediakan.
Skrip ini bertanggungjawab untuk membersihkan fail dan tetapan yang ditambahkan semasa proses pemasangan.

### Kaedah penyingkiran

Jalankan arahan berikut di terminal.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

Apabila penghapusan selesai, arahan wavec tidak akan lagi digunakan,
dan fail serta tetapan yang berkaitan dengan Wave akan dipadam dari sistem.