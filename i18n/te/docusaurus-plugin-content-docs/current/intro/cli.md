---
sidebar_position: 6
---

# `wavec` CLI సూచన

ఈ పత్రం **ప్రస్తుత Wave కంపైలర్ (`wavec`) అమలు బేస్** యొక్క CLI ప్రవర్తనను వివరిస్తుంది.

ప్రధాన సూత్రాలు:

- `wavec` కంపైలర్.
- ప్యాకేజీ ఇన్‌స్టాలేషన్/రిజల్యూషన్ (లాక్‌ఫైల్, రిజిస్ట్రీ, డౌన్‌లోడ్) `wavec` బాధ్యత కాదు.
- `wavec`ని అమలు చేస్తున్నప్పుడు బాహ్య డిపెండెన్సీలు ** స్పష్టమైన CLI ఆర్గ్యుమెంట్**గా ఆమోదించబడతాయి.

---

## 1. ప్రాథమిక ఆకృతి

```bash
wavec [global-options] <command> [command-options]
```

ఉదాహరణ:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. కమాండ్ పార్సింగ్ నియమాలు (ముఖ్యమైనది)

`wavec` ముందుగా **గ్లోబల్ ఆప్షన్** కోసం అన్ని ఆర్గ్యుమెంట్‌లను స్కాన్ చేస్తుంది మరియు `<command>`ని మిగిలిన ఆర్గ్యుమెంట్‌లుగా అన్వయిస్తుంది.

మరో మాటలో చెప్పాలంటే, గ్లోబల్ ఆప్షన్ యొక్క స్థానం అనువైనది.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

పైన పేర్కొన్న మూడు చెల్లుబాటు అయ్యేవి.

మీరు `--`ని ఉపయోగిస్తే, గ్లోబల్ ఆప్షన్ స్కాన్ ఆగి, కమాండ్ ఏరియాకి తరలించబడుతుంది.

```bash
wavec -- run main.wave
```

---

## 3. Commands

## 3.1 `run <file>`

Wave ఫైల్‌ను కంపైల్ చేసి రన్ చేయండి.

```bash
wavec run hello.wave
```

చర్య:

1. మూలం పార్సింగ్ + దిగుమతి విస్తరణ
2. LLVM IRని సృష్టించండి
3. స్థానిక బైనరీ లింక్ (`target/<file_stem>`)
4. పరుగు

ఫీచర్లు:

- `wavec` అమలు చేయబడిన ప్రోగ్రామ్ యొక్క నిష్క్రమణ కోడ్‌ను పాస్ చేస్తుంది.

---

## 3.2 `build <file>`

ఎక్జిక్యూటబుల్ ఫైల్ (exe)ని సృష్టిస్తుంది.

```bash
wavec build app.wave
```

అవుట్‌పుట్ బైనరీ:

- `target/<file_stem>`

## 3.3 `build` ఎంపిక (`-o`, `-c`)

`build` ఆదేశం ఐచ్ఛికంగా అవుట్‌పుట్ ఫైల్ పేరు మరియు అవుట్‌పుట్ ఆకృతిని నియంత్రించగలదు.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: అవుట్‌పుట్ ఫైల్ పేరును నిర్దేశిస్తుంది.
  - ప్రాథమిక (`-c` లేదు): ఎక్జిక్యూటబుల్ అవుట్‌పుట్ పాత్‌ను పేర్కొంటుంది.
  - `-c`తో: ఆబ్జెక్ట్ ఫైల్ అవుట్‌పుట్ పాత్‌ను పేర్కొనండి
- `-c`: లింక్ చేయడాన్ని దాటవేసి, ఆబ్జెక్ట్ ఫైల్‌లను మాత్రమే రూపొందించండి.
- `-c`ని ఉపయోగిస్తున్నప్పుడు, ఆబ్జెక్ట్ పాత్ stdoutకి అవుట్‌పుట్ అవుతుంది.

డిఫాల్ట్ ప్రవర్తన:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (పాత్ అవుట్‌పుట్)

ఉదాహరణ ఫ్రీస్టాండింగ్ కెర్నల్ ఆబ్జెక్ట్:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` కూడా అదే విధంగా ఉపయోగించవచ్చు.

---

## 3.4 `install std`, `update std`

ఇది ప్రామాణిక లైబ్రరీ ఇన్‌స్టాల్/అప్‌డేట్ కమాండ్.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. Global Options

## 4.1 ఆప్టిమైజేషన్

అనుమతించబడిన విలువలు:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

ఉదాహరణ:

```bash
wavec -O3 run main.wave
```

---

## 4.2 డీబగ్ అవుట్‌పుట్

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

అనుమతించబడిన అంశాలు:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 లింక్ ఎంపికలు

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` లేదా `--link <lib>`
- `-L<path>` లేదా `-L <path>`

లింక్ చేస్తున్నప్పుడు `wavec` అంతర్గతంగా `-l<lib>` మరియు `-L<path>` రూపంలో ప్రసారం చేయబడుతుంది.

---

## 4.4 బాహ్య డిపెండెన్సీ ఎంపికలు (ముఖ్యమైనది)

ఇది బాహ్య దిగుమతి (`pkg::...`) విశ్లేషణ కోసం ఒక ఎంపిక.

### `--dep-root <dir>`

ప్యాకేజీ రూట్ డైరెక్టరీ అభ్యర్థులను జోడించండి.

```bash
wavec run app.wave --dep-root .vex/dep
```

`math` ప్యాకేజీ కోసం చూస్తున్నప్పుడు:

- `.vex/dep/math`ని తనిఖీ చేయండి

అనేక సార్లు పేర్కొనవచ్చు:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

ప్యాకేజీ పేరును నిర్దిష్ట మార్గంలో పరిష్కరిస్తుంది.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

నియమాలు:

- `name` ఫార్మాట్: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` తప్పనిసరిగా `name=path` ఆకృతిలో ఉండాలి
- అదే ప్యాకేజీ పేరు పదేపదే పేర్కొనబడితే ఎర్రర్ ఏర్పడుతుంది.

---

## 4.5 బ్యాకెండ్ ఎంపికలు (`--llvm`, `--whale`)

బ్యాకెండ్ నియంత్రణ ఎంపికలు `--llvm` వెనుక మాత్రమే వివరించబడతాయి.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

మద్దతు ఉన్న అంశాలు (సారాంశం):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (పునరావృతం)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

`wavec print target-list` ఆధారంగా ప్రస్తుత ప్రధాన లక్ష్యాలు:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` ప్రస్తుతం రిజర్వ్ చేయబడిన డమ్మీ ఫ్లాగ్ మరియు అసలు బ్యాకెండ్ పైప్‌లైన్ TODO.

---

## 5. దిగుమతి వివరణ నియమాలు

Wave శాఖలను మూడు రకాలుగా దిగుమతి చేసుకోండి:

1. స్థానిక దిగుమతి
2. std import
3. బాహ్య ప్యాకేజీని దిగుమతి చేయండి

## 5.1 స్థానికం

```wave
import("foo");
import("path/to/mod.wave");
```

బేస్ ఫైల్ డైరెక్టరీలో `<path>.wave`ని కనుగొనండి.

## 5.2 std

```wave
import("std::io::format");
```

`~/.wave/lib/wave/std/...` మార్గాన్ని ఉపయోగించండి.

## 5.3 బాహ్య ప్యాకేజీ

```wave
import("math::add");
import("json::parser::core");
```

ఫార్మాట్:

- కనిష్ట `package::module` 2 విభాగాలు అవసరం

ప్యాకేజీ రూట్ నిర్ధారణ క్రమం:

1. `--dep name=path` స్పష్టమైన మ్యాపింగ్
2. ప్రతి `--dep-root`లో `<root>/<package>` కోసం శోధించండి

ఒకే ప్యాకేజీ బహుళ డిప్-రూట్‌లలో ఏకకాలంలో కనుగొనబడితే:

- స్వీయ-ఎంపిక లేకుండా **అస్పష్టత లోపం**
- తప్పనిసరిగా `--dep name=path`తో స్థిరపరచబడాలి

మాడ్యూల్ ఫైల్ నావిగేషన్ ఆర్డర్:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

ఉదాహరణ:

```wave
import("math::core::vec");
```

నావిగేషన్:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. బాహ్య దిగుమతికి ఉదాహరణ

### 6.1 సింగిల్ డిప్-రూట్

డైరెక్టరీ:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

కోడ్:

```wave
import("math::add");
```

అమలు:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 అస్పష్టత స్పష్టత

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

`math` రెండు వైపులా ఉంటే, లోపం ఏర్పడుతుంది. క్రింద చూపిన విధంగా దాన్ని పరిష్కరించండి.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Vex నుండి పాత్రల విభజన

సిఫార్సు చేయబడిన నిర్మాణం:

- `wavec`: కంపైల్/లింక్/ఎగ్జిక్యూట్ + పేర్కొన్న డిపెండెన్సీలను పరిష్కరించండి
- `vex`: డిపెండెన్సీలను ఇన్‌స్టాల్ చేసిన/మేనేజింగ్ చేసిన తర్వాత `wavec ... --dep-root ... --dep ...`కి కాల్ చేయండి

ఉదాహరణ:

```bash
# అంతర్గతంగా, వెక్స్ చేస్తుంది
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

ఈ మోడల్ కంపైలర్‌ను సరళంగా మరియు నిర్ణయాత్మకంగా ఉంచుతూ, ఆటోమేషన్‌కు బాధ్యత వహించే ప్యాకేజీ మేనేజర్‌ని వదిలివేస్తుంది.

---

## 8. త్వరిత సూచన

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reserved, not implemented
```
