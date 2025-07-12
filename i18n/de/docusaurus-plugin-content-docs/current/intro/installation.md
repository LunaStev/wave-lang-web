---
sidebar_position: 1
---

# Installation

## Installationsmethode

Führe im Terminal den folgenden Befehl aus:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### Beispiel

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Schritte während der Installation
- Installation von LLVM 14 und zugehörigen Paketen (`apt-get`)

- Erstellen eines symbolischen Links zu `/usr/lib/libllvm-14.so`

- Setzen der Umgebungsvariable `LLVM_SYS_140_PREFIX` (in `~/.bashrc`)

- Herunterladen der angegebenen Wave-Version als `.tar.gz`

- Entpacken und Installation von `wavec` in `/usr/local/bin`

- Überprüfung der Installation mit `wavec --version`

## Installation überprüfen

```bash
wavec --version
```

## Anleitung zur Deinstallation von Wave (`uninstall.sh`)
### Deinstallationsmethode
Führe im Terminal den folgenden Befehl aus:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
