---
sidebar_position: 6
---

# Справочник CLI `wavec`

`wavec` — низкоуровневый компилятор, похожий по роли на `rustc` или `cc`. Разрешение пакетов, lockfile, registry и workspace относятся к инструментам выше уровня, например Vex.

## Базовая форма

```bash
wavec [global-options] <command> [command-options] [input...]
```

## Основные команды

`build <input...>` управляет компиляцией, проверкой, линковкой и необязательным запуском через флаги. `check <file>` — alias для `build <file> --emit=check`. `run <file>` — alias для `build <file> --run`. `print <item>` выводит capability компилятора: targets, emit kinds, input types и linker по умолчанию.

## Правила входов

`build` принимает один или несколько входов. Расширения выводятся автоматически: `.wave` для Wave source, `.ll` для LLVM IR, `.bc` для bitcode, `.s` или `.asm` для assembly, `.o` или `.obj` для object files. `--input-type=<kind>` задаёт один тип для всех входов.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## Правила emit

`--emit` поддерживает `check`, `ast`, `ir`, `bc`, `asm`, `obj` и `bin`. `check` — управляющий режим, а не обычный artifact, поэтому используется только отдельно. Если `bin` создаётся вместе с другими artifacts, `-o` задаёт имя финального linked binary; промежуточные artifacts используют `--out-dir` или пути по умолчанию.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Запуск результата

`--run` разрешён только если создаётся ровно один исполняемый artifact `bin`. Он недопустим с `--shared` или неисполняемыми emit modes. Аргументы после `--` передаются созданному executable.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding и bare-metal

`--freestanding` предназначен для kernels, bootloaders, firmware и embedded targets. Он отключает стандартную линковку `libc`/`libm`, отключает red zone backend и создаёт код для сред без runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Управление backend

Для точного управления compiler и linker используйте `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...` и `-C no-default-libs`.

## Запросы capability

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types` и `default-linker` нужны инструментам вроде Vex для проверки установленного compiler без догадок.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
