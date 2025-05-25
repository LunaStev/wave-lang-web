---
sidebar_position: 1
---

# Устаноўка

## Як усталяваць на Linux

### Спампаваць і разархіваваць
Спампуйце апошнюю версію Wave з афіцыйнай старонкі выпуску на GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Налады LLVM (для Pre Beta)
У Pre Beta версіі Wave выкарыстоўваецца часова LLVM, таму спачатку ўсталюем LLVM праз наступную каманду:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Праверка ўстаноўкі
Каб праверыць, ці завяршылася ўстаноўка, у тэрмінале ўвядзіце наступную каманду:

```bash
wavec --version
```

Калі выводзіцца інфармацыя аб версіі, устаноўка прайшла паспяхова.