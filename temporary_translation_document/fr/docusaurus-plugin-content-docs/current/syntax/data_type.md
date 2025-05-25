---
sidebar_position: 2
---

# Types de données

Ce document explique les différents types de données fournis par le langage de programmation Wave.
Le langage Wave permet de stocker et de manipuler des valeurs à l'aide de divers types de données.
Les principaux types de données incluent les entiers, les nombres à virgule flottante et les chaînes de caractères. 
Chaque type de données définit les caractéristiques des données et la manière dont elles sont gérées en mémoire.

## Type entier
Le type entier est utilisé pour stocker des **valeurs entières**.
Par défaut, les entiers sont déclarés sous `i32` (entier signé sur 32 bits) et `u32` (entier non signé sur 32 bits).
Le langage Wave propose également diverses options pour définir des tailles d'entiers avec des plages plus fines.

* `i8` ~ `i1024`: Types d'entiers signés, avec des tailles allant de 8 bits à 1024 bits.
* `u8` ~ `u1024`: Types d'entiers non signés, avec des tailles allant de 8 bits à 1024 bits.

Exemple :
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Type à virgule flottante
Le type à virgule flottante est utilisé pour stocker des valeurs **réelles**.
Par défaut, les nombres à virgule flottante sont déclarés sous `f32`.
De plus, Wave offre diverses options pour définir des tailles d'entiers avec une précision plus fine.

* `f32` ~ `f1024`: Le type à virgule flottante peut avoir des tailles allant de 32 bits à 1024 bits, ce qui permet des calculs réels avec une précision accrue.

Exemple :
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Type chaîne de caractères
Le type chaîne de caractères est utilisé pour manipuler des données textuelles. Les chaînes sont déclarées avec le mot-clé `str`.
Les chaînes sont généralement définies entre guillemets doubles (`"`) et peuvent être assignées à des variables.

Exemple :
```wave
var text :str = "Hello Wave";
```

## Type booléen
Le type booléen représente des valeurs **vraies (true)** ou **fausses (false)**.
Il est principalement utilisé dans les conditions, et les valeurs sont définies comme `true` ou `false`.

Exemple :
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Type caractère
Le type caractère est utilisé pour stocker un seul caractère.
Il est déclaré avec le mot-clé `char` et ne peut contenir qu'une seule valeur de caractère.

Exemple :
```wave
var letter :char = 'A';
```

## Type octet
Le type octet est utilisé pour stocker des données de **1 octet**.
Il est principalement utile pour manipuler des données binaires. Il est déclaré avec le mot-clé `byte`.

Exemple :
```wave
var byteData :byte = 0xFF;
```

## Type pointeur
Le type pointeur est utilisé pour faire référence à une **adresse mémoire**.
Il est déclaré avec le mot-clé `ptr` et est utilisé pour stocker des adresses mémoire.

Exemple :
```wave
var ptr :ptr<T> = &someVariable;
```

## Type tableau
Le type tableau est utilisé pour stocker **plusieurs éléments du même type de données** de manière séquentielle.
Il est déclaré avec le mot-clé `array`, et vous pouvez spécifier la taille ou le type des éléments du tableau.

Exemple :
```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Chaque type de donnée permet de définir des plages et des tailles variées, ce qui permet à l'utilisateur de choisir le type qui correspond le mieux à ses besoins pour une gestion efficace de la mémoire et des calculs.
