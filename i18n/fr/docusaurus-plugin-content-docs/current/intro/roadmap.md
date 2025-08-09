---
sidebar_position: 4
---

# Feuille de route de développement intégré Wave + Whale v2

## Toutes les étapes

```matlab
pré-alpha → pré-bêta → alpha → bêta → rc → release
```

---

## Étape pré-bêta

> Objectif : Accomplissement du frontend du langage Wave + implémentation de toutes les fonctionnalités à l'aide du backend LLVM

### Caractéristiques principales

- Utilisation de LLVM uniquement (sans Whale)

- Pas d'ajouts grammaticaux, implémentation uniquement des spécifications existantes

- Stabilisation de la structure centrée sur le frontend comme les messages d'erreur, la vérification des types, l'étendue des variables, etc.

### Portée de l'implémentation

- Déclaration de variables, sortie, opérations

- Définition et appel de fonctions

- si / sinon si / sinon

- tant que / interrompre / continuer

- Sortie formatée, spécification de type

- Conception de pointeur (de type `ptr<T>`)

- Conception de tableau (`array<T, N>`)

- Vérification de type et AST structurel

### Technologies utilisées

- Rust (entièrement pour le compilateur Wave)

- LLVM (génération IR, exécution AOT)

- inkwell / llvm-sys

---

## Étape Alpha

> Objectif : Début de l’introduction de Wahle, utilisation en parallèle de LLVM / Début de l’implémentation du backend basé sur Whale

### Caractéristiques principales

- LLVM est le backend par défaut

- Whale est un backend optionnel

- Possibilité de bifurquer avec l'option `--backend` lors de l'exécution du code Wave

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Travaux liés à Whale

- Conception et définition de la structure IR de Whale (Instruction, Valeur, Bloc, etc.)

- Implémentation du générateur IR pour Whale

- Générateur de code Whale (assembleur ou binaire)

- Implémentation de types possibles uniquement avec Whale (`i1024`, pointeurs avancés, etc.)

### Point de contrôle

- Affichage de Hello World avec Whale

- Déclaration/assignation de variables dans Whale

- Implémentation d'un outil de débogage IR pour Whale

- Traitement des types de pointeurs dans Whale

- Progression de la conversion de Wave en Whale IR

---

## Étape Bêta

> Objectif : Transition complète vers Whale, suppression de LLVM. Optimisation de la combinaison Whale + Wave

### Caractéristiques principales

- Utilisation de Whale uniquement

- Suppression complète de LLVM (dépendances et modules)

- Axé sur l'optimisation du code

- Rapide et efficace de l'IR à l'exécution

### Portée de l'optimisation

- Conception du passage d'optimisation IR de Whale

- Amélioration de la vitesse de génération de code Whale

- Toutes les syntaxes de Wave sont entièrement prises en charge par Whale

### Test

- Tests unitaires + suite de tests complète

- Test de compatibilité WSON avec la bibliothèque standard

- Vérification de la compilation de Whale multiplateforme

---

## Étape RC (Release Candidate)

> Objectif : Commencer le bootstrap de Wave — Suppression complète du code Rust

### Caractéristiques principales

- Commencement de la réécriture du compilateur Wave avec Wave

- Exécution du code Wave basé sur Whale

- Whale entre dans la phase de self-hosting

### Portée du travail

- Réécriture du générateur IR Wave basé sur Whale

- Suppression de Rust + Remplacement par du code Wave

- Écriture des bibliothèques std et core en Wave

- Naissance du premier compilateur natif Wave en cas de bootstrap réussi

---

## Étape de sortie (v0.0.1)

> Objectif : Lancement officiel / Fourniture d'un écosystème linguistique indépendant entièrement basé sur Whale

### Composants

- Wave (langage et bibliothèque standard)

- Whale (chaîne d'outils du compilateur)

- Vex (gestionnaire de paquets)

- WSON (format de données)

### Caractéristiques

- Compilateur entièrement Wave-only (bootstrap réussi)

- Optimisation de Whale terminée

- Implémentation du système de construction et de déploiement Vex

- Inclusion du parseur WSON + sérialisation

- Compilation multiplateforme possible (`vex build --windows`, etc.)

---

## Stratégie méta de développement

| Stratégie                           | Description                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------------- |
| Stratégie Train+Rail                | Développement parallèle de Whale tout en constituant simultanément le backend de Wave |
| Stratégie de bifurcation du backend | Sélection de LLVM/Whale avec l'option `--backend`, structure importante en alpha      |
| Plan d'inversion de structure       | À partir de rc, le code Wave compile Wave lui-même via Whale                          |
