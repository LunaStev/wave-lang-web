---
sidebar_position: 6
---

# የ`wavec` CLI ማጣቀሻ

`wavec` እንደ `rustc` ወይም `cc` ያለ low-level compiler ነው። Package resolution, lockfile, registry እና workspace የVex ያሉ higher-level tools ኃላፊነት ናቸው።

## መሠረታዊ ቅርጽ

```bash
wavec [global-options] <command> [command-options] [input...]
```

## ዋና commands

`build <input...>` በflags compile, check, link እና optional run ያደርጋል። `check <file>` የ`build <file> --emit=check` alias ነው፤ `run <file>` የ`build <file> --run` alias ነው፤ `print <item>` compiler capability ያሳያል።

## Input ሕጎች

`build` አንድ ወይም ብዙ input ይቀበላል፣ type ከextension ይገምታል። `--input-type=<kind>` ለሁሉም input አንድ type ያስገድዳል።

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## emit ሕጎች

`--emit` `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin` ይደግፋል። `check` control mode ነው፣ ብቻውን መጠቀም አለበት።

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Output ማስኬድ

`--run` ትክክለኛ አንድ runnable `bin` ሲፈጠር ብቻ valid ነው። `--` በኋላ arguments ወደ executable ይተላለፋሉ።

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding እና bare-metal

`--freestanding` ለkernel, bootloader, firmware, embedded target ነው፤ default libs, red zone, runtime dependency ያጠፋል።

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend control

ትክክለኛ compiler/linker control ለማድረግ target, cpu, features, abi, sysroot እና `-C ...` options ይጠቀሙ።

## Capability queries

Vex ያሉ tools `wavec print ...` በመጠቀም compiler capability ይፈትሻሉ።

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
