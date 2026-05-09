---
sidebar_position: 4
---

# Boucle

## Introduction

Le langage Wave fournit des boucles pour traiter les situations où le même code doit être exécuté plusieurs fois.
Les boucles sont utilisées pour exécuter un code de façon répétée tant qu'une condition spécifique est remplie ou pour un nombre prédéfini de répétitions.

Cela permet d'exprimer des tâches répétitives avec un code concis et clair, sans avoir besoin de réécrire la même logique à plusieurs reprises.
Wave prend en charge les boucles basées sur des conditions et celles basées sur des nombres de répétitions, tout en fournissant des mots clés pour contrôler le flux d'exécution au sein des boucles.

Cette section explique l'utilisation des boucles `while` et `for`, ainsi que des mots clés `break` et `continue` pour contrôler le flux des boucles.

---

## Boucle while

La boucle `while` exécute de manière répétée un bloc de code tant que la condition donnée est évaluée comme vraie (`true`).
La boucle se termine immédiatement lorsque la condition devient fausse (`false`).

Cette méthode est adaptée aux situations où le nombre de répétitions n'est pas clair et où il faut répéter jusqu'à ce qu'une certaine condition soit remplie.

### Structure de base

La structure de base de la boucle while dans Wave est la suivante.

```wave
while (condition) {
    // code à répéter
}
```

La condition doit être évaluée comme un type `bool`, et le bloc de code entouré de `{}` peut contenir une ou plusieurs instructions.

### Exemple : affichage de 0 à 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("je suis {}.", i);
    i = i + 1;
}
```

Dans cet exemple, la boucle s'effectue tant que la variable `i` est inférieure à 5.
À chaque itération, la valeur actuelle est imprimée et la valeur de `i` est augmentée de 1, rendant finalement la condition fausse.

---

## Boucle for

La boucle `for` est un type de boucle adapté aux cas où le nombre de répétitions est relativement clair.
Elle vous permet de définir en une seule fois une valeur initiale, une condition et une incrémentation, exprimant clairement le flux de la boucle.

Les éléments nécessaires au contrôle des répétitions étant regroupés en un seul endroit, la structure de la boucle est facile à comprendre d'un coup d'œil.

### Structure de base

```wave
for (init; condition; step) {
    // code à répéter
}
```

Dans Wave, l'initialisation de la boucle for prend en charge plusieurs formes.

- Initialisation implicite de type `var`
- Initialisation par déclaration `var` / `let mut` / `const`
- Initialisation par expression générale (réutilisation de variables existantes)

### Exemple 1: Initialisation de type implicite

```wave
for (i :i32 = 1; i <= 5; i += 1) {
    println("i = {}", i);
}
```

### Exemple 2: Initialisation `var` / `let mut`

```wave
for (var i: i32 = 0; i < 3; i += 1) {
    println("var i = {}", i);
}

for (let mut j: i32 = 0; j < 3; j += 1) {
    println("let mut j = {}", j);
}
```

### Exemple 3: Initialisation basée sur des expressions (réutilisation de variables existantes)

```wave
var i: i32 = 99;

for (i = 3; i <= 5; i += 1) {
    println("i = {}", i);
}

println("after loop: {}", i); // 6
```

L'initialisation déclarative (`var`, `let mut`, `i :i32 = ...`) fonctionne comme une variable de portée de boucle, tandis que l'initialisation basée sur des expressions (`i = ...`) met à jour la variable externe elle-même.

---

## Boucles imbriquées

Les boucles peuvent être imbriquées à l'intérieur d'autres boucles et cela s'appelle une boucle imbriquée.
Les boucles imbriquées sont utiles pour parcourir des structures de données bidimensionnelles ou traiter des combinaisons de plusieurs conditions.

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

Dans cet exemple, chaque fois que la boucle `while` extérieure est exécutée, la boucle `while` intérieure est entièrement exécutée.
Cela permet de traiter de manière séquentielle les combinaisons sous la forme (`while`, `while`).

---

## Instruction break

L'instruction `break` termine immédiatement la boucle et transfère le contrôle à l'extérieur de la boucle.
Il est utilisé lorsque vous n'avez plus besoin d'effectuer des répétitions au milieu de la boucle.

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

Dans cet exemple, la boucle infinie se termine au moment où `i` devient 5, lorsque `break` est exécuté.
De cette manière, l'instruction `break` est utile lorsque vous souhaitez contrôler la boucle indépendamment de la condition de boucle.

---

## Instruction continue

L'instruction `continue` saute le code restant de l'itération actuelle et commence immédiatement l'itération suivante.
Il est utilisé lorsque vous voulez omettre uniquement certaines logiques sous certaines conditions.

### Exemple : afficher uniquement les nombres pairs

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

Dans ce code, lorsque `i` est impair, `continue` est exécuté et saute la partie d'impression.
En conséquence, seules les valeurs paires sont imprimées.

---

## Résumé

Les boucles de Wave sont conçues pour exprimer naturellement à la fois les boucles basées sur des conditions et celles basées sur des itérations.
La structure `while` est adaptée aux boucles axées sur des conditions, tandis que `for` est utile lorsque le nombre d'itérations et le flux sont clairs.

En utilisant `break` et `continue` ensemble, vous pouvez contrôler finement le flux d'exécution même au milieu de la boucle, vous permettant de créer une logique de boucle plus sophistiquée et flexible.
