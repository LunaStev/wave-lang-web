---
sidebar_position: 1
---

# Instalação

## Método de instalação no Linux

### Baixar e extrair
Baixe a versão mais recente do Wave na página oficial de releases do GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Configuração do LLVM (versão Pre Beta)
A versão Pre Beta do Wave usa temporariamente o LLVM, então instale o LLVM com o seguinte comando:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Verificar a instalação
Para verificar se a instalação foi concluída, digite o seguinte comando no terminal:

```bash
wave --version
```

Se as informações da versão forem exibidas, a instalação foi concluída com sucesso.