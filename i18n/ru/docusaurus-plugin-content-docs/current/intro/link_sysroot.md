---
sidebar_position: 8
---

# Ручное управление sysroot для линкера (`-C link-sysroot`)

Этот документ объясняет, как **явно управлять** sysroot на этапе линковки в `wavec`.

Основные принципы:

- `--sysroot=<path>`: sysroot на этапе компиляции (clang `-c`)
- `-C link-sysroot=<path>`: sysroot на этапе линковки (linker)

То есть, sysroot для компиляции и линковки обрабатываются отдельно.

---

## 1. Почему это нужно

При использовании `-C linker=<path>` в кросс-компиляции часто необходимо указывать пути выполнения (например, `aarch64-linux-gnu-gcc`, `crt1.o`, `libc`), к которым обращается драйвер линковки (например, `libm`).

В этом случае sysroot для линковки не подбирается автоматически, а должен быть явно передан через CLI.

---

## 2. Определение опций

## 2.1 `-C link-sysroot=<path>`

Внедряет `--sysroot=<path>` на этапе линковки.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

Внутренне это аналогично `-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

Мы продолжаем поддерживать традиционный метод передачи аргументов raw для линкера.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. Правила проверки

В случае сборки, требующей этапа линковки, процесс завершится с ошибкой использования, если выполняются одновременно следующие условия.

1. Использование `-C linker=...`
2. Использование `--sysroot=<path>`
3. Не указан sysroot для линковщика (`-C link-sysroot` или `-C link-arg=--sysroot=...`)

Пример сообщения об ошибке:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. Пример использования

## 4.1 Кросс-линковка для AArch64 Linux

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 Метод raw аргументов линкера

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 Сборка без линковки (`--emit=obj`)

Если этап линковки отсутствует, sysroot для линкера не требуется.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. Обобщение

- `--sysroot` контролирует этап компиляции
- `-C link-sysroot` контролирует этап линковки
- Предпочтение отдается явному управлению, а не автоматическому определению
