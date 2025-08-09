---
sidebar_position: 1
---

# Fonctions et variables

## Introduction

La philosophie de conception fondamentale du langage de programmation Wave est de fournir un environnement efficace et flexible pour le développement logiciel en équilibrant les performances de bas niveau et l'abstraction de haut niveau.
Cette section introduit les composants de base d'un programme Wave, qui sont les fonctions et les variables. Ces composants sont essentiels pour organiser la logique et gérer les données au sein d'un programme.
Comprendre comment définir et gérer les fonctions et les variables permet de tirer le meilleur parti du potentiel de Wave.

---

## Fonction

Dans Wave, une fonction sert de **bloc de code réutilisable** pouvant être exécuté indépendamment.
Les fonctions permettent de capter un comportement spécifique et peuvent être appelées à travers le programme selon les besoins.
Cela permet d'effectuer des calculs, de gérer des opérations d'entrée/sortie ou de séparer le code en unités gérables.

La signature d'une fonction dans Wave commence par le mot-clé `fun`, suivie du nom de la fonction, des paramètres (le cas échéant) et du corps de la fonction entouré de accolades `{}`.

### Définir une fonction

Une fonction basique dans Wave est définie comme suit :

```wave
fun main() {
    // Écrivez votre code ici
}
```

- La fonction `main` est toujours requise comme point d'entrée pour l'exécution du programme.
- Les fonctions peuvent avoir des paramètres et peuvent retourner des valeurs. Le type de retour est spécifié après le nom de la fonction.

### Exemple : Fonction simple

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Appel de la fonction add
    println(result);            // Affichage : 12
}
```

Dans l'exemple ci-dessus :

- La fonction `add` prend deux entiers `a` et `b` et renvoie leur somme.
- La fonction `main` appelle `add` pour afficher le résultat.

## Variable

Les variables sont utilisées pour stocker et manipuler des données dans un programme.
Wave prend en charge à la fois les **variables mutables** et **immmuables** dans les déclarations de variables, offrant ainsi aux développeurs un contrôle sur la gestion des données.

### Variable mutable

Dans Wave, les variables sont par défaut **mutables**. Cela signifie que leur valeur peut être modifiée pendant l'exécution du programme.

Les variables mutables sont déclarées à l'aide du mot-clé var.

```wave
var x :i32 = 10; // Variable mutable
x = 20;
```

Dans l'exemple ci-dessus :

- `x` est une variable mutable, initialement définie à `10`, et pouvant être modifiée en `20` par la suite.

### Variable immuable

Lorsqu'une variable est déclarée **immutable**, sa valeur ne peut pas être modifiée après son initialisation.

Les variables immuables sont déclarées à l'aide du mot-clé `let`.

```wave
let y :i32 = 5;         // Variable immuable
// y = 10;              // Erreur : une variable immuable ne peut pas être modifiée.
```

Ici :

- `y` est une variable immuable, et toute tentative de la modifier entraînera une erreur de compilation.

Cependant, si vous souhaitez utiliser une variable comme mutable avec le mot-clé `let`, vous pouvez utiliser `mut` pour en faire une variable temporairement mutable.

```wave
let mut y :i32 = 5;
y = 10;
```

### Exemple de déclaration de variable

Voici des exemples de déclaration de variables mutables et immuables de différents types :

```wave
var x :i32 = 10;                    // Variable entière mutable
let y :f64 = 3.14159;               // Variable flottante immuable
var name :str = "Wave";             // Variable de chaîne mutable
let is_active :bool = true;         // Variable booléenne immuable
```

- `x` est un entier mutable.
- `y` est un nombre flottant immuable.
- `name` est une chaîne mutable.
- `is_active` est une valeur booléenne immuable.

Dans Wave, le mot-clé `var` est utilisé pour déclarer des variables mutables, tandis que le mot-clé `let` est utilisé pour déclarer des variables immuables après l'initialisation.

En distinguant les variables mutables et immuables, Wave permet un contrôle plus efficace de la cohérence des données et de l'état du programme.
Cela permet d'écrire du code plus robuste et prévisible.