---
sidebar_position: 7
---

# Параметры backend

Эти параметры управляют backend LLVM и путём linker, используемыми `wavec`.

## Важные параметры

`--target=<triple>` выбирает LLVM target. `--cpu`, `--features` и `--abi` уточняют code generation. `--sysroot` влияет на пути поиска compile/link. `-C linker=...`, `-C link-arg=...` и `-C link-sysroot=...` управляют linker. `-C no-default-libs` отключает автоматическую линковку `libc`/`libm`. `-C relocation-model=...` и `-C code-model=...` выбирают низкоуровневые модели генерации кода.

## Политика freestanding

`--freestanding` предполагает отсутствие hosted C runtime. Он отключает библиотеки по умолчанию, отключает red zone, генерирует IR в стиле no-unwind и предпочитает static relocation для freestanding targets, если нет явного override.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Путь UEFI

UEFI использует PE/COFF, а не SysV ELF. Рекомендуемый путь: создать COFF object через `--target x86_64-pc-windows-gnu --freestanding --emit=obj`, затем линковать `lld-link` с `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64` и `/nodefaultlib`.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Запросы capability

Инструменты верхнего уровня должны запрашивать `wavec print target-list`, `supported-emit-kinds`, `supported-input-types` и `default-linker`, а не жёстко кодировать предположения.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
