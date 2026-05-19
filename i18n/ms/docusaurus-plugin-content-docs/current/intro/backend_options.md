---
sidebar_position: 7
---

# Pilihan backend

Pilihan ini mengawal backend LLVM dan laluan linker yang digunakan oleh `wavec`.

## Pilihan penting

Options ini memilih LLVM target, codegen detail, sysroot dan linker. `-C no-default-libs` menutup link automatik `libc`/`libm`.

## Dasar freestanding

`--freestanding` menganggap tiada hosted C runtime, menutup default libraries dan red zone, serta memilih static relocation jika sesuai.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Laluan UEFI

UEFI menggunakan PE/COFF. Emit COFF object dengan Windows GNU target, kemudian link menggunakan `lld-link` dan option EFI.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Pertanyaan capability

Tools aras tinggi patut query capability melalui `wavec print ...`, bukan hard-code andaian.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
