---
sidebar_position: 1
---

# kusakinisha

## mbinu za usakinishaji

kimbia amri ifuatayo kwenye terminali:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### mfano

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## shughuli zinazotekelezwa wakati wa usakinishaji

- kusakinisha LLVM 14 na vifurushi vinavyohusiana (`apt-get`)

- kuunda kiungo cha alama `/usr/lib/libllvm-14.so`

- kusanidi kipengele cha mazingira `LLVM_SYS_140_PREFIX` (`~/.bashrc`)

- pakua toleo maalum la Wave `.tar.gz`

- sakinisha `wavec` katika `/usr/local/bin` baada ya kufungua na kubonyeza

- thibitisha usakinishaji na `wavec --version`

## thibitisha usakinishaji

```bash
wavec --version
```

## muongozo wa kuondoa Wave (`uninstall.sh`)

### mbinu za kuondoa

kimbia amri ifuatayo kwenye terminali:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
