---
sidebar_position: 1
---

# Fonctions et variables

## Introduction

La philosophie de conception fondamentale du langage de programmation Wave est de fournir un environnement de développement logiciel efficace et flexible en maintenant un équilibre entre performance de bas niveau et abstraction de haut niveau.
Cette section présente les éléments les plus fondamentaux qui composent un programme Wave, à savoir les fonctions et les variables.

Les fonctions sont des unités essentielles qui composent le comportement et la logique d'un programme, tandis que les variables stockent et gèrent les données nécessaires au cours de ce processus.
En comprenant précisément comment définir et utiliser les fonctions et les variables, vous pouvez exploiter plus en profondeur la structure et l'intention de conception du langage Wave.

---

## Fonction

Dans Wave, une fonction est un bloc de code réutilisable qui peut être exécuté de manière indépendante.
Vous pouvez exprimer une action ou un calcul particulier en tant qu'unité, et l'appeler chaque fois que nécessaire dans l'ensemble du programme.

En utilisant des fonctions, vous pouvez réduire le code redondant et rendre le programme plus lisible et plus facile à entretenir en le séparant logiquement.
Elles sont utilisées à diverses fins telles que le traitement des calculs, la gestion des entrées et sorties, et la séparation des logiques.

Dans Wave, une fonction est définie par le mot-clé `fun`, suivie du nom de la fonction, de la liste des paramètres, et du corps de fonction entouré d'accolades `{}`.

### Définir une fonction

La forme de définition de fonction la plus basique dans Wave est la suivante.

```wave
fun main() {
    // Écrivez votre code ici
}
```

La fonction `main` est le point d'entrée d'exécution du programme, et un programme Wave doit avoir exactement une fonction `main`.
Le programme commence son exécution par cette fonction.

Les fonctions peuvent avoir des paramètres si nécessaire et peuvent retourner des résultats ou des valeurs à l'endroit d'où elles ont été appelées.
Si une valeur de retour est présente, le type de retour doit être spécifié dans la déclaration de la fonction.

### Exemple : Fonction simple

L'exemple suivant est une fonction simple qui prend deux entiers et retourne leur somme.

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Appel de la fonction add
    println(result);            // Affichage : 12
}
```

Dans cet exemple, la fonction `add` prend deux paramètres entiers `a` et `b`, les additionne, puis retourne le résultat.
Dans la fonction `main`, la fonction `add` est appelée, la valeur retournée est stockée dans une variable, puis affichée.

Ainsi, une fonction encapsule une action spécifique et permet sa réutilisation dans différentes parties du programme.

## Variable

Les variables sont utilisées pour stocker et manipuler des données dans un programme.
Wave est conçu de manière à distinguer clairement les variables mutables des variables immuables lors de leur déclaration, permettant ainsi d'exprimer l'intention des changements de données au niveau du code.

Cela permet de rendre les états de programme plus clairs et de réduire les erreurs dues à des changements de valeurs non intentionnels.

### Variable mutable

Dans Wave, les variables sont par défaut mutables.
Cela signifie que leur valeur peut être modifiée pendant l'exécution du programme, même après leur déclaration.

Les variables mutables sont déclarées à l'aide du mot-clé var.

```wave
var x :i32 = 10;
x = 20;
```

Dans le code ci-dessus, `x` a la valeur initiale de `10`, et peut ensuite être modifiée en `20`.
On utilise des variables mutables pour les données dont l'état doit changer de cette manière.

### Variable immuable

Si une variable est déclarée immuable, sa valeur ne peut pas être modifiée après qu'elle a été définie initialement.
Les variables immuables sont déclarées à l'aide du mot clé let.

```wave
let y :i32 = 5;
// y = 10;   // Erreur : une variable immuable ne peut pas être modifiée.
```

Les variables immuables garantissent que les valeurs ne changent pas, ce qui contribue à accroître la stabilité et la prévisibilité du programme.
Il est recommandé d'utiliser des variables immuables pour les données constantes qui ne nécessitent pas de changement de valeur.

Dans Wave, vous pouvez explicitement autoriser la mutabilité en utilisant `mut` avec le mot clé `let`.

```wave
let mut y :i32 = 5;
y = 10;
```

Dans ce cas, la variable est déclarée avec `let`, mais la mutabilité est autorisée avec le mot clé `mut`.

### Exemple de déclaration de variable

Voici un exemple de déclaration de variables mutables et immuables de différents types.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = vrai;
```

Dans cet exemple, `x` et `name` sont des variables mutables, tandis que `y` et `is_active` sont des variables immuables.
Dans Wave, la distinction claire entre `var` et `let` montre dans le code si les données peuvent être modifiées ou non.

En utilisant correctement les variables mutables et immuables, vous pouvez écrire un programme plus robuste et prévisible tout en maintenant la cohérence des données.