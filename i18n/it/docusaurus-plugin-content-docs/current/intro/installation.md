---
sidebar_position: 1
---

# Installazione

## Metodo di installazione su Linux

### Download e estrazione
Scarica l'ultima versione di Wave dalla pagina ufficiale delle release su GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Configurazione di LLVM (versione Pre Beta)
La versione Pre Beta di Wave utilizza temporaneamente LLVM, quindi installa LLVM con il seguente comando:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Verifica dell'installazione
Per verificare se l'installazione è stata completata, inserisci il seguente comando nel terminale:

```bash
wavec --version
```

Se vengono visualizzate le informazioni sulla versione, l'installazione è stata completata con successo.