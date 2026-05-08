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
wavec --llvm --target=x86_64-unknown-linux-gnu jenga app.wave -c
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

- `--lengo <troja>` / `--lengo=<troja>`
- `--cpu <jina>` / `--cpu=<jina>`
- `--vipengele <csv>` / `--vipengele=<csv>`
- `--abi <jina>` / `--abi=<jina>`

Sehemu za kutafakari:

- Hatua za kuunda IR (MashineLengo): `lengo`, `cpu`, `vipengele`
- Hatua za kitu/unganisho (kuita clang): `lengo`, `abi`

Hivi sasa, troja muhimu za lengo kwa maandishi ni:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- Freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Zana mnyororo/kiungo

- `--sysroot <njia>` / `--sysroot=<njia>`
- `-C kiunganishi=<njia>`
- `-C kiungo-hoja=<hoja>` (Inaweza kurudiwa)
- `-C link-sysroot=<path>`
- `-C hakuna maktaba chaguomsingi`

Sehemu za kutafakari:

- Uundaji wa kitu (clang `-c`) una `--sysroot`
- 링크 단계에서 linker override, raw link arg 주입, link-sysroot 주입
- Unapotumia `-C no-default-libs`, `-lc -lm` huzima kiotomatiki

---

## 3. Kanuni za uchanganuzi (Mruhimu)

Isipokuwa utumie `--llvm`, chaguo za kina za upande wa nyuma hazitafsiriwi kama chaguo za kimataifa.

Kwa mfano, yafuatayo ni kosa.

```bash
wavec --lengo=x86_64-unknown-linux-gnu jenga app.wave -c
```

Ni lazima iandikwe kama yafuatayo.

```bash
wavec --llvm --lengo=x86_64-unknown-linux-gnu jenga app.wave -c
```

---

## 4. Mfano wa matumizi

Uundaji wa kitu msingi:

```bash
wavec --llvm --lengo=aarch64-unknown-linux-gnu jenga app.wave -c
```

Uundaji wa kitu cha kernel kisichosimama:

```bash
wavec --llvm --lengo=riscv64-unknown-none-elf jenga kernel.wave --emit=obj --freestanding -o kernel.o
```

Kiungo maalum:

```bash
wavec --llvm \
  --lengo=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C kiunganishi=clang \
  -C kiungo-hoja=-Wl,--gc-sections \
  jenga app.wave
```

Usiwezeshaji wa kiungo kiotomatiki cha libc/libm:

```bash
wavec --llvm -C hakuna maktaba chaguomsingi jenga app.wave
```

Unapotumia `--freestanding`, hufanya kazi kwa njia sawa na `-C no-default-libs` kwa ndani, ilhali inalingana na ujenzi ambao haufikirii maktaba msingi za runtamu kama kernel/kodi ya boot.

---

## 5. Muhtasari wa hali

- LLV upande wa nyuma: Inafanya kazi
- Whale upande wa nyuma: Imewekwa akiba (TO DO), haijatengenezwa bado
