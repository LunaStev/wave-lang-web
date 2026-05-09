---
sidebar_position: 5
---

# Diagnostic des erreurs

Le compilateur Wave affiche les erreurs avec le code (`E####`), la position/la syntaxe/la suggestion de résolution de la source.

## Format de sortie

Le format de base est comme suit.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

Éléments de sortie :

- `--> file:line:column` : Code d'erreur et résumé
- `^`: Position du problème
- Bloc source + accent circonflexe (`^`) en surbrillance
- `contexte`, `prévu`, `trouvé`, `note`, `aide`, `suggestion`

## Code d'erreur représentant

- `E1002` Caractère inattendu
- `E1003` Commentaire de bloc non fermé
- `E1004` Chaîne de caractères non fermée
- `E1005` Échappement de chaîne incorrect
- `E1006` Littéral de caractère incorrect
- `E2001` Format de littéral numérique incorrect
- `E3001` Erreur de syntaxe de parseur
- `E3001` Erreur d'analyse sémantique (validation sémantique)
- `E3102` Affectation de `null` à un non-pointeur
- `E9001` Réduction implicite d'entier interdite
- `E9001` Erreur interne de génération de code backend

## Les erreurs backend affichent également la position source

Même si un panic interne se produit lors de la génération du code (LLVM), la position réelle de l'appel/déclaration est affichée si possible.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

Si la déduction de la position est impossible, une position de repli est utilisée, et cela est noté dans un `note`.
