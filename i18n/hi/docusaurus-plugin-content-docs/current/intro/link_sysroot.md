---
sidebar_position: 8
---

# लिंक sysroot मैन्युअल नियंत्रण (`-C link-sysroot`)

यह दस्तावेज़ `wavec` में लिंक चरण sysroot को **स्पष्ट रूप से नियंत्रित** करने के तरीके का वर्णन करता है।

मुख्य सिद्धांत:

- `--sysroot=<path>`: संकलन चरण (clang `-c`) sysroot
- `-C link-sysroot=<path>`: लिंक चरण (linker) sysroot

अर्थात्, संकलन और लिंक के sysroot को अलग से संभालें।

---

## 1. यह क्यों आवश्यक है

क्रॉस लिंक में `-C linker=<path>` का उपयोग करने पर, अक्सर लिंक ड्राइवर (जैसे: `aarch64-linux-gnu-gcc`) द्वारा संदर्भित रनटाइम पथ (`crt1.o`, `libc`, `libm`) को अलग से निर्दिष्ट करना होता है।

इस समय लिंक sysroot को स्वचालित रूप से अनुमानित नहीं करके, CLI में स्पष्ट रूप से पारित करने के लिए डिज़ाइन किया गया है।

---

## 2. विकल्प परिभाषा

## 2.1 `-C link-sysroot=<path>`

लिंक चरण में `--sysroot=<path>` को प्रवेश कराएं।

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

आंतरिक रूप में, इसका मतलब `-C link-arg=--sysroot=<path>` होता है।

## 2.2 `-C link-arg=--sysroot=<path>`

मौजूदा रॉ लिंक तर्क विधि को भी जारी रखते हैं।

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. सत्यापन नियम

यदि आवश्यक लिंक चरण वाली निर्माण में निम्नलिखित शर्तों का एक साथ पालन होता है, तो उपयोग त्रुटि के कारण समाप्त कर दें।

1. `-C linker=...` का उपयोग
2. `--sysroot=<path>` का उपयोग
3. लिंक sysroot (`-C link-sysroot` या `-C link-arg=--sysroot=...`) निर्दिष्ट नहीं

त्रुटि संदेश उदाहरण:

```text
जब -C linker=... का उपयोग करते हैं, --sysroot=<path> केवल संकलन-चरण के लिए होता है; लिंक sysroot को स्पष्ट रूप से -C link-sysroot=<path> (या -C link-arg=--sysroot=<path>) से पास करें
```

---

## 4. उपयोग का उदाहरण

## 4.1 AArch64 Linux क्रॉस लिंक

```bash
वेवेक \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  टेस्ट/test93.wave का निर्माण \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 रॉ लिंक तर्क विधि

```bash
वेवेक \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  टेस्ट/test93.wave का निर्माण \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 बिना लिंक के निर्माण (`--emit=obj`)

यदि लिंक चरण नहीं है, तो लिंक sysroot की आवश्यकता नहीं होती।

```bash
वेवेक --sysroot=/path/to/sysroot मुख्य.wav का निर्माण --emit=obj
```

---

## 5. सारांश

- `--sysroot` संकलन चरण नियंत्रण है
- `-C link-sysroot` लिंक चरण नियंत्रण है
- स्वचालित विवरण की तुलना में स्पष्ट नियंत्रण को प्राथमिकता दें
