---
sidebar_position: 1
---

# Установка

## Способ установки

Выполните следующую команду в терминале:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### Пример

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Что происходит во время установки
- Установка LLVM 14 и связанных пакетов (с помощью `apt-get`)

- Создание символической ссылки на `/usr/lib/libllvm-14.so`

- Установка переменной окружения LLVM_SYS_140_PREFIX (в `~/.bashrc`)

- Загрузка указанной версии Wave в формате `.tar.gz`

- Распаковка и установка `wavec` в `/usr/local/bin`

- Проверка установки с помощью команды `wavec --version`

## Проверка установки

```bash
wavec --version
```

## Руководство по удалению Wave (`uninstall.sh`)
### Как удалить
Выполните следующую команду в терминале:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
