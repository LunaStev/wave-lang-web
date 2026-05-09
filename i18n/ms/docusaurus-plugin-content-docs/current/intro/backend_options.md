---
sidebar_position: 7
---

# Pilihan hujung belakang (`--llvm`, `--whale`)

Dokumen ini menerangkan pilihan CLI khusus hujung belakang untuk `wavec`.

Prinsip penting:

- `wavec` bukan pengurus pakej.
- Tingkah laku bahagian belakang dikawal oleh **argumen eksplisit** apabila boleh.
- Pilihan terperinci bahagian belakang hanya ditafsirkan di belakang `--llvm`.

---

## 1. Pemilih bahagian belakang

## 1.1 `--llvm`

`--llvm` sendiri ialah penanda permulaan untuk blok pilihan hujung belakang.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Seperti yang ditunjukkan di atas, hanya item yang disokong antara argumen berikut `--llvm` diproses sebagai tetapan hujung belakang LLVM.

## 1.2 `--whale` (TODO pada masa ini)

Pada masa ini `--whale` ialah **bendera dummy tersimpan**.

- Penghurai mengenalinya.
- Saluran paip belakang Whale sebenar belum disambungkan lagi.
- Apabila digunakan, ia berakhir dengan ralat TODO.

---

## 2. Pilihan disokong di belakang `--llvm`

## 2.1 Sasaran/Kodegen

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

Titik refleksi:

- Buat IR (TargetMachine) Langkah: `target`, `cpu`, `features`
- Tahap objek/pautan (panggilan denting): `target`, `abi`

Pada masa ini sasaran utama tiga kali ganda untuk didokumenkan secara lalai:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Rantaian Alat/Pautan

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (boleh diulang)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

Titik refleksi:

- `-c` kepada penciptaan objek (dentang `--sysroot`)
- override linker, suntikan arg link mentah, suntikan link-sysroot pada peringkat link
- Lumpuhkan `-C no-default-libs` secara automatik apabila menggunakan `-lc -lm`

---

## 3. Peraturan Penghuraian (Penting)

Jika `--llvm` tidak digunakan, pilihan terperinci bahagian belakang tidak ditafsirkan sebagai pilihan global.

Sebagai contoh, di bawah adalah ralat:

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

Ia mesti ditulis seperti di bawah.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. Contoh penggunaan

Buat objek asas:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

Buat objek kernel berdiri bebas:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

Pautan Tersuai:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

Lumpuhkan pemautan auto libc/libm:

```bash
wavec --llvm -C no-default-libs build app.wave
```

Penggunaan

---

## 5. Ringkasan Status

- Bahagian belakang LLVM: Berfungsi
- Bahagian Belakang Whale: Terpelihara (TODO), tidak dilaksanakan
