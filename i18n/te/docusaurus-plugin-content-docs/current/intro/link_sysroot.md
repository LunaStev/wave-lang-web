---
sidebar_position: 8
---

# లింక్ sysroot మాన్యువల్ నియంత్రణ (`-C link-sysroot`)

`wavec`లో లింక్ ఫేజ్ sysrootని **స్పష్టంగా ఎలా నియంత్రించాలో** ఈ పత్రం వివరిస్తుంది.

ప్రధాన సూత్రాలు:

- `--sysroot=<path>`: కంపైల్ ఫేజ్ (క్లాంగ్ `-c`) sysroot
- `-C link-sysroot=<path>`: లింకర్ sysroot

మరో మాటలో చెప్పాలంటే, కంపైలేషన్ మరియు లింకింగ్ కోసం sysroot విడిగా నిర్వహించబడుతుంది.

---

## 1. ఇది ఎందుకు అవసరం?

క్రాస్ లింక్‌లో `-C linker=<path>`ని ఉపయోగిస్తున్నప్పుడు, మీరు తరచుగా లింక్ డ్రైవర్ (ఉదా. `aarch64-linux-gnu-gcc`) ద్వారా సూచించబడిన రన్‌టైమ్ పాత్ (`crt1.o`, `libc`, `libm`)ని ప్రత్యేకంగా పేర్కొనాలి.

ఈ సమయంలో, లింక్ sysroot స్వయంచాలకంగా తీసివేయబడదు, కానీ CLIలో స్పష్టంగా పాస్ అయ్యేలా రూపొందించబడింది.

---

## 2. ఎంపిక నిర్వచనం

## 2.1 `-C link-sysroot=<path>`

`--sysroot=<path>`ని లింక్ దశలోకి ఇంజెక్ట్ చేయండి.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

అంతర్గతంగా ఇది `-C link-arg=--sysroot=<path>` వలె అదే అర్థాన్ని కలిగి ఉంటుంది.

## 2.2 `-C link-arg=--sysroot=<path>`

ఇప్పటికే ఉన్న ముడి లింక్ ఆర్గ్యుమెంట్ పద్ధతికి ఇప్పటికీ మద్దతు ఉంది.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. ధృవీకరణ నియమాలు

కింది షరతులు ఏకకాలంలో నెరవేరినట్లయితే, లింక్ దశ అవసరమయ్యే బిల్డ్ వినియోగ లోపంతో ముగుస్తుంది:

1. `-C linker=...` ఉపయోగించండి
2. `--sysroot=<path>`ని ఉపయోగించండి
3. లింక్ sysroot (`-C link-sysroot` లేదా `-C link-arg=--sysroot=...`) పేర్కొనబడలేదు

ఉదాహరణ దోష సందేశం:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. ఉపయోగం యొక్క ఉదాహరణ

## 4.1 AArch64 Linux క్రాస్ లింక్

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 ముడి లింక్ ఆర్గ్యుమెంట్ పద్ధతి

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 లింక్ లేకుండా నిర్మించండి (`--emit=obj`)

లింక్ దశ లేకుండా, sysroot లింక్ చేయవలసిన అవసరం లేదు.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. శుభ్రం చేయండి

- `--sysroot` కంపైలేషన్ దశను నియంత్రిస్తుంది
- `-C link-sysroot` లింక్ దశను నియంత్రిస్తుంది
- ఆటోమేటిక్ అనుమితిపై స్పష్టమైన నియంత్రణకు ప్రాధాన్యత ఇవ్వండి
