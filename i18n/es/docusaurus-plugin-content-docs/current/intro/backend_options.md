---
sidebar_position: 7
---

# Opciones de backend (`--llvm`, `--whale`)

Este documento describe las opciones CLI relacionadas con el backend de `wavec`.

Principio importante:

- `wavec` no es un gestor de paquetes.
- El comportamiento del backend se controla tanto como sea posible mediante **argumentos explícitos**.
- Las opciones detalladas del backend solo se interpretan después de `--llvm`.

---

## 1. Selector de backend

## 1.1 `--llvm`

`--llvm` es el marcador de inicio del bloque de opciones del backend.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Como se indica, solo los argumentos compatibles que siguen a `--llvm` se procesan como configuraciones de backend de LLVM.

## 1.2 `--whale` (actualmente TODO)

Actualmente, `--whale` es un **flag reservado y ficticio**.

- El analizador lo reconoce.
- La tubería de backend de Whale real aún no está conectada.
- Al usarlo, se termina con un error de TODO.

---

## 2. Opciones compatibles detrás de `--llvm`

## 2.1 Target/CódigoGen

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

Punto de aplicación:

- Etapa de generación IR (TargetMachine): `target`, `cpu`, `features`
- Etapa de objeto/enlace (invocación de clang): `target`, `abi`

Principal objetivo triple actualmente documentado:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- independiente: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Toolchain/Link

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (repetible)
- `-C no-default-libs`

Punto de aplicación:

- En la creación de objetos con clang `-c` se utiliza `--sysroot`
- Inyección de argumentos de enlace sin procesar y sobrescritura de enlazador en la etapa de enlace
- Desactivación automática de `-lc -lm` cuando se usa `-C no-default-libs`

---

## 3. Reglas de análisis (importante)

Si no se usa `--llvm`, las opciones detalladas del backend no se interpretan como opciones globales.

Por ejemplo, lo siguiente es un error.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

Debe escribirse de la siguiente manera.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. Ejemplo de uso

Creación de objeto básico:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

Creación de objeto kernel independiente:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

Enlace personalizado:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

Desactivación de enlace automático de libc/libm:

```bash
wavec --llvm -C no-default-libs build app.wave
```

Al usar `--freestanding`, funciona internamente como `-C no-default-libs`, ajustándose a compilaciones que no asumen bibliotecas básicas en tiempo de ejecución como código kernel/boot.

---

## 5. Resumen del estado

- Backend LLVM: en funcionamiento
- Backend Whale: reservado (TODO), no implementado
