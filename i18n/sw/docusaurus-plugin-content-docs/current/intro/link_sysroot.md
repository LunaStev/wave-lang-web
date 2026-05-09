---
sidebar_position: 8
---

# Udhibiti wa mwongozo wa sysroot ya kiungo (`-C link-sysroot`)

Hati hii inaelezea jinsi ya **kudhibiti kwa wazi** sysroot ya hatua ya kiungo ndani ya `wavec`.

Kanuni kuu:

- `--sysroot=<path>`: kiwango cha sysroot (clang `-c`)
- `-C link-sysroot=<path>`: kiwango cha sysroot (kiungo)

Hiyo ni, unatenganisha na kushughulikia sysroot ya kutafsiri na kuunganisha.

---

## 1. Kwa nini inahitajika

Katika uunganishaji wa msalaba, kutumia `-C linker=<njia>`, mara nyingi nitatatakiwa kubainisha njia za maana za utekelezaji (`crt1.o`, `libc`, `libm`).

Katika hatua hii, sysroot ya kiungo haihitimii kiotomatiki, lakini imetengenezwa ili kupitishwa kwa wazi kutoka CLI.

---

## 2. Ufafanuzi wa chaguo

## 2.1 `-C link-sysroot=<path>`

Inapachika `--sysroot=<path>` katika hatua ya kiungo.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

Kiundani, ina maana sawa na `-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

Njia ya awali ya kiungo mbichi bado inaungwa mkono.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. Sheria za uthibitishaji

Katika ujenzi ambao unahitaji hatua ya mwiko, ikiwa hali zifuatazo zote zinatimizwa, inamaliza na kosa la matumizi.

1. Kutumia `-C linker=...`
2. Kutumia `--sysroot=<path>`
3. Sysroot ya mwiko (`-C link-sysroot` au `-C link-arg=--sysroot=...`) haijatajwa

Mfano wa ujumbe wa kosa:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. Mfano wa matumizi

## 4.1 Kiunganishi cha msalaba cha Linux cha AArch64

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

## 4.2 Njia ya kiunganishi cha mbichi

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 Ujenzi bila kiungo (`--emit=obj`)

Iwapo hakuna hatua ya kiungo, sysroot ya kiungo haihitajiki.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. Muhtasari

- `--sysroot` inadhibiti hatua ya kutafsiri
- `-C link-sysroot` inadhibiti hatua ya kiungo
- Kipaumbele ni udhibiti wa wazi kuliko maana ya moja kwa moja
