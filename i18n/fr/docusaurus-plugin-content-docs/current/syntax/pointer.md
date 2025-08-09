---
sidebar_position: 6
---

# Pointeur

## Introduction

Ce document explique comment exploiter les pointeurs dans Wave.
Wave est un langage qui prend en charge la programmation système bas niveau, offrant des fonctionnalités de pointeurs pour permettre la manipulation explicite des adresses mémoire.
Un pointeur est une variable qui pointe vers une adresse mémoire de type spécifique, permettant un accès et une modification directs de la valeur.

---

## Déclaration de pointeur

Dans Wave, un pointeur est déclaré au format `ptr<type>`. Par exemple, un pointeur de type entier se déclare comme suit:

```wave
var p : ptr<i32>;
```

Cette déclaration crée un pointeur `p` qui pointe vers une valeur de type `i32`.

---

## Initialisation de pointeur

Un pointeur peut être initialisé à l'adresse d'une variable à l'aide de l'opérateur `&`:

```wave
var a :i32 = 10;
var p :ptr<i32> = &a;
```

Ici, `&a` signifie l'adresse mémoire de la variable `a`, et `p` devient un pointeur vers cette adresse.

---

## Déréférencement de pointeur

Pour lire ou modifier la valeur pointée par un pointeur, utilisez le mot-clé `deref`. Cela s'appelle le déréférencement:

```wave
var a :i32 = 10;
var p :ptr<i32> = &a;

println("{}", deref p); // Affiche 10

deref p = 20;
println("{}", a); // Affiche 20
```

---

## Pointeur NULL

Dans Wave, un pointeur nul est représenté par le mot-clé `null`.
Une variable pointeur peut être initialisée à `null`, signifiant qu'elle ne pointe vers aucune mémoire valide:

```wave
var p :ptr<i32> = null;
```

Le déréférencement d'un pointeur nul provoque une erreur du compilateur.

---

## Pointeurs multiples

Wave prend en charge les pointeurs multiples. Les pointeurs peuvent être déclarés et utilisés en plusieurs niveaux imbriqués:

```wave
var x :i32 = 1;
var p1 :ptr<i32> = &x;
var p2 :ptr<ptr<i32>> = &p1;
var p3 :ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

---

## Tableaux et pointeurs

Les pointeurs peuvent également pointer vers des éléments de tableau ou le tableau lui-même.

### Pointeur vers un élément de tableau

```wave
var a :i32 = 10;
var b :i32 = 20;
var arr :array<ptr<i32>, 2> = [&a, &b];

println("deref arr[0] = {}, deref arr[1] = {}", deref arr[0], deref arr[1]); // 10, 20
```

### Pointeur vers le tableau entier

```wave
var arr :ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // Affiche l'adresse mémoire
```

---

## Sécurité et propriété

Wave introduit un système de propriété et de durée de vie similaire à Rust pour assurer la stabilité de la mémoire lors de l'utilisation des pointeurs.
Ainsi, elle vérifie strictement pour éviter des problèmes tels que le déréférencement de pointeurs invalides, la double libération ou les pointeurs suspendus.

```wave
fun main() {
    let x :i32 = 42;
    let p :ptr<i32> = &x;
    
    println("x = {}", deref p);
    
    deref p = 99;
    println("x = {}", x);
}
```

Sortie:

```text
x = 42
x = 99
```

---

## Conclusion

Les pointeurs sont l'une des fonctionnalités clés de Wave, permettant une programmation bas-niveau hautement performante.
Ils sont très utiles pour le développement de systèmes nécessitant un contrôle direct de la mémoire, les bibliothèques natives, le contrôle matériel, et grâce à la structure sécurisée du compilateur de Wave, les risques potentiels liés à l'utilisation des pointeurs peuvent être efficacement évités.