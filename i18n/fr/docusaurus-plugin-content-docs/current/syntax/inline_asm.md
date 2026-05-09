---
sidebar_position: 7
---

# Assemblage en ligne

## Introduction

L'assemblage en ligne de Wave est écrit en blocs `asm { ... }`.
Il est possible de contrôler directement les registres, la mémoire et les chemins d'appel système dans le code Wave.

Cibles actuellement prises en charge :

- Linux `aarch64`
- Linux `arm64`
- macOS (Darwin) `x86_64`
- freestanding `aarch64`
- freestanding `riscv64`
- freestanding `riscv64`

Windows et les cibles 32 bits ne sont pas encore pris en charge.

---

## Forme de base

`asm` peut être utilisé à la fois comme **instruction** et **expression**.

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Composants :

- Ligne de chaîne : commande d'assemblage réelle
- `clobber(...)`: opérande d'entrée
- `out(...)`: opérande de sortie
- `clobber(...)`: Indices des registres/états/mémoires détruits

---

## Instruction `asm` (Statement)

Utilisez cela comme une instruction générale lorsqu'il n'y a pas de valeur de retour.

```wave
var ret: i64 = 0;
asm {
    "mov rax, 1"
    "syscall"
    in("rdi") 1
    in("rsi") msg_ptr
    in("rdx") 20
    out("rax") ret
}
```

Il peut y avoir plusieurs `out(...)`.

---

## Expression `asm` (Expression)

Peut être utilisé comme une expression qui génère directement une valeur.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

Attention :

- Une expression `asm` autorise **exactement un seul `out(...)`**.

---

## Contraintes `in(...)` / `out(...)`

Les chaînes pour `in("...")`, `out("...")` peuvent être parmi les deux suivantes :

1. Registre spécifique

- Ex : `"rax"`, `"rdi"`, `"x0"`, `"w1"`, `"a0"`, `"t0"`, `"x10"`

2. Classe de contrainte (constraint class)

- Ex : `"r"`, `"m"`, `"rm"`

Exemple :

```wave
in("r") &buf
out("rax") ret
```

Cible de sortie (`out(...) target`) est recommandé d'utiliser le modèle suivant selon l'implémentation actuelle.

- Variable : `out("rax") ret`
- Déréférencement de pointeur : `clobber(...)`

---

## `clobber(...)`

`clobber(...)` peut recevoir plusieurs éléments à la fois et être utilisé plusieurs fois.

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

Principaux éléments :

- Registres : `"rax"`, `"x0"`, etc.
- Spéciaux : `$0`, `$1` (normalisation interne dépendant de la cible)

Le compilateur ajoute automatiquement un clobber de base en mode sécurisé conservateur.
(`memory`, catégories flags/cc, etc.; principalement `memory` pour RISC-V autonome)

---

## Oprérateurs ($0, $1, ...)

Utilisez `$N` pour référencer les opérandes dans une chaîne de commande.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

Note :

- Même si vous utilisez le style `%0`, il est converti en style `$0` en interne.

---

## Plage de support actuelle pour les opérandes d'entrée

Actuellement, `in(...)` prend en charge les formes suivantes :

- Identificateur de variable
- Littéral entier
- Littéral de chaîne
- `&identifier`
- `deref identifier`
- Littéral entier/flottant négatif

Les expressions complexes générales peuvent être limitées, il est donc recommandé de les transmettre via une variable temporaire si nécessaire.

---

## Précautions

L'asm inline contourne partiellement les protections du système de types.
La spécification incorrecte des registres, les conflits de contraintes et l'oubli de clobber peuvent entraîner la génération de code incorrect ou un dysfonctionnement en temps d'exécution.

Recommandations :

- Confirmez d'abord l'ABI cible et la convention d'appel
- Gérez explicitement les registres d'entrée/sortie et les clobbers
- Déclarez `clobber("memory")` si vous accédez directement à la mémoire.
