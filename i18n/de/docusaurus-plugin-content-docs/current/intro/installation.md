---
sidebar_position: 1
---

# Installation

## Installationsmethode

Führen Sie den folgenden Befehl im Terminal aus:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### Beispiel

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Aufgaben während der Installation

- Installation von LLVM 14 und zugehörigen Paketen (`apt-get`)

- Erstellen eines symbolischen Links `/usr/lib/libllvm-14.so`

- Setzen der Umgebungsvariablen `LLVM_SYS_140_PREFIX` (`~/.bashrc`)

- Download einer bestimmten Version von Wave `.tar.gz`

- Nach dem Entpacken Installation von `wavec` in `/usr/local/bin`

- Installation mit `wavec --version` überprüfen

## Installation überprüfen

```bash
wavec --version
```

## Wave-Deinstallationsanleitung (`uninstall.sh`)

### Entfernungsmethode

Führen Sie im Terminal den folgenden Befehl aus:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
