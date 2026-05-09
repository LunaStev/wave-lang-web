---
sidebar_position: 4
---

# Feuille de route de développement intégré Wave + Whale v2

Ce document est une feuille de route qui organise étape par étape le processus de développement intégré du langage Wave et de la chaîne d'outils du compilateur Whale.
Wave et Whale commencent initialement comme des composants séparés, mais visent à s'intégrer complètement en un écosystème linguistique indépendant.

Les étapes de développement suivent le déroulement suivant.

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

Chaque étape progresse sur la base des résultats de l'étape précédente, en supposant un développement unidirectionnel où l'on ne revient pas à la structure précédente une fois une étape complétée.

---

## Étape pré-bêta

L'objectif de la phase Pre-Beta est de compléter le frontend du langage Wave et d'implémenter toutes les fonctionnalités du langage en se basant sur le backend LLVM.
À cette étape, Whale n'est pas utilisé, et la compilation ainsi que l'exécution sont entièrement réalisées via LLVM.

À cette étape, l'expansion de la syntaxe elle-même n'est pas entreprise.
L'objectif principal est de rendre fonctionnels tous les éléments syntaxiques en se basant sur les spécifications déjà définies.
L'accent est mis sur la stabilisation de la structure du frontend, y compris la qualité des messages d'erreur, la vérification des types et la gestion de l'étendue des variables.

Le périmètre de l'implémentation inclut la déclaration et la sortie de variables, les opérations de base, ainsi que la définition et l'appel de fonctions, les instructions conditionnelles (`if` / `else if` / `else`) et les boucles (`while` / `break` / `continue`), tout cela étant achevé à cette étape.
Sont également inclus la sortie formatée, la désignation de type explicite, la conception de pointeurs sous forme `ptr<T>`, et la conception de tableaux sous forme `array<T, N>`.

À ce stade, le compilateur Wave est entièrement écrit en Rust et utilise inkwell et llvm-sys pour la génération de LLVM IR et l'exécution AOT.

---

## Étape Alpha

L'objectif de la phase Alpha est d'introduire le backend Whale et d'établir une structure permettant l'utilisation combinée de LLVM et Whale.
LLVM reste le backend par défaut, et Whale est ajouté en tant que backend optionnel.

Lors de l'exécution du code Wave, vous pouvez choisir entre l'utilisation de l'arrière-plan LLVM ou Whale via l'option `--backend`.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

À cette étape, nous concevons et définissons la structure IR propre à Whale.
Nous organisons les composants clés tels que Instruction, Value, Block, et développons un générateur IR pour transformer le Wave AST en Whale IR.

Nous développons également un générateur de code pour Whale afin de permettre l'exécution sous forme d'assemblage ou de binaire.
Dans LLVM, les types difficiles à implémenter ou inefficaces, tels que les types d'entiers massifs comme `i1024` ou les structures de pointeurs avancées, sont introduits à cette étape en tant que fonctions exclusives à Whale.

Les points de contrôle doivent inclure la possibilité d'afficher Hello World sur le backend Whale, ainsi que la gestion correcte des déclarations de variables, des affectations, des pointeurs et des outils de débogage IR.
C'est l'étape où la conversion de Wave en Whale IR est réellement effectuée.

---

## Étape Bêta

L'objectif de l'étape Bêta est de passer complètement à Whale et de supprimer les dépendances LLVM.
À partir de cette étape, la compilation et l'exécution de Wave se font exclusivement avec Whale.

Toutes les dépendances et modules liés à LLVM sont supprimés, et les chemins de génération et d'exécution du code sont optimisés pour Whale.
L'objectif principal est de rendre le flux complet, de la création à l'exécution de l'IR, simple et rapide.

Nous concevons des passages d'optimisation pour Whale IR afin d'améliorer la vitesse de génération de code et l'efficacité d'exécution.
Toute la syntaxe de Wave doit être entièrement prise en charge par le backend Whale à cette étape.

Du point de vue des tests, nous effectuons des tests unitaires et des suites de tests complètes, tout en vérifiant la compatibilité avec WSON et la bibliothèque standard, ainsi que la possibilité de construire Whale de manière multiplateforme.

---

## Étape RC (Release Candidate)

L'objectif de l'étape RC est de lancer le bootstrap de Wave.
À partir de cette étape, nous commençons à éliminer progressivement l'implémentation Rust du compilateur Wave et à réécrire le compilateur Wave en utilisant la langue Wave elle-même.

Nous réécrivons le générateur d'IR Wave basé sur Whale et remplaçons la logique centrale du compilateur ainsi que les bibliothèques std / core par du code Wave.
Grâce à ce processus, Whale entre dans la phase de self-hosting.

Une fois le bootstrap réussi, le premier compilateur natif Wave verra le jour.

---

## Étape de sortie (v0.0.1)

L'étape de la version signifie la première version officielle de Wave.
À ce stade, Wave et Whale forment un écosystème linguistique indépendant et entièrement intégré.

Les composants de la version comprennent le langage Wave et la bibliothèque standard, la chaîne d'outils du compilateur Whale, le gestionnaire de packages Vex, et le format de données WSON.

Le Wave à ce stade doit disposer d'un compilateur entièrement écrit en code Wave, et les optimisations de Whale doivent être terminées.
Le flux de construction et de distribution via Vex doit être établi, et la construction multi-OS comme `vex build --windows` doit être possible.

---

## Stratégie méta de développement

Le développement de Wave + Whale ne consiste pas simplement en une progression par étapes, mais se base sur une stratégie claire.
En adoptant une stratégie train + rail consistant à développer Whale tout en structurant le backend Wave simultanément, la conception de la structure backend et du langage avance de concert.

Durant l'étape Alpha, la stratégie de branchement backend avec l'option `--backend` joue un rôle essentiel, fournissant une base pour comparer et valider directement LLVM et Whale.

Après RC, le plan de structuration inverse commence sérieusement, où le code Wave se compile lui-même via Whale.