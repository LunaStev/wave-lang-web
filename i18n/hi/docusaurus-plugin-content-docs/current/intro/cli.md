---
sidebar_position: 6
---

# `wavec` CLI संदर्भ

`wavec` `rustc` या `cc` जैसा low-level compiler है। Package resolution, lockfile, registry और workspace Vex जैसे उच्च-स्तरीय tools की जिम्मेदारी हैं।

## मूल रूप

```bash
wavec [global-options] <command> [command-options] [input...]
```

## मुख्य commands

`build <input...>` flags से compile, check, link और optional run करता है। `check <file>` alias है `build <file> --emit=check`; `run <file>` alias है `build <file> --run`; `print <item>` compiler capability दिखाता है।

## Input नियम

`build` एक या अधिक input लेता है और extension से type अनुमानित करता है। `--input-type=<kind>` सभी input पर एक type लागू करता है।

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## emit नियम

`--emit` में `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin` हैं। `check` control mode है और अकेले ही मान्य है।

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Output चलाना

`--run` तभी मान्य है जब ठीक एक runnable `bin` बने। `--` के बाद arguments executable को मिलते हैं।

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding और bare-metal

`--freestanding` kernel, bootloader, firmware और embedded target के लिए है; यह default libs, red zone और runtime dependency बंद करता है।

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend नियंत्रण

सटीक compiler/linker control के लिए target, cpu, features, abi, sysroot और `-C ...` options प्रयोग करें।

## Capability queries

Vex जैसे tools `wavec print ...` से compiler capability जांचते हैं।

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
