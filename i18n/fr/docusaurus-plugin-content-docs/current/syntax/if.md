---
sidebar_position: 3
---

# Instruction IF

## Introduction

Cette section explique la syntaxe et l'utilisation de l'instruction IF, l'une des instructions de contrôle fournies par le langage Wave.
L'instruction IF est une structure de contrôle de base qui évalue une condition et exécute un bloc de code spécifique uniquement si la condition est vraie.

Cela permet au programme de réaliser différentes actions en fonction des situations et des conditions, au-delà d'un simple flux d'exécution de haut en bas.
L'instruction IF constitue un élément central de presque tous les programmes et est essentielle pour implémenter des branches logiques et contrôler le flux.

## Structure de base

L'instruction IF évalue d'abord une expression conditionnelle et exécute le bloc de code écrit entre accolades `{}` uniquement si le résultat est vrai (True).
Si la condition est fausse (False), ce bloc est ignoré et le programme passe au code suivant.

La structure de base de l'instruction IF dans Wave est la suivante.

```wave
if (condition) {
    // Code exécuté si la condition est vraie
}
```

Vous pouvez utiliser librement les opérateurs de comparaison ou logiques dans les expressions conditionnelles.
Par exemple, vous pouvez comparer les relations de valeur à l'aide d'opérateurs de comparaison tels que `==`, `!=`, `<`, `>`, `<=`, `>=` et combiner plusieurs conditions à l'aide d'opérateurs logiques tels que `&&`, `||`, `!`.

Le résultat des expressions conditionnelles doit être évalué comme vrai ou faux, et si la condition est fausse, le code à l'intérieur du bloc IF ne sera pas exécuté.

## Exemple

Voici un exemple de la forme la plus simple d'une instruction IF.

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Il fait chaud.");
}
```

Dans le code ci-dessus, la condition évalue si la valeur de la variable `temperature` est supérieure à 25.
Si la condition est vraie, le message `"Il fait chaud."` est affiché et si la condition est fausse, aucune action n'est effectuée.

Ainsi, l'instruction IF est utilisée lorsque vous souhaitez exécuter du code uniquement lorsque certaines conditions sont remplies.

## Instruction IF-ELSE

Si vous avez du code à exécuter même si la condition n'est pas vraie, vous pouvez ajouter une clause ELSE à l'instruction IF.
L'instruction IF-ELSE est une structure qui exécute sélectivement l'un des deux blocs de code en fonction du résultat de la condition.

Voici la structure de base.

```wave
if (condition) {
    // Code exécuté si la condition est vraie
} else {
    // Code exécuté si la condition est fausse
}
```

Si la condition est vraie, le bloc IF est exécuté, et si la condition est fausse, le bloc ELSE est exécuté.
Un seul des deux blocs est exécuté, et ils ne s'exécutent jamais simultanément.

Voici un exemple utilisant l'instruction IF-ELSE.

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Vous avez réussi!");
} else {
    println("Échec.");
}
```

Ce code imprime des messages différents selon que le `score` est supérieur ou égal à 60.
Si la condition est vraie, `"Vous avez réussi!"` est imprimé, sinon `"Échec."` est imprimé.

## Instruction IF imbriquée

L'instruction IF peut également être utilisée à l'intérieur d'une autre instruction IF, ce qu'on appelle une instruction IF imbriquée.
Les instructions IF imbriquées sont utiles lorsque vous devez évaluer plusieurs conditions de manière séquentielle.

L'exemple suivant montre une instruction IF imbriquée qui produit des résultats différents en fonction du score.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("C'est une excellente note !");
    } else {
        println("Vous avez réussi.");
    } 
} else {
    println("Vous avez échoué.");
}
```

Dans ce code, on commence par vérifier si le score est supérieur ou égal à 60.
Si c'est inférieur à 60, `"Échec."` est immédiatement imprimé.
Si c'est 60 ou plus, la condition est réévaluée et si le score est 90 ou plus, `"Excellent!"` est imprimé, sinon `"Réussi."` est imprimé.

Ainsi, les instructions IF imbriquées vous permettent d'exprimer progressivement des branches de conditions complexes.

## Résumé

L'instruction IF est une instruction de contrôle de base qui évalue les conditions pour contrôler le flux d'exécution du programme.
En utilisant la clause ELSE, vous pouvez également définir clairement le comportement lorsque la condition est fausse, et une instruction IF imbriquée permet de gérer des branches complexes avec plusieurs conditions.

Une utilisation appropriée de l'instruction IF permet de structurer le flux du programme de manière plus logique et claire.