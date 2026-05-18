---
sidebar_position: 9.5
---

# export

`export` Wave में लिखे गए फ़ंक्शन को बाहरी linker symbol के रूप में उपलब्ध कराता है। यदि `extern` बाहरी फ़ंक्शन को Wave में लाता है, तो `export` Wave फ़ंक्शन को C, Rust, C++, Zig या किसी अन्य native भाषा से object file के माध्यम से कॉल करने योग्य बनाता है।

---

## सारांश

Wave FFI दो दिशाओं में काम करता है।

- `extern(c)` बाहरी library द्वारा दिए गए फ़ंक्शन को घोषित करता है ताकि Wave कोड उसे कॉल कर सके।
- `export(c)` Wave फ़ंक्शन body को बाहरी ABI symbol के रूप में emit करता है।

दोनों रूपों का ABI header आकार समान है, लेकिन अर्थ उलटा है। `extern` में फ़ंक्शन body Wave के बाहर होती है। `export` में फ़ंक्शन body Wave के अंदर होती है।

अभी supported export ABI केवल `c` है।

---

## फ़ंक्शन स्तर export

मूल रूप यह है।

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

यह कोड `add` नाम का public symbol बनाता है। बना हुआ object file C ABI की अपेक्षा करने वाले बाहरी कोड से link किया जा सकता है।

---

## Symbol नाम

Wave फ़ंक्शन नाम और export किया गया linker symbol नाम अलग हो सकते हैं।

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

यहाँ Wave के अंदर नाम `add_i32` है, लेकिन object file `wave_add_i32` expose करता है। बाहरी भाषाओं को यही symbol नाम declare और call करना चाहिए।

---

## ब्लॉक export

एक ही ABI उपयोग करने वाले कई functions को एक block में रखा जा सकता है।

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

ब्लॉक export हर function नाम को public symbol के रूप में उपयोग करता है। `export(c, "symbol") { ... }` अनुमत नहीं है, क्योंकि कई functions के लिए एक alias symbol collision बनाएगा।

---

## C से call करना

Wave file को object file के रूप में build करें।

```bash
wavec build math.wave --emit=obj -o math.o
```

Export किए गए symbol को C में declare करें।

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

फिर C code और Wave object file को सामान्य linker से link करें।

```bash
cc main.c math.o -o app
```

---

## extern और export

`extern(c)` का अर्थ है कि Wave बाहरी symbol का उपयोग करता है।

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` का अर्थ है कि बाहरी code Wave symbol का उपयोग कर सकता है।

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

दोनों FFI का हिस्सा हैं, लेकिन दिशा अलग है।

---

## सीमाएँ

- केवल `export(c)` supported है।
- Exported functions generic नहीं हो सकते।
- ब्लॉक export एक shared symbol alias उपयोग नहीं कर सकता।
- स्थिर interop के लिए अभी integer, floating-point, boolean और pointer parameters तथा returns को प्राथमिकता दें।
- struct और array जैसे aggregate types को अधिक कठोर ABI नियम चाहिए और वे बाद में स्थिर किए जा सकते हैं।
- `export` मुख्य रूप से object files और libraries के लिए उपयोगी है, साधारण executable के लिए नहीं।

---

## अनुशंसित उपयोग

- Wave utility functions को C ABI library के रूप में देना।
- Rust, C, C++, Zig या किसी अन्य native भाषा से Wave functions call करना।
- Wave में लिखे `front`, `utils` या runtime-free native modules को मौजूदा build system से धीरे-धीरे जोड़ना।
- Vex या किसी अन्य build tool को Wave object files बाहरी project में link करने देना।
