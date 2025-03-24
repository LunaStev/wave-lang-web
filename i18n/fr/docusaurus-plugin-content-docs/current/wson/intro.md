---
sidebar_position: 2
---

# Syntaxe

## 1. Structure de base
* Le contenu du fichier commence et se termine par un objet entouré d'accolades `{}`.

* Un objet est composé de paires clé-valeur, où la clé est le nom de l'attribut et la valeur est la valeur de l'attribut.

* La clé et la valeur sont séparées par un deux-points (`:`) ou un signe égal (`=`)

## 2. Commentaires
Les commentaires commencent par `//` ou `#` et sont écrits sur une seule ligne.

Les commentaires s'appliquent jusqu'à la fin de la ligne.

Les commentaires multiligne ne sont pas pris en charge. Si vous avez besoin d'écrire des commentaires sur plusieurs lignes, vous devez ajouter `//` ou `#` au début de chaque ligne.

## 3. Objet
* Un objet est entouré d'accolades `{}` et contient des paires clé-valeur.

* Vous pouvez utiliser `:` ou `=` entre la clé et la valeur. Les deux symboles sont interchangeables.

* Chaque attribut est séparé par une virgule (`,`).

* D'autres objets peuvent être imbriqués à l'intérieur d'un objet.

Exemple :

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Tableau
* Un tableau est entouré de crochets `[]`, et les éléments sont séparés par des virgules (`,`).

* Les éléments d'un tableau peuvent être des objets, des chaînes, des nombres ou d'autres types de données.

* Dans WSON, les tableaux peuvent être inclus à l'intérieur des objets, et les tableaux peuvent contenir d'autres tableaux ou objets.

Exemple :

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Paires clé-valeur
* Les noms des attributs sont des chaînes et sont placés directement après `:` ou `=`, sans espaces.

* La valeur peut être de types tels que des chaînes, des nombres, des booléens, des objets ou des tableaux.

* Les chaînes sont entourées de guillemets doubles (`"`).

* Les nombres sont écrits sans guillemets et peuvent être des entiers ou des nombres à virgule flottante.

Exemple :

```
name: "John Doe"
age = 25
```

## 6. Types de données

- Chaîne (String) : Texte entouré de guillemets doubles (").

```
"hello world"
```

- Nombre (Number) : Valeur entière ou à virgule flottante.

```
42
3.14
```

- Booléen (Boolean) : La valeur est `true` ou `false`.

```
is_active = true
```

* Objet (Object) : Un ensemble de paires clé-valeur entourées d'accolades `{}`.

* Tableau (Array) : Une liste d'éléments entourée de crochets `[]`.

## 7. Explication de l'exemple

```ws
{
    // Informations sur le code de statut et le message
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Âge de l'utilisateur
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