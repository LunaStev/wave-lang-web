---
sidebar_position: 6
---

# `wavec` CLI রেফারেন্স

`wavec` হলো `rustc` বা `cc`-এর মতো low-level compiler। Package resolution, lockfile, registry এবং workspace Vex-এর মতো উচ্চ-স্তরের tool-এর দায়িত্ব।

## মৌলিক রূপ

```bash
wavec [global-options] <command> [command-options] [input...]
```

## মূল command

`build <input...>` flags দিয়ে compile, check, link এবং optional run করে। `check <file>` হলো `build <file> --emit=check` alias; `run <file>` হলো `build <file> --run` alias; `print <item>` compiler capability দেখায়।

## Input নিয়ম

`build` এক বা একাধিক input নেয় এবং extension থেকে type অনুমান করে। `--input-type=<kind>` সব input-এ এক type বাধ্য করে।

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## emit নিয়ম

`--emit` সমর্থন করে `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin`। `check` control mode, তাই একা ব্যবহার করতে হবে।

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Output চালানো

`--run` কেবল তখনই বৈধ যখন ঠিক একটি runnable `bin` তৈরি হয়। `--`-এর পরের arguments executable-এ যায়।

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding ও bare-metal

`--freestanding` kernel, bootloader, firmware এবং embedded target-এর জন্য; এটি default libs, red zone এবং runtime dependency বন্ধ করে।

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend control

সুনির্দিষ্ট compiler/linker control-এর জন্য target, cpu, features, abi, sysroot এবং `-C ...` options ব্যবহার করুন।

## Capability query

Vex-এর মতো tools `wavec print ...` দিয়ে compiler capability যাচাই করে।

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
