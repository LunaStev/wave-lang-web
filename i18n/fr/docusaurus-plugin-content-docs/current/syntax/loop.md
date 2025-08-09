---
sidebar_position: 4
---

# Boucle

## Introduction

Le langage Wave propose des boucles pour exécuter du code de manière répétée.
Les boucles sont utilisées pour exécuter du code en répétition tant qu'une condition spécifique est remplie ou pour un nombre spécifique de fois.

Les types de boucles supportées par Wave sont les suivants:

- boucle while : répétition basée sur une condition

- boucle for : répétition basée sur le nombre de fois

Les mots-clés break et continue sont également fournis pour contrôler le flux au milieu de la boucle.
Cette section explique à la fois comment utiliser les boucles et les mots-clés de contrôle de flux.

---

## Boucle while

La boucle `while` exécute de manière répétée un bloc de code tant que la condition donnée est évaluée comme `true`.
Quand la condition devient `false`, la boucle se termine.

### Structure de base

Voici la syntaxe de base pour la boucle `while`:

```wave
while (condition) {
    // Code à répéter
}
```

- La condition doit être de type `bool`.

- Le bloc de code est entouré de `{}` et peut contenir une ou plusieurs instructions.

### Exemple : affichage de 0 à 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i = {}", i);
    i = i + 1;
}
```

Cet exemple est répété tant que `i` est inférieur à 5, affichant la valeur et l'incrémentant de 1 à chaque itération.

---

## Boucle for

La boucle `for` est utile lorsque le nombre de répétitions est déterminé.
La répétition est construite en spécifiant la valeur initiale, la condition de fin et l'expression d'incrémentation.

### Structure de base

```wave
for (var nomVariable: type = valeurInitiale; condition; incrément) {
    // Code à répéter
}
```

- nom de variable : utilisé pour le contrôle de la boucle

- condition : la répétition est exécutée tant qu'elle est `true`

- incrément : modifie la valeur de la variable de répétition

### Exemple : affichage de 1 à 5

```wave
for (var i: i32 = 1; i <= 5; i = i + 1) {
    println("i = {}", i);
}
```

---

## Boucles imbriquées

Des boucles peuvent être construites à l'intérieur d'autres boucles, appelées boucles imbriquées.
Cela est utile, par exemple, lors du parcours de tableaux à deux dimensions ou de combinaisons.

### Exemple : double boucle while

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

---

## Instruction break

L'instruction `break` termine immédiatement la boucle et en sort.
C'est utile lorsque vous souhaitez interrompre la répétition à la satisfaction d'une condition.

### Exemple : terminaison de la répétition à une valeur spécifique

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

---

## Instruction continue

L'instruction `continue` saute le reste de l'itération actuelle et commence l'itération suivante.
Utilisez-le lorsque vous souhaitez exécuter uniquement une partie du bloc de répétition sous certaines conditions.

### Exemple : afficher uniquement les nombres pairs

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

---

## Résumé

| Syntaxe  | Description                                                                      |
| -------- | -------------------------------------------------------------------------------- |
| while    | Répéter tant que la condition est vraie                                          |
| for      | Répéter avec une valeur initiale, une condition et une expression de mise à jour |
| break    | Terminer immédiatement la boucle                                                 |
| continue | Passer à l'itération suivante                                                    |

Les boucles de Wave sont conçues pour gérer de manière flexible les répétitions basées sur des conditions ou sur des comptes.

En utilisant les instructions `break` et `continue` ensemble, vous pouvez contrôler les flux répétitifs de manière plus sophistiquée.