---
sidebar_position: 2
---

# Syntaxe

## 1. Structure de base

- Le contenu du fichier commence et se termine par un objet encadré par des accolades `{}`.

- Les objets se composent de paires nom de propriété (clé) et valeur.

- Les noms et valeurs des propriétés sont séparés par deux-points (`:`) ou signe égal (`=`).

## 2. Commentaire

- Les commentaires commencent par `//` ou `#` et sont écrits par ligne.

- Les commentaires s'appliquent jusqu'à la fin de la ligne.

- Les commentaires multi-lignes ne sont pas pris en charge; pour des commentaires sur plusieurs lignes, `//` ou `#` doit être ajouté à chaque ligne.

## 3. Objet (Object)

- Les objets sont entourés par des accolades `{}` et incluent des paires clé-valeur.

- On peut utiliser le `:` ou `=` entre la clé et la valeur. Les deux symboles peuvent être mélangés indistinctement.

- Chaque propriété est séparée par une virgule (`,`).

- Il est possible de faire de l'imbrication avec d'autres objets à l'intérieur d'un objet.

Exemple:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Tableau (Array)

- Les tableaux sont entourés par des crochets `[]` et leurs éléments sont séparés par des virgules (`,`).

- Les éléments d'un tableau peuvent être de différents types de données, tels que des objets, des chaînes de caractère ou des nombres.

- Dans WSON, les tableaux peuvent être inclus dans un objet et d'autres tableaux ou objets peuvent être imbriqués à l'intérieur des tableaux.

Exemple:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Paire clé-valeur (Key-Value Pair)

- Les noms de propriétés sont constitués de chaînes de caractères, suivies sans espace d'une valeur précédée de `:` ou `=`.

- Les types de valeurs incluent chaînes, nombres, booléens, objets et tableaux.

- Les chaînes sont entourées de guillemets `“`.

- Les nombres sont utilisés sans guillemets et peuvent être des entiers ou des flottants.

Exemple:

```
name: "John Doe"
age = 25
```

## 6. Types de données (Data Types)

- Chaîne (String) : texte entouré de guillemets `"`.

```
"hello world"
```

- Nombre (Number) : valeur entière ou flottante.

```
42
3.14
```

- Booléen (Boolean) : utilise des valeurs `true` ou `false`.

```
is_active = true
```

- Objet (Object) : paire clé-valeur enveloppée par des accolades `{}`.
- Tableau (Array) : liste d'éléments entourés par des crochets `[]`.

## 7. Description des exemples

```ws
{
    // Code d'état et informations sur les messages
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # âge de l'utilisateur
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```
