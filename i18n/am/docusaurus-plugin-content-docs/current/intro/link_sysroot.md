---
sidebar_position: 8
---

# ማገናኛ sysroot በእጅ መቆጣጠሪያ (`-C link-sysroot`)

ይህ ሰነድ በ`wavec` ውስጥ ያለውን አገናኝ ደረጃ እንዴት **በግልጽ መቆጣጠር** እንደሚቻል ይገልጻል።

ዋና መርሆዎች፡-

- `--sysroot=<path>`፡ የማጠናቀር ደረጃ (clang `-c`) sysroot
- `-C link-sysroot=<path>`: linker sysroot

በሌላ አነጋገር፣ ለማጠናቀር እና ለማገናኘት sysroot በተናጠል ይያዛሉ።

---

## 1. ለምን ያስፈልጋል?

በመስቀል ማገናኛ ውስጥ `-C linker=<path>` ሲጠቀሙ፣ በአገናኝ ሾፌሩ (ለምሳሌ `aarch64-linux-gnu-gcc`) የተጠቀሰውን የሩጫ ጊዜ (`crt1.o`፣ `libc`፣ `libm`) ለየብቻ መለየት ያስፈልጋል።

በዚህ ጊዜ የሊንኩ sysroot በራስ-ሰር አይቀነስም, ነገር ግን በ CLI ውስጥ በግልፅ እንዲተላለፍ ተደርጎ የተሰራ ነው.

---

## 2. የአማራጭ ፍቺ

## 2.1 `-C link-sysroot=<path>`

ወደ ማገናኛ ደረጃ `--sysroot=<path>` ያስገቡ።

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

ከውስጥ እሱ ከ `-C link-arg=--sysroot=<path>` ጋር ተመሳሳይ ትርጉም አለው።

## 2.2 `-C link-arg=--sysroot=<path>`

አሁን ያለው የጥሬ አገናኝ ክርክር ዘዴም አሁንም ይደገፋል።

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. የማረጋገጫ ደንቦች

የሚከተሉት ሁኔታዎች በተመሳሳይ ጊዜ ከተሟሉ የአገናኝ እርምጃን የሚፈልግ ግንባታ በአጠቃቀም ስህተት ያበቃል።

1. `-C linker=...` ተጠቀም
2. `--sysroot=<path>` ተጠቀም
3. ማገናኛ sysroot (`-C link-sysroot` ወይም `-C link-arg=--sysroot=...`) አልተገለጸም።

የስህተት መልእክት ምሳሌ፡-

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. የአጠቃቀም ምሳሌ

## 4.1 AArch64 Linux መስቀለኛ መንገድ

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

## 4.2 ጥሬ አገናኝ ክርክር ዘዴ

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 ያለ ማገናኛ ይገንቡ (`--emit=obj`)

ያለ አገናኝ ደረጃ ፣ sysroot ማገናኘት አያስፈልግም።

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. ማጽዳት

- `--sysroot` የማጠናቀር ደረጃውን ይቆጣጠራል
- `-C link-sysroot` የአገናኝ ደረጃን ይቆጣጠራል
- በራስ-ሰር መረጃ ላይ ግልጽ ቁጥጥርን ቅድሚያ ይስጡ
