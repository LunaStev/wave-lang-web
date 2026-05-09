---
sidebar_position: 8
---

# Control manual del sysroot de enlace (`-C link-sysroot`)

Este documento explica cómo **controlar explícitamente** el sysroot de la etapa de enlace en `wavec`.

Principios básicos:

- `--sysroot=<ruta>`: sysroot de la etapa de compilación (clang `-c`)
- `-C link-sysroot=<ruta>`: sysroot de la etapa de enlace (linker)

Es decir, separa el sysroot para la compilación y el enlace.

---

## 1. ¿Por qué es necesario?

En el enlace cruzado, si se utiliza `-C linker=<ruta>`, a menudo es necesario especificar por separado las rutas de tiempo de ejecución (`crt1.o`, `libc`, `libm`) a las que hace referencia el controlador de enlace (por ejemplo, `aarch64-linux-gnu-gcc`).

En este caso, se diseña para que el sysroot de enlace no se infiera automáticamente, sino que se pase explícitamente en la CLI.

---

## 2. Definición de opción

## 2.1 `-C link-sysroot=<ruta>`

Inyecta `--sysroot=<ruta>` en la etapa de enlace.

```bash
wavec -C link-sysroot=/ruta/a/sysroot ...
```

Internamente, tiene el mismo significado que `-C link-arg=--sysroot=<ruta>`.

## 2.2 `-C link-arg=--sysroot=<ruta>`

El método de argumento de enlace raw existente también es compatible.

```bash
wavec -C link-arg=--sysroot=/ruta/a/sysroot ...
```

---

## 3. Reglas de validación

En una compilación que requiere la etapa de enlace, si se cumplen simultáneamente las siguientes condiciones, se termina con error de uso.

1. Uso de `-C linker=...`
2. Uso de `--sysroot=<ruta>`
3. No se especifica el sysroot de enlace (`-C link-sysroot` o `-C link-arg=--sysroot=...`).

Ejemplo de mensaje de error:

```text
cuando se utiliza -C linker=..., --sysroot=<ruta> es solo para la etapa de compilación; pase sysroot del linker explícitamente con -C link-sysroot=<ruta> (o -C link-arg=--sysroot=<ruta>)
```

---

## 4. Ejemplo de uso

## 4.1 Enlace cruzado para AArch64 Linux

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 Método de argumento de enlace raw

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 Compilación sin enlace (`--emit=obj`)

Si no se requiere la etapa de enlace, no se necesita el sysroot de enlace.

```bash
wavec --sysroot=/ruta/a/sysroot build main.wave --emit=obj
```

---

## 5. Resumen

- `--sysroot` es control de la etapa de compilación
- `-C link-sysroot` es control de la etapa de enlace
- Prioridad al control explícito sobre la inferencia automática
