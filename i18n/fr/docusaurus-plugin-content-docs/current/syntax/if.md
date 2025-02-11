---
sidebar_position: 3
---

# Instruction IF
## Introduction
Dans cette section, nous vous présentons la syntaxe de l'instruction IF, l'une des structures de contrôle de Wave.
L'instruction IF permet d'évaluer une condition et d'exécuter un certain bloc de code si la condition est vraie.
Cela permet de contrôler le flux du programme en fonction des conditions, et d'écrire un code flexible et logique.

## Structure de base
L'instruction IF évalue une condition, puis exécute un bloc de code spécifié uniquement si la condition est vraie.
La structure de base de l'instruction IF de Wave est la suivante :

```wave
if (condition) {  
    // Code à exécuter si la condition est vraie  
}  
```

La condition est écrite en utilisant des opérateurs de comparaison (`==`, `!=`, `<`, `>`, `<=`, `>=`) ou des opérateurs logiques (`&&`, `||`, `!`).
Si la condition est fausse, le bloc de code ne sera pas exécuté.

## Exemple
Voici un exemple simple d'instruction IF :

```wave
var temperature :i32 = 30;  

if (temperature > 25) {  
    println("Il fait chaud.");  
}  
```

Dans ce code, si la valeur de `temperature` est supérieure à 25, le message "Il fait chaud." sera affiché.

## Instruction IF_ELSE
Si la condition n'est pas vraie et que vous souhaitez exécuter un code alternatif, vous pouvez utiliser l'instruction IF-ELSE.
La structure est la suivante :

```wave
if (condition) {  
    // Code à exécuter si la condition est vraie  
} else {  
    // Code à exécuter si la condition est fausse  
}  
```

### Exemple:

```wave
var score :i32 = 70;  

if (score >= 60) {  
    println("Vous êtes admis !");  
} else {  
    println("Vous êtes non admis.");  
}  
```

Si `score` est supérieur ou égal à 60, "Vous êtes admis !" sera affiché, sinon "Vous êtes non admis." apparaîtra.

## Instructions IF imbriquées
L'instruction IF peut être utilisée à l'intérieur d'une autre instruction IF. C'est ce qu'on appelle une instruction IF imbriquée, et elle est utile pour traiter des conditions plus complexes.

```wave
var score :i32 = 85;  

if (score >= 60) {  
    if (score >= 90) {  
        println("Excellente performance !");  
    } else {  
        println("Vous êtes admis.");  
    }  
} else {  
    println("Vous êtes non admis.");  
}  
```

Dans cet exemple, en fonction du score, un des messages suivants sera affiché : "Excellente performance !", "Vous êtes admis.", ou "Vous êtes non admis."

## Résumé

* L'instruction IF permet d'évaluer une condition et d'exécuter un bloc de code spécifique en fonction de cette condition.
* L'instruction ELSE permet d'exécuter un bloc de code lorsque la condition est fausse.
* Les instructions IF imbriquées sont utilisées pour traiter des conditions plus complexes.

Grâce aux instructions IF, vous pouvez rendre le flux de votre programme plus logique et dynamique !