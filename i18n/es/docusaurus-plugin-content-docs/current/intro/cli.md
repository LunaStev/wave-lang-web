---
sidebar_position: 6
---

# Referencia CLI de `wavec`

`wavec` es un compilador de bajo nivel, comparable a `rustc` o `cc`. La resolución de paquetes, lockfiles, registries y workspaces pertenece a herramientas superiores como Vex.

## Forma básica

```bash
wavec [global-options] <command> [command-options] [input...]
```

## Comandos principales

`build <input...>` realiza compilación, comprobación, enlace y ejecución opcional mediante flags. `check <file>` es un alias de `build <file> --emit=check`. `run <file>` es un alias de `build <file> --run`. `print <item>` muestra capabilities del compilador como targets, tipos de emit, tipos de entrada y linker predeterminado.

## Reglas de entrada

`build` acepta una o más entradas. Las extensiones se infieren automáticamente: `.wave` para Wave source, `.ll` para LLVM IR, `.bc` para bitcode, `.s` o `.asm` para assembly, y `.o` o `.obj` para object files. `--input-type=<kind>` fuerza un único tipo para todas las entradas.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## Reglas de emit

`--emit` admite `check`, `ast`, `ir`, `bc`, `asm`, `obj` y `bin`. `check` es un modo de control, no un artifact normal, por lo que debe usarse solo. Si `bin` se emite junto con otros artifacts, `-o` nombra el binario final enlazado; los artifacts intermedios siguen `--out-dir` o las rutas por defecto.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Ejecución del resultado

`--run` solo se permite cuando se produce exactamente un artifact `bin` ejecutable. No es válido con `--shared` ni con modos emit no ejecutables. Los argumentos después de `--` se pasan al ejecutable producido.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding y bare-metal

`--freestanding` es para kernels, bootloaders, firmware y targets embedded. Desactiva el enlace por defecto de `libc`/`libm`, desactiva el red zone del backend y emite código adecuado para entornos sin runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Control del backend

Use `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...` y `-C no-default-libs` para controlar con precisión el compilador y el linker.

## Consultas de capability

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types` y `default-linker` están pensados para que herramientas como Vex validen el compilador instalado sin adivinar.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
