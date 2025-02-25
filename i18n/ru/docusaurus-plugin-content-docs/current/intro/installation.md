---
sidebar_position: 1
---

# Установка

## Метод установки для Linux

### Загрузка и распаковка
Скачайте последнюю версию Wave с официальной страницы релизов на GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Настройка LLVM (версия Pre Beta)
Версия Pre Beta Wave временно использует LLVM, поэтому установите LLVM с помощью следующей команды:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Проверка установки
Чтобы проверить, завершена ли установка, введите следующую команду в терминале:

```bash
wave --version
```

Если отображается информация о версии, установка прошла успешно.