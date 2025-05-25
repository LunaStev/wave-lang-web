---
sidebar_position: 1
---

# Instalación

## Método de instalación en Linux

### Descarga y extracción

Descarga la última versión de Wave desde la página oficial de lanzamientos de GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Configuración de LLVM (versión Pre Beta)

La versión Pre Beta de Wave utiliza temporalmente LLVM, por lo que instala LLVM con el siguiente comando:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Verificar la instalación

Para verificar si la instalación se completó correctamente, ingresa el siguiente comando en la terminal:

```bash
wavec --version
```

Si se muestra la información de la versión, la instalación ha sido exitosa.