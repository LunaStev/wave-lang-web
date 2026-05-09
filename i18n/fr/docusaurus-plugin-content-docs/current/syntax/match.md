---
sidebar_position: 14
---

# Instruction de correspondance (Match)

## Introduction

L'instruction `match` est une structure de contrôle qui compare une valeur à plusieurs modèles et branche.
Elle est utile pour exprimer l'intention de branchement plus clairement qu'un enchaînement `if / else if`.

Le `match` de Wave est actuellement **statement** et ne prend pas en charge la forme `expression` qui est évaluée directement en valeur.
Autrement dit, `var x = match (...) { ... }` de ce type ne peut pas être utilisé.

---

## Syntaxe de base

```wave
match (value) {
    pattern1 => {
        // bloc d'exécution
    }
    pattern2 => {
        // bloc d'exécution
    }
    _ => {
        // bloc par défaut
    }
}
```

Règles de syntaxe :

- L'en-tête utilise la forme `match (expr)`.
- Chaque arm utilise la forme `{ ... }`.
- Le corps de arm doit être `{ ... }` bloc.
- Entre les arms, seules les sauts de ligne peuvent être utilisés, ou vous pouvez utiliser `,` ou `;` comme séparateur.

---

## Types de pattern

Actuellement, trois types de pattern sont pris en charge ci-dessous.

1. Pattern littéral entier

```wave
0 => { ... }
1 => { ... }
42 => { ... }
```

2. Pattern identifiant

```wave
Off => { ... }
On => { ... }
```

Le pattern identifiant est utilisé pour les valeurs qui peuvent être interprétées comme des **constantes entières** comme une variante d'énum.

3. Pattern joker (`_`)

```wave
_ => { ... }
```

Il s'agit d'arm par défaut qui s'exécute lorsqu'aucun pattern ne correspond.

---

## Type de valeur cible du matching

Selon la mise en œuvre actuelle, la valeur cible du `match` doit être de type **intégral ou enum**.
Les chaînes, les virgules flottantes, les structures, etc. ne peuvent pas être utilisées comme cible de `match`.

---

## Exemple 1 : Branchement d'entier

```wave
fun classify_num(v: i32) -> i32 {
    var result: i32 = -1;

    match (v) {
        0 => {
            result = 10;
        }
        1 => {
            result = 20;
        }
        _ => {
            result = 99;
        }
    }

    return result;
}
```

---

## Exemple 2 : Branchement enum

```wave
enum Mode -> i32 {
    Off = 0,
    On = 1,
    Unknown = 2
}

fun classify_mode(m: Mode) -> i32 {
    match (m) {
        Off => {
            return 1;
        }
        On => {
            return 2;
        }
        _ => {
            return 3;
        }
    }
}
```

---

## Règles de fonctionnement

- Semblable à la série `switch`, **un seul bras correspondant est exécuté**.
- Il n'y a pas d'automatisme de passage à travers.
- L'arm `_` ne peut être utilisé qu'une seule fois au maximum.
- Il est syntaxiquement permis de ne pas avoir l'arm `_`. (Si aucun bras ne correspond, pas d'exécution)

---

## Précautions

1. Interdiction des cas en double

- Déclarer à double le même cas provoque une erreur de compilation.

2. Interdiction des doublons `_`

- Vous ne pouvez pas déclarer l'arm `_` plus d'une fois.

3. Bloc d'arm obligatoire

- Après `=>`, il doit y avoir `{ ... }` bloc.

4. Le pattern doit être constant

- Le pattern identifiant doit être utilisé uniquement pour les valeurs interprétables comme des constantes entières/variantes enum.

---

## Résumé

Le `match` de Wave est une instruction de déclaration optimisée pour la branchement d'entiers/enums.
Utilise la structure `=>` + bloc, et permet de composer une branche par défaut via un joker (`_`).

Plus le nombre de cas de branchement augmente, plus la lecture est facile par rapport à `if / else if`, et cela peut clairement exprimer l'intention.
