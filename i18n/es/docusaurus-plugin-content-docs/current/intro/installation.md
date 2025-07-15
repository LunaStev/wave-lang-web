---
sidebar_position: 1
---

# Instalación

## Método de instalación

Ejecutar el siguiente comando en la terminal:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### Ejemplo

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Tareas realizadas durante la instalación

- Instalar LLVM 14 y paquetes relacionados (`apt-get`)

- Crear enlace simbólico `/usr/lib/libllvm-14.so`

- Configurar la variable de entorno `LLVM_SYS_140_PREFIX` (`~/.bashrc`)

- Descargar `.tar.gz` de Wave de la versión especificada

- Descomprimir e instalar `wavec` en `/usr/local/bin`

- Confirmar instalación con `wavec --version`

## Confirmación de instalación

```bash
wavec --version
```

## Guía para eliminar Wave (`uninstall.sh`)

### Método de eliminación

Ejecutar el siguiente comando en la terminal:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
