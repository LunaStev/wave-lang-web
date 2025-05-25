---
sidebar_position: 3
---

# Exécuter votre premier programme

Si vous avez déjà installé Wave en suivant le guide d'installation précédent, il est temps d'exécuter votre premier programme !

## Créer le fichier `hello.wave`
Commencez par créer un nouveau fichier nommé `hello.wave`.

## Écrire le code
Écrivez le code suivant dans le fichier `hello.wave` :

```wave
fun main() {
    println("Hello Wave");
}
```

Ici, `fun main()` représente le point d'entrée du programme, et la fonction `println` sert à afficher du texte à l'écran.

## Exécuter le programme
Maintenant, exécutons le programme Wave. Ouvrez votre terminal et entrez la commande suivante :

```bash
wavec run hello.wave
```

## Vérifier la sortie
Lorsque vous exécutez le programme, vous devriez voir la sortie suivante :

```
Hello Wave
```

Vous avez maintenant confirmé que Wave est installé et fonctionne correctement. Félicitations ! Vous avez exécuté votre premier programme avec succès.
