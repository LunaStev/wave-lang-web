---
sidebar_position: 8
---

# Pautan kawalan manual root sysroot (`-C link-sysroot`)

Dokumen ini menerangkan cara **kawal secara eksplisit** sysroot fasa pautan dalam `wavec`.

Prinsip teras:

- `--sysroot=<path>`: fasa penyusunan (dentang `-c`) sysroot
- `-C link-sysroot=<path>`: pemaut sysroot

Dalam erti kata lain, sysroot untuk penyusunan dan pemautan dikendalikan secara berasingan.

---

## 1. Mengapa ia diperlukan?

Apabila menggunakan `-C linker=<path>` dalam pautan silang, anda selalunya perlu menentukan secara berasingan laluan masa jalan (`aarch64-linux-gnu-gcc`, `crt1.o`, `libc`) yang dirujuk oleh pemacu pautan (mis. `libm`).

Pada masa ini, sysroot pautan tidak disimpulkan secara automatik, tetapi direka bentuk untuk dihantar secara eksplisit dalam CLI.

---

## 2. Definisi pilihan

## 2.1 `-C link-sysroot=<path>`

Suntikan `--sysroot=<path>` ke peringkat pautan.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

Secara dalaman ia mempunyai maksud yang sama seperti `-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

Kaedah hujah pautan mentah sedia ada juga masih disokong.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. Peraturan pengesahan

Binaan yang memerlukan langkah pautan akan ditamatkan dengan ralat penggunaan jika syarat berikut dipenuhi serentak:

1. Gunakan `-C linker=...`
2. Gunakan `--sysroot=<path>`
3. Pautan sysroot (`-C link-sysroot` atau `-C link-arg=--sysroot=...`) tidak dinyatakan

Contoh mesej ralat:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. Contoh penggunaan

## 4.1 Pautan silang AArch64 Linux

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 kaedah hujah pautan mentah

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 Bina tanpa pautan (`--emit=obj`)

Tanpa langkah pautan, memautkan sysroot tidak diperlukan.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. Bersihkan

- `--sysroot` mengawal fasa kompilasi
- `-C link-sysroot` mengawal fasa pautan
- Utamakan kawalan eksplisit ke atas inferens automatik
