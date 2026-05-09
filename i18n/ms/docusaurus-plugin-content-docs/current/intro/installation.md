---
sidebar_position: 1
---

# pemasangan

## Kaedah pemasangan

Wave boleh dipasang hanya melalui skrip pemasangan yang disediakan.
Jika anda menjalankan arahan di bawah dalam terminal, versi pengkompil Wave (`wavec`) yang ditentukan akan dipasang secara automatik.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

Skrip pemasangan menyemak persekitaran sistem dan secara automatik menyediakan kebergantungan dan pengkompil yang diperlukan untuk menjalankan Wave.
Jika anda tidak menentukan versi, versi stabil terkini atau versi lalai mengikut kriteria yang ditentukan akan dipasang.

## Contoh pemasangan

Untuk memasang versi terkini, jalankan:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

Jika anda ingin memasang versi tertentu, gunakan pilihan `--version`.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

Ia juga mungkin untuk menentukan versi yang lebih terperinci, seperti binaan setiap malam.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Apa yang berlaku semasa pemasangan

Skrip pemasangan secara automatik mengendalikan beberapa langkah untuk membolehkan Wave berjalan seperti biasa.
Mula-mula, pasang pakej yang diperlukan berkaitan dengan LLVM 14 melalui `apt-get`.
Cipta pautan simbolik ke `/usr/lib/libllvm-14.so` supaya sistem masa hadapan boleh merujuk LLVM dengan pasti.

Wave Menetapkan pembolehubah persekitaran `LLVM_SYS_140_PREFIX` supaya pengkompil boleh mencari LLVM dengan betul.
Tetapan ini ditambahkan pada `~/.bashrc` dan berterusan sepanjang sesi terminal akan datang.

Seterusnya, muat turun dan nyahzip versi pakej Wave (`.tar.gz`) yang ditentukan pengguna.
Selepas menyahzip, pasang fail boleh laku `wavec` ke dalam `/usr/local/bin`.
Konfigurasikan arahan `wavec` untuk tersedia di mana-mana sahaja pada sistem.

Setelah pemasangan selesai, semak sama ada ia telah dipasang dengan betul menggunakan arahan `wavec --version`.

## Semak pemasangan

Selepas pemasangan selesai, anda boleh menyemak sama ada pengkompil Wave telah dipasang dengan betul dengan menjalankan arahan di bawah.

```bash
wavec --version
```

Jika maklumat versi Wave yang dipasang dipaparkan semasa melaksanakan arahan, ia dipasang seperti biasa.

---

## Panduan Pembuangan Wave (`uninstall.sh`)

Jika anda ingin mengalih keluar Wave daripada sistem anda, anda boleh menggunakan skrip penyingkiran yang disediakan.
Skrip ini bertanggungjawab untuk membersihkan fail dan tetapan yang ditambahkan semasa proses pemasangan.

### Bagaimana untuk mengeluarkan

Jalankan arahan berikut dalam terminal:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

Setelah pengalihan keluar selesai, arahan wavec tidak akan digunakan lagi.
Fail boleh laku dan tetapan yang dikaitkan dengan Wave akan dipadamkan daripada sistem anda.
