---
sidebar_position: 3
---

# Exécution du premier programme

Si vous avez déjà installé Wave à partir des documents d'installation précédents, il est temps maintenant de procéder à l'exécution de votre premier programme Wave.
Dans cette section, nous examinons étape par étape le processus complet d'écriture et d'exécution d'un programme Wave à travers un exemple simple.

## Créer le fichier `hello.wave`.

Tout d'abord, créez un nouveau fichier nommé `hello.wave` dans le répertoire de travail.
Le nom et l'extension du fichier peuvent être choisis librement, mais nous utilisons `hello.wave` à titre d'exemple ici.

## Écrire le code

Rédigez le code suivant dans le fichier `hello.wave` créé.

```wave
fun main() {
    println("Hello Wave");
}
```

Dans ce code, `fun main()` représente le point de départ de l'exécution d'un programme Wave.
Un programme Wave commence toujours son exécution par la fonction `main`.

La fonction `println` est utilisée pour afficher une chaîne de caractères sur la sortie standard et est principalement utilisée pour montrer du texte à l'écran.

## Exécuter le programme

Après avoir terminé d'écrire le code, ouvrez un terminal et exécutez la commande suivante dans le répertoire où se trouve le fichier.

```bash
wavec run hello.wave
```

Cette commande indique au compilateur Wave de compiler le fichier source et de procéder à son exécution immédiate.

## Vérifier la sortie

Si le programme s'exécute correctement, la sortie suivante apparaîtra dans le terminal.

```
Hello Wave
```

Si vous voyez cette sortie, cela signifie que Wave est correctement installé et que l'écriture et l'exécution du programme se sont déroulées correctement.

Vous avez maintenant exécuté avec succès votre premier programme Wave.
Désormais, vous pouvez explorer la syntaxe et les fonctionnalités de Wave, et essayer d'écrire des programmes plus complexes.

Les options de commande précises (`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`) peuvent être consultées dans la documentation CLI de `wavec`.
