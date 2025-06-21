---
sidebar_position: 3
---

# Notation d’Objet Sérialisé Wave (WSON)
WSON (Wave Serialized Object Notation) est le format de sérialisation de données par défaut du langage de programmation Wave. Il a été conçu pour dépasser les limites de JSON et offrir des fonctionnalités plus puissantes ainsi qu’une meilleure efficacité. Tout en conservant une structure lisible et modifiable par les humains, WSON optimise les performances afin de permettre un échange de données plus rapide et plus sûr dans divers environnements.

## Caractéristiques
### 1. Système de types strict
WSON maintient des types de données clairement définis, éliminant l’imprévisibilité causée par la typage dynamique de JSON. Cela garantit la sécurité des types lors de la sérialisation et de la désérialisation.

### 2. Haute performance
WSON est conçu avec un minimum de surcharge, ce qui permet un traitement de données rapide. Il est particulièrement efficace pour la sérialisation de grandes quantités de données.

### 3. Conception adaptée à Wave
WSON est parfaitement intégré au langage Wave et est pris en charge de manière native par la bibliothèque standard de Wave.

### 4. Lisibilité et parsing simplifié
Tout en conservant une syntaxe proche de celle de JSON, WSON permet des expressions plus concises, facilitant la lecture et l’édition manuelles. Il est également optimisé pour un parsing efficace.

### 5. Support de structures de données complexes
WSON prend en charge non seulement les paires clé-valeur simples, mais aussi les tableaux natifs, les structures, les tuples et d'autres formes de données complexes, permettant ainsi une représentation de données plus flexible.

## Cas d'utilisation
- Stockage et transmission de données dans les applications basées sur Wave

- Communication réseau et formats de données pour API

- Stockage de fichiers et fichiers de configuration

- Sérialisation et désérialisation de grandes quantités de données

## Conclusion
WSON incarne la philosophie du langage Wave en visant une sérialisation de données à la fois puissante et efficace. Il corrige les faiblesses de JSON tout en conservant une syntaxe intuitive, ce qui le rend facile à adopter pour les développeurs. WSON est destiné à devenir le format standard de données dans l’écosystème Wave, en fournissant des performances solides dans une variété d’environnements.
