---
sidebar_position: 5
---

# Opérateurs

## Introduction

Le langage Wave propose divers opérateurs permettant d'effectuer des calculs, des jugements logiques, des comparaisons, des opérations binaires, etc. entre les variables.

Ce document explique les principaux opérateurs utilisables dans Wave, classés par type, et fournit des exemples de leur fonctionnement.

Les opérateurs sont répartis dans les catégories suivantes :

- Opérateurs arithmétiques
- Opérateurs de comparaison
- Opérateurs logiques
- Opérateurs de bits
- Opérateurs d'affectation
- Autres opérateurs spéciaux

---

## Opérateurs arithmétiques

Les opérateurs arithmétiques effectuent des opérations mathématiques de base sur les données numériques.

| Opérateur | Description    | Exemple (`a = 10`, `b = 3`)      |
| --------- | -------------- | --------------------------------------------------- |
| `+`       | Addition       | `a + b` → `13`                                      |
| `-`       | Soustraction   | `a - b` → `7`                                       |
| `*`       | Multiplication | `a * b` → `30`                                      |
| `/`       | Division       | `a / b` → `3` (division entière) |
| `%`       | Modulo         | `a % b` → `1`                                       |

---

## Opérateurs de comparaison

Les opérateurs de comparaison renvoient une valeur `bool` basée sur la comparaison de deux valeurs.

| Opérateurs | Description        | Exemple (`a = 10`, `b = 3`) |
| ---------- | ------------------ | ---------------------------------------------- |
| `==`       | Égal               | `a == b` → `false`                             |
| `!=`       | Différent          | `a != b` → `true`                              |
| `<`        | Plus petit         | `a < b` → `false`                              |
| `>`        | Plus grand         | `a > b` → `true`                               |
| `<=`       | Plus petit ou égal | `a <= 10` → `true`                             |
| `>=`       | Plus grand ou égal | `a >= b` → `true`                              |

---

## Opérateurs logiques

Les opérateurs logiques traitent les combinaisons de valeurs `bool` vraies/faux.

| Opérateurs | Nom         | Description                                           | Exemple                   |
| ---------- | ----------- | ----------------------------------------------------- | ------------------------- |
| `&&`       | ET logique  | Seulement `true` lorsque les deux valeurs sont `true` | `true && false` → `false` |
| \\\`\\ | OU logique  | `true` si l'un des deux est `true`                    | \\\`true \\           |
| `!`        | NON logique | Inverse `true` à `false` et `false` à `true`          | `!true` → `false`         |

---

## Opérateurs de bits

Les opérateurs de bits manipulent les données entières au niveau du bit.

| Opérateurs | Nom               | Description                             | Exemple         |
| ---------- | ----------------- | --------------------------------------- | --------------- |
| `&`        | ET bit à bit      | 1 lorsque les deux bits sont 1          | `a & b` → `2`   |
| \\\`\\ | OU bit à bit      | 1 si l'un des deux bits est 1           | b`→`7\\\`     |
| `^`        | XOR bit à bit     | 1 lorsque les deux bits sont différents | `a ^ b` → `5`   |
| `~`        | NON bit à bit     | Inverser les bits                       | `~a` → `-7`     |
| `<<`       | Décalage à gauche | Déplacer les bits à gauche              | `a << 1` → `12` |
| `>>`       | Décalage à droite | Déplacer les bits à droite              | `a >> 1` → `3`  |

---

## Opérateurs d'affectation

Utilisé pour affecter une valeur à une variable. La plupart du temps, il peut être combiné avec des opérateurs arithmétiques pour être condensé.

| Opérateurs | Description                      | Exemple (`a = 5`) |
| ---------- | -------------------------------- | ------------------------------------ |
| `=`        | Affectation de base              | `a = 10`                             |
| `+=`       | Affectation après addition       | `a += 2` → `7`                       |
| `-=`       | Affectation après soustraction   | `a -= 1` → `4`                       |
| `*=`       | Affectation après multiplication | `a *= 3` → `15`                      |
| `/=`       | Affectation après division       | `a /= 5` → `1`                       |
| `%=`       | Affectation du reste             | `a %= 4` → `1`                       |

---

## Autres opérateurs spéciaux

Wave fournit également des opérateurs avec une signification unique ou spéciale.

| Opérateurs  | Nom                                                            | Description                                           | Exemple                                   |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------- |
| `??`        | Opérateur de fusion de null                                    | Utilise la valeur de droite si la gauche est null     | `a ?? b` → `si a est null alors b`        |
| `?:`        | Opérateur conditionnel (opérateur ternaire) | Sélectionne une valeur selon une condition            | `condition ? valeur vrai : valeur fausse` |
| `in`        | Vérifie l'inclusion                                            | Vérifie si une valeur est incluse dans une collection | `"a" dans liste`                          |
| `is`        | Opérateur de comparaison de type                               | Vérifie le type d'une valeur                          | `x est i32`                               |
| `!&`        | NAND                                                           | Opération logique NAND                                | Opération logique avancée                 |
| \\\`!\\ | NOR                                                            | Opération logique NOR                                 | Opération logique avancée                 |
| `~^`        | XNOR                                                           | Opération logique XNOR                                | Opération logique avancée                 |

---

## Résumé

Wave fournit une variété d'opérateurs allant des opérations mathématiques aux évaluations logiques, en passant par les manipulations de bits et la branche conditionnelle.
Ces opérateurs interagissent avec des variables ou formulent des conditions, et sont des outils essentiels pour des calculs complexes ou le contrôle de flux.

La priorité et la direction d'association de chaque opérateur seront abordées dans la section "Priorité et ordre d'évaluation" plus tard.