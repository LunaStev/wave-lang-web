---
sidebar_position: 7
---

# Chaguo za Mbele (`--llvm`, `--whale`)●

Hati hii inafafanua chaguo za CLI za mbele zinazohusiana na `wavec`.

Kanuni muhimu:

- `wavec` si msimamizi wa pakiti.
- Mwenendo wa mbele unadhibitiwa kadiri inavyowezekana na **vigezo vya wazi**.
- Chaguo za kina za mbele hufafanuwa tu baada ya `--llvm`.

---

## 1. Kichaguio cha Mbele

## 1.1 `--llvm`

`--llvm` yenyewe ni alama ya kuanzia kwa block ya chaguo za mbele.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Kama hapo juu, miongoni mwa vigezo vya kuja baada ya `--llvm`, ni vigezo vilivyowekwa tu vitachukuliwa kama mipangilio ya mbele ya LLVM.

## 1.2 `--whale` (kwa sasa TODO)

Kwa sasa `--whale` ni **alama ya dummy iliyohifadhiwa**.

- Programu ya kuchanganua inatambua.
- Mfereji kamili wa mbele ya Whale bado haujaunganishwa.
- Inahitimishwa na kosa la TODO kwenye matumizi.

---

## 2. Chaguo zinazosapotiwa baada ya `--llvm`

## 2.1 Lengo/Uzalishaji wa Msimbo

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

Sehemu za kutafakari:

- Hatua za kuunda IR (MashineLengo): `target`, `cpu`, `features`
- Hatua za kitu/unganisho (kuita clang): `target`, `abi`

Hivi sasa, troja muhimu za lengo kwa maandishi ni:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- Freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Zana mnyororo/kiungo

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (Inaweza kurudiwa)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

Sehemu za kutafakari:

- Uundaji wa kitu (clang `-c`) una `--sysroot`
- Katika hatua ya kiungo, kuzimudu kiungo, uingizaji wa arg ya mwako mbichi, uingizaji wa link-sysroot
- Unapotumia `-C no-default-libs`, `-lc -lm` huzima kiotomatiki

---

## 3. Kanuni za uchanganuzi (Mruhimu)

Isipokuwa utumie `--llvm`, chaguo za kina za upande wa nyuma hazitafsiriwi kama chaguo za kimataifa.

Kwa mfano, yafuatayo ni kosa.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

Ni lazima iandikwe kama yafuatayo.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. Mfano wa matumizi

Uundaji wa kitu msingi:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

Uundaji wa kitu cha kernel kisichosimama:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

Kiungo maalum:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

Usiwezeshaji wa kiungo kiotomatiki cha libc/libm:

```bash
wavec --llvm -C no-default-libs build app.wave
```

Unapotumia `--freestanding`, hufanya kazi kwa njia sawa na `-C no-default-libs` kwa ndani, ilhali inalingana na ujenzi ambao haufikirii maktaba msingi za runtamu kama kernel/kodi ya boot.

---

## 5. Muhtasari wa hali

- LLV upande wa nyuma: Inafanya kazi
- Whale upande wa nyuma: Imewekwa akiba (TO DO), haijatengenezwa bado
