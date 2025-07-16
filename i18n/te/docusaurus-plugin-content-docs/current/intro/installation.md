---
sidebar_position: 1
---

# ఇన్‌స్టాల్ చేయండి

## స్తాపన విధానం

టెర్మినల్ లో ఈ క్రింది ఆదేశాన్ని అమలుచేయండి:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --వెర్షన్ <వెర్షన్>
```

### ఉదాహరణ

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- తాజాది
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --వెర్షన్ v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --వెర్షన్ v0.1.3-pre-beta-nightly-2025-07-11
```

## ఇన్‌స్టాలేషన్ సమయంలో జరిగిన పనులు

- LLVM 14 మరియు సంబంధిత ప్యాకేజీలను ఇన్‌స్టాల్ చేయడం (`apt-get`)

- `/usr/lib/libllvm-14.so` సంకేత పలక ఏర్పాటుచేయండి

- `LLVM_SYS_140_PREFIX` పర్యావరణ విజ్ఞాపన స్థాపన (`~/.bashrc`)

- నిర్దిష్ట వెర్షన్ యొక్క Wave `.tar.gz` ను డౌన్‌లోడ్ చేయండి

- కుదించిన ఫైల్ నుండి విప్పిన తర్వాత `wavec` ను `/usr/local/bin` లో ఇన్‌స్టాల్ చేయండి

- `wavec --version` ద్వారా ఇన్‌స్టలేషన్ ని ధృవీకరించండి

## ఇన్‌స్టలేషన్ ని ధృవీకరించండి

```bash
wavec --వెర్షన్
```

## వేవ్ తొలగింపు మార్గదర్శిని (`uninstall.sh`)

### తొలగింపు విధానం

టెర్మినల్ లో ఈ క్రింది ఆదేశాన్ని అమలుచేయండి:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
