---
sidebar_position: 6
---

# `wavec` CLI-Referenz

`wavec` ist ein Low-Level-Compiler wie `rustc` oder `cc`. Paketauflösung, Lockfiles, Registries und Workspaces gehören zu höheren Werkzeugen wie Vex.

## Grundform

```bash
wavec [global-options] <command> [command-options] [input...]
```

## Kernbefehle

`build <input...>` steuert Kompilieren, Prüfen, Linken und optionales Ausführen über Flags. `check <file>` ist ein Alias für `build <file> --emit=check`. `run <file>` ist ein Alias für `build <file> --run`. `print <item>` meldet Compiler-Capabilities wie Targets, Emit-Arten, Eingabetypen und den Standard-Linker.

## Eingaberegeln

`build` akzeptiert eine oder mehrere Eingaben. Dateiendungen werden automatisch abgeleitet: `.wave` für Wave source, `.ll` für LLVM IR, `.bc` für bitcode, `.s` oder `.asm` für assembly und `.o` oder `.obj` für object files. `--input-type=<kind>` erzwingt einen Typ für alle Eingaben.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## Emit-Regeln

`--emit` unterstützt `check`, `ast`, `ir`, `bc`, `asm`, `obj` und `bin`. `check` ist ein Kontrollmodus und kein normales Artifact, daher muss es allein verwendet werden. Wird `bin` zusammen mit anderen Artifacts erzeugt, benennt `-o` das finale gelinkte Binary; Zwischenprodukte folgen `--out-dir` oder Standardpfaden.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Ergebnis ausführen

`--run` ist nur erlaubt, wenn genau ein ausführbares `bin`-Artifact entsteht. Es ist nicht gültig mit `--shared` oder nicht ausführbaren Emit-Modi. Argumente nach `--` werden an das erzeugte Executable übergeben.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding und bare-metal

`--freestanding` ist für Kernel, Bootloader, Firmware und Embedded-Targets gedacht. Es deaktiviert das Standard-Linking von `libc`/`libm`, deaktiviert die Red Zone im Backend und erzeugt Code für Umgebungen ohne Runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend-Steuerung

Nutzen Sie `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...` und `-C no-default-libs` für präzise Compiler- und Linker-Steuerung.

## Capability-Abfragen

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types` und `default-linker` sind dafür gedacht, dass Tools wie Vex den installierten Compiler ohne Raten validieren.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
