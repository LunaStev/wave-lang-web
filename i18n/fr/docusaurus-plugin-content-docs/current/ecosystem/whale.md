---
sidebar_position: 3
---

# Chaîne d'outils du compilateur Whale

## Aperçu

Whale est une chaîne d'outils de compilation dédiée au langage de programmation Wave.
Whale est responsable de l'analyse, l'optimisation et la conversion du code source écrit en Wave en binaire pour la plateforme cible.
Cette chaîne d'outils est conçue exclusivement pour le langage Wave et ne prend pas en compte le support d'autres langages ou l'intégration d'outils externes.

## Objectifs de conception

Les principaux objectifs de conception de Whale sont les suivants :

- Support dédié à Wave : Whale ne prend en charge que le langage Wave et ne considère pas l'intégration avec d'autres langages.
- Structure modulaire : chaque fonctionnalité est composée de modules indépendants, qui peuvent être ajoutés ou supprimés selon les besoins.
- Usage d'un IR indépendant : Whale définit sa propre représentation intermédiaire sans utiliser de IR externes existants tels que LLVM IR.
- Support de plusieurs plateformes cibles : il est possible de construire pour divers environnements, indépendamment du système d'exploitation et de l'architecture matérielle.
- Contrôle précis : la configuration permet aux développeurs de contrôler en détail l'ensemble du processus de compilation.
- Suppression des dépendances externes : Whale n'est pas dépendant des runtimes ou compilateurs C/C++ externes.

## Support des cibles

Whale vise à prendre en charge les environnements cibles suivants :

- Systèmes d'exploitation :
    - Linux
    - Windows
    - macOS
    - UEFI (sauf BIOS)
    - WaveOS (propre OS)
- Architectures :
    - x86_64 (AMD64)
    - ARM64
    - Les autres peuvent être étendues par l'ajout de modules

## Interopérabilité externe (FFI)

Whale est techniquement conçu pour supporter le FFI (Foreign Function Interface), mais selon la philosophie de Wave, l'interconnexion avec d'autres langages n'est pas encouragée et n'est pas fournie en standard.
Wave est conçu pour implémenter toutes ses fonctionnalités au sein de son propre langage.

## Extensibilité

Whale peut être étendu de la manière suivante :

- Ajout de modules pour un nouveau système d'exploitation ou une nouvelle architecture
- Insertion d'algorithmes d'optimisation personnalisés
- Personnalisation des profils de construction et des paramètres du linker
- Définition de son propre format exécutable