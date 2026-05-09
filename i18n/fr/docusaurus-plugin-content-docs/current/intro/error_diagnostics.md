---
sidebar_position: 5
---

# Diagnostic des erreurs

Le compilateur Wave affiche les erreurs avec le code (`E####`), la position/la syntaxe/la suggestion de résolution de la source.

## Format de sortie

Le format de base est comme suit.

```text
erreur[E3001]: validation sémantique échouée : utilisation d'un identifiant non déclaré `x`
  --> fichier.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ non trouvé dans ce contexte
   = contexte : validation sémantique
   = aide : corriger les problèmes de mutabilité, de portée et de validité d'expression
```

Éléments de sortie :

- `erreur[E....]` : Code d'erreur et résumé
- `--> fichier:ligne:colonne`: Position du problème
- Bloc source + accent circonflexe (`^`) en surbrillance
- `contexte`, `prévu`, `trouvé`, `note`, `aide`, `suggestion`

## Code d'erreur représentant

- `E1001` Caractère inattendu
- `E1002` Commentaire de bloc non fermé
- `E1003` Chaîne de caractères non fermée
- `E1004` Échappement de chaîne incorrect
- `E1005` Littéral de caractère incorrect
- `E1006` Format de littéral numérique incorrect
- `E2001` Erreur de syntaxe de parseur
- `E3001` Erreur d'analyse sémantique (validation sémantique)
- `E3102` Affectation de `null` à un non-pointeur
- `E3201` Réduction implicite d'entier interdite
- `E9001` Erreur interne de génération de code backend

## Les erreurs backend affichent également la position source

Même si un panic interne se produit lors de la génération du code (LLVM), la position réelle de l'appel/déclaration est affichée si possible.

```text
erreur[E9001]: erreur interne du compilateur lors de la génération du code (génération llvm-ir)
  --> test.wave:12:9
   = trouvé : Fonction 'foo' non trouvée
   = note : position source déduite du nom de fonction non résolu dans une panique de backend
```

Si la déduction de la position est impossible, une position de repli est utilisée, et cela est noté dans un `note`.
