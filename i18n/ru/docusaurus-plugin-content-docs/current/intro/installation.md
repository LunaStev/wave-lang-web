---
sidebar_position: 1
---

# Установка

## Как установить на Linux

### Загрузка и распаковка
Скачайте последнюю версию Wave с официальной страницы релизов на GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Настройка LLVM (для версии Pre-Beta)
Так как версия Wave Pre-Beta временно использует LLVM, установите его с помощью следующих команд:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Проверка установки
Чтобы убедиться, что установка прошла успешно, введите следующую команду в терминале:

```bash
wavec --version
```

Если отображается информация о версии, значит установка прошла успешно.