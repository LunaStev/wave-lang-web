---
sidebar_position: 7
---

# बैकएंड विकल्प (`--llvm`, `--whale`)

यह दस्तावेज़ `wavec` के बैकएंड से संबंधित CLI विकल्पों का वर्णन करता है।

महत्वपूर्ण सिद्धांत:

- `wavec` कोई पैकेज प्रबंधक नहीं है।
- बैकएंड संचालन को यथासंभव **सटीक तर्कों** के माध्यम से नियंत्रित किया जाता है।
- बैकएंड के विस्तृत विकल्प केवल `--llvm` के बाद ही व्याख्या किए जाते हैं।

---

## 1. बैकएंड चयनकर्ता

## 1.1 `--llvm`

`--llvm` स्वयं बैकएंड विकल्प ब्लॉक का प्रारंभिक मार्कर है।

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

जैसा कि ऊपर दिखाया गया है, केवल समर्थित तर्क `--llvm` के बाद आने वाले तर्कों में से LLVM बैकएंड सेटिंग के रूप में संसाधित होते हैं।

## 1.2 `--whale` (वर्तमान में TODO)

वर्तमान में `--whale` एक **आरक्षित डमी फ्लैग** है।

- पार्सर पहचानता है।
- वास्तविक Whale बैकएंड पाइपलाइन अभी तक जुड़ा नहीं है।
- प्रयोग करने पर TODO त्रुटि के साथ समाप्त होता है।

---

## 2. `--llvm` के बाद समर्थित विकल्प

## 2.1 लक्ष्य/कोडजन

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

प्रतिबिंबित बिंदु:

- आईआर निर्माण (टारगेटमशीन) चरण: `टारगेट`, `सीपीयू`, `फीचर्स`
- ऑब्जेक्ट/लिंक चरण (क्लैंग कॉल): `टारगेट`, `एबीआई`

वर्तमान में मुख्य लक्षित ट्रिपल्स का दस्तावेज़ीकरण करने के लिए:

- लिनक्स: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- डार्विन: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- फ्रीस्टैंडिंग: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 टूलचैन/लिंक

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (दोहराया जा सकता है)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

प्रतिबिंबित बिंदु:

- ऑब्जेक्ट निर्माण (क्लैंग `-c`) में `--sysroot`
- 링크 단계에서 linker override, raw link arg 주입, link-sysroot 주입
- `-C no-default-libs` के उपयोग के समय स्वत: `-lc -lm` निष्क्रियता

---

## 3. पार्सिंग नियम (महत्वपूर्ण)

`--llvm` का उपयोग नहीं किया जाता है, तो बैकएंड के विस्तृत विकल्प ग्लोबल विकल्प के रूप में व्याख्या नहीं किए जाते हैं।

उदाहरण के लिए, नीचे एक त्रुटि है।

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

निश्चित रूप से नीचे की तरह लिखा होना चाहिए।

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. उपयोग उदाहरण

मूल ऑब्जेक्ट निर्माण:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

फ्रीस्टैंडिंग कर्नेल ऑब्जेक्ट निर्माण:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

कस्टम लिंक:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

libc/libm ऑटो लिंक निष्क्रिय करें:

```bash
wavec --llvm -C no-default-libs build app.wave
```

`--freestanding` का उपयोग करने से यह आंतरिक रूप से `-C no-default-libs` के समान कार्य करता है, और इसे उन बिल्ड के लिए अनुकूलित किया जाता है जो कर्नेल/बूट कोड जैसे लिए रनटाइम डिफॉल्ट लाइब्रेरियों पर निर्भर नहीं होते हैं।

---

## 5. स्थिति सारांश

- LLVM बैकेंड: चालू
- व्हेल बैकएंड: आरक्षित(TODO), अपूर्ण
