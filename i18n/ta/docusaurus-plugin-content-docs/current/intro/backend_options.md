---
sidebar_position: 7
---

# Backend விருப்பங்கள்

இந்த options `wavec` பயன்படுத்தும் LLVM backend மற்றும் linker path-ஐ கட்டுப்படுத்துகின்றன.

## முக்கிய options

இந்த options LLVM target, codegen detail, sysroot, linker தேர்வு செய்கின்றன. `-C no-default-libs` automatic `libc`/`libm` link அணைக்கும்.

## Freestanding policy

`--freestanding` hosted C runtime இல்லை எனக் கருதி default libraries, red zone அணைத்து static relocation முன்னுரிமை தரும்.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI path

UEFI PE/COFF பயன்படுத்துகிறது. Windows GNU target மூலம் COFF object உருவாக்கி `lld-link` மூலம் EFI options உடன் link செய்யவும்.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability queries

மேல்நிலை tools assumptions hard-code செய்யாமல் `wavec print ...` மூலம் capability query செய்ய வேண்டும்.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
