---
sidebar_position: 2
---

# Aina za Data

Hati hii inaeleza kuhusu aina mbali mbali za data zinazotolewa na lugha ya programu ya Wave.
Lugha ya programu ya Wave inaweza kutumia aina mbali mbali za data kuhifadhi na kurekebisha thamani.
Aina kuu za data ni pamoja na nambari kamili, nambari za desimali, mistari ya maandishi, nk. Kila aina ya data inaeleza kuhusu sifa na jinsi ya kuchakatwa kwa kumbukumbu ya data hiyo.

## Aina ya Nambari Kamili

Aina ya Nambari Kamili hutumika kuhifadhi **thamani za nambari kamili**.
Kimsingi, nambari kamili hutangazwa kama `i32` (nambari kamili ya biti 32 yenye ishara) na `u32` (nambari kamili ya biti 32 isiyo na ishara).
Katika lugha ya programu ya Wave, hutoa chaguo za ukubwa mbalimbali ili kuweka kwa usahihi kigezo cha nambari kamili.

- `i8` ~ `i1024`: Aina ya nambari kamili yenye ishara, na ukubwa unaweza kuwekwa kuwa biti 8 hadi biti 1024.
- `u8` ~ `u1024`: Ni aina ya nambari kamili isiyo na ishara, na ukubwa unaweza kuwekwa kuwa biti 8 hadi biti 1024.

mfano:

```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Aina ya Nambari Isiyo Kamili

Aina ya nambari isiyo kamili hutumika kuhifadhi thamani za nambari halisi.
Kimsingi, nambari isiyo kamili hutangazwa kama `f32`.
Pia, hutoa chaguo mbalimbali za ukubwa ili kufafanua kwa usahihi ukubwa wa nambari isiyo kamili.

- `f32` ~ `f128`: 부동소수점 타입은 32비트부터 128비트까지 크기를 설정할 수 있습니다. Hii inaruhusu mahesabu ya nambari halisi yenye usahihi wa juu zaidi.

mfano:

```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Aina ya Uzi wa Herufi

Aina ya uzi wa herufi hutumika kushughulikia data ya maandishi. Keyword ya `str` hutumika kutangaza uzi wa herufi.
Uzi wa herufi kwa kawaida hufafanuliwa kwa kufungwa kwenye alama za kunukuu kubwa (`"`), na unaweza kutanga thamani ya uzi kwa mabadiliko.

mfano:

```wave
var text :str = "Hello Wave";
```

## Aina ya Boolean

Aina ya Boolean ni aina ya data inayowakilisha thamani ya **kweli (True)** au **uongo (False)**.
Inatumika sana katika sentensi za masharti, na thamani huwekwa kuwa `true` au `false`.

mfano:

```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Aina ya Herufi

Aina ya herufi hutumika kuhifadhi herufi moja pekee.
Hutangazwa kwa kutumia keyword ya `char`, na inaweza tu kushikilia thamani moja ya herufi.

mfano:

```wave
var letter :char = 'A';
```

## Aina ya Byte

Aina ya Byte hutumika kuhifadhi data yenye ukubwa wa **baithi moja**.
Inafaa sana wakati wa kushughulikia data za binary. Hutangazwa kwa kutumia keyword ya `byte`.

mfano:

```wave
var byteData :byte = 0xFF;
```

## Aina ya Kielekezi

Aina ya Kielekezi hutumika kurejelea **anwani ya kumbukumbu**.
Hutangazwa kwa kutumia keyword ya `ptr`, na hutumika kuhifadhi anwani ya kumbukumbu.

mfano:

```wave
var ptr :ptr<T> = &someVariable;
```

## Aina ya Array

Aina ya Array hutumika kuhifadhi **aina moja ya data kwa utaratibu**.
Hutumia keyword ya `array`, na unaweza kutaja ukubwa au aina ya array.

mfano:

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Kila aina ya data ina uwezo wa kuweka tofauti na ukubwa mbalimbali, kuruhusu kuchagua aina inayokidhi mahitaji ya mtumiaji kwa usimamizi wa kumbukumbu na mahesabu yenye ufanisi zaidi.
