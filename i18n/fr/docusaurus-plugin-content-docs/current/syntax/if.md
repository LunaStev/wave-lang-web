---
sidebar_position: 3
---

# Instruction IF

## Introduction

Cette section présente la syntaxe de l'instruction IF, l'une des instructions de contrôle de Wave.
L'instruction IF est une structure de contrôle en programmation qui évalue une condition et exécute un code spécifique si la condition est vraie.
Ceci permet de contrôler le flux du programme selon les conditions et de rédiger un code flexible et logique.

## Structure de base

L'instruction IF évalue une condition particulière, et ne s'exécute que si cette condition est vraie.
La structure de base de l'instruction IF de Wave est la suivante:

```wave
if (condition) {
    // Code exécuté si la condition est vraie
}
```

Les conditions s'écrivent en utilisant des opérateurs de comparaison (`==`, `!=`, `<`, `>`, `<=`, `>=`) ou des opérateurs logiques (`&&`, `||`, `!`). Si la condition est fausse, le bloc de code ne s'exécutera pas.

## Exemple

Voici un exemple simple d'une instruction IF:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Il fait chaud.");
}
```

Dans le code ci-dessus, si la valeur de temperature est supérieure à 25, un message "Il fait chaud." est imprimé.

## Instruction IF_ELSE

Pour écrire du code à exécuter si la condition n'est pas vraie, utilisez l'instruction IF-ELSE.
La structure est la suivante:

```wave
if (condition) {
    // Code exécuté si la condition est vraie
} else {
    // Code exécuté si la condition est fausse
}
```

### Exemple:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Vous avez réussi!");
} else {
    println("Échec.");
}
```

Si le score est supérieur ou égal à 60, "Vous avez réussi!" est imprimé, sinon "Échec." est imprimé.

## Instruction IF imbriquée

Une instruction IF peut également être utilisée à l'intérieur d'une autre instruction IF. Cela s'appelle une instruction IF imbriquée et est utile lors du traitement de conditions complexes.

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

Dans l'exemple ci-dessus, en fonction du score, des messages tels que "C'est une excellente note !", "Vous avez réussi.", ou "Vous avez échoué." sont affichés.

## Résumé

- La déclaration IF est une instruction de contrôle qui évalue une condition pour exécuter un bloc de code spécifique.
- Vous pouvez ajouter une instruction ELSE pour spécifier le code à exécuter si la condition est fausse.
- Les instructions IF imbriquées sont utilisées pour gérer des conditions complexes.

L'utilisation de la déclaration IF permet d'organiser le flux du programme de manière plus logique et dynamique !