---
sidebar_position: 1
---

# Installatie

## Installatiemethode voor Linux

### Downloaden en uitpakken
Download de nieuwste versie van Wave van de officiële GitHub-releasepagina.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM Instellen (Pre Beta versie)
De Pre Beta versie van Wave maakt tijdelijk gebruik van LLVM, dus installeer LLVM met de volgende opdracht:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Installatie bevestigen
Om te controleren of de installatie is voltooid, voer de volgende opdracht in de terminal in:

```bash
wave --version
```

Als de versie-informatie wordt weergegeven, is de installatie succesvol voltooid.