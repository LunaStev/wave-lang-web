---
sidebar_position: 1
---

# Installation

## Comment installer sur Linux

### Téléchargement et extraction
Téléchargez la dernière version de Wave depuis la page officielle des versions GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Configuration de LLVM (version Pre-Beta)
La version Pre-Beta de Wave utilise temporairement LLVM. Installez-le avec les commandes suivantes :

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Vérification de l'installation
Pour vérifier que l'installation a réussi, entrez la commande suivante dans le terminal :

```bash
wavec --version
```

Si les informations de version s'affichent, l'installation a été effectuée avec succès.