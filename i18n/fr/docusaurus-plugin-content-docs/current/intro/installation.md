---
sidebar_position: 1
---

# Installation

## Méthode d'installation

Wave peut être facilement installé via le script d'installation fourni.
En exécutant la commande suivante dans le terminal, la version spécifiée du compilateur Wave (`wavec`) sera installée automatiquement.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

Le script d'installation vérifie l'environnement système, puis configure automatiquement les dépendances et le compilateur nécessaires à l'exécution de Wave.
Si aucune version n'est spécifiée, la version stable la plus récente ou la version par défaut selon le critère spécifié sera installée.

## Exemple d'installation

Pour installer la dernière version, procédez comme suit.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

Pour installer une version spécifique, utilisez l'option `--version`.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

Il est également possible de spécifier une version plus détaillée, comme une build nightly.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Opérations effectuées pendant l'installation

Le script d'installation gère automatiquement plusieurs étapes pour permettre l'exécution correcte de Wave.
Tout d'abord, les paquets requis pour LLVM 14 sont installés via `apt-get`.
Ensuite, un lien symbolique vers `/usr/lib/libllvm-14.so` est créé pour permettre au système de référencer LLVM de manière stable.

La variable d'environnement `LLVM_SYS_140_PREFIX` est définie pour que le compilateur Wave puisse trouver LLVM correctement, et cette configuration est ajoutée à `~/.bashrc` pour être maintenue dans les sessions terminal ultérieures.

Ensuite, le paquet Wave de la version spécifiée par l'utilisateur (`.tar.gz`) est téléchargé et décompressé.
Après décompression, le fichier exécutable `wavec` est installé dans `/usr/local/bin`, permettant l'utilisation de la commande `wavec` depuis n'importe où dans le système.

Une fois l'installation terminée, utilisez la commande `wavec --version` pour vérifier si l'installation a été effectuée correctement.

## Vérification de l'installation

Après l'installation, exécutez la commande ci-dessous pour vérifier que le compilateur Wave a été correctement installé.

```bash
wavec --version
```

Si les informations de la version installée de Wave s'affichent lors de l'exécution de la commande, c'est que l'installation est correcte.

---

## Guide de désinstallation de Wave (`uninstall.sh`)

Pour supprimer Wave du système, vous pouvez utiliser le script de désinstallation fourni.
Ce script supprime les fichiers et configurations ajoutés lors de l'installation.

### Méthode de désinstallation

Exécutez la commande suivante dans le terminal.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

Une fois la suppression terminée, la commande wavec ne sera plus utilisable, et les fichiers exécutables et configurations liés à Wave seront supprimés du système.