---
sidebar_position: 9.5
---

# export

`export` Wave లో అమలు చేసిన function ను బాహ్య linker symbol గా బయటకు ఇస్తుంది. `extern` బాహ్య function ను Wave లోకి తీసుకువస్తే, `export` Wave function ను C, Rust, C++, Zig లేదా ఇతర native భాషల నుండి object file ద్వారా call చేయగలిగేలా చేస్తుంది.

---

## అవలోకనం

Wave FFI రెండు దిశల్లో పనిచేస్తుంది.

- `extern(c)` బాహ్య library ఇచ్చే function ను ప్రకటిస్తుంది, తద్వారా Wave code దాన్ని call చేయగలదు.
- `export(c)` Wave function body ను బాహ్య ABI symbol గా emit చేస్తుంది.

రెండు రూపాలు ఒకే ABI header ఆకారాన్ని పంచుకుంటాయి, కానీ అర్థం విరుద్ధం. `extern` లో function body Wave బయట ఉంటుంది. `export` లో function body Wave లోపల ఉంటుంది.

ప్రస్తుతం support అయ్యే export ABI `c` మాత్రమే.

---

## Function స్థాయి export

ప్రాథమిక రూపం ఇది:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

ఈ code `add` అనే public symbol ను సృష్టిస్తుంది. తయారైన object file ను C ABI ఆశించే బాహ్య code తో link చేయవచ్చు.

---

## Symbol పేర్లు

Wave function పేరు మరియు export అయిన linker symbol పేరు వేర్వేరుగా ఉండవచ్చు.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

ఇక్కడ Wave పేరు `add_i32`, కానీ object file `wave_add_i32` ను expose చేస్తుంది. బాహ్య భాషలు ఈ symbol పేరునే declare చేసి call చేయాలి.

---

## బ్లాక్ export

ఒకే ABI ఉపయోగించే అనేక functions ను ఒక block లో ఉంచవచ్చు.

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

బ్లాక్ export ప్రతి function పేరును public symbol గా ఉపయోగిస్తుంది. `export(c, "symbol") { ... }` అనుమతించబడదు, ఎందుకంటే అనేక functions కు ఒకే alias ఇస్తే symbol collision వస్తుంది.

---

## C నుండి call చేయడం

Wave file ను object file గా build చేయండి.

```bash
wavec build math.wave --emit=obj -o math.o
```

Export అయిన symbol ను C లో declare చేయండి.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

తర్వాత C code మరియు Wave object file ను సాధారణ linker తో link చేయండి.

```bash
cc main.c math.o -o app
```

---

## extern మరియు export

`extern(c)` అంటే Wave బాహ్య symbol ను ఉపయోగిస్తుంది.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` అంటే బాహ్య code Wave symbol ను ఉపయోగించగలదు.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

రెండూ FFI లో భాగమే, కానీ దిశ వేరు.

---

## పరిమితులు

- `export(c)` మాత్రమే support అవుతుంది.
- Export అయిన functions generic గా ఉండలేవు.
- బ్లాక్ export ఒక shared symbol alias ను ఉపయోగించలదు.
- స్థిరమైన interop కోసం ప్రస్తుతం integer, floating-point, boolean మరియు pointer parameters, return values ను ప్రాధాన్యం ఇవ్వండి.
- struct మరియు array వంటి aggregate types కు మరింత కఠినమైన ABI నియమాలు అవసరం; అవి తర్వాత stabilize కావచ్చు.
- `export` ప్రధానంగా object files మరియు libraries కోసం ఉపయోగకరం; సాధారణ executable కోసం సాధారణంగా అవసరం లేదు.

---

## సిఫారసు చేసిన ఉపయోగాలు

- Wave utility functions ను C ABI library గా అందించడం.
- Rust, C, C++, Zig లేదా ఇతర native భాషల నుండి Wave functions call చేయడం.
- Wave లో రాసిన `front`, `utils` లేదా runtime-free native modules ను ఉన్న build system కు క్రమంగా కలపడం.
- Vex లేదా ఇతర build tool Wave object files ను బాహ్య project లో link చేయడానికి అనుమతించడం.
