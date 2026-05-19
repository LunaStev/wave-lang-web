---
sidebar_position: 7
---

# Options de backend

Ces options contrôlent le backend LLVM et le chemin du linker utilisés par `wavec`.

## Options importantes

`--target=<triple>` sélectionne le target LLVM. `--cpu`, `--features` et `--abi` affinent la génération de code. `--sysroot` influence les chemins de recherche compile/link. `-C linker=...`, `-C link-arg=...` et `-C link-sysroot=...` contrôlent le linker. `-C no-default-libs` désactive le link automatique de `libc`/`libm`. `-C relocation-model=...` et `-C code-model=...` choisissent des modèles de génération bas niveau.

## Politique freestanding

`--freestanding` suppose l’absence de hosted C runtime. Il désactive les bibliothèques par défaut, désactive la red zone, émet un IR de style no-unwind et privilégie la relocation statique pour les targets freestanding sauf override explicite.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Chemin UEFI

UEFI utilise PE/COFF, pas SysV ELF. Le chemin recommandé consiste à émettre un object COFF avec `--target x86_64-pc-windows-gnu --freestanding --emit=obj`, puis à linker avec `lld-link` en utilisant `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64` et `/nodefaultlib`.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Requêtes de capability

Les outils supérieurs doivent interroger `wavec print target-list`, `supported-emit-kinds`, `supported-input-types` et `default-linker` plutôt que coder des hypothèses.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
