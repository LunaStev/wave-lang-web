---
sidebar_position: 7
---

# பின்தள விருப்பங்கள் (`--llvm`, `--whale`)

இந்த ஆவணம் `wavec`க்கான பின்தள-குறிப்பிட்ட CLI விருப்பங்களை விவரிக்கிறது.

முக்கியமான கொள்கைகள்:

- `wavec` ஒரு தொகுப்பு மேலாளர் அல்ல.
- முடிந்தவரை **வெளிப்படையான வாதங்கள்** மூலம் பின்நிலை நடத்தை கட்டுப்படுத்தப்படுகிறது.
- பின்தளத்தில் விரிவான விருப்பங்கள் `--llvm` க்கு பின்னால் மட்டுமே விளக்கப்படுகின்றன.

---

## 1. பின்புலத் தேர்வி

## 1.1 `--llvm`

`--llvm` என்பது பின்தள விருப்பத் தொகுதிக்கான தொடக்கக் குறிப்பானாகும்.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

மேலே காட்டப்பட்டுள்ளபடி, `--llvm` ஐப் பின்பற்றும் வாதங்களில் ஆதரிக்கப்படும் உருப்படிகள் மட்டுமே LLVM பின்தள அமைப்புகளாக செயலாக்கப்படும்.

## 1.2 `--whale` (தற்போது TODO)

தற்போது `--whale` என்பது ** ஒதுக்கப்பட்ட போலிக் கொடி**.

- பாகுபடுத்துபவர் அதை அங்கீகரிக்கிறார்.
- உண்மையான Whale பின்தள பைப்லைன் இன்னும் இணைக்கப்படவில்லை.
- பயன்படுத்தும் போது, அது TODO பிழையுடன் முடிகிறது.

---

## 2. `--llvm` க்கு பின்னால் ஆதரிக்கப்படும் விருப்பங்கள்

## 2.1 இலக்கு/கோடெஜென்

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

பிரதிபலிப்பு புள்ளி:

- IR (TargetMachine) படிகளை உருவாக்கவும்: `target`, `cpu`, `features`
- பொருள்/இணைப்பு நிலை (கிளாங் கால்): `target`, `abi`

தற்போது முக்கிய இலக்கு டிரிபிள் இயல்பாக ஆவணப்படுத்தப்பட வேண்டும்:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 கருவித்தொகுப்பு/இணைப்பு

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (மீண்டும் மீண்டும் செய்யக்கூடியது)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

பிரதிபலிப்பு புள்ளி:

- `-c` முதல் பொருள் உருவாக்கம் (கணக்கு `--sysroot`)
- லிங்கர் ஓவர்ரைடு, ரா லிங்க் ஆர்க் இன்ஜெக்ஷன், லிங்க் ஸ்டேஜில் லிங்க்-சிஸ்ரூட் இன்ஜெக்ஷன்
- `-C no-default-libs` ஐப் பயன்படுத்தும் போது `-lc -lm` ஐ தானாக முடக்கவும்

---

## 3. பாகுபடுத்தும் விதிகள் (முக்கியம்)

`--llvm` பயன்படுத்தப்படாவிட்டால், பின்தளத்தில் விரிவான விருப்பங்கள் உலகளாவிய விருப்பங்களாக விளக்கப்படாது.

எடுத்துக்காட்டாக, பிழை கீழே உள்ளது:

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

கீழே உள்ளவாறு எழுத வேண்டும்.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. பயன்பாட்டின் உதாரணம்

ஒரு அடிப்படை பொருளை உருவாக்கவும்:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

ஒரு ஃப்ரீஸ்டாண்டிங் கர்னல் பொருளை உருவாக்கவும்:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

தனிப்பயன் இணைப்பு:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

libc/libm தானியங்கு இணைப்பை முடக்கு:

```bash
wavec --llvm -C no-default-libs build app.wave
```

பயன்பாடு

---

## 5. நிலை சுருக்கம்

- LLVM பின்தளம்: வேலை செய்கிறது
- Whale பின்தளம்: ஒதுக்கப்பட்டது (TODO), செயல்படுத்தப்படவில்லை
