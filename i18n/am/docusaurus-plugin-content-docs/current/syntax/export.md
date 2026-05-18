---
sidebar_position: 9.5
---

# export

`export` በWave የተተገበረ ፋንክሽንን እንደ ውጫዊ የlinker ምልክት ያቀርባል። `extern` ውጫዊ ፋንክሽንን ወደ Wave ካስገባ፣ `export` ደግሞ የWave ፋንክሽንን ከ C፣ Rust፣ C++፣ Zig ወይም ከሌላ native ቋንቋ በobject file በኩል እንዲጠራ ያደርጋል።

---

## አጠቃላይ እይታ

የWave FFI ሁለት አቅጣጫዎች አሉት።

- `extern(c)` በውጫዊ ላይብረሪ የሚቀርብ ፋንክሽንን ያውጃል፣ የWave ኮድም ሊጠራው ይችላል።
- `export(c)` የWave ፋንክሽን bodyን እንደ ውጫዊ ABI ምልክት ያመነጫል።

ሁለቱም ተመሳሳይ ABI header ቅርጽ ይጋራሉ፣ ትርጉማቸው ግን ተቃራኒ ነው። በ`extern` የፋንክሽኑ body ከWave ውጭ ነው። በ`export` የፋንክሽኑ body በWave ውስጥ ነው።

አሁን የሚደገፈው export ABI `c` ብቻ ነው።

---

## በፋንክሽን ደረጃ export

መሠረታዊ ቅርጹ ይህ ነው።

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

ይህ ኮድ `add` የሚባል የሕዝብ ምልክት ይፈጥራል። የተፈጠረው object file C ABI ከሚጠብቅ ውጫዊ ኮድ ጋር ሊlink ይችላል።

---

## የምልክት ስሞች

የWave ፋንክሽን ስምና የተexport የlinker ምልክት ስም ሊለያዩ ይችላሉ።

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

እዚህ የWave ስሙ `add_i32` ነው፣ ግን object file `wave_add_i32`ን ያቀርባል። ውጫዊ ቋንቋዎች ይህን የምልክት ስም ማወጅና መጥራት አለባቸው።

---

## በblock export

ተመሳሳይ ABI የሚጠቀሙ ብዙ ፋንክሽኖች በአንድ block ውስጥ ሊቀመጡ ይችላሉ።

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

ብሎክ export የእያንዳንዱን ፋንክሽን ስም እንደ የሕዝብ ምልክት ይጠቀማል። `export(c, "symbol") { ... }` አይፈቀድም፣ ምክንያቱም ለብዙ ፋንክሽኖች አንድ alias መጠቀም የምልክት ግጭት ያመጣል።

---

## ከ C መጥራት

የWave ፋይሉን እንደ object file ይbuild ያድርጉ።

```bash
wavec build math.wave --emit=obj -o math.o
```

በ C ውስጥ የተexport ምልክቱን ያውጁ።

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

ከዚያ የ C ኮድንና የWave object fileን በመደበኛ linker ያገናኙ።

```bash
cc main.c math.o -o app
```

---

## extern እና export

`extern(c)` Wave ውጫዊ ምልክት እንደሚጠቀም ማለት ነው።

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` ውጫዊ ኮድ የWave ምልክት መጠቀም እንደሚችል ማለት ነው።

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

ሁለቱም የFFI ክፍል ናቸው፣ አቅጣጫቸው ግን ይለያል።

---

## ገደቦች

- `export(c)` ብቻ ይደገፋል።
- Export የተደረጉ ፋንክሽኖች generic መሆን አይችሉም።
- ብሎክ export አንድ የጋራ የምልክት alias መጠቀም አይችልም።
- ለተረጋጋ interop አሁን integer፣ floating-point፣ boolean እና pointer መጠቀም ይመከራል።
- struct እና array ያሉ aggregate types ጥብቅ ABI ሕጎችን ይፈልጋሉ፣ በኋላም ሊረጋጉ ይችላሉ።
- `export` በዋናነት ለobject files እና libraries ጠቃሚ ነው፣ ለቀላል executable ብዙ ጊዜ አያስፈልግም።

---

## የሚመከሩ አጠቃቀሞች

- የWave utility functionsን እንደ C ABI library ማቅረብ።
- የWave functionsን ከ Rust፣ C፣ C++፣ Zig ወይም ሌላ native ቋንቋ መጥራት።
- በWave የተጻፉ `front`፣ `utils` ወይም runtime-free native modulesን ቀስ በቀስ ከነባር build system ጋር ማገናኘት።
- Vex ወይም ሌላ build tool የWave object filesን ወደ ውጫዊ project እንዲlink ማድረግ።
