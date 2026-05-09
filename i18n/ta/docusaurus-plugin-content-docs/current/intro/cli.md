---
sidebar_position: 6
---

# `wavec` CLI குறிப்பு

இந்த ஆவணம் **தற்போதைய Wave கம்பைலரின் (`wavec`) செயல்படுத்தல் தளத்தின் CLI நடத்தையை விவரிக்கிறது**.

அடிப்படைக் கொள்கைகள்:

- `wavec` என்பது கம்பைலர்.
- தொகுப்பு நிறுவல்/தெளிவு (லாக்ஃபைல், ரெஜிஸ்ட்ரி, டவுன்லோட்) `wavec` இன் பொறுப்பு அல்ல.
- `wavec`ஐ இயக்கும்போது வெளிப்புற சார்புகள் **வெளிப்படையான CLI வாதமாக** அனுப்பப்படும்.

---

## 1. அடிப்படை வடிவம்

```bash
wavec [global-options] <command> [command-options]
```

எடுத்துக்காட்டு:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. கட்டளை பாகுபடுத்தும் விதிகள் (முக்கியம்)

`wavec` முதலில் **உலகளாவிய விருப்பத்திற்கு** அனைத்து வாதங்களையும் ஸ்கேன் செய்கிறது, பின்னர் `<command>` ஐ மீதமுள்ள வாதங்களாக விளக்குகிறது.

வேறு வார்த்தைகளில் கூறுவதானால், உலகளாவிய விருப்பத்தின் இடம் நெகிழ்வானது.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

மேலே உள்ள மூன்றும் செல்லுபடியாகும்.

நீங்கள் `--` ஐப் பயன்படுத்தினால், குளோபல் ஆப்ஷன் ஸ்கேன் நிறுத்தப்பட்டு, கட்டளைப் பகுதிக்கு நகரும்.

```bash
wavec -- run main.wave
```

---

## 3. Commands

## 3.1 `run <file>`

Wave கோப்பை தொகுத்து இயக்கவும்.

```bash
wavec run hello.wave
```

செயல்:

1. மூல பாகுபடுத்தல் + இறக்குமதி விரிவாக்கம்
2. LLVM IR ஐ உருவாக்கவும்
3. நேட்டிவ் பைனரி இணைப்பு (`target/<file_stem>`)
4. ஓடு

அம்சங்கள்:

- `wavec` செயல்படுத்தப்பட்ட நிரலின் வெளியேறும் குறியீட்டைக் கடந்து செல்கிறது.

---

## 3.2 `build <file>`

இயங்கக்கூடிய கோப்பை (exe) உருவாக்குகிறது.

```bash
wavec build app.wave
```

வெளியீடு பைனரி:

- `target/<file_stem>`

## 3.3 `build` விருப்பம் (`-o`, `-c`)

`build` கட்டளையானது வெளியீட்டு கோப்பு பெயர் மற்றும் வெளியீட்டு வடிவமைப்பை விருப்பமாக கட்டுப்படுத்தலாம்.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: வெளியீட்டு கோப்பு பெயரைக் குறிப்பிடுகிறது.
  - அடிப்படை (`-c` இல்லை): இயங்கக்கூடிய வெளியீட்டு பாதையைக் குறிப்பிடுகிறது.
  - `-c` உடன்: பொருள் கோப்பு வெளியீட்டு பாதையைக் குறிப்பிடவும்
- `-c`: இணைப்பதைத் தவிர்த்து, பொருள் கோப்புகளை மட்டும் உருவாக்கவும்.
- `-c` ஐப் பயன்படுத்தும் போது, ஆப்ஜெக்ட் பாதையானது stdout க்கு அவுட்புட் ஆகும்.

இயல்புநிலை நடத்தை:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (பாதை வெளியீடு)

இலவச கர்னல் பொருளின் எடுத்துக்காட்டு:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` ஆகியவற்றையும் இதே முறையில் பயன்படுத்தலாம்.

---

## 3.4 `install std`, `update std`

இது நிலையான நூலக நிறுவல்/புதுப்பிப்பு கட்டளை.

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

## 4.1 உகப்பாக்கம்

அனுமதிக்கப்பட்ட மதிப்புகள்:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

எடுத்துக்காட்டு:

```bash
wavec -O3 run main.wave
```

---

## 4.2 பிழைத்திருத்த வெளியீடு

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

அனுமதிக்கப்பட்ட பொருட்கள்:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 இணைப்பு விருப்பங்கள்

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` அல்லது `--link <lib>`
- `-L<path>` அல்லது `-L <path>`

இணைக்கும் போது `wavec` `-l<lib>` மற்றும் `-L<path>` வடிவத்தில் உள்நாட்டில் பரவுகிறது.

---

## 4.4 வெளிப்புற சார்பு விருப்பங்கள் (முக்கியம்)

இது வெளிப்புற இறக்குமதி (`pkg::...`) பகுப்பாய்வுக்கான விருப்பமாகும்.

### `--dep-root <dir>`

தொகுப்பு ரூட் அடைவு வேட்பாளர்களைச் சேர்க்கவும்.

```bash
wavec run app.wave --dep-root .vex/dep
```

`math` தொகுப்பைத் தேடும்போது:

- `.vex/dep/math` ஐ சரிபார்க்கவும்

பல முறை குறிப்பிடலாம்:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

ஒரு குறிப்பிட்ட பாதையில் தொகுப்பின் பெயரை சரிசெய்கிறது.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

விதிகள்:

- `name` வடிவம்: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` `name=path` வடிவத்தில் இருக்க வேண்டும்
- ஒரே தொகுப்பின் பெயர் மீண்டும் மீண்டும் குறிப்பிடப்பட்டால் பிழை ஏற்படும்.

---

## 4.5 பின்தள விருப்பங்கள் (`--llvm`, `--whale`)

பின்தளக் கட்டுப்பாட்டு விருப்பங்கள் `--llvm`க்குப் பின்னால் மட்டுமே விளக்கப்படுகின்றன.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

ஆதரிக்கப்படும் பொருட்கள் (சுருக்கம்):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (மீண்டும் மீண்டும் செய்யக்கூடியது)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

`wavec print target-list` அடிப்படையிலான தற்போதைய முக்கிய இலக்குகள்:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` தற்போது ஒதுக்கப்பட்ட போலிக் கொடி மற்றும் உண்மையான பின்தள பைப்லைன் TODO ஆகும்.

---

## 5. இறக்குமதி விளக்க விதிகள்

Wave கிளைகளை மூன்று வகைகளாக இறக்குமதி செய்க:

1. உள்ளூர் இறக்குமதி
2. std import
3. வெளிப்புற தொகுப்பு இறக்குமதி

## 5.1 உள்ளூர்

```wave
import("foo");
import("path/to/mod.wave");
```

அடிப்படை கோப்பு கோப்பகத்தில் `<path>.wave` ஐக் கண்டறியவும்.

## 5.2 std

```wave
import("std::io::format");
```

`~/.wave/lib/wave/std/...` பாதையைப் பயன்படுத்தவும்.

## 5.3 வெளிப்புற தொகுப்பு

```wave
import("math::add");
import("json::parser::core");
```

வடிவம்:

- குறைந்தபட்சம் `package::module` 2 பிரிவுகள் தேவை

தொகுப்பு ரூட் நிர்ணய வரிசை:

1. `--dep name=path` வெளிப்படையான மேப்பிங்
2. ஒவ்வொரு `--dep-root` இல் `<root>/<package>` ஐத் தேடுங்கள்

ஒரே பேக்கேஜ் பல டெப்-ரூட்களில் ஒரே நேரத்தில் காணப்பட்டால்:

- தானியங்கு தேர்வு இல்லாமல் ** தெளிவின்மை பிழை**
- `--dep name=path` உடன் சரி செய்யப்பட வேண்டும்

தொகுதி கோப்பு வழிசெலுத்தல் வரிசை:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

எடுத்துக்காட்டு:

```wave
import("math::core::vec");
```

வழிசெலுத்தல்:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. வெளிப்புற இறக்குமதிக்கான எடுத்துக்காட்டு

### 6.1 ஒற்றை டெப்-ரூட்

அடைவு:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

குறியீடு:

```wave
import("math::add");
```

இயக்கு:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 தெளிவின்மை தீர்மானம்

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

`math` இருபுறமும் இருந்தால், பிழை ஏற்படும். கீழே காட்டப்பட்டுள்ளபடி அதை சரிசெய்யவும்.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Vex இலிருந்து பாத்திரங்களைப் பிரித்தல்

பரிந்துரைக்கப்பட்ட கட்டமைப்பு:

- `wavec`: தொகுத்தல்/இணைப்பு/செயல்படுத்துதல் + குறிப்பிட்ட சார்புகளைத் தீர்க்கவும்
- `vex`: சார்புகளை நிறுவிய/நிர்வகித்த பிறகு `wavec ... --dep-root ... --dep ...` ஐ அழைக்கவும்

எடுத்துக்காட்டு:

```bash
# உள்நாட்டில், வெக்ஸ் செய்கிறது
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

இந்த மாதிரியானது தொகுப்பு மேலாளரை தன்னியக்கமாக்கலுக்கு பொறுப்பாக்குகிறது, அதே நேரத்தில் கம்பைலரை எளிமையாகவும் தீர்மானமாகவும் வைத்திருக்கும்.

---

## 8. விரைவு குறிப்பு

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
