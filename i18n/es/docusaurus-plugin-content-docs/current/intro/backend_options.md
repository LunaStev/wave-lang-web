---
sidebar_position: 7
---

# Opciones de backend

Estas opciones controlan el backend LLVM y la ruta de linker usada por `wavec`.

## Opciones importantes

`--target=<triple>` selecciona el LLVM target. `--cpu`, `--features` y `--abi` afinan la generación de código. `--sysroot` afecta rutas de búsqueda de compile/link. `-C linker=...`, `-C link-arg=...` y `-C link-sysroot=...` controlan el linker. `-C no-default-libs` desactiva el enlace automático de `libc`/`libm`. `-C relocation-model=...` y `-C code-model=...` seleccionan modelos de generación de código de bajo nivel.

## Política freestanding

`--freestanding` asume que no hay hosted C runtime. Desactiva bibliotecas por defecto, desactiva red zone, emite IR estilo no-unwind y prefiere relocación estática para targets freestanding salvo override explícito.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Ruta UEFI

UEFI usa PE/COFF, no SysV ELF. La ruta recomendada es emitir un object COFF con `--target x86_64-pc-windows-gnu --freestanding --emit=obj` y luego enlazar con `lld-link` usando `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64` y `/nodefaultlib`.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Consultas de capability

Las herramientas superiores deben consultar `wavec print target-list`, `supported-emit-kinds`, `supported-input-types` y `default-linker` en lugar de codificar suposiciones.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
