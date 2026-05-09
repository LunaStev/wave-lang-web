---
sidebar_position: 6
---

# Rujukan `wavec` CLI

Dokumen ini memperincikan kelakuan CLI ** pangkalan pelaksanaan pengkompil Wave (`wavec`) semasa**.

Prinsip teras:

- `wavec` ialah pengkompil.
- Pemasangan/peleraian pakej (fail kunci, pendaftaran, muat turun) bukan tanggungjawab `wavec`.
- Kebergantungan luaran diluluskan sebagai **argumen CLI eksplisit** apabila melaksanakan `wavec`.

---

## 1. Format asas

```bash
wavec [global-options] <command> [command-options]
```

Contoh:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. Peraturan penghuraian perintah (penting)

`wavec` mula-mula mengimbas semua argumen untuk **pilihan global** dan kemudian mentafsir `<command>` sebagai argumen yang tinggal.

Dalam erti kata lain, lokasi pilihan global adalah fleksibel.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

Ketiga-tiga di atas adalah sah.

Jika anda menggunakan `--`, imbasan pilihan global akan berhenti dan beralih ke kawasan arahan.

```bash
wavec -- run main.wave
```

---

## 3. Commands

## 3.1 `run <file>`

Susun dan jalankan fail Wave.

```bash
wavec run hello.wave
```

Tindakan:

1. Penghuraian sumber + pengembangan import
2. Cipta LLVM IR
3. Pautan binari asli (`target/<file_stem>`)
4. lari

ciri-ciri:

- `wavec` melepasi kod keluar program yang dilaksanakan.

---

## 3.2 `build <file>`

Mencipta fail boleh laku (exe).

```bash
wavec build app.wave
```

Perduaan keluaran:

- `target/<file_stem>`

## 3.3 Pilihan `build` (`-o`, `-c`)

Perintah `build` boleh mengawal nama fail output dan format output.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: Menentukan nama fail output.
  - Asas (tiada `-c`): Menentukan laluan output boleh laku.
  - Dengan `-c`: tentukan laluan output fail objek
- `-c`: Langkau pemautan dan jana fail objek sahaja.
- Apabila menggunakan `-c`, laluan objek adalah output kepada stdout.

Tingkah laku lalai:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (output laluan)

Contoh objek kernel berdiri bebas:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` juga boleh digunakan dengan cara yang sama.

---

## 3.4 `install std`, `update std`

Ini ialah arahan pemasangan/kemas kini perpustakaan standard.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. Global Options

## 4.1 Pengoptimuman

Nilai yang dibenarkan:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

Contoh:

```bash
wavec -O3 run main.wave
```

---

## 4.2 Keluaran nyahpepijat

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

Item yang dibenarkan:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 Pilihan Pautan

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` atau `--link <lib>`
- `-L<path>` atau `-L <path>`

`wavec` dihantar secara dalaman dalam bentuk `-l<lib>` dan `-L<path>` apabila memaut.

---

## 4.4 Pilihan Kebergantungan Luaran (Penting)

Ini ialah pilihan untuk analisis import luaran (`pkg::...`).

### `--dep-root <dir>`

Tambah calon direktori akar pakej.

```bash
wavec run app.wave --dep-root .vex/dep
```

Apabila mencari pakej `math`:

- Semak `.vex/dep/math`

Boleh dinyatakan beberapa kali:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

Membetulkan nama pakej ke laluan tertentu.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

Peraturan:

- Format `name`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` mestilah dalam format `name=path`
- Ralat berlaku jika nama pakej yang sama dinyatakan berulang kali.

---

## 4.5 Pilihan hujung belakang (`--llvm`, `--whale`)

Pilihan kawalan hujung belakang hanya ditafsirkan di belakang `--llvm`.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Item yang disokong (ringkasan):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (boleh diulang)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

Sasaran utama semasa berdasarkan `wavec print target-list`:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` pada masa ini ialah bendera tiruan tersimpan dan saluran paip bahagian belakang sebenar ialah TODO.

---

## 5. Peraturan tafsiran import

Wave mengimport cawangan kepada tiga jenis:

1. import tempatan
2. std import
3. import pakej luaran

## 5.1 Tempatan

```wave
import("foo");
import("path/to/mod.wave");
```

Cari `<path>.wave` dalam direktori fail asas.

## 5.2 std

```wave
import("std::io::format");
```

Gunakan laluan `~/.wave/lib/wave/std/...`.

## 5.3 Pakej luaran

```wave
import("math::add");
import("json::parser::core");
```

Format:

- Minimum `package::module` 2 segmen diperlukan

Urutan penentuan akar pakej:

1. `--dep name=path` pemetaan eksplisit
2. Cari `--dep-root` dalam setiap `<root>/<package>`

Jika pakej yang sama ditemui dalam berbilang dep-roots secara serentak:

- Tanpa auto-pilihan **ralat kekaburan**
- Mesti dibetulkan dengan `--dep name=path`

Perintah navigasi fail modul:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

Contoh:

```wave
import("math::core::vec");
```

Navigasi:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. Contoh import luar

### 6.1 Satu dep-root

Direktori:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

Kod:

```wave
import("math::add");
```

Jalankan:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 Penyelesaian kekaburan

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

Jika `math` hadir pada kedua-dua belah pihak, ralat berlaku. Betulkan seperti yang ditunjukkan di bawah.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Pengasingan peranan daripada Vex

Struktur yang disyorkan:

- `wavec`: kompil/paut/laksanakan + selesaikan kebergantungan yang ditentukan
- `vex`: Panggil `wavec ... --dep-root ... --dep ...` selepas memasang/mengurus kebergantungan

Contoh:

```bash
# Secara dalaman, vex tidak
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

Model ini meninggalkan pengurus pakej bertanggungjawab untuk automasi, sambil memastikan pengkompil mudah dan deterministik.

---

## 8. Rujukan pantas

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reserved, not implemented
```
