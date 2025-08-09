---
sidebar_position: 2
---

# Gestionnaire de paquets Vex

## Aperçu

Vex est un gestionnaire de paquets et un système de construction dédiés au langage de programmation Wave.
Vex prend en charge la gestion des dépendances de code source, la configuration de la construction, la spécification de la plateforme cible, l'installation et le déploiement des modules et la gestion globale du projet.
La compatibilité avec d'autres langues ou systèmes n'est pas prise en compte, il est conçu pour fonctionner uniquement au sein de l'écosystème Wave.

## Objectifs de conception

Vex est conçu sur la base des objectifs suivants :

Conception dédiée à Wave : Ciblant uniquement les projets Wave, il est optimisé pour la syntaxe, la structure de module et l'environnement d'exécution de Wave.

- Système de commande intuitif : Permet de réaliser les tâches principales avec une seule commande, sans script de construction complexe.
- Support multi-cible : Permet de changer facilement la cible de construction en fonction du système d'exploitation et de l'architecture.
- Gestion des configurations basée sur WSON : Toutes les informations de configuration du projet sont définies au format WSON (Wave Serialization Object Notation).
- Construction et déploiement statiques : Les fichiers exécutables sont construits statiquement et peuvent être déployés de manière indépendante, sans dépendance externe à un runtime.