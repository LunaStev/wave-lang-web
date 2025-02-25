---
sidebar_position: 1
---

# Instalado

## Linux Instalmetodo

### Elŝuti kaj Malpakigi
Elŝutu la plej novan version de Wave de la oficiala GitHub elŝuta paĝo.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM Agordo (Pre Beta Versio)

La Pre Beta versio de Wave provizore uzas LLVM, do instalu LLVM per la sekva komando:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Konfirmi Instaladon

Por kontroli ĉu la instalado estas kompleta, enmetu la jenan komandon en la terminalon:

```bash
wave --version
```

Se versio-informo estas montrata, la instalado estas sukcese kompletigita.
