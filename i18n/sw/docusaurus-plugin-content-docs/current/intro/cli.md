---
sidebar_position: 6
---

# Rejea ya CLI ya `wavec`

`wavec` ni compiler ya kiwango cha chini kama `rustc` au `cc`. Kutatua packages, lockfile, registry na workspace ni jukumu la zana za juu kama Vex.

## Muundo wa msingi

```bash
wavec [global-options] <command> [command-options] [input...]
```

## Amri kuu

`build <input...>` hufanya compile, check, link na run ya hiari kwa flags. `check <file>` ni alias ya `build <file> --emit=check`, `run <file>` ni alias ya `build <file> --run`, na `print <item>` huonyesha capability za compiler.

## Kanuni za input

`build` hupokea input moja au zaidi na hukisia aina kwa extension. `--input-type=<kind>` hulazimisha aina moja kwa input zote.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## Kanuni za emit

`--emit` huunga mkono `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin`. `check` ni control mode na hutumika peke yake.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Kuendesha output

`--run` ni halali tu ikitengenezwa `bin` moja inayoweza kuendeshwa. Arguments baada ya `--` hupelekwa kwa executable.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding na bare-metal

`--freestanding` ni kwa kernel, bootloader, firmware na embedded target; huzima default libs, red zone na hutoa code isiyo tegemea runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Udhibiti wa backend

Tumia target, cpu, features, abi, sysroot na `-C ...` kudhibiti compiler/linker kwa usahihi.

## Maswali ya capability

`wavec print ...` hutumiwa na Vex kukagua compiler bila kubahatisha.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
