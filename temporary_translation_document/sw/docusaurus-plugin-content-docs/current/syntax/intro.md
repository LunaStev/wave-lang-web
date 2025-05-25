---
sidebar_position: 1
---

# Fungsi na Varyabili

## Utangulizi

Falsafa kuu ya muundo wa lugha ya Wave ni kutoa mazingira bora na ya kubadilika kwa maendeleo ya programu kwa kuzingatia uwiano kati ya utendaji wa kiwango cha chini na uratibu wa kiwango cha juu.
Sehemu hii inatoa utangulizi wa vipengele vya kimsingi vya programu za Wave, kama vile **fungsi** na **varyabili**. Vipengele hivi ni muhimu katika kujenga mantiki ya programu na kusimamia data ndani ya programu.
Kuelewa jinsi ya kutunga na kutumia functions na variables kutakusaidia kutumia Wave kwa ufanisi zaidi.

---

## Fungsi
Katika Wave, **function** ni kipengele cha msimbo kinachoweza kutekelezwa kwa kujitegemea, na ni **block ya msimbo inayoweza kutumika tena**.
Functions zinatumika kuficha vitendo maalum na kuruhusu kuitwa wakati wowote ndani ya programu.
Hii inaruhusu kufanya hesabu, kudhibiti kazi za I/O, au kugawa msimbo katika sehemu ndogo na rahisi kusimamia.

Sahihi ya function katika Wave huanza kwa neno `fun`, ikifuatiwa na jina la function, vigezo (ikiwa vinahitajika), na mwili wa function unaozungushiwa na `{}`.

### Kufafanua Function
Function ya msingi katika Wave inafafanuliwa kama ifuatavyo:

```wave
fun main() {
    // Andika msimbo hapa
}
```

* Function ya `main` ni pointi ya kuingia kwa utekelezaji wa programu, na inahitajika kila wakati.
* Function inaweza kuwa na vigezo na inaweza kurudisha thamani. Aina ya thamani inayorudishwa inafafanuliwa baada ya jina la function.

### Mfano: Function Rahisi

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Inaita function ya add
    println(result);            // Inachapisha: 12
}
```

Katika mfano huu:

* Function ya `add` inachukua nambari mbili `a` na `b` kisha inarudisha jumla yao.
* Function ya `main` inaita add kisha inachapisha matokeo.

## Varyabili
Varyabili hutumika kuhifadhi na kudhibiti data ndani ya programu.
Wave inasaidia **varyabili zinazoweza kubadilika (mutable variables)** na **varyabili zisizoweza kubadilika (immutable variables)**, na kutoa udhibiti kwa mtengenezaji kuhusu jinsi ya kusimamia data.

### Varyabili Zinazoweza Kubadilika
Kwa kawaida, varyabili katika Wave ni **zinazoweza kubadilika**. Hii inamaanisha kwamba thamani ya variable inaweza kubadilishwa wakati wa utekelezaji wa programu.

Varyabili zinazoweza kubadilika zinatangazwa kwa kutumia neno `var`.
```wave
var x :i32 = 10; // Varyabili inayoweza kubadilika
x = 20;
```

Katika mfano huu:
* `x`는 가변 변수로, 초기값 `10`을 가지며 이후에 `20`으로 값을 변경할 수 있습니다.

### Varyabili Zisizoweza Kubadilika
Varyabili zinapokuwa **zisizoweza kubadilika**, thamani yake haiwezi kubadilishwa baada ya kuiweka.

Varyabili zisizoweza kubadilika zinatangazwa kwa kutumia neno `var imm`.
```wave
var imm y :i32 = 5;     // Varyabili isiyoweza kubadilika
// y = 10;              // Hitilafu: Varyabili isiyoweza kubadilika haiwezi kubadilishwa
```

Katika mfano huu:
* `y` ni variable isiyoweza kubadilishwa, na kama utajaribu kubadilisha thamani yake, utapata hitilafu ya kutolewa wakati wa uundaji wa programu.

### Mfano wa Tangazo la Varyabili
Mfano wa kutangaza varyabili zinazoweza kubadilika na zisizoweza kubadilika kwa aina mbalimbali ni kama ifuatavyo:

```wave
var x :i32 = 10;                    // Varyabili inayoweza kubadilika ya nambari nzito
var imm y :f64 = 3.14159;           // Varyabili isiyoweza kubadilika ya nambari za desimali
var name :str = "Wave";             // Varyabili inayoweza kubadilika ya maandishi
var imm is_active :bool = true;     // Varyabili isiyoweza kubadilika ya thamani ya mantiki
```

* `x` ni variable inayoweza kubadilika ya nambari nzito.
* `y` ni variable isiyoweza kubadilika ya nambari za desimali.
* `name` ni variable inayoweza kubadilika ya maandishi.
* `is_active` ni variable isiyoweza kubadilika ya thamani ya mantiki.

Katika Wave, `var` hutumika kutangaza variables zinazoweza kubadilika, na `var imm` hutumika kutangaza variables zisizoweza kubadilika baada ya kupewa thamani ya awali.

Kwa kutofautisha kati ya variables zinazoweza kubadilika na zisizoweza kubadilika, Wave inasaidia kudhibiti muktadha wa data na hali ya programu kwa ufanisi zaidi.
Hii inaruhusu kuandika msimbo thabiti na unaoweza kutabiri.
