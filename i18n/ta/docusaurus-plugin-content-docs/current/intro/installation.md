---
sidebar_position: 1
---

# நிறுவல்

## நிறுவும் முறை

டெர்மினலின் துகின்றில் பின்வரும் கட்டளைகளை இயக்கு:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### உதாரணம்

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## நிறுவலை செயல்படும் போது செய்யப்படும் பணிகள்

- LLVM 14 மற்றும் தொடர்புடைய தொகுப்புகள் நிறுவல் (`apt-get`)

- `/usr/lib/libllvm-14.so` சின்ன முறை அழுத்தம் உருவாக்கல்

- `LLVM_SYS_140_PREFIX` சுற்றுச்சூழல் மாறிவரி அமைப்பு (`~/.bashrc`)

- குறிப்பிட்ட பதிப்பின் 웨이브 `.tar.gz` பதிவிறக்கம்

- குறுக்கப்படல் நீக்கப்பட்ட பிறகு `wavec` இனை `/usr/local/bin` இல் நிறுவுக

- `wavec --version` மூலம் நிறுவலை உறுதி செய்யுங்கள்

## நிறுவலை உறுதி செய்க

```bash
wavec --version
```

## 웨이브 அகற்றல் வழிகாட்டி (`uninstall.sh`)

### அகற்றும் முறை

டெர்மினல் இல் பின்வரும் கட்டளையை இயக்கு:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
