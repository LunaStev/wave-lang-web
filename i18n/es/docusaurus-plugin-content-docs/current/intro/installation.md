---
sidebar_position: 1
---

# Instalación

## Cómo instalar en Linux

### Descargar y extraer
Descarga la última versión de Wave desde la página oficial de lanzamientos en GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Configuración de LLVM (versión Pre-Beta)
Como la versión Pre-Beta de Wave utiliza temporalmente LLVM, instálalo con los siguientes comandos:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Verificar la instalación
Para verificar que la instalación se haya completado correctamente, introduce el siguiente comando en la terminal:

```bash
wavec --version
```

Si se muestra la información de la versión, la instalación se ha realizado con éxito.