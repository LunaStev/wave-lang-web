---
sidebar_position: 1
---

# Ufungaji

## Njia ya Ufungaji kwa Linux

### Pakua na Tafsiri
Pakua toleo la hivi karibuni la Wave kutoka kwa ukurasa rasmi wa GitHub wa toleo.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Mipangilio ya LLVM (Toleo la Pre Beta)
Toleo la Pre Beta la Wave linatumia LLVM kwa muda, hivyo tafadhali sakinisha LLVM kwa kutumia amri ifuatayo:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Thibitisha Ufungaji
Ili kuthibitisha kama ufungaji umekamilika, ingiza amri hii kwenye terminal:

```bash
wave --version
```

Ikiwa taarifa ya toleo itaonyeshwa, ufungaji umekamilika kwa mafanikio.