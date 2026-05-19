---
sidebar_position: 6
---

# Rujukan CLI `wavec`

`wavec` ialah compiler aras rendah seperti `rustc` atau `cc`. Penyelesaian pakej, lockfile, registry dan workspace ialah tanggungjawab alat aras tinggi seperti Vex.

## Bentuk asas

```bash
wavec [global-options] <command> [command-options] [input...]
```

## Perintah utama

`build <input...>` menjalankan compile, check, link dan run pilihan melalui flags. `check <file>` ialah alias `build <file> --emit=check`, `run <file>` ialah alias `build <file> --run`, dan `print <item>` memaparkan capability compiler.

## Peraturan input

`build` menerima satu atau lebih input dan meneka jenis melalui extension. `--input-type=<kind>` memaksa satu jenis untuk semua input.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## Peraturan emit

`--emit` menyokong `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin`. `check` ialah control mode dan mesti digunakan sendirian.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Menjalankan output

`--run` hanya sah apabila tepat satu `bin` boleh dijalankan dihasilkan. Argumen selepas `--` dihantar kepada executable.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding dan bare-metal

`--freestanding` untuk kernel, bootloader, firmware dan embedded target; ia menutup default libs, red zone dan mengeluarkan code tanpa runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Kawalan backend

Gunakan options target, cpu, features, abi, sysroot dan `-C ...` untuk kawalan compiler/linker yang tepat.

## Pertanyaan capability

`wavec print ...` digunakan oleh Vex untuk memeriksa compiler tanpa meneka.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
