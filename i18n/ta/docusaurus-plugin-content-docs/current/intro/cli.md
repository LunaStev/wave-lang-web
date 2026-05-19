---
sidebar_position: 6
---

# `wavec` CLI குறிப்பு

`wavec` என்பது `rustc` அல்லது `cc` போன்ற low-level compiler. Package resolution, lockfile, registry, workspace ஆகியவை Vex போன்ற மேல்நிலை tools பொறுப்பு.

## அடிப்படை வடிவம்

```bash
wavec [global-options] <command> [command-options] [input...]
```

## முக்கிய commands

`build <input...>` flags மூலம் compile, check, link, optional run செய்கிறது. `check <file>` என்பது `build <file> --emit=check` alias; `run <file>` என்பது `build <file> --run` alias; `print <item>` compiler capability காட்டும்.

## Input விதிகள்

`build` ஒன்று அல்லது பல input எடுக்கும்; extension மூலம் type கணிக்கிறது. `--input-type=<kind>` எல்லா input-க்கும் ஒரே type கட்டாயப்படுத்தும்.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## emit விதிகள்

`--emit` `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin` ஆதரிக்கும். `check` control mode; தனியாகவே பயன்படுத்த வேண்டும்.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Output இயக்குதல்

`--run` சரியாக ஒரு runnable `bin` உருவானால் மட்டுமே செல்லுபடியாகும். `--` பிறகு arguments executable-க்கு செல்லும்.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding மற்றும் bare-metal

`--freestanding` kernel, bootloader, firmware, embedded target க்கானது; default libs, red zone, runtime dependency ஆகியவற்றை அணைக்கும்.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend control

துல்லியமான compiler/linker control க்கு target, cpu, features, abi, sysroot மற்றும் `-C ...` options பயன்படுத்தவும்.

## Capability queries

Vex போன்ற tools `wavec print ...` மூலம் compiler capability பரிசோதிக்கும்.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
