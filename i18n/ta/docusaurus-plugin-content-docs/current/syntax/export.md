---
sidebar_position: 9.5
---

# export

`export` Wave-ல் எழுதப்பட்ட function-ஐ வெளிப்புற linker symbol ஆக வெளியிடுகிறது. `extern` வெளிப்புற function-ஐ Wave-க்கு கொண்டு வந்தால், `export` Wave function-ஐ C, Rust, C++, Zig அல்லது வேறு native மொழியிலிருந்து object file மூலம் அழைக்க முடியும்.

---

## மேலோட்டம்

Wave FFI இரண்டு திசைகளில் செயல்படுகிறது.

- `extern(c)` வெளிப்புற library வழங்கும் function-ஐ அறிவித்து Wave code அதை அழைக்க அனுமதிக்கிறது.
- `export(c)` Wave function body-ஐ வெளிப்புற ABI symbol ஆக emit செய்கிறது.

இரண்டும் ஒரே ABI header வடிவத்தை பகிர்கின்றன, ஆனால் பொருள் எதிர்மாறானது. `extern`-இல் function body Wave-க்கு வெளியே இருக்கும். `export`-இல் function body Wave-க்குள் இருக்கும்.

தற்போது ஆதரிக்கப்படும் export ABI `c` மட்டும்.

---

## Function நிலை export

அடிப்படை வடிவம்:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

இந்த code `add` என்ற public symbol-ஐ உருவாக்குகிறது. உருவான object file C ABI எதிர்பார்க்கும் வெளிப்புற code உடன் link செய்யலாம்.

---

## Symbol பெயர்கள்

Wave function பெயரும் export செய்யப்பட்ட linker symbol பெயரும் வேறுபடலாம்.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

இங்கு Wave பெயர் `add_i32`, ஆனால் object file `wave_add_i32`-ஐ வெளிப்படுத்துகிறது. வெளிப்புற மொழிகள் இந்த symbol பெயரை declare செய்து call செய்ய வேண்டும்.

---

## பிளாக் export

ஒரே ABI பயன்படுத்தும் பல functions-ஐ ஒரு block-ல் குழுவாக்கலாம்.

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

பிளாக் export ஒவ்வொரு function பெயரையும் public symbol ஆக பயன்படுத்தும். `export(c, "symbol") { ... }` அனுமதிக்கப்படாது, ஏனெனில் பல functions-க்கு ஒரே alias symbol collision உருவாக்கும்.

---

## C இலிருந்து அழைப்பது

Wave file-ஐ object file ஆக build செய்யவும்.

```bash
wavec build math.wave --emit=obj -o math.o
```

Export செய்யப்பட்ட symbol-ஐ C-ல் declare செய்யவும்.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

பின்னர் C code மற்றும் Wave object file-ஐ சாதாரண linker மூலம் link செய்யவும்.

```bash
cc main.c math.o -o app
```

---

## extern மற்றும் export

`extern(c)` என்பது Wave வெளிப்புற symbol-ஐ பயன்படுத்துகிறது என்பதாகும்.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` என்பது வெளிப்புற code Wave symbol-ஐ பயன்படுத்த முடியும் என்பதாகும்.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

இரண்டும் FFI-யின் பகுதி, ஆனால் திசை வேறுபடும்.

---

## வரம்புகள்

- `export(c)` மட்டும் ஆதரிக்கப்படுகிறது.
- Export செய்யப்பட்ட functions generic ஆக இருக்க முடியாது.
- பிளாக் export ஒரு shared symbol alias பயன்படுத்த முடியாது.
- நிலையான interop-க்கு தற்போதைக்கு integer, floating-point, boolean மற்றும் pointer-ஐ முன்னுரிமை கொடுக்கவும்.
- struct மற்றும் array போன்ற aggregate types-க்கு கடுமையான ABI விதிகள் தேவை; பின்னர் stable ஆகலாம்.
- `export` முக்கியமாக object files மற்றும் libraries-க்கு பயனுள்ளதாகும்; சாதாரண executable-க்கு அவசியமில்லை.

---

## பரிந்துரைக்கப்படும் பயன்பாடுகள்

- Wave utility functions-ஐ C ABI library ஆக வழங்குதல்.
- Rust, C, C++, Zig அல்லது வேறு native மொழியிலிருந்து Wave functions அழைத்தல்.
- Wave-ல் எழுதப்பட்ட `front`, `utils` அல்லது runtime இல்லா native modules-ஐ இருக்கும் build system-க்கு படிப்படியாக இணைத்தல்.
- Vex அல்லது வேறு build tool Wave object files-ஐ வெளிப்புற project-ல் link செய்ய அனுமதித்தல்.
