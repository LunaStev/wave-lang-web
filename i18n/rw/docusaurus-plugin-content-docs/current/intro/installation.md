---
sidebar_position: 1
---

# Gushyira mu bikorwa

## Uburyo bwo Kwishyira kuri Linux

### Gukuramo no Gukuraho Umufuka
Kuri paji ya GitHub yemewe, shakisha version nshya ya Wave, hanyuma uyikureho.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Gushyiraho LLVM (Kubera Pre Beta)
Version ya Pre Beta ya Wave ikoresha LLVM mu buryo bw’agateganyo, bityo shyiraho LLVM ukoresheje izi commandes:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Kugenzura ko byashizweho neza
Kugenzura niba installation yarangiye, andika iyi command muri terminal:

```bash
wave --version
```

Niba amakuru ya version yerekana, bivuze ko installation yakozwe neza.