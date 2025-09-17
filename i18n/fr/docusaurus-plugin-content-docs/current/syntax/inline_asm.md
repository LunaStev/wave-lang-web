---
sidebar_position: 7
---

# Assemblage en ligne

## Introduction

Ce document traite de l'assemblage en ligne du langage Wave.
L'assemblage en ligne est l'une des fonctionnalités fournies par Wave, une syntaxe extrêmement détaillée qui permet un accès direct au contrôle du matériel à bas niveau tout en conservant la commodité d'un langage de haut niveau.

En d'autres termes, cela permet la manipulation de registres, l'accès direct à la mémoire et l'exécution d'instructions spéciales difficiles à gérer avec un code Wave standard, et est utilisé lorsque des optimisations de performance ou des tâches spécifiques au matériel sont nécessaires.

---

## Syntaxe de base

```wave
asm {
    "instruction d'assemblage"          // Code d'assemblage réel (une instruction par ligne)
    ...
    in("registre") valeur         // Mappage du registre d'entrée
    out("registre") variable      // Mappage du registre de sortie
}
```

### Éléments de syntaxe

1. Instructions d'assemblage
   - Écrit sous la forme d'une chaîne `"..."`, c'est une instruction d'assemblage bas niveau exécutée par le CPU réel.
   - Il est possible d'écrire plusieurs lignes, avec une instruction par ligne.
   - Exemple:
        ```wave
        "mov rax, 1"
        "syscall"
        ```

2. `in("registre") valeur`
   - Charge la valeur d'une variable (ou d'une expression) dans le registre spécifié.
   - Exemple:
        ```wave
        in("rdi") s
        ```
     -> Inserer la valeur de la variable `s` dans le registre d'argument syscall premier, `rdi`, selon la convention x86-64.

3. `out("registre") variable`
   - Récupère la valeur du registre spécifié dans la variable Wave.
   - Exemple:
        ```wave
        out("rax") ret
        ```
     -> Stocke dans la variable `ret` la valeur du registre `rax` où est enregistrée la valeur de retour de `syscall`.

---

## Exemple simple

```wave
fun main() {
    var msg_ptr: ptr<i8> = "Hello from syscall!\n";
    var ret_val: i64;

    asm {
        "mov rax, 1"
        "syscall"
        in("rdi") 1
        in("rsi") msg_ptr
        in("rdx") 20
        out("rax") ret_val
    }
}
```

---

## Précautions

- L'assemblage en ligne contourne la stabilité de type de Wave, donc une mauvaise utilisation peut entraîner un arrêt anormal ou un comportement indéfini du programme.
- Les mappages `in`, `out` sont vérifiés au moment de la compilation, mais la validité des instructions elles-mêmes n'est pas garantie.
