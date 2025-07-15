---
sidebar_position: 1
---

# Установка

## Способ установки

Выполните следующую команду в терминале:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <версия>
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

## Операции, выполняемые при установке

- Установка LLVM 14 и связанных пакетов (`apt-get`)

- Создание символической ссылки `/usr/lib/libllvm-14.so`

- Установка переменной окружения `LLVM_SYS_140_PREFIX` (`~/.bashrc`)

- Загрузка указанной версии Wave `.tar.gz`

- Установка `wavec` в `/usr/local/bin` после распаковки

- Проверка установки с помощью `wavec --version`

## Проверка установки

```bash
wavec --version
```

## Руководство по удалению Wave (`uninstall.sh`)

### Способ удаления

Выполните следующую команду в терминале:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
