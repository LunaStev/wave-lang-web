---
sidebar_position: 7
---

# Backend ఎంపికలు

ఈ options `wavec` ఉపయోగించే LLVM backend మరియు linker path ను నియంత్రిస్తాయి.

## ముఖ్యమైన options

ఈ options LLVM target, codegen detail, sysroot, linker ఎంచుకుంటాయి. `-C no-default-libs` automatic `libc`/`libm` link ఆపుతుంది.

## Freestanding policy

`--freestanding` hosted C runtime లేదని భావించి default libraries, red zone ఆపి static relocation ను ప్రాధాన్యం ఇస్తుంది.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI path

UEFI PE/COFF వాడుతుంది. Windows GNU target తో COFF object తయారు చేసి `lld-link` తో EFI options తో link చేయండి.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability queries

పైస్థాయి tools assumptions hard-code చేయకుండా `wavec print ...` తో capability query చేయాలి.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
