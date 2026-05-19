---
sidebar_position: 6
---

# `wavec` CLI సూచిక

`wavec` అనేది `rustc` లేదా `cc` వంటి low-level compiler. Package resolution, lockfile, registry, workspace వంటివి Vex వంటి పైస్థాయి tools బాధ్యత.

## ప్రాథమిక రూపం

```bash
wavec [global-options] <command> [command-options] [input...]
```

## ప్రధాన commands

`build <input...>` flags ద్వారా compile, check, link, optional run చేస్తుంది. `check <file>` అనేది `build <file> --emit=check` alias; `run <file>` అనేది `build <file> --run` alias; `print <item>` compiler capability చూపిస్తుంది.

## Input నియమాలు

`build` ఒకటి లేదా ఎక్కువ input తీసుకొని extension ద్వారా type ఊహిస్తుంది. `--input-type=<kind>` అన్ని input కు ఒకే type బలవంతం చేస్తుంది.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## emit నియమాలు

`--emit` `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin` కు మద్దతు ఇస్తుంది. `check` control mode; ఒంటరిగా మాత్రమే వాడాలి.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Output నడపడం

`--run` కచ్చితంగా ఒక runnable `bin` వస్తేనే valid. `--` తర్వాత arguments executable కు పంపబడతాయి.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding మరియు bare-metal

`--freestanding` kernel, bootloader, firmware, embedded target కోసం; default libs, red zone, runtime dependency ఆపుతుంది.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend control

ఖచ్చితమైన compiler/linker control కోసం target, cpu, features, abi, sysroot మరియు `-C ...` options వాడండి.

## Capability queries

Vex వంటి tools `wavec print ...` ద్వారా compiler capability పరీక్షిస్తాయి.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
