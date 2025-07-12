---
sidebar_position: 1
---

# Installation

## Méthode d'installation
Exécutez la commande suivante dans le terminal :

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### Exemple

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Étapes effectuées lors de l'installation
- Installation de LLVM 14 et des paquets associés (`apt-get`)

- Création d’un lien symbolique vers `/usr/lib/libllvm-14.so`

- Définition de la variable d’environnement `LLVM_SYS_140_PREFIX` (dans `~/.bashrc`)

- Téléchargement de la version spécifiée de Wave au format `.tar.gz`

- Extraction et installation de `wavec` dans `/usr/local/bin`

- Vérification de l’installation avec `wavec --version`

## Vérification de l'installation

```bash
wavec --version
```

## Guide de désinstallation de Wave (`uninstall.sh`)
### Méthode de désinstallation
Exécutez la commande suivante dans le terminal :

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
