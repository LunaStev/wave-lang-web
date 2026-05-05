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
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` 또는 `--link <lib>`
- `-L<path>` 또는 `-L <path>`

`wavec`는 링크 시 내부적으로 `-l<lib>`, `-L<path>` 형태로 전달합니다.

---

## 4.4 외부 의존성 옵션 (중요)

외부 import(`pkg::...`) 해석용 옵션입니다.

### `--dep-root <dir>`

패키지 루트 디렉터리 후보를 추가합니다.

```bash
wavec run app.wave --dep-root .vex/dep
```

패키지 `math`를 찾을 때:

- `.vex/dep/math` 를 검사

여러 번 지정 가능:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

패키지 이름을 특정 경로에 고정합니다.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

규칙:

- `name` 형식: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep`는 반드시 `name=path` 형식
- 같은 패키지명을 중복 지정하면 에러

---

## 4.5 백엔드 옵션 (`--llvm`, `--whale`)

백엔드 제어 옵션은 `--llvm` 뒤에서만 해석됩니다.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

지원 항목(요약):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (반복 가능)
- `-C no-default-libs`

현재 `wavec print target-list` 기준 주요 타깃:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale`은 현재 예약된 더미 플래그이며, 실제 백엔드 파이프라인은 아직 미구현(TODO)입니다.

---

## 5. Import 해석 규칙

Wave import는 다음 3가지로 분기됩니다.

1. 로컬 import
2. std import
3. 외부 패키지 import

## 5.1 로컬

```wave
import("foo");
import("path/to/mod.wave");
```

기준 파일 디렉터리에서 `<path>.wave`를 찾습니다.

## 5.2 std

```wave
import("std::io::format");
```

`~/.wave/lib/wave/std/...` 경로를 사용합니다.

## 5.3 외부 패키지

```wave
import("math::add");
import("json::parser::core");
```

형식:

- 최소 `package::module` 2세그먼트 필요

패키지 루트 결정 순서:

1. `--dep name=path` 명시 매핑
2. 각 `--dep-root`에서 `<root>/<package>` 검색

동일 패키지가 여러 dep-root에서 동시에 발견되면:

- 자동 선택하지 않고 **모호성 에러**
- `--dep name=path`로 고정해야 함

모듈 파일 탐색 순서:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

예:

```wave
import("math::core::vec");
```

탐색:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. 외부 import 실전 예시

### 6.1 단일 dep-root

디렉터리:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

코드:

```wave
import("math::add");
```

실행:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 모호성 해소

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

양쪽에 `math`가 있으면 에러가 납니다. 아래처럼 고정합니다.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Vex와의 역할 분리

권장 구조:

- `wavec`: 컴파일/링크/실행 + 명시된 의존성 해석
- `vex`: 의존성 설치/관리 후 `wavec ... --dep-root ... --dep ...` 호출

예:

```bash
# 내부적으로 vex가 수행
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

이 모델은 컴파일러를 단순하고 결정적으로 유지하면서, 패키지 매니저가 자동화를 담당하게 합니다.

---

## 8. 빠른 참조

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
