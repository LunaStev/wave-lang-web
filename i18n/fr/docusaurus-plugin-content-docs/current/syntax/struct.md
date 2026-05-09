---
sidebar_position: 8
---

# Structure

## Aperçu

Les structures dans le langage Wave sont des éléments syntaxiques de base pour déclarer des types de données définis par l'utilisateur.
Les structures permettent de regrouper des valeurs de types différents en une seule unité logique, modélisant ainsi de manière claire et sécurisée des structures de données complexes.

Les structures de Wave agissent comme des types valeur.
Tous les champs doivent avoir un type explicite et doivent être initialisés lors de la création d'une instance de structure.
Ces règles permettent à l'état de la structure de rester toujours complet et prévisible.
--------------------------------------------------------------------------------------------------------

## Syntaxe de déclaration de structure

Les structures sont déclarées à l'aide du mot-clé `struct`.
Le nom des structures utilise la notation PascalCase et le corps d'une structure peut définir un ou plusieurs champs.

Les champs sont déclarés au format `nom: type;`, avec un point-virgule requis après chaque déclaration de champ.

```wave
struct Box {
    size: i32;
    weight: f32;
}
```

Lors de la déclaration d'une structure, l'ordre des champs écrits est utilisé tel quel pour la disposition en mémoire.
À l'intérieur d'une structure, seules les déclarations de champs sont autorisées ; les fonctions ou les méthodes ne peuvent pas être incluses.
La logique opérationnelle est définie séparément de la structure.
---------------------------------------------------------------------------------

## Syntaxe de création de structure

Les structures sont créées à l'aide d'un format littéral utilisant le nom de la structure.
Les littéraux de structure sont écrits sous la forme `StructName { field_name: value; ... }`.

```wave
var b: Box = Box {
    size: 42;
    weight: 10.5;
};
```

Lors de la création d'une structure, tous les champs définis doivent être initialisés ;
si un seul champ manque, une erreur de compilation se produit.

Lors de l'initialisation, l'ordre des champs n'a pas à correspondre à l'ordre de déclaration de la structure, mais le type des valeurs assignées à chaque champ doit correspondre exactement au type défini dans la structure.
Wave ne permet pas la conversion implicite de type lors de l'initialisation des champs de structure.

---

## Syntaxe d'accès aux champs de la structure

Les champs de la structure sont accessibles via la notation pointée.
Les accès en lecture et en écriture des champs utilisent la même syntaxe.

```wave
println("Size: {}", b.size);
println("Weight: {}", b.weight);
```

Essayer d'utiliser un nom de champ inexistant provoque une erreur au moment de la compilation.
Étant un type valeur, lorsqu'une structure est assignée entièrement ou passée comme argument à une fonction,
tous les champs de la structure sont copiés en même temps.

---

## Syntaxe de définition des méthodes de structure

Le langage Wave ne permet pas de définir des méthodes directement à l'intérieur des structures.
À la place, le mot-clé `proto` est utilisé pour déclarer un ensemble de méthodes liées à une structure.

Un bloc `proto` est une zone pour les fonctions associées à une structure spécifique ;
les fonctions définies dans ce bloc sont utilisées comme des méthodes de la structure.

Les méthodes utilisent `self` comme premier paramètre pour recevoir l'instance de la structure.
`self` représente la valeur entière de la structure et est transmis par copie de valeur.

```wave
proto Box {
    fun print(self) {
        println("size={}, weight={}", self.size, self.weight);
    }

    fun added_size(self, x: i32) -> i32 {
        return self.size + x;
    }
}
```

Un bloc `proto` n'a pas besoin d'être situé dans le même fichier que la déclaration de structure ; plusieurs blocs `proto` peuvent être utilisés pour définir des méthodes réparties pour la même structure.

L'appel de méthode utilise la notation pointée et fonctionne de la même manière qu'un appel de fonction classique.

```wave
b.print();
var n: i32 = b.added_size(5);
```

---

## Utilisation des structures en tant qu'arguments de fonction

Les structures sont traitées par copie de valeur lorsqu'elles sont passées comme arguments à une fonction.
Même si les champs de la structure sont modifiés à l'intérieur de la fonction, cela n'affecte pas l'instance de structure du côté appelant.

```wave
fun calc(box: Box) -> i32 {
    return box.size * 2;
}
```

Lorsqu'une structure est utilisée comme valeur de retour d'une fonction, une copie de valeur se produit également.
Ce comportement garantit l'immuabilité et un flux de données prévisible pour les structures.

---

## Structure imbriquée (Nested Struct)

Dans Wave, d'autres structures peuvent être utilisées comme type de champ d'une structure.
Étant un type entier, les structures peuvent être librement imbriquées les unes dans les autres.

```wave
struct Position {
    x: i32;
    y: i32;
}

struct Player {
    name: str;
    pos: Position;
}
```

Les champs des structures imbriquées sont accessibles en utilisant continuellement la notation par points.

```wave
var p: Player = Player {
    name: "Alice";
    pos: Position { x: 10; y: 20; };
};

println("Player X: {}", p.pos.x);
println("Player Y: {}", p.pos.y);
```

Vous pouvez imbriquer un autre littéral de structure à l'intérieur d'un littéral de structure,
et toutes les règles d'initialisation de champ s'appliquent également dans ce cas.

---

## Tableau de structures

Les structures peuvent être utilisées comme type d'élément dans des tableaux.
La syntaxe des tableaux dans Wave utilise le format `array<type, taille>` ; le type de structure peut être spécifié tel quel.

```wave
var players: array<Player, 3> = [
    Player { name: "A"; pos: Position { x: 1; y: 2; }; },
    Player { name: "B"; pos: Position { x: 3; y: 4; }; },
    Player { name: "C"; pos: Position { x: 5; y: 6; }; }
];
```

Pour accéder à un élément d'un tableau de structures, utilisez d'abord l'indice du tableau,
puis accédez aux champs internes de la structure via la notation par points.

```wave
println("Second Player X: {}", players[1].pos.x);
```

---

## Compatibilité des opérations de base pour les structures

Les structures dans Wave sont des types définis par l'utilisateur;
els ne participent pas automatiquement aux opérations arithmétiques ou de comparaison.

Si vous avez besoin de comparer l'égalité, de trier, de hacher ou d'effectuer des opérations numériques sur des structures,
vous devez définir ces comportements explicitement via un bloc `proto`.
Wave ne fournit pas d'opérateurs implicites pour les structures;
toutes les actions doivent être définies explicitement par principe.
