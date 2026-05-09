---
sidebar_position: 5
---

# Opérateurs

Ce document résume les opérateurs actuellement disponibles selon le compilateur.

## arithmétique

| Opérateur | Description    |
| --------- | -------------- |
| `+`       | Addition       |
| `-`       | Soustraction   |
| `*`       | Multiplication |
| `/`       | Division       |
| `%`       | reste          |

## comparaison

| Opérateurs | Description        |
| ---------- | ------------------ |
| `==`       | Égal               |
| `!=`       | Différent          |
| `<`        | Plus petit         |
| `<=`       | Plus petit ou égal |
| `>`        | Plus grand         |
| `>=`       | Plus grand ou égal |

## logique

| Opérateurs | Description |
| ---------- | ----------- |
| `&&`       | ET logique  |
| `\|\|` | OU logique |
| `!`        | NON logique |

## bit

| Opérateurs | Description       |
| ---------- | ----------------- |
| `&`        | ET bit à bit      |
| `\|` | bit OU |
| `^`        | XOR bit à bit     |
| `~`        | NON bit à bit     |
| `<<`       | Décalage à gauche |
| `>>`       | Décalage à droite |

## assignation

| Opérateurs | Description                      |
| ---------- | -------------------------------- |
| `=`        | assignation de base              |
| `+=`       | assignation après addition       |
| `-=`       | assignation après soustraction   |
| `*=`       | assignation après multiplication |
| `/=`       | assignation après division       |
| `%=`       | assignation après reste          |

## unaire / pointeur / cast

| opérateurs/mots-clés | Description                     |
| -------------------- | ------------------------------- |
| `++`, `--`           | incrémentation préfixe/postfixe |
| `&x`                 | référencement                   |
| `deref p`     | déréférencement de pointeur     |
| `expr as T` | cast explicite                  |

## opération de pointeur

| expression                 | résultat                                        |
| -------------------------- | ----------------------------------------------- |
| `ptr<T> + int`             | `ptr<T>` (déplacement GEP)   |
| `int + ptr<T>`             | `ptr<T>` (déplacement GEP)   |
| `ptr<T> - int`             | `ptr<T>` (déplacement GEP)   |
| `ptr<T> - ptr<T>`          | `i64` (différence en octets) |
| `ptr == ptr`, `ptr != ptr` | comparaison de pointeurs                        |

## éléments réservés ou non implémentés

Il existe des éléments où le jeton syntaxique existe mais n'est pas encore supporté par les expressions actuelles.
Ex : `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
