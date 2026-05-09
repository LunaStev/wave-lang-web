---
sidebar_position: 8
---

# Contrôle manuel de sysroot de lien (`-C link-sysroot`)

Ce document explique comment **contrôler explicitement** le sysroot de l'étape de liaison dans `wavec`.

Principes fondamentaux :

- `--sysroot=<path>` : sysroot de l'étape de compilation (clang `-c`)
- `-C link-sysroot=<path>` : sysroot de l'étape de liaison (linker)

Autrement dit, les sysroots de compilation et de liaison sont traités séparément.

---

## 1. Pourquoi est-ce nécessaire

Lors de l'utilisation de `-C linker=<path>` dans un lien croisé, il est souvent nécessaire de spécifier séparément les chemins d'exécution (`aarch64-linux-gnu-gcc`, `crt1.o`, `libc`) référencés par le pilote de lien (p. ex. : `libm`).

À ce stade, le sysroot de lien n'est pas inféré automatiquement, il est prévu d'être passé explicitement dans la CLI.

---

## 2. Définition des options

## 2.1 `-C link-sysroot=<path>`

Injection de `--sysroot=<path>` à l'étape de liaison.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

En interne, cela a le même sens que `-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

L'ancien mode d'arguments de lien brut est également pris en charge.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. Règles de validation

Dans les constructions nécessitant l'étape de liaison, lorsque les conditions suivantes sont remplies simultanément, cela se termine par une erreur d'utilisation.

1. Utilisation de `-C linker=...`
2. Utilisation de `--sysroot=<path>`
3. Sysroot de lien non spécifié (`-C link-sysroot` ou `-C link-arg=--sysroot=...`).

Exemple de message d'erreur :

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. Exemple d'utilisation

## 4.1 AArch64 Linux lien croisé

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

## 4.2 mode d'arguments de lien brut

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 construction sans lien (`--emit=obj`)

Lorsque l'étape de liaison est absente, le sysroot de lien n'est pas nécessaire.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. Résumé

- `--sysroot` est un contrôle de l'étape de compilation
- `-C link-sysroot` est un contrôle de l'étape de liaison
- Priorité au contrôle explicite par rapport à l'inférence automatique
