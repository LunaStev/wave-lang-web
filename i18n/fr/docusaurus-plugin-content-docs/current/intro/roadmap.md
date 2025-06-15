---
sidebar_position: 4
---

# Feuille de Route Intégrée Wave + Whale v2

## Phases Globales

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Phase Pre-Beta

> Objectif : Finaliser le frontend du langage Wave + implémenter toutes les fonctionnalités avec le backend LLVM

### Caractéristiques Principales
* Utilisation exclusive de LLVM (sans Whale)

* Aucune nouvelle syntaxe, uniquement les spécifications existantes

* Stabilisation de la structure centrée sur le frontend : messages d’erreur, vérification des types, portée des variables, etc.

### Portée de l’Implémentation
* Déclaration de variables, affichage, opérations

* Définition et appel de fonctions

* if / else if / else

* while / break / continue

* Affichage formaté, déclaration de type explicite

* Conception des pointeurs (format `ptr<T>`)

* Conception des tableaux (format `array<T, N>`)

* Vérification des types et AST structuré

### Technologies Utilisées
* Rust (ensemble du compilateur Wave)

* LLVM (génération IR, exécution AOT)

* inkwell / llvm-sys

---

## Phase Alpha

> Objectif : Démarrer l'intégration de Whale, utilisation parallèle avec LLVM / Commencer le backend basé sur Whale

### Caractéristiques Principales
* LLVM est le backend par défaut

* Whale est un backend optionnel

* Possibilité de choisir le backend via l’option `--backend`

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Tâches Liées à Whale
* Conception et définition de la structure IR de Whale (Instruction, Value, Block, etc.)

* Implémentation du générateur IR pour Whale

* Générateur de code Whale (assembleur ou binaire)

* Types spécifiques à Whale (ex. : `i1024`, pointeurs avancés)

### Jalons
* Affichage de “Hello World” avec Whale

* Déclaration/affectation de variables dans Whale

* Outils de débogage pour l’IR de Whale

* Gestion des types pointeurs dans Whale

* Début de la conversion Wave → Whale IR

---

## Phase Beta

> Objectif : Passage complet à Whale, suppression de LLVM. Optimisation de la combinaison Whale + Wave

### Caractéristiques Principales
* Utilisation exclusive de Whale

* Suppression complète de LLVM (dépendances et modules)

* Priorité à l’optimisation du code

* Passage rapide et efficace de l’IR à l’exécution

### Portée de l’Optimisation
* Conception de passes d’optimisation pour l’IR Whale

* Accélération de la génération de code Whale

* Prise en charge complète de toute la syntaxe de Wave avec Whale

### Tests
* Tests unitaires + suite de tests complète

* Tests de compatibilité avec WSON et la bibliothèque standard

* Vérification des builds Whale multiplateformes

---

## Phase RC (Release Candidate)

> Objectif : Démarrer le bootstrapping de Wave — supprimer totalement le code Rust

### Caractéristiques Principales
* Réécriture du compilateur Wave en Wave

* Exécution du code Wave avec Whale comme backend

* Whale entre dans la phase d’auto-hébergement (self-hosting)

### Portée des Travaux
* Réécriture du générateur IR de Wave en utilisant Whale

* Suppression de Rust, remplacement par du code Wave

* Écriture des bibliothèques std et core en Wave

* Un bootstrapping réussi donne naissance au premier compilateur natif Wave

---

## Phase de Lancement (v0.0.1)

> Objectif : Lancement officiel / Fournir un écosystème linguistique totalement indépendant basé sur Whale

### Composants
* Wave (langage et bibliothèque standard)

* Whale (toolchain du compilateur)

* Vex (gestionnaire de paquets)

* WSON (format de données)

### Points Clés
* Compilateur 100 % Wave-only (bootstrapping réussi)

* Optimisation complète de Whale

* Système de build et déploiement via Vex opérationnel

* Parser + sérialisation WSON inclus

* Compilation multi-OS possible (`vex build --windows`, etc.)

---

## Stratégie de Développement (Métastratégie)

| Stratégie                     | Description                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| Stratégie Train + Rail        | Développer Whale tout en construisant le backend Wave en parallèle        |
| Stratégie de Bifurcation      | Choix entre LLVM/Whale via l’option `--backend`, essentiel en phase alpha |
| Plan d’Inversion Structurelle | Dès la phase RC, Wave se compile lui-même via Whale                       |
