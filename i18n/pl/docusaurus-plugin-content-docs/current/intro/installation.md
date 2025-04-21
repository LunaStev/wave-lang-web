---
sidebar_position: 1
---

# Instalacja

## Jak zainstalować na Linux

### Pobieranie i rozpakowywanie
Pobierz najnowszą wersję Wave z oficjalnej strony wydania na GitHubie.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Konfiguracja LLVM (w wersji Pre Beta)
Wersja Pre Beta Wave tymczasowo używa LLVM, dlatego zainstaluj LLVM za pomocą poniższej komendy:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Sprawdzenie instalacji
Aby sprawdzić, czy instalacja się powiodła, wprowadź poniższą komendę w terminalu:

```bash
wavec --version
```

Jeśli wyświetli się informacja o wersji, instalacja zakończyła się pomyślnie.