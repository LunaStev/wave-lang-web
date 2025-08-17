---
sidebar_position: 1
---

# Majukumu na Vigezo

## Utangulizi

Falsafa kuu ya muundo wa lugha ya programu ya Wave ni kutoa mazingira madhubuti na yenye kubadilika ya maendeleo ya programu kupitia usawa wa utendaji wa kiwango cha chini na muundo wa kiwango cha juu.
Sehemu hii inatoa utangulizi kwa vipengele vya kimsingi vya programu ya Wave, ambavyo ni majukumu na vigezo. Vipengele hivi ni muhimu kwa kupanga mantiki na kudhibiti data ndani ya programu.
Kwa kuelewa jinsi ya kufafanua na kushughulikia majukumu na vigezo, unaweza kutumia uwezo wa Wave kwa upeo wake kamili.

---

## Jukumu

Jukumu katika Wave hutumika kama **kizuizi cha msimbo kinachoweza kutumika tena** na kinaweza kutekelezwa kwa uhuru.
Jukumu hufunga tabia mahususi na kuruhusu kuitwa inapohitajika kote kwenye programu.
Hii inakuwezesha kutekeleza hesabu, kudhibiti kazi za I/O, au kutenganisha msimbo katika vitengo vinavyoweza kudhibitiwa.

Sahihi ya jukumu katika Wave huanza na neno muhimu `fun` na inajumuisha jina la jukumu, vigezo (ikiwa vipo), na mwili wa jukumu uliofumbwa katika mabano `{}`.

### Kufafanua Jukumu

Jukumu la msingi katika Wave linafafanuliwa kama ifuatavyo:

```wave
fun kuu() {
    // Andika msimbo hapa
}
```

- Jukumu la `kuu` ni lango la kuingia kwa utekelezaji wa programu na linahitajika kila mara.
- Jukumu linaweza kuwa na vigezo na linaweza kurudisha thamani. Aina ya kurudisha huwekwa baada ya jina la kazi.

### Mfano: Kazi rahisi

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // kuita kazi ya kuongeza
    println(result);            // chapisha: 12
}
```

Katika mfano huo:

- Kazi ya `add` inachukua nambari mbili kamili `a` na `b` na kurudisha jumla.
- Kazi ya `main` inaita `add` na kuchapisha matokeo.

## Kigezo

Vigezo hutumika kuhifadhi na kudhibiti data katika programu.
Wave inasaidia tamko la vigezo hivyo kutoa udhibiti wa msanidi programu kwenye usimamizi wa data kama **kigezo kinachoweza kubadilika** na **kigezo kisichobadilika**.

### Kigezo kinachoweza kubadilika

Katika Wave, kigezo kwa default kinaweza kubadilika (**mutable**). Hii ina maana kuwa thamani inaweza kubadilishwa wakati wa kutekeleza programu.

Vigezo vinavyoweza kubadilika vinatangazwa kwa kutumia neno kuu `var`.

```wave
var x :i32 = 10; // kigezo kinachoweza kubadilika
x = 20;
```

Katika mfano huo:

- `x` ni kigezo kinachoweza kubadilika ambacho kina thamani ya awali `10` na inaweza kubadilishwa hadi `20`.

### Kigezo kisichobadilika

Kikitangazwa kama kigezo kisichobadilika (**immutable**), thamani haiwezi kubadilishwa mara imepangwa.

Vigezo visivyobadilika vinatangazwa kwa kutumia neno kuu `let`.

```wave
let y :i32 = 5;         // kigezo kisichobadilika
// y = 10;              // kosa: vigezo visivyobadilika haviwezi kubadilishwa thamani.
```

Hapa:

- `y` ni kigezo kisichobadilika na mabadiliko yoyote itasababisha kosa la uunganishaji.

Lakini unapotaka `let` kutumika kwa kigezo kinachoweza kubadilika, unaweza kutumia maneno `mut` kwa kigezo kinachobadilika kwa muda.

```wave
let mut y :i32 = 5;
y = 10;
```

### Mfano wa tamko la kigezo

Mfano wa kutangaza vigezo vya aina mbalimbali vinavyoweza na visivyoweza kubadilika ni kama ifuatavyo:

```wave
var x :i32 = 10;                    // kigezo cha nambari kinachoweza kubadilika
let y :f64 = 3.14159;               // kigezo cha kudumu cha kipointi cha kufloati
var name :str = "Wave";             // kigezo cha mfuatano kinachoweza kubadilika
let is_active :bool = true;         // kigezo cha mantiki kisichobadilika
```

- `x` ni nambari ambayo inaweza kubadilika.
- `y` ni nambari ya pointi ya kudumu ya kipointi cha kufloati.
- `name` ni mfuatano unaoweza kubadilika.
- `is_active` ni thamani ya mantiki isiyobadilika.

Katika Wave, tunatumia maneno kuu ya `var` ili kutangaza vigezo ambavyo vinaweza kubadilika, wakati `let` inatumika kwa kigezo ambacho hakibadiliki baada ya kutengwa awali.

Kwa kutofautisha vigezo vinavyoweza kubadilika na visivyobadilika, Wave inafanya iwe rahisi kudhibiti mwendelezo wa data na hali ya programu.
Hii inaruhusu kuandika misimbo thabiti na inayoweza kukadiriwa vizuri.