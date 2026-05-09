---
sidebar_position: 11
---

# Commentaire

Wave prend en charge deux types de commentaires.

- Commentaire sur une ligne : `//`
- Commentaire de bloc : `/* ... */`

## Commentaire sur une ligne

Le contenu après `//` est ignoré jusqu'à la fin de la ligne.

```wave
var x: i32 = 10; // commentaire de ligne
x += 5;          // fonctionne toujours
```

## Commentaire de bloc

Le contenu entre `/*` et `*/` est ignoré.

```wave
var y: i32 = 1 /* bloc en ligne */ + 2;
```

Les commentaires de bloc supportent plusieurs lignes et l'imbrication.

```wave
/* extérieur
   /* intérieur */
   fin extérieur
*/
```

## Chaînes de caractères et symboles de commentaire

Les `/*`, `*/`, `//` à l'intérieur des chaînes ne sont pas traités comme des débuts/fins de commentaire.

```wave
var marker: str = "/*//*/";
```

## Erreur de commentaire

Une erreur de compilation (`E1002`) se produit si un commentaire de bloc n'est pas fermé.

```wave
/* non fermé
```

Le compilateur affiche la position de départ, la cause et un indice de correction.
