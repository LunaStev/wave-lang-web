---
sidebar_position: 7
---

# Assembleur en ligne

L’assembleur en ligne de Wave s’écrit avec `asm { ... }`. Il sert au code bas niveau: noyaux, chargeurs UEFI, appels système, E/S de ports et contrôle du CPU.

Les cibles actuelles sont Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64` et freestanding `x86_64`/`aarch64`/`riscv64`. Les cibles 32 bits ne sont pas encore prises en charge.

## Forme de base

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Les lignes de chaînes sont des instructions assembleur. `in(...)` déclare les entrées, `out(...)` les sorties et `clobber(...)` l’état modifié par l’asm.

## asm comme instruction

L’asm comme instruction s’utilise lorsqu’aucune valeur d’expression n’est requise. Il peut avoir plusieurs sorties.

```wave
let mut ret: i64 = 0;
asm {
    "mov rax, 39"
    "syscall"
    out("rax") ret
    clobber("memory")
    clobber("flags")
}
```

## asm comme expression

L’asm comme expression produit une valeur et exige actuellement exactement un `out(...)`. `clobber("noreturn")` est interdit dans ce mode.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Opérandes et contraintes

Les opérandes peuvent utiliser des registres concrets ou des classes de contraintes. x86_64 utilise `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 utilise `x0` ... `x30` et `w0` ... `w30`; RISC-V utilise `a0`, `a1`, `t0`, `s0`, `ra`, `sp` et `xN`. Les classes communes sont `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. Un registre physique ne peut pas être à la fois opérande et clobber.

## Contrat de clobber

`clobber("memory")` signifie que l’asm peut lire ou écrire la mémoire. `clobber("flags")` et `clobber("cc")` signalent la modification des flags. `clobber("stack")` est requis quand la pile ou des instructions call/return sont utilisées. `clobber("nostack")` promet de ne pas toucher la pile. `clobber("noreturn")` signifie que le contrôle ne revient pas au bloc courant. `stack` et `nostack` sont incompatibles.

## Discipline de pile

L’asm normal ne doit pas modifier la pile. `call`, `push`, `pop`, `ret`, l’usage direct de `rsp`/`esp` ou `sp`, et les instructions similaires exigent `clobber("stack")`. Le pointeur de pile doit tout de même être restauré avant le retour.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm sans retour

Les sauts indirects comme `jmp rax`, `jmp r11`, `br x0` ou `jr ra` exigent `clobber("noreturn")`. Un asm instruction avec ce clobber termine le bloc IR par `unreachable`.

```wave
fun jump_to_kernel(entry: u64, boot_info: ptr<u8>, stack_top: u64) {
    asm {
        "mov rsp, rdx"
        "and rsp, -16"
        "mov rdi, rcx"
        "jmp rbx"
        in("rbx") entry
        in("rcx") boot_info
        in("rdx") stack_top
        clobber("stack")
        clobber("noreturn")
    }
}
```

## Labels locaux

Un saut vers un label local reste dans le même chemin asm/control-flow et ne nécessite pas `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Cibles de sortie

Les cibles de sortie stables sont les variables et `deref` sur des variables pointeurs. Pour un champ ou un tableau, écrivez d’abord dans une variable temporaire.

```wave
out("rax") value
out("rax") deref ptr
```

## Limites

L’inline asm est toujours considéré comme ayant des effets de bord. Les manipulations complexes de pile peuvent encore être rejetées. Les pointeurs de fonction et les types de convention d’appel explicite ne sont pas encore stables; les appels de service UEFI peuvent donc encore utiliser des wrappers asm.
