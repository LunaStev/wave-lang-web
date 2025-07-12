---
sidebar_position: 1
---

# स्थापना

## स्थापना की विधि

टर्मिनल में निम्नलिखित कमांड चलाएँ:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
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

## स्थापना के दौरान किए जाने वाले कार्य
- LLVM 14 और संबंधित पैकेज इंस्टॉल करना (`apt-get` के माध्यम से)

- `/usr/lib/libllvm-14.so` का प्रतीकात्मक (symbolic) लिंक बनाना

- `LLVM_SYS_140_PREFIX` एनवायरनमेंट वेरिएबल सेट करना (`~/.bashrc` में)

- चुने गए संस्करण का Wave `.tar.gz` फ़ाइल डाउनलोड करना

- फ़ाइल को अनज़िप करके `wavec` को `/usr/local/bin` में इंस्टॉल करना

- `wavec --version` कमांड से इंस्टॉलेशन की पुष्टि करना

## इंस्टॉलेशन की पुष्टि

```bash
wavec --version
```

## Wave को हटाने के लिए गाइड (`uninstall.sh`)
### हटाने की विधि
टर्मिनल में निम्नलिखित कमांड चलाएँ:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
