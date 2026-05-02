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

उदाहरण:

```bash
wavec -O3 मुख्य.wave चलाएँ
```

---

## 4.2 डिबग आउटपुट

```bash
wavec --debug-wave=tokens,ast,ir मुख्य.wave चलाएँ
```

स्वीकृत आइटम:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 लिंक विकल्प

```bash
wavec बिल्ड app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` या `--link <lib>`
- `-L<path>` या `-L <path>`

`wavec` लिंक करते समय आंतरिक रूप से `-l<lib>`, `-L<path>` के रूप में पारित होता है।

---

## 4.4 बाहरी निर्भरता विकल्प (महत्वपूर्ण)

बाहरी इंपोर्ट (`pkg::...`) की व्याख्या के लिए विकल्प।

### `--dep-root <dir>`

पैकेज रूट डायरेक्टरी उम्मीदवार जोड़ें।

```bash
wavec run app.wave --dep-root .vex/dep
```

पैकेज `math` खोजते समय:

- `.vex/dep/math` की जाँच करें

कई बार निर्दिष्ट किया जा सकता है:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

पैकेज नाम को एक विशिष्ट पथ पर तय करता है।

```bash
wavec run app.wave --dep math=.vex/dep/math
```

नियम:

- `name` प्रारूप: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` का हमेशा `name=path` प्रारूप होना चाहिए
- उसी पैकेज नाम को दोबारा निर्दिष्ट करने पर त्रुटि

---

## 4.5 बैकएंड विकल्प (`--llvm`, `--whale`)

बैकएंड नियंत्रण विकल्प केवल `--llvm` के बाद ही व्याख्या किए जाते हैं।

```bash
wavec --llvm --टार्गेट=x86_64-unknown-linux-gnu बिल्ड app.wave -c
```

समर्थित आइटम (सारांश):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (दोहराया जा सकता है)
- `-C no-default-libs`

वर्तमान `wavec print target-list` के अनुसार प्रमुख लक्ष्य:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` वर्तमान में आरक्षित डमी ध्वज है, और वास्तविक बैकएंड पाइपलाइन अभी तक लागू नहीं की गई है (TODO)।

---

## 5. आयात व्याख्या नियम

वेव आयात तीन प्रकारों में विभाजित होता है।

1. स्थानीय आयात
2. मानक आयात
3. बाहरी पैकेज आयात

## 5.1 स्थानीय

```wave
import("फू");
import("path/to/mod.wave");
```

मानक फ़ाइल निर्देशिका में `<path>.wave` खोजा जाता है।

## 5.2 मानक

```wave
import("std::io::format");
```

`~/.wave/lib/wave/std/...` पथ का उपयोग किया जाता है।

## 5.3 बाहरी पैकेज

```wave
import("math::add");
import("json::parser::core");
```

प्रारूप:

- कम से कम `पैकेज::मॉड्यूल` के 2 खंड आवश्यक हैं।

पैकेज मूल निर्धारित करने की क्रम:

1. `--dep name=path` निर्दिष्ट मानचित्रण
2. प्रत्येक `--dep-root` में `<root>/<package>` खोज

अगर समान पैकेज कई dep-root में एक साथ पाया जाता है:

- स्वचालित चयन नहीं होता और **अस्पष्टता त्रुटि** होती है।
- इसे `--dep name=path` द्वारा निश्चित करना होगा।

मॉड्यूल फ़ाइल खोज क्रम:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

उदाहरण:

```wave
import("math::core::vec");
```

खोज:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. बाहरी आयात का व्यावहारिक उदाहरण

### 6.1 एकल dep-root

निर्देशिका:

```text
.vex/dep/
  गणित/
    src/
      जोड़ें.wave
main.wave
```

कोड:

```wave
import("math::add");
```

निष्पादन:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 अस्पष्टता समाधन

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

अगर दोनों में `गणित` हो, तो त्रुटि होती है। नीचे दिए गए अनुसार सुनिश्चित करें।

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Vex के साथ कार्य भूमिका विभाजन

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
