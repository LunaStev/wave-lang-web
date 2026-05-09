---
sidebar_position: 7
---

# Опции бэкенда (`--llvm`, `--whale`)

Этот документ описывает CLI параметры, относящиеся к бэкенду `wavec`.

Основные принципы:

- `wavec` не является менеджером пакетов.
- Работа бэкенда контролируется по возможности **явными параметрами**.
- Детальные опции бэкенда интерпретируются только после `--llvm`.

---

## 1. Выбор бэкенда

## 1.1 `--llvm`

`--llvm` сам по себе является начальной меткой блока опций бэкенда.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Как указано выше, только поддерживаемые параметры после `--llvm` обрабатываются как настройки LLVM бэкенда.

## 1.2 `--whale` (в настоящее время TODO)

В настоящее время `--whale` является **зарезервированным пустым флагом**.

- Парсер распознает его.
- Фактический канал бэкэнда пока не подключен.
- Если используется, завершает выполнение ошибкой TODO.

---

## 2. Поддерживаемые опции после `--llvm`

## 2.1 Цель/Генерация кода

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

Точка применения:

- Этап генерации IR (TargetMachine): `target`, `cpu`, `features`
- Этап объекта/ссылки (вызов clang): `target`, `abi`

Основные target triple, которые документируются по умолчанию:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- Freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Цепочка инструментов/ссылки

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (можно повторить)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

Точка применения:

- Создание объекта (clang `-c`) с использованием `--sysroot`
- На этапе линковки замена компоновщика, добавление необработанных аргументов для линковки, добавление link-sysroot
- Автоматическая деактивация `-C no-default-libs` при использовании `-lc -lm`

---

## 3. Правила синтаксического анализа (важно)

Без использования `--llvm` подробные опции бэкенда не будут интерпретироваться как глобальные.

Например, ниже приведена ошибка.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

Необходимо записать следующим образом.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. Пример использования

Создание базового объекта:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

Создание freestanding объектного ядра:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

Пользовательская ссылка:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

Автоматическая деактивация ссылки libc/libm:

```bash
wavec --llvm -C no-default-libs build app.wave
```

При использовании `--freestanding` выравнивается с `-C no-default-libs` и подходит для сборки, которая не предполагает наличие стандартных библиотек времени выполнения, например, для ядра или загрузочного кода.

---

## 5. Резюме состояния

- LLVM бэкенд: работает
- Whale бэкенд: запланировано(TODO), не реализовано
