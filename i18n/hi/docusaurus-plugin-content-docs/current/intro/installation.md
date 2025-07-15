---
sidebar_position: 1
---

# स्थापना

## स्थापना विधि

टर्मिनल में निम्नलिखित कमांड चलाएं:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <संस्करण>
```

### उदाहरण

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## स्थापना के दौरान किये जाने वाले कार्य

- LLVM 14 और संबंधित पैकेज की स्थापना (`apt-get`)

- `/usr/lib/libllvm-14.so` प्रतीक लिंक बनाएँ

- `LLVM_SYS_140_PREFIX` परिवेश चर सेट करें (`~/.bashrc`)

- निर्दिष्ट संस्करण की Wave `.tar.gz` डाउनलोड करें

- अनज़िप करने के बाद `wavec` को `/usr/local/bin` में स्थापित करें

- `wavec --version` के साथ स्थापना की पुष्टि करें

## स्थापना की पुष्टि

```bash
wavec --version
```

## Wave हटाने की गाइड (`uninstall.sh`)

### हटाने की विधि

टर्मिनल में निम्नलिखित कमांड चलाएं:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
