---
sidebar_position: 6
---

# Marejeleo ya CLI ya `wavec`

Hati hii inaelezea kwa kina utekelezaji wa CLI kulingana na **kiwango cha sasa cha utekelezaji wa wa Mwave (`wavec`)**.

Misingi muhimu:

- `wavec` ni kikokotoo.
- Ufungaji/ufumbuzi wa kifurushi (faili la kufuli, usajili, upakuaji) sio jukumu la `wavec`.
- Uhuru wa nje unapitishwa kwa `wavec` kama **maelezo ya CLI ya wazi**.

---

## 1. Umbizo la msingi

```bash
wavec [chaguo-la-dunia] <amri> [chaguo-la-amri]
```

Mf:

```bash
wavec -O2 endesha main.wave
wavec jenga app.wave --link ssl -L ./native/lib
wavec endesha app.wave --dep-root .vex/dep
```

---

## 2. Kanuni za uchanganuzi wa amri (Mruhimu)

`wavec` kwanza huskani **chagua-la-dunia** kwenye maelezo yote, kisha hutafakari `<command>` kwa maelezo mengine.

Yaani chaguo-la-dunia hayana nafasi maalum.

```bash
wavec -O3 endesha main.wave
wavec endesha main.wave -O3
wavec endesha -O3 main.wave
```

Nambari zote tatu zilizotajwa hapo juu ni sahihi.

Unapotumia `--`, utapunguza uchangaji wa chaguo-la-dunia baada yake na kuhamisha kwenye eneo la amri.

```bash
wavec -- endesha main.wave
```

---

## 3. Amri

## 3.1 `ondoa <faili>`

Inakusanya na kuendesha faili ya Mwave.

```bash
wavec endesha hello.wave
```

Kufanya kazi:

1. Uchanganuzi wa chanzo + upanuzi wa kuingiza
2. Uundaji wa LLVM IR
3. Kiungo cha binary asilia (`target/<file_stem>`)
4. Endesha

Tabia:

- `wavec` inapeleka msimbo wa kumalizia wa programu iliyotekelezwa.

---

## 3.2 `jenga <faili>`

Huunda faili ya kutekeleza (exe).

```bash
wavec jenga app.wave
```

Failia zinazotoka:

- `lengo/<shina_la_faili>`

## 3.3 Machaguo ya `build` (`-o`, `-c`)

Amri ya `build` inaweza kudhibiti jina la faili na muundo wa toleo kama chaguzi.

```bash
wavec jenga app.wave -o ./bin/app
wavec jenga app.wave -c
wavec jenga app.wave -c -o ./build/app.o
```

- `-o <faili>`: Taja jina la faili la pato.
  - Kimya chaguo(`-c` haipo): taja njia ya pato la faili ya kutekeleza
  - Pamoja na `-c`: taja njia ya pato la faili la kitu
- `-c`: Ruka kiungo na uzalishe faili la kitu pekee.
- Wakati wa kutumia `-c`, toa njia ya kitu kwa stdout.

Utendaji wa kawaida:

- `wavec jenga app.wave` -> `lengo/app`
- `wavec jenga app.wave -c` -> `lengo/app.o` (njia ya kutokea)

Mfano wa kitu cha kernel cha kujitegemea:

```bash
wavec --llvm \
  --lengo=x86_64-unknown-none-elf \
  jenga kernel.wave --emit=obj --freestanding -o kernel.o
```

Unaweza pia kutumia `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` kwa njia ile ile.

---

## 3.4 `weka std`, `sasisha std`

Amri ya kusakinisha/kusasaisha maktaba ya kawaida.

```bash
wavec weka std
wavec sasisha std
```

---

## 3.5 `--msaidizi`, `--toleo`

```bash
wavec --msaidizi
wavec --toleo
```

---

## 4. Chaguzi za Ulimwengu

## 4.1 Uboreshaji

Thamani za kuruhusiwa:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

Mf.:

```bash
wavec -O3 endesha main.wave
```

---

## 4.2 Toa Debug

```bash
wavec --debug-wave=tokens,ast,ir endesha main.wave
```

Vitu vya kuruhusiwa:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 Chaguzi za Kiungo

```bash
wavec kujenga app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` au `--link <lib>`
- `-L<path>` au `-L <path>`

`wavec` inapeleka kibinafsi kwa mchakato wa kiungo katika umbo la `-l<lib>`, `-L<path>`.

---

## 4.4 Chaguo la utegemezi wa nje (Muhimu)

Ni chaguo la kutafsiri import ya nje (`pkg::...`).

### `--dep-root <dir>`

Huongeza chaguo la msimbo mzizi wa kifurushi.

```bash
wavec endesha app.wave --dep-root .vex/dep
```

Wakati unapochunguza kifurushi `math`:

- Chunguza `.vex/dep/math`

Inaweza kuainishwa mara nyingi:

```bash
wavec endesha app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

Inafunga jina la kifurushi kwa njia mahususi.

```bash
wavec endesha app.wave --dep math=.vex/dep/math
```

Kanuni:

- Muundo wa `name`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` lazima iwe kwa umbo la `name=path`
- Kukitaja jina la kifurushi mara kwa mara huzalisha kosa.

---

## 4.5 Chaguo la usaidizi wa nyuma (`--llvm`, `--whale`)

Chaguo la udhibiti wa usaidizi wa nyuma linatafsiriwa baada ya kupita `--llvm` pekee.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu kujenga app.wave -c
```

Vitu vilivyoandaliwa (muhtasari):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (Inaweza kurudiwa)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

Lengo kuu kwa msingi wa `wavec print target-list` ya sasa:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` kwa sasa ni bendera ya watekaji iliyohifadhiwa, na usaidizi wa nyuma halisi bado haujatekelezwa (TODO).

---

## 5. Kanuni za tafsiri ya Import

Import ya Wave imegawanyika kwenye vitendo vitatu vifuatavyo.

1. Import ya ndani
2. Import ya std
3. Import ya kifurushi cha nje

## 5.1 Ndani

```wave
import("foo");
import("path/to/mod.wave");
```

Inatafuta `<path>.wave` kwenye saraka ya faili ya msingi.

## 5.2 std

```wave
import("std::io::format");
```

Inatumia njia ya `~/.wave/lib/wave/std/...`.

## 5.3 Pakiti za Nje

```wave
ingiza("math::add");
ingiza("json::parser::core");
```

Fomati:

- Angalau sehemu kuu mbili za `package::module` zinahitajika

Mpangilio wa Njia za Pakiti:

1. Piga ramani `--dep name=path`
2. Tafuta `<root>/<package>` katika kila `--dep-root`

Ikiwa pakiti sawa itapatikana katika mizizi kotekote kwa wakati mmoja:

- Usichague kwa umoja, **uzingatia kosa la mfuatano**
- Inapaswa kuwekwa na `--dep name=path`

Mpangilio wa Utafutaji wa Njia ya Moduli:

1. `<mzizi_wa_pakiti>/<njia_ya_moduli>.wave`
2. `<mzizi_wa_pakiti>/src/<njia_ya_moduli>.wave`

Mfano:

```wave
ingiza("math::core::vec");
```

Utafutaji:

- `<mzizi_wa_pakiti>/core/vec.wave`
- `<mzizi_wa_pakiti>/src/core/vec.wave`

---

## 6. Mifano ya Utekelezaji wa Ingizo la Nje

### 6.1 Mizizi ya Dep Moja Tu

Saraka:

```text
.vex/dep/
  hesabu/
    src/
      ongeza.wave
kuu.wave
```

Msimbo:

```wave
ingiza("math::add");
```

Utekelezaji:

```bash
wavec endesha kuu.wave --dep-root .vex/dep
```

### 6.2 Kushindwa kwa Mfuatano wa Mfuatano

```bash
wavec endesha kuu.wave \
  --dep-root .vex/dep \
  --dep-root ./muuzaji/dep
```

Ikiwa `math` ipo kwa pande zote mbili, kuna kosa. Inapaswa kuwekwa kama ifuatavyo.

```bash
wavec endesha kuu.wave \
  --dep-root .vex/dep \
  --dep-root ./muuzaji/dep \
  --dep math=./muuzaji/dep/math
```

---

## 7. Uchambuzi wa Jukumu la Vex

Muundo wa Ruhusa:

- `wavec`: hariri/kufunga/utekelezaji + ufafanuzi uliotajwa
- `vex`: usakinishaji/usimamizi wa utegemezi baada ya `wavec ...` --mizizi ya utegemezi ... --tegemezi ...\` ramani

Mfano:

```bash
# Vex inatekelezwa kwa ndani
wavec endesha kuu.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

Mfuatano huu unahamisha mhariri kwa urahisi na kudumisha moja kwa moja usimamizi wa pakiti.

---

## 8. Marejeo ya Haraka

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
wavec --whale build app.wave -c # TODO: imehifadhiwa, haijatekelezwa
```
