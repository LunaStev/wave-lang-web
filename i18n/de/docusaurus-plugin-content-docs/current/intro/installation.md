---
sidebar_position: 1
---

# Installation

## Installation unter Linux

### Herunterladen und Entpacken
Lade die neueste Version von Wave von der offiziellen GitHub-Releases-Seite herunter.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM-Konfiguration (Stand: Pre-Beta)
Da die Pre-Beta-Version von Wave vorübergehend LLVM verwendet, installiere es mit den folgenden Befehlen:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Installation überprüfen
Um zu überprüfen, ob die Installation erfolgreich war, gib folgenden Befehl im Terminal ein:

```bash
wavec --version
```

Wenn die Versionsinformation angezeigt wird, war die Installation erfolgreich.