---
sidebar_position: 6
---

# Référence CLI de `wavec`

`wavec` est un compilateur bas niveau, comparable à `rustc` ou `cc`. La résolution de paquets, les lockfiles, les registries et les workspaces relèvent d’outils supérieurs comme Vex.

## Forme de base

```bash
wavec [global-options] <command> [command-options] [input...]
```

## Commandes principales

`build <input...>` effectue la compilation, la vérification, le link et l’exécution optionnelle au moyen de flags. `check <file>` est un alias de `build <file> --emit=check`. `run <file>` est un alias de `build <file> --run`. `print <item>` affiche les capabilities du compilateur: targets, emit kinds, input types et linker par défaut.

## Règles d’entrée

`build` accepte une ou plusieurs entrées. Les extensions sont déduites automatiquement: `.wave` pour Wave source, `.ll` pour LLVM IR, `.bc` pour bitcode, `.s` ou `.asm` pour assembly, et `.o` ou `.obj` pour object files. `--input-type=<kind>` force un seul type pour toutes les entrées.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## Règles emit

`--emit` prend en charge `check`, `ast`, `ir`, `bc`, `asm`, `obj` et `bin`. `check` est un mode de contrôle et non un artifact normal; il doit donc être utilisé seul. Si `bin` est émis avec d’autres artifacts, `-o` nomme le binaire final linké; les artifacts intermédiaires suivent `--out-dir` ou les chemins par défaut.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Exécution du résultat

`--run` n’est autorisé que lorsqu’un seul artifact `bin` exécutable est produit. Il n’est pas valide avec `--shared` ni avec des modes emit non exécutables. Les arguments après `--` sont transmis à l’exécutable produit.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding et bare-metal

`--freestanding` vise les kernels, bootloaders, firmwares et targets embedded. Il désactive le link par défaut de `libc`/`libm`, désactive la red zone du backend et émet du code adapté aux environnements sans runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Contrôle du backend

Utilisez `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...` et `-C no-default-libs` pour contrôler précisément le compilateur et le linker.

## Requêtes de capability

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types` et `default-linker` permettent à des outils comme Vex de valider le compilateur installé sans deviner.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
