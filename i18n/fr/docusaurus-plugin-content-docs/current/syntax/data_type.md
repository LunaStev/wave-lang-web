---
sidebar_position: 2
---

# Types de données

Ce document explique les différents types de données fournis par le langage de programmation Wave.
Wave permet de stocker et de manipuler des valeurs à l'aide de divers types de données, chacun définissant clairement sa manière de représenter et de gérer les données.

La spécification claire des types de données est l'une des philosophies de conception clés de Wave.
Wave est un système à **types stricts complets**. Toutes les déclarations `var`/`fun` et les initialisations de variables nécessitent un type explicite, et l'inférence de type basée sur le contexte n'est pas prise en charge. Ainsi, en l'absence de type comme dans `var x = 1;`, la compilation échoue.
Cela permet d'exprimer clairement l'intention du code, de détecter les erreurs tôt lors de la compilation, et de garantir une gestion efficace de la mémoire et une exécution stable.

---

## Type entier

Le type entier est utilisé pour stocker des valeurs entières.
Wave utilise fréquemment `i32` (entier signé de 32 bits) et `u32` (entier non signé de 32 bits) par défaut, mais la taille en bits des entiers peut être spécifiée avec une extrême précision si nécessaire.

Les types d'entiers signés sont disponibles de `i8` à `i1024`, et les types d'entiers non signés de `u8` à `u1024` peuvent être utilisés.
Cela permet de répondre à un large éventail de besoins allant des calculs simples aux opérations sur de grands nombres entiers, au traitement cryptographique et à la programmation système de bas niveau.

Voici un exemple simple d'utilisation des types d'entiers.

```wave
var a: i32 = 100;
var b: u32 = 200;
```

---

## Type de point flottant

Le type de point flottant est utilisé pour stocker des valeurs réelles.
Le type à virgule flottante utilisé par défaut dans Wave est `f32`, mais un type de taille plus grande peut être choisi si une précision plus élevée est nécessaire.

Wave offre des types de virgule flottante de `f32` à `f128`, permettant à l'utilisateur de choisir entre précision et performance de calcul.
Ainsi, toutes sortes de calculs sur les nombres réels peuvent être effectués, des calculs numériques courants aux calculs scientifiques de précision.

Voici un exemple d'utilisation des types à virgule flottante.

```wave
var pi: f32 = 3.14;
var e: f64 = 2.71828;
```

---

## Type de chaîne

Le type de chaîne est utilisé pour manipuler des données textuelles.
Dans Wave, le mot-clé `str` est utilisé pour déclarer une chaîne de caractères, et les littéraux de chaînes sont représentés entre guillemets (`"`).

Les chaînes de caractères sont largement utilisées dans les programmes pour l'affichage des messages, le traitement des entrées utilisateur et le traitement des données textuelles.

Voici un exemple basique d'utilisation du type chaîne de caractères.

```wave
var text: str = "Hello Wave";
```

---

## Type booléen

Le type booléen est un type de données représentant des valeurs vraies (True) ou fausses (False).
Dans Wave, le type `bool` est utilisé, et les valeurs sont définies comme `true` ou `false`.

Le type booléen joue un rôle central dans les instructions conditionnelles et les boucles, et est utilisé pour contrôler le flux du programme.

```wave
var estActif: bool = true;
var estDisponible: bool = true;
```

---

## Type de caractère

Le type de caractère est utilisé pour stocker un seul caractère.
Il est déclaré à l'aide du mot-clé `char` et ne peut contenir qu'une seule valeur de caractère.

Les littéraux de caractère sont exprimés entre apostrophes (`'`).

```wave
var lettre: char = 'A';
```

## Type d'octet

Le type octet est utilisé pour stocker des données de taille 1 octet.
Ce type est utile lorsque le traitement de données de bas niveau est nécessaire, comme pour le traitement de données binaires, l'entrée/sortie de fichiers et la programmation réseau.

Dans Wave, le mot-clé `byte` est utilisé pour déclarer un type octet.

```wave
var donneesOctet: byte = 0xFF;
```

## Type de pointeur

Le type pointeur est utilisé pour référencer une adresse mémoire directement.
Dans Wave, les pointeurs sont déclarés sous la forme `ptr<T>`.

Les pointeurs sont utilisés lorsque l'accès à la mémoire de bas niveau est nécessaire, et sont principalement utilisés dans la programmation système ou le code où la performance est cruciale.

```wave
var ptr: ptr<T> = &quelqueVariable;
```

## Littéral `null`

Dans Wave, `null` est un littéral officiel.

- `null` n'est pas un identifiant. (La forme `var null = ...` n'est pas autorisée.)
- `null` ne peut être assigné qu'à des types `ptr<T>`.

```wave
var p: ptr<i32> = null;  // OK

// var n: i32 = null;    // ERREUR
// var b: bool = null;   // ERREUR
```

## Type de tableau

Le type tableau est utilisé pour stocker plusieurs éléments du même type de données en séquence.
Dans Wave, les tableaux sont déclarés sous la forme `array<type, taille>`, et la taille du tableau est clairement définie au moment de la compilation.

Cela rend la structure de la mémoire claire et permet un accès stable.

```wave
var numeros: array<i32, 5> = [1, 2, 3, 4, 5];
```

Chaque type de données est conçu pour permettre de choisir la taille et la portée adaptées à son utilisation et à ses caractéristiques.
Choisir le type de données approprié permet de gérer la mémoire de manière efficace et améliore considérablement la stabilité et la lisibilité du code.
