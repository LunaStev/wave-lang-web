---
sidebar_position: 2
---

# Types de données

Ce document explique les différents types de données fournis par le langage de programmation Wave.
Le langage de programmation Wave permet de stocker et de traiter des valeurs à l'aide de divers types de données.
Les principaux types de données incluent les entiers, les points flottants et les chaînes de caractères. Chaque type de données définit les caractéristiques de ces données et la manière dont la mémoire est traitée.

## Type entier

Le type entier est utilisé pour stocker des **valeurs entières**.
Par défaut, les entiers sont déclarés en tant que `i32` (entier signé sur 32 bits) et `u32` (entier non signé sur 32 bits).
Le langage de programmation Wave propose diverses options de taille permettant de définir précisément la plage des entiers.

- `i8` à `i1024`: Type entier signé, avec des tailles configurables de 8 à 1024 bits.
- `u8` à `u1024`: Type entier non signé, avec des tailles configurables de 8 à 1024 bits.

Exemple:

```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Type de point flottant

Le type de point flottant est utilisé pour stocker des valeurs réelles.
Par défaut, les nombres à point flottant sont déclarés en tant que `f32`.
De plus, il offre diverses options de taille pour définir précisément la taille des nombres en virgule flottante.

- `f32` à `f1024`: Type de point flottant avec des tailles définissables de 32 à 1024 bits. Cela permet des calculs de nombres réels avec une précision accrue.

Exemple:

```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Type de chaîne

Le type de chaîne est utilisé pour manipuler des données textuelles. Les chaînes sont déclarées à l'aide du mot-clé `str`.
Les chaînes sont généralement définies entre guillemets (`"`) et peuvent être attribuées à des variables.

Exemple:

```wave
var text :str = "Hello Wave";
```

## Type booléen

Le type booléen est un type de données représentant des valeurs **vraies (True)** ou **fausses (False)**.
Il est principalement utilisé dans les instructions conditionnelles et est défini par des valeurs `true` ou `false`.

Exemple:

```wave
var estActif :bool = true;
var estDisponible :bool = true;
```

## Type de caractère

Le type de caractère est utilisé pour stocker un seul caractère.
Il est déclaré à l'aide du mot-clé `char` et ne peut contenir qu'une seule valeur de caractère.

Exemple:

```wave
var lettre :char = 'A';
```

## Type d'octet

Le type octet est utilisé pour stocker des données de taille **1 octet**.
Il est principalement utile pour manipuler des données binaires. Il est déclaré à l'aide du mot-clé `byte`.

Exemple:

```wave
var donneesOctet :byte = 0xFF;
```

## Type de pointeur

Le type pointeur est utilisé pour référencer une **adresse mémoire**.
Il est déclaré avec le mot-clé `ptr` et est utilisé pour stocker une adresse mémoire.

Exemple:

```wave
var ptr :ptr<T> = &quelqueVariable;
```

## Type de tableau

Le type tableau est utilisé pour stocker **plusieurs éléments du même type de données** en séquence.
Il utilise le mot-clé `array` et permet de spécifier la taille ou le type du tableau.

Exemple:

```wave
var numeros: array<i32, 5> = [1, 2, 3, 4, 5];
```

Chaque type de données peut avoir différentes plages et tailles, permettant de choisir le type qui convient le mieux à la gestion efficace de la mémoire et au calcul selon les besoins de l'utilisateur.
