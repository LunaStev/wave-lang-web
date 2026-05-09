---
sidebar_position: 6
---

# `wavec` CLI ማጣቀሻ

ይህ ሰነድ **የአሁኑን Wave አጠናቃሪ (`wavec`) ትግበራ መሰረትን** የCLI ባህሪን ይዘረዝራል።

ዋና መርሆዎች፡-

- `wavec` አቀናባሪ ነው።
- የጥቅል ጭነት/ጥራት (የመቆለፊያ ፋይል፣ መዝገብ ቤት፣ ማውረድ) የ`wavec` ኃላፊነት አይደለም።
- ውጫዊ ጥገኞች `wavec` ን ሲሰሩ እንደ ** ግልጽ CLI ነጋሪ እሴት ተላልፈዋል።

---

## 1. መሰረታዊ ቅርጸት

```bash
wavec [global-options] <command> [command-options]
```

ምሳሌ፡-

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. የትዕዛዝ መተንተን ደንቦች (አስፈላጊ)

`wavec` በመጀመሪያ ሁሉንም ነጋሪ እሴቶች ለ ** ዓለም አቀፍ አማራጭ ** ይቃኛል እና `<command>` እንደ ቀሪ ነጋሪ እሴቶች ይተረጉመዋል።

በሌላ አነጋገር የአለምአቀፍ አማራጭ ቦታ ተለዋዋጭ ነው.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

ከላይ ያሉት ሦስቱም ልክ ናቸው።

`--` ን ከተጠቀሙ የአለምአቀፍ አማራጭ ቅኝት ይቆማል እና ወደ ትዕዛዝ ቦታ ይንቀሳቀሳል.

```bash
wavec -- run main.wave
```

---

## 3. Commands

## 3.1 `run <file>`

የWave ፋይልን ሰብስብ እና አሂድ።

```bash
wavec run hello.wave
```

እርምጃ፡

1. ምንጭ መተንተን + የማስመጣት መስፋፋት።
2. LLVM IR ፍጠር
3. ቤተኛ ሁለትዮሽ አገናኝ (`target/<file_stem>`)
4. መሮጥ

ባህሪያት፡

- `wavec` የተፈፀመውን ፕሮግራም መውጫ ኮድ ያልፋል።

---

## 3.2 `build <file>`

ሊተገበር የሚችል ፋይል (exe) ይፈጥራል።

```bash
wavec build app.wave
```

የውጤት ሁለትዮሽ፡

- `target/<file_stem>`

## 3.3 `build` አማራጭ (`-o`፣ `-c`)

የ`build` ትዕዛዝ እንደ አማራጭ የውጤት ፋይል ስም እና የውጤት ቅርጸቱን መቆጣጠር ይችላል።

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`፡ የውጤት ፋይል ስም ይገልጻል።
  - መሰረታዊ (`-c` የለም)፡ የሚፈፀመውን የውጤት መንገድ ይገልጻል።
  - በ`-c`፡ የነገር ፋይል ውፅዓት መንገድን ይግለጹ
- `-c`፡ ማገናኘትን ይዝለሉ እና የነገር ፋይሎችን ብቻ ያመንጩ።
- `-c` ሲጠቀሙ የነገር ዱካ ወደ stdout ይወጣል።

ነባሪ ባህሪ፡

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (የመንገድ ውፅዓት)

ነፃ የከርነል ነገር ምሳሌ፡-

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`፣ `riscv64-unknown-none-elf` እንዲሁ በተመሳሳይ መንገድ ጥቅም ላይ ሊውል ይችላል።

---

## 3.4 `install std`, `update std`

ይህ መደበኛ የላይብረሪ መጫን/አዘምን ትዕዛዝ ነው።

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

## 4.1 ማመቻቸት

የተፈቀዱ እሴቶች፡-

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

ምሳሌ፡-

```bash
wavec -O3 run main.wave
```

---

## 4.2 የውጤት ማረም

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

የተፈቀዱ እቃዎች፡

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 የአገናኝ አማራጮች

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` ወይም `--link <lib>`
- `-L<path>` ወይም `-L <path>`

ሲገናኙ `wavec` በውስጥ በኩል በ`-l<lib>` እና `-L<path>` መልክ ይተላለፋል።

---

## 4.4 የውጭ ጥገኛ አማራጮች (አስፈላጊ)

ይህ ለውጫዊ ማስመጣት (`pkg::...`) ትንተና አማራጭ ነው።

### `--dep-root <dir>`

የጥቅል ስር ማውጫ እጩዎችን ያክሉ።

```bash
wavec run app.wave --dep-root .vex/dep
```

ጥቅል `math` ሲፈልጉ፡-

- `.vex/dep/math` ን ያረጋግጡ

ብዙ ጊዜ ሊገለጽ ይችላል፡-

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

የጥቅል ስሙን ወደ አንድ የተወሰነ መንገድ ያስተካክላል።

```bash
wavec run app.wave --dep math=.vex/dep/math
```

ደንቦች፡-

- `name` ቅርጸት፡ `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` በ`name=path` ቅርጸት መሆን አለበት።
- ተመሳሳይ የጥቅል ስም በተደጋጋሚ ከተገለጸ ስህተት ይከሰታል።

---

## 4.5 የጀርባ አማራጮች (`--llvm`፣ `--whale`)

የኋላ መቆጣጠሪያ አማራጮች የሚተረጎሙት ከ`--llvm` ጀርባ ብቻ ነው።

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

የሚደገፉ ዕቃዎች (ማጠቃለያ)

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (የሚደጋገም)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

በ`wavec print target-list` ላይ የተመሠረቱ ዋና ዋና ኢላማዎች፡-

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` በአሁኑ ጊዜ የተጠበቀ ዲሚ ባንዲራ ነው እና ትክክለኛው የኋላ መስመር ቧንቧው TODO ነው።

---

## 5. የትርጓሜ ደንቦችን አስመጣ

Wave ቅርንጫፎችን ወደ ሶስት ዓይነቶች ያስመጣል

1. የአገር ውስጥ ማስመጣት
2. std import
3. የውጭ ጥቅል አስመጣ

## 5.1 አካባቢያዊ

```wave
import("foo");
import("path/to/mod.wave");
```

በመሠረታዊ ፋይል ማውጫ ውስጥ `<path>.wave` ያግኙ።

## 5.2 std

```wave
import("std::io::format");
```

የ`~/.wave/lib/wave/std/...` መንገድን ተጠቀም።

## 5.3 ውጫዊ ጥቅል

```wave
import("math::add");
import("json::parser::core");
```

ቅርጸት፡-

- ቢያንስ `package::module` 2 ክፍሎች ያስፈልጋል

የጥቅል ሥር አወሳሰን ቅደም ተከተል፡-

1. `--dep name=path` ግልጽ ካርታ ስራ
2. በእያንዳንዱ `--dep-root` `<root>/<package>` ፈልግ

ተመሳሳዩ ጥቅል በአንድ ጊዜ በበርካታ ዲፕ-ሥሮች ውስጥ ከተገኘ፡-

- ያለ ራስ-ምርጫ ** አሻሚ ስህተት**
- በ`--dep name=path` መስተካከል አለበት።

የሞዱል ፋይል አሰሳ ቅደም ተከተል፡-

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

ምሳሌ፡-

```wave
import("math::core::vec");
```

አሰሳ፡

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. የውጭ ማስመጣት ምሳሌ

### 6.1 ነጠላ ዲፕ-ስር

ማውጫ፡

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

ኮድ፡-

```wave
import("math::add");
```

አሂድ፡

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 አሻሚ መፍታት

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

`math` በሁለቱም በኩል ካለ, ስህተት ይከሰታል. ከታች እንደሚታየው ያስተካክሉት.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. ሚናዎችን ከ Vex መለየት

የሚመከር መዋቅር፡

- `wavec`፡ ማጠናቀር/ማገናኘት/አስፈፃሚ + የተገለጹ ጥገኞችን መፍታት
- `vex`፡ ጥገኞችን ከጫኑ/ከማስተዳደር በኋላ ለ`wavec ... --dep-root ... --dep ...` ይደውሉ

ምሳሌ፡-

```bash
# ከውስጥ፣ ቬክስ ያደርጋል
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

ይህ ሞዴል የጥቅል አስተዳዳሪውን ለአውቶሜሽን ሃላፊነት ይተወዋል፣ አቀናባሪውን ቀላል እና ቆራጥ ሆኖ እንዲቆይ ያደርገዋል።

---

## 8. ፈጣን ማጣቀሻ

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
