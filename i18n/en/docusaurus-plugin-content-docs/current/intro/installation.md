---
sidebar_position: 1
---

# Installation

## How to Install

Run the following command in your terminal:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### Example

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## What Happens During Installation
- Installs LLVM 14 and related packages (`apt-get`)

- Creates a symbolic link at `/usr/lib/libllvm-14.so`

- Sets the `LLVM_SYS_140_PREFIX` environment variable (`~/.bashrc`)

- Downloads the specified version of Wave as a `.tar.gz` file

- Extracts and installs `wavec` into `/usr/local/bin`

- Verifies installation using `wavec --version`

## Verify Installation

```bash
wavec --version
```

## Wave Uninstallation Guide (`uninstall.sh`)
### How to Uninstall
Run the following command in your terminal:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
