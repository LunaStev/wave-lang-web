---
sidebar_position: 1
---

# Afficher Hello Wave

Ce document explique comment écrire le programme de sortie le plus basique avec le langage Wave.

---

## Code d'exemple

```wave
fun main() {
    println("Hello Wave");
}
```

---

## Description

- `fun main()`

  C'est la fonction d'entrée d'un programme Wave. Elle est appelée en premier lors de l'exécution.

- `println()`

  C'est une fonction de sortie temporaire qui affiche une chaîne, suivie d'un saut de ligne (`\n`).

- `;` (point-virgule)

  Toutes les instructions en Wave se terminent par un point-virgule.

---

## Résultat de l'exécution

```text
Hello Wave
```

---

## Exemple supplémentaire

Wave prend en charge l'interpolation de chaînes.

```wave
fun main() {
    var name: str = "Wave";
    println("Hello, {}!", name);
}
```

Sortie:

```text
Hello, Wave!
```

---

> Cet exemple montre comment utiliser la fonction de sortie de base de la bibliothèque standard Wave.