---
sidebar_position: 6
---

# `wavec` CLI संदर्भ

यह दस्तावेज़ **वर्तमान वेव कंपाइलर (`wavec`) कार्यान्वयन मानक** के CLI क्रियाविन्यास को स्पष्टता से समझाता है।

मुख्य सिद्धांत:

- `wavec` एक कंपाइलर है।
- पैकेज स्थापना/संकल्प (लॉकफाईल, रजिस्ट्री, डाउनलोड) `wavec` की जिम्मेदारी नहीं है।
- बाहरी निर्भरताएँ `wavec` का निष्पादन करते समय **स्पष्ट CLI तर्क** के रूप में पास की जाती हैं।

---

## 1. मूल प्रारूप

```bash
wavec [वैश्विक-विकल्प] <कमांड> [कमांड-विकल्प]
```

उदाहरण:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. आदेश पार्सिंग नियम (महत्वपूर्ण)

`wavec` पहले सभी аргументов में से **ग्लोबल विकल्प** को स्कैन करता है, फिर बचे हुए аргументов को `<कमांड>` के रूप में पार्स करता है।

अर्थात, ग्लोबल विकल्प का स्थान लचीला होता है।

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

उपरोक्त तीनों मान्य हैं।

`--` का उपयोग करने पर, उसके बाद ग्लोबल विकल्प स्कैनिंग रुक जाती है और कमांड क्षेत्र में चली जाती है।

```bash
wavec -- run main.wave
```

---

## 3. आदेश

## 3.1 `run <file>`

वेव फ़ाइल को संकलित और चलाया जाता है।

```bash
wavec run hello.wave
```

क्रिया:

1. स्रोत पार्सिंग + इम्पोर्ट विस्तार
2. LLVM IR निर्माण
3. नेटिव बाइनरी लिंक (`target/<file_stem>`) के साथ
4. निष्पादन

विशेषताएँ:

- निष्पादित प्रोग्राम के समापन कोड को `wavec` स्थानांतरित करता है।

---

## 3.2 `build <file>`

एक्जीक्यूटेबल फ़ाइल (exe) बनाई जाती है।

```bash
wavec build app.wave
```

आउटपुट बाइनरी:

- `target/<file_stem>`

## 3.3 `build` विकल्प (`-o`, `-c`)

`build` कमांड से आउटपुट फ़ाइल नाम और आउटपुट प्रारूप को विकल्प द्वारा नियंत्रित किया जा सकता है।

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: आउटपुट फ़ाइल नाम निर्दिष्ट करता है।
  - डिफ़ॉल्ट (`-c` नहीं): एक्जीक्यूटेबल फ़ाइल आउटपुट मार्ग निर्दिष्ट करता है।
  - `-c` के साथ: ऑब्जेक्ट फ़ाइल आउटपुट पथ निर्दिष्ट करता है।
- `-c`: लिंक को छोड़ता है और केवल ऑब्जेक्ट फ़ाइल बनाता है।
- `-c` का उपयोग करते समय, ऑब्जेक्ट पथ को stdout में आउटपुट करता है।

डिफ़ॉल्ट क्रिया:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (पथ का आउटपुट)

फ्रीस्टैंडिंग कर्नेल ऑब्जेक्ट उदाहरण:

```bash
wavec --llvm \
 --target=x86_64-unknown-none-elf \
 build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` को भी उसी तरह से उपयोग किया जा सकता है।

---

## 3.4 `install std`, `update std`

स्टैंडर्ड लाइब्रेरी इंस्टॉल/अपडेट कमांड है।

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

## 4. ग्लोबल विकल्प

## 4.1 अनुकूलन

स्वीकृत मान:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

예:

```bash
wavec -O3 run main.wave
```

---

## 4.2 디버그 출력

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

허용 항목:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 링크 옵션

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
