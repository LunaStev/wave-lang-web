---
sidebar_position: 1
---

# Installation

## Installation Method

Run the following command in the terminal:

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

## Tasks performed during installation

- Install LLVM 14 and related packages (`apt-get`)

- Create symbolic link `/usr/lib/libllvm-14.so`

- Set `LLVM_SYS_140_PREFIX` environment variable (`~/.bashrc`)

- Download the specified version of Wave `.tar.gz`

- Extract and install `wavec` to `/usr/local/bin`

- Verify installation with `wavec --version`

## Installation Verification

```bash
wavec --version
```

## Wave Uninstallation Guide (`uninstall.sh`)

### Uninstallation Method

Run the following command in the terminal:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
