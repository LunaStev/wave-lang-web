---
sidebar_position: 8
---

# இணைப்பு sysroot கைமுறை கட்டுப்பாடு (`-C link-sysroot`)

`wavec` இல் இணைப்பு கட்ட sysroot ஐ **வெளிப்படையாக கட்டுப்படுத்துவது** எப்படி என்பதை இந்த ஆவணம் விவரிக்கிறது.

அடிப்படைக் கொள்கைகள்:

- `--sysroot=<path>`: தொகுத்தல் கட்டம் (கிளாங் `-c`) sysroot
- `-C link-sysroot=<path>`: இணைப்பான் sysroot

வேறு வார்த்தைகளில் கூறுவதானால், தொகுத்தல் மற்றும் இணைப்பிற்கான sysroot தனித்தனியாக கையாளப்படுகிறது.

---

## 1. அது ஏன் தேவைப்படுகிறது?

குறுக்கு இணைப்பில் `-C linker=<path>` ஐப் பயன்படுத்தும் போது, இணைப்பு இயக்கி (எ.கா. `aarch64-linux-gnu-gcc`) குறிப்பிடும் இயக்க நேரப் பாதையை (`crt1.o`, `libc`, `libm`) நீங்கள் அடிக்கடி தனித்தனியாகக் குறிப்பிட வேண்டும்.

இந்த நேரத்தில், இணைப்பு sysroot தானாகவே கழிக்கப்படவில்லை, ஆனால் CLI இல் வெளிப்படையாக அனுப்ப வடிவமைக்கப்பட்டுள்ளது.

---

## 2. விருப்ப வரையறை

## 2.1 `-C link-sysroot=<path>`

இணைப்பு கட்டத்தில் `--sysroot=<path>` ஐ செலுத்தவும்.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

உள்நாட்டில் இது `-C link-arg=--sysroot=<path>` போன்ற அதே பொருளைக் கொண்டுள்ளது.

## 2.2 `-C link-arg=--sysroot=<path>`

ஏற்கனவே உள்ள மூல இணைப்பு வாத முறையும் இன்னும் ஆதரிக்கப்படுகிறது.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. சரிபார்ப்பு விதிகள்

பின்வரும் நிபந்தனைகள் ஒரே நேரத்தில் பூர்த்தி செய்யப்பட்டால், இணைப்புப் படி தேவைப்படும் உருவாக்கமானது பயன்பாட்டுப் பிழையுடன் முடிவடையும்:

1. `-C linker=...` ஐப் பயன்படுத்தவும்
2. `--sysroot=<path>` ஐப் பயன்படுத்தவும்
3. இணைப்பு sysroot (`-C link-sysroot` அல்லது `-C link-arg=--sysroot=...`) குறிப்பிடப்படவில்லை

எடுத்துக்காட்டு பிழை செய்தி:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. பயன்பாட்டின் உதாரணம்

## 4.1 AArch64 Linux குறுக்கு இணைப்பு

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

## 4.2 மூல இணைப்பு வாத முறை

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 இணைப்பு இல்லாமல் உருவாக்கவும் (`--emit=obj`)

இணைப்பு படி இல்லாமல், sysroot ஐ இணைக்க தேவையில்லை.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. சுத்தம் செய்யவும்

- `--sysroot` தொகுப்பு கட்டத்தை கட்டுப்படுத்துகிறது
- `-C link-sysroot` இணைப்பு கட்டத்தை கட்டுப்படுத்துகிறது
- தானியங்கி அனுமானத்தின் மீது வெளிப்படையான கட்டுப்பாட்டிற்கு முன்னுரிமை கொடுங்கள்
