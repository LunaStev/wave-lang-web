---
sidebar_position: 2
---

# Aina za Data

Hati hii inaeleza kuhusu aina mbali mbali za data zinazotolewa na lugha ya programu ya Wave.
Huko Wave, unaweza kuhifadhi na kufanya operesheni kwenye maadili kwa kutumia aina mbalimbali za data, ambapo kila aina ya data inaelezea wazi jinsi data hiyo inavyowakilishwa na kushughulikiwa katika kumbukumbu.

Kubainisha aina ya data kwa usahihi ni mojawapo ya falsafa kuu za usanifu wa Wave.
Wave ni mfumo wa aina kali kabisa. Matangazo yote ya `var`/`fun` na uanzilishi wa variable yanahitaji aina iliyo wazi, na utambuzi wa aina kulingana na muktadha hauungwi mkono. Kwa hiyo, kama `var x = 1;` pasipo aina, uundaji utashindwa.
Hii inaruhusu kueleza makusudi ya msimbo kwa uwazi, kugundua makosa mapema wakati wa kuboresha msimbo, na kuhakikisha matumizi bora ya kumbukumbu na utekelezaji thabiti.

---

## Aina ya Nambari Kamili

Aina ya Nambari Kamili hutumika kuhifadhi thamani za nambari kamili.
Katika Wave, `i32` (nambari kamili ya biti 32 yenye sahihi) na `u32` (nambari kamili ya biti 32 isiyo na sahihi) hutumiwa mara nyingi, lakini unaweza kubainisha ukubwa wa biti kwa nambari kwa undani kulingana na ulazima.

Aina za nambari kamili zenye sahihi zinapatikana kutoka `i8` hadi `i1024`, na aina zisizo na sahihi kutoka `u8` hadi `u1024` zinaweza kutumika.
Hii inaruhusu kutosheleza mahitaji mbalimbali kutoka kwenye mahesabu rahisi hadi operesheni kubwa za nambari kamili, usindikaji wa kriptografia, hadi programu za mifumo ya kiwango cha chini.

Ifuatayo ni mfano rahisi wa kutumia aina za nambari kamili.

```wave
var a: i32 = 100;
var b: u32 = 200;
```

---

## Aina ya Nambari Isiyo Kamili

Aina ya nambari isiyo kamili hutumika kuhifadhi thamani za nambari halisi.
Katika Wave, aina za nukta zinazotembea zinazotumika kwa kawaida ni `f32`, na ikiwa unahitaji usahihi wa juu zaidi, unaweza kuchagua aina za ukubwa mkubwa zaidi.

Wave inatoa aina za nukta zinazotembea kutoka `f32` hadi `f128`, na kuwezesha mtumiaji kufanya uchaguzi kati ya usahihi wa mahesabu na utendaji.
Hii inaruhusu kushughulikia operesheni za nambari halisi kwa matumizi mbalimbali, kutoka mahesabu ya kawaida hadi mahesabu ya kisayansi ya usahihi wa hali ya juu.

Hapa chini kuna mfano wa kutumia aina za nukta zinazotembea.

```wave
var pi: f32 = 3.14;
var e: f64 = 2.71828;
```

---

## Aina ya Uzi wa Herufi

Aina ya uzi hutumika kushughulikia data ya maandishi.
Katika Wave, neno kuu `str` hutumika kutangaza kamba za maandishi, na herufi za maandishi huonyeshwa kwa kufungwa na alama za nukuu mara mbili (`"`).

Kamba za maandishi hutumiwa sana katika programu kwa ajili ya uchapishaji wa ujumbe, usindikaji wa maingizo ya mtumiaji, na usindikaji wa data inayotegemea maandishi.

Huu ni mfano wa msingi wa matumizi ya aina ya kamba za maandishi.

```wave
var text: str = "Hello Wave";
```

---

## Aina ya Boolean

Aina ya Boolean ni aina ya data inayowakilisha thamani ya kweli (True) au uongo (False).
Katika Wave, aina `bool` hutumika, na thamani imetajwa kama `true` au `false`.

Aina ya Boolean ina jukumu muhimu katika sentensi za masharti na kurudia, na hutumika kudhibiti mtiririko wa programu.

```wave
var isActive: bool = true;
var isAvailable: bool = true;
```

---

## Aina ya Herufi

Aina ya herufi hutumika kuhifadhi herufi moja pekee.
Hutangazwa kwa kutumia neno kuu `char` na inaweza kushikilia herufi moja pekee.

Herufi za maandishi huonyeshwa kwa kufungwa na alama za nukuu moja (`'`).

```wave
var letter: char = 'A';
```

## Aina ya Byte

Aina ya Byte hutumika kuhifadhi data ya ukubwa wa baiti moja.
Aina hii ni muhimu hasa katika usindikaji wa data ya binary, uingizaji/utoaji wa faili, na programu za mtandao ambapo usindikaji wa data wa kiwango cha chini unahitajika.

Katika Wave, neno kuu `byte` hutumika kutangaza aina ya byte.

```wave
var byteData: byte = 0xFF;
```

## Aina ya Kielekezi

Aina ya Pointer hutumika kurejelea moja kwa moja anwani za kumbukumbu.
Katika Wave, aina ya pointer hutangazwa katika fomu ya `ptr<T>`.

PoinTea hutumika wakati kunahitajika kufikia kumbukumbu za kiwango cha chini, na hutumiwa sana katika programu za mfumo au kanuni zinazohitaji utendakazi wa hali ya juu.

```wave
var ptr: ptr<T> = &someVariable;
```

## Herufi muhimu ya `null`

Katika Wave, `null` ni herufi muhimu rasmi.

- `null` si kitambulisho. (haiwezi kuwa katika fomu `var null = ...`)’
- `null` inaweza tu kupewa kwa aina `ptr<T>`.

```wave
var p: ptr<i32> = null;  // OK

// var n: i32 = null;    // ERROR
// var b: bool = null;   // ERROR
```

## Aina ya Array

Aina ya Array hutumiwa kuhifadhi maadili mengi ya aina sawa katika mpangilio.
Katika Wave, matriki hutangazwa katika fomu ya `array<type, size>`, na ukubwa wa matriki unabainishwa wazi wakati wa kuweka pamoja.

Hii inaboresha ufafanuzi wa muundo wa kumbukumbu na inaruhusu ufikio thabiti.

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Kila aina ya data imeundwa ili kuruhusu uchaguzi wa upeo na ukubwa unaofaa kwa matumizi na sifa zake.
Uchaguzi sahihi wa aina ya data huruhusu usimamizi mzuri wa kumbukumbu, na kuboresha sana utulivu na usomaji wa kanuni.
