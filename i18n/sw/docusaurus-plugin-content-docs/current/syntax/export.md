---
sidebar_position: 9.5
---

# export

`export` hutoa kazi iliyotekelezwa kwa Wave kama alama ya nje ya linker. Ikiwa `extern` huleta kazi ya nje ndani ya Wave, basi `export` huruhusu kazi ya Wave kuitwa kutoka C, Rust, C++, Zig au lugha nyingine ya native kupitia faili object.

---

## Muhtasari

FFI ya Wave ina mielekeo miwili.

- `extern(c)` hutangaza kazi inayotolewa na maktaba ya nje ili msimbo wa Wave uweze kuiita.
- `export(c)` hutoa mwili wa kazi ya Wave kama alama ya nje ya ABI.

Miundo hii miwili hutumia umbo lilelile la kichwa cha ABI, lakini maana zake ni kinyume. Kwa `extern`, mwili wa kazi uko nje ya Wave. Kwa `export`, mwili wa kazi uko ndani ya Wave.

Kwa sasa ABI pekee ya export inayoungwa mkono ni `c`.

---

## Export kwa kazi moja

Muundo wa msingi ni:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Msimbo huu hutoa alama ya umma iitwayo `add`. Faili object inayozalishwa inaweza kuunganishwa na msimbo wa nje unaotarajia C ABI.

---

## Majina ya alama

Jina la kazi katika Wave na jina la alama ya linker linaloexportiwa yanaweza kuwa tofauti.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Hapa jina la Wave ni `add_i32`, lakini faili object inaonyesha `wave_add_i32`. Lugha za nje lazima zitangaze na ziite jina hilo la alama.

---

## Export kwa block

Kazi kadhaa zinazotumia ABI ileile zinaweza kuwekwa pamoja kwenye block.

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

Block export hutumia jina la kila kazi kama alama ya umma. `export(c, "symbol") { ... }` hairuhusiwi kwa sababu alias moja kwa kazi nyingi itasababisha mgongano wa alama.

---

## Kuita kutoka C

Jenga faili ya Wave kama faili object.

```bash
wavec build math.wave --emit=obj -o math.o
```

Tangaza alama iliyoexportiwa katika C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

Kisha unganisha msimbo wa C na faili object ya Wave kwa linker ya kawaida.

```bash
cc main.c math.o -o app
```

---

## extern na export

`extern(c)` inamaanisha Wave hutumia alama ya nje.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` inamaanisha msimbo wa nje unaweza kutumia alama ya Wave.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

Vyote viwili ni sehemu ya FFI, lakini mwelekeo ni tofauti.

---

## Vikwazo

- Ni `export(c)` pekee inayoungwa mkono.
- Kazi zilizoexportiwa haziwezi kuwa generic.
- Block export haiwezi kutumia alias moja ya alama kwa pamoja.
- Kwa maingiliano thabiti, tumia kwanza integer, floating-point, boolean na pointer.
- Aina za aggregate kama struct na array zinahitaji sheria kali zaidi za ABI na zinaweza kuthibitishwa baadaye.
- `export` ni muhimu zaidi kwa faili object na maktaba, si kwa executable rahisi.

---

## Matumizi yanayopendekezwa

- Kutoa kazi za msaada za Wave kama maktaba ya C ABI.
- Kuita kazi za Wave kutoka Rust, C, C++, Zig au lugha nyingine ya native.
- Kuunganisha taratibu moduli za `front`, `utils` au moduli native zisizo na runtime zilizoandikwa kwa Wave kwenye mfumo uliopo wa build.
- Kuruhusu Vex au chombo kingine cha build kuunganisha faili object za Wave katika mradi wa nje.
