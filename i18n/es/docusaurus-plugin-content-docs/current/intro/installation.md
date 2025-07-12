---
sidebar_position: 1
---

# Instalación

## Cómo instalar
Ejecuta el siguiente comando en la terminal:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### Ejemplo

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Qué sucede durante la instalación
- Se instalan LLVM 14 y los paquetes relacionados (`apt-get`)

- Se crea un enlace simbólico en `/usr/lib/libllvm-14.so`

- Se establece la variable de entorno `LLVM_SYS_140_PREFIX` (en `~/.bashrc`)

- Se descarga la versión especificada de Wave en formato `.tar.gz`

- Se descomprime y se instala `wavec` en `/usr/local/bin`

- Se verifica la instalación con `wavec --version`

## Verificar instalación

```bash
wavec --version
```

## Guía para desinstalar Wave (`uninstall.sh`)

### Cómo desinstalar
Ejecuta el siguiente comando en la terminal:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
