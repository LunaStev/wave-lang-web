---
sidebar_position: 7
---

# బ్యాకెండ్ ఎంపికలు (`--llvm`, `--whale`)

ఈ పత్రం `wavec` కోసం బ్యాకెండ్-నిర్దిష్ట CLI ఎంపికలను వివరిస్తుంది.

ముఖ్యమైన సూత్రాలు:

- `wavec` ప్యాకేజీ మేనేజర్ కాదు.
- బ్యాకెండ్ ప్రవర్తన సాధ్యమైనప్పుడల్లా ** స్పష్టమైన వాదనలు** ద్వారా నియంత్రించబడుతుంది.
- బ్యాకెండ్ వివరణాత్మక ఎంపికలు `--llvm` వెనుక మాత్రమే వివరించబడతాయి.

---

## 1. బ్యాకెండ్ సెలెక్టర్

## 1.1 `--llvm`

`--llvm` అనేది బ్యాకెండ్ ఎంపికల బ్లాక్ కోసం ప్రారంభ మార్కర్.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

పైన చూపిన విధంగా, `--llvm` క్రింది ఆర్గ్యుమెంట్‌లలో మద్దతు ఉన్న అంశాలు మాత్రమే LLVM బ్యాకెండ్ సెట్టింగ్‌లుగా ప్రాసెస్ చేయబడతాయి.

## 1.2 `--whale` (ప్రస్తుతం TODO)

ప్రస్తుతం `--whale` ఒక **రిజర్వ్ చేయబడిన డమ్మీ ఫ్లాగ్**.

- పార్సర్ దానిని గుర్తిస్తుంది.
- అసలు Whale బ్యాకెండ్ పైప్‌లైన్ ఇంకా కనెక్ట్ కాలేదు.
- ఉపయోగించినప్పుడు, ఇది TODO లోపంతో ముగుస్తుంది.

---

## 2. `--llvm` వెనుక మద్దతు ఉన్న ఎంపికలు

## 2.1 లక్ష్యం/కోడెజెన్

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

రిఫ్లెక్షన్ పాయింట్:

- IR (టార్గెట్ మెషిన్) దశలను సృష్టించండి: `target`, `cpu`, `features`
- ఆబ్జెక్ట్/లింక్ స్థాయి (క్లాంగ్ కాల్): `target`, `abi`

ప్రస్తుతం డిఫాల్ట్‌గా డాక్యుమెంట్ చేయబడే ప్రధాన లక్ష్యం ట్రిపుల్:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 టూల్‌చెయిన్/లింక్

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (పునరావృతం)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

రిఫ్లెక్షన్ పాయింట్:

- `-c` నుండి ఆబ్జెక్ట్ సృష్టికి (క్లాంగ్ `--sysroot`)
- లింకర్ ఓవర్‌రైడ్, రా లింక్ ఆర్గ్ ఇంజెక్షన్, లింక్ దశలో లింక్-సిస్‌రూట్ ఇంజెక్షన్
- `-C no-default-libs`ని ఉపయోగిస్తున్నప్పుడు స్వయంచాలకంగా `-lc -lm`ని నిలిపివేయండి

---

## 3. పార్సింగ్ నియమాలు (ముఖ్యమైనది)

`--llvm` ఉపయోగించబడకపోతే, బ్యాకెండ్ వివరణాత్మక ఎంపికలు గ్లోబల్ ఎంపికలుగా వివరించబడవు.

ఉదాహరణకు, దిగువ లోపం ఉంది:

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

ఇది క్రింది విధంగా వ్రాయాలి.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. ఉపయోగం యొక్క ఉదాహరణ

ప్రాథమిక వస్తువును సృష్టించండి:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

ఫ్రీస్టాండింగ్ కెర్నల్ ఆబ్జెక్ట్‌ను సృష్టించండి:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

అనుకూల లింక్:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

libc/libm ఆటో-లింకింగ్‌ని నిలిపివేయండి:

```bash
wavec --llvm -C no-default-libs build app.wave
```

యొక్క ఉపయోగం

---

## 5. స్థితి సారాంశం

- LLVM బ్యాకెండ్: పని చేస్తోంది
- Whale బ్యాకెండ్: రిజర్వ్ చేయబడింది (TODO), అమలు చేయబడలేదు
