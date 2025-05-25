---
sidebar_position: 1
---

# Fonctions et Variables

## Introduction

La philosophie de conception fondamentale du langage de programmation Wave est de trouver un équilibre entre les performances de bas niveau et l'abstraction de haut niveau, afin de fournir un environnement efficace et flexible pour le développement logiciel.
Dans cette section, nous vous présentons les éléments de base d'un programme Wave : les fonctions et les variables. 
Ces éléments sont essentiels pour organiser la logique et gérer les données dans un programme.
Comprendre comment définir et manipuler des fonctions et des variables vous permettra de tirer pleinement parti du potentiel de Wave.

---

## Fonction
Dans Wave, une fonction sert de **bloc de code réutilisable** qui peut être exécuté indépendamment.
Les fonctions encapsulent une action spécifique et permettent de les appeler lorsque cela est nécessaire tout au long du programme.
Cela permet d'effectuer des calculs, de gérer des opérations d'entrée/sortie ou de diviser le code en unités gérables.

La signature d'une fonction dans Wave commence par le mot-clé `fun`, suivi du nom de la fonction, des paramètres (le cas échéant), et du corps de la fonction entouré de crochets `{}`.

### Définir une fonction
Dans Wave, une fonction de base est définie comme suit :

```wave
fun main() {
    // Écrivez votre code ici
}
```

* La fonction `main` est toujours nécessaire en tant que point d'entrée pour l'exécution du programme.
* Une fonction peut avoir des paramètres et peut retourner une valeur. Le type de retour est spécifié après le nom de la fonction.

### Exemple : Fonction simple

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Appel de la fonction add
    println(result);            // Affiche : 12
}
```

Dans cet exemple:

* La fonction `add` prend deux entiers `a` et `b` en entrée et retourne leur somme.
* La fonction `main` appelle `add` et affiche le résultat.

## Variables
Les variables sont utilisées pour stocker et manipuler des données dans un programme.
Wave prend en charge à la fois les **variables mutables** et les **variables immuables** dans la déclaration des variables, offrant ainsi aux développeurs un contrôle sur la gestion des données.

### Variables mutables
Dans Wave, les variables sont **mutables** par défaut. Cela signifie que leur valeur peut être modifiée pendant l'exécution du programme.

Les variables mutables sont déclarées en utilisant le mot-clé var.
```wave
var x :i32 = 10; // Variable mutable
x = 20;
```

Dans cet exemple:
* `x` est une variable mutable, initialisée avec la valeur `10`, et sa valeur peut être modifiée plus tard en `20`.

### Variables immutables
Lorsqu'une variable est déclarée **immutable**, sa valeur ne peut pas être modifiée après l'affectation initiale.

Les variables immutables sont déclarées en utilisant le mot-clé **var imm**.
```wave
var imm y :i32 = 5;     // Variable immuable
// y = 10;              // Erreur : une variable immuable ne peut pas être modifiée
```

Dans cet exemple:
* `y` est une variable immuable, et toute tentative de modifier sa valeur provoque une erreur de compilation.

### Exemple de déclaration de variables
Voici un exemple de déclaration de variables mutables et immuables de différents types :

```wave
var x :i32 = 10;                    // Variable mutable entière
var imm y :f64 = 3.14159;           // Variable immuable à virgule flottante
var name :str = "Wave";             // Variable mutable chaîne de caractères
var imm is_active :bool = true;     // Variable immuable booléenne
```

* `x` est une variable entière mutable.
* `y` est une variable à virgule flottante immuable.
* `name` est une variable mutable de type chaîne de caractères.
* `is_active` est une variable booléenne immuable.

Dans Wave, les variables mutables sont déclarées avec le mot-clé `var`, tandis que les variables immuables sont déclarées avec le mot-clé `var imm`, ce qui les rend non modifiables après leur initialisation.

En différenciant les variables mutables et immuables, Wave permet un meilleur contrôle sur la cohérence des données et l'état du programme, facilitant ainsi l'écriture de code plus robuste et prévisible.