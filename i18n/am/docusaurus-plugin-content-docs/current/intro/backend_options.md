---
sidebar_position: 7
---

# የጀርባ አማራጮች (`--llvm`፣ `--whale`)

ይህ ሰነድ ለ`wavec` የጀርባ ጫፍ-ተኮር የCLI አማራጮችን ይገልጻል።

ጠቃሚ መርሆዎች፡-

- `wavec` የጥቅል አስተዳዳሪ አይደለም።
- የጀርባ ባህሪ በተቻለ መጠን በ ** ግልጽ ክርክሮች ** ይቆጣጠራል።
- የኋላ ዝርዝር አማራጮች የሚተረጎሙት ከ`--llvm` ጀርባ ብቻ ነው።

---

## 1. የጀርባ መራጭ

## 1.1 `--llvm`

`--llvm` ራሱ ለኋለኛው አማራጮች ብሎክ መነሻ ምልክት ነው።

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

ከላይ እንደሚታየው፣ ከ`--llvm` በኋላ ካሉት ክርክሮች መካከል የሚደገፉት ንጥሎች ብቻ እንደ LLVM የኋላ ቅንጅቶች ይከናወናሉ።

## 1.2 `--whale` (በአሁኑ ጊዜ TODO)

በአሁኑ ጊዜ `--whale` ** የተያዘ የደሚ ባንዲራ** ነው።

- ተንታኙ ያውቀዋል።
- ትክክለኛው የWhale የኋላ ቧንቧ መስመር ገና አልተገናኘም።
- ጥቅም ላይ ሲውል በTODO ስህተት ያበቃል።

---

## 2. ከ`--llvm` በስተጀርባ የሚደገፉ አማራጮች

## 2.1 ዒላማ / Codegen

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

ነጸብራቅ ነጥብ፡-

- IR (ታርጌት ማሽን) ደረጃዎችን ይፍጠሩ፡ `target`፣ `cpu`፣ `features`
- የነገር/አገናኝ ደረጃ (ክላንግ ጥሪ)፡ `target`፣ `abi`

በአሁኑ ጊዜ በነባሪነት የሚመዘገብ ዋናው ኢላማ ሶስት እጥፍ፡-

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 የመሳሪያ ሰንሰለት / አገናኝ

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (የሚደጋገም)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

ነጸብራቅ ነጥብ፡-

- `-c` ወደ ነገር መፍጠር (ክላንግ `--sysroot`)
- linker override, ጥሬ አገናኝ አርግ መርፌ, አገናኝ-sysroot መርፌ በአገናኝ ደረጃ
- `-C no-default-libs` ሲጠቀሙ `-lc -lm`ን በራስ-ሰር ያሰናክሉ።

---

## 3. ደንቦችን መተንተን (አስፈላጊ)

`--llvm` ጥቅም ላይ ካልዋለ፣ የኋላ ዝርዝር አማራጮች እንደ ዓለም አቀፍ አማራጮች አይተረጎሙም።

ለምሳሌ ስህተቱ ከዚህ በታች ነው።

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

እንደሚከተለው መፃፍ አለበት።

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. የአጠቃቀም ምሳሌ

መሰረታዊ ነገር ይፍጠሩ:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

ነጻ የሆነ የከርነል ነገር ይፍጠሩ፡

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

ብጁ ማገናኛ፡

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

libc/libm ራስ-ማገናኘትን ያሰናክሉ፡

```bash
wavec --llvm -C no-default-libs build app.wave
```

አጠቃቀም

---

## 5. የሁኔታ ማጠቃለያ

- LLVM ጀርባ፡ በመስራት ላይ
- Whale ጀርባ፡ የተያዘ (TODO)፣ አልተተገበረም።
