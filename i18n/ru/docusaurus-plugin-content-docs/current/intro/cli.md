---
sidebar_position: 6
---

# Справочник по CLI `wavec`.

Этот документ детально описывает работу CLI в **текущей реализации компилятора Wave (`wavec`)**.

Основные принципы:

- `wavec` — это компилятор.
- Инсталляция/удаление пакетом (lockfile, реестр, загрузка) не является обязанностью `wavec`.
- Внешние зависимости передаются как **явные аргументы CLI** при выполнении `wavec`.

---

## 1. Основной формат

```bash
wavec [global-options] <command> [command-options]
```

Пример:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. Правила разборки команд (важно)

В `wavec` сначала сканируются **глобальные параметры** из всех аргументов, а остальные интерпретируются как `<command>`.

Иными словами, глобальные параметры гибки в плане размещения.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

Все 3 варианта допустимы.

Использование `--` останавливает сканирование глобальных параметров и передает их в область команды.

```bash
wavec -- run main.wave
```

---

## 3. Команды

## 3.1 `run <file>`

Компилирует и выполняет файл Wave.

```bash
wavec run hello.wave
```

Действие:

1. Анализ источника + расширение import
2. Генерация LLVM IR
3. Связывание нативного бинарного файла (`target/<file_stem>`)
4. Выполнение

Особенности:

- `wavec` передает код завершения выполненной программы.

---

## 3.2 `build <file>`

Создает исполняемый файл (exe).

```bash
wavec build app.wave
```

Выходной бинарный файл:

- `target/<file_stem>`

## 3.3 опции `build` (`-o`, `-c`)б

Команда `build` позволяет контролировать имя и формат выходного файла через опции.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: указывает имя выходного файла.
  - По умолчанию (без `-c`): указывает путь к исполняемому файлу
  - При использовании с `-c`: указывает путь к объектному файлу
- `-c`: пропускает линковщик и генерирует только объектный файл.
- При использовании `-c` путь объекта выводится на stdout.

Основное поведение:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (вывод пути)б

Пример freestanding объектного ядра:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` также могут использоваться таким же образом.

---

## 3.4 `install std`, `update std`

Команды установки/обновления стандартной библиотеки.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. Глобальные опции

## 4.1 Оптимизация

Допустимые значения:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

Пример:

```bash
wavec -O3 run main.wave
```

---

## 4.2 Отладочный вывод

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

Допустимые элементы:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 Опции связывания

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` или `--link <lib>`
- `-L<path>` или `-L <path>`

При связывании `wavec` внутренне передает в формате `-l<lib>`, `-L<path>`.

---

## 4.4 Опции внешней зависимости (важно)

Опция, используемая для разбора внешних пакетов (`pkg::...`).

### `--dep-root <dir>`

Добавляет кандидат в корневой директории пакета.

```bash
wavec run app.wave --dep-root .vex/dep
```

При поиске пакета `math`:

- .vex/dep/math проверяется

Может быть указано несколько раз:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

Фиксирует имя пакета для определенного пути.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

Правила:

- Формат `name`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` всегда в формате `name=path`
- Если дублировать одноИмя пакета несколько раз будет ошибкой

---

## 4.5 параметры бэкенда (`--llvm`, `--whale`)

Опции управления бэкендом интерпретируются только после `--llvm`.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Поддерживаемые элементы (краткое содержание):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (можно повторять)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

Текущие основные целевые платформы на основании `wavec print target-list`:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` в настоящее время зарезервирован как флаг-заглушка, фактический бэкенд-пайплайн пока не реализован (TODO).

---

## 5. Правила интерпретации импортов

Импорты Wave разделяются на три категории.

1. Локальный импорт
2. std импорт
3. Импорт внешних пакетов

## 5.1 Локально

```wave
import("foo");
import("path/to/mod.wave");
```

Ищет `<path>.wave` в каталоге файла основы.

## 5.2 стд

```wave
import("std::io::format");
```

Использует путь `~/.wave/lib/wave/std/...`.

## 5.3 внешние пакеты

```wave
import("math::add");
import("json::parser::core");
```

Формат:

- Требуется минимум 2 сегмента `package::module`.

Порядок определения корня пакета:

1. Явное сопоставление `--dep name=path`.
2. Поиск `--dep-root` в каждом `<root>/<package>`.

Если одинаковый пакет найден в нескольких dep-root:

- Не выбирается автоматически и возникает **ошибка неоднозначности**.
- Должен быть зафиксирован с помощью `--dep name=path`.

Порядок поиска файла модуля:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

Пример:

```wave
import("math::core::vec");
```

Поиск:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. Практический пример внешнего импорта

### 6.1 один dep-root

Каталог:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

Код:

```wave
import("math::add");
```

Выполнить:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 Устранение неоднозначности

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

Если с обеих сторон есть `math`, возникает ошибка. Исправляем, как показано ниже.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Разделение ролей с Vex

Рекомендуемая структура:

- `wavec`: компиляция/линковка/исполнение + разрешение указанной зависимости
- `vex`: установка/управление зависимостями, затем `wavec ... --dep-root ... --dep ...` вызов

Пример:

```bash
# Внутренне Vex делает
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

Эта модель поддерживает компилятор простым и определенным, позволяя менеджеру пакетов ответственным за автоматизацию.

---

## 8. Быстрая справка

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reserved, not implemented
```
