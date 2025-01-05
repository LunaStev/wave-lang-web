---
sidebar_position: 3
---

# Aina za Data

Hati hii inaelezea aina mbalimbali za data zinazotolewa na lugha ya programu ya Wave.
Lugha ya programu ya Wave hutumia aina mbalimbali za data kuhifadhi na kufanya mahesabu.
Aina kuu za data ni nambari kamili, nambari za mzunguko, maandishi, n.k. Kila aina ya data inaelezea sifa za data husika na jinsi ya kushughulikia kumbukumbu.

## Aina ya Nambari Kamili
Aina ya nambari kamili hutumiwa kuhifadhi thamani za nambari kamili.
Kwa kawaida, nambari kamili zinatangazwa kama `i32` (nambari kamili zenye ishara za biti 32) na `u32` (nambari kamili zisizo na ishara za biti 32).
Lugha ya Wave inatoa chaguzi mbalimbali za ukubwa za kudhibiti upeo wa nambari kamili kwa usahihi.

* `i4` ~ `i32768`: Aina ya nambari kamili yenye ishara, na ukubwa unaweza kuwa kati ya biti 4 na biti 32768.
* `u4` ~ `u32768`: Aina ya nambari kamili zisizo na ishara, na ukubwa unaweza kuwa kati ya biti 4 na biti 32768.

Mfano:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Aina ya Nambari za Mzunguko

Aina ya nambari za mzunguko hutumiwa kuhifadhi thamani za nambari za kweli.
Kwa kawaida, nambari za mzunguko zinatangazwa kama `f32`.
Pia, inatoa chaguzi mbalimbali za ukubwa ili kufafanua ukubwa wa nambari za mzunguko.

* `f32` ~ `f32768`: Aina ya nambari za mzunguko inatoa chaguzi za ukubwa kuanzia biti 32 hadi 32768, ambayo inaruhusu mahesabu sahihi ya nambari za mzunguko.

Mfano:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Aina ya Maandishi
Aina ya maandishi hutumiwa kushughulikia data ya maandishi. Neno muhimu `str` hutumika kutangaza maandishi.
Maandishi kwa kawaida huhifadhiwa kwa kutumia alama za nukuu kubwa (`"`) na, inaweza kutumika kuhifadhi thamani za maandishi.

Mfano:
```wave
var text :str = "Hello Wave";
```

## Aina ya Boolean
Aina ya boolean hutumika kuonyesha **thamani za kweli (True)** au **thamani za uongo (False)**.
Hii hutumika hasa katika masharti ya uamuzi, na thamani yake inaweza kuwa `true` au `false`.

Mfano:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Aina ya Herufi
Aina ya herufi hutumika kuhifadhi **herufi moja**.
`char` hutumika kutangaza herufi, na inaweza kuhifadhi thamani moja tu ya herufi.

예시:
```wave
var letter :char = 'A';
```

## Aina ya Bayti
Aina ya bayti hutumika kuhifadhi **data ya ukubwa wa byte 1**.
Kwa kawaida hutumika katika kushughulikia data ya binary. `byte` hutumika kutangaza bayti.

Mfano:
```wave
var byteData :byte = 0xFF;
```

## Aina ya Pointer
Aina ya pointer hutumika kurejelea **anwani za kumbukumbu**.
`ptr` hutumika kutangaza pointer na hutumika kuhifadhi anwani za kumbukumbu.

Mfano:
```wave
var ptr :ptr = &someVariable;
```

## Aina ya Orodha
Aina ya orodha hutumika kuhifadhi **seti ya data ya aina moja** kwa mpangilio.
`array` hutumika kutangaza orodha na, unaweza kubaini ukubwa na aina ya orodha.

Mfano:
```wave
var numbers: array<i32> = [1, 2, 3, 4, 5];
```

Kila aina ya data ina chaguzi za ukubwa na upeo mbalimbali, hivyo basi mtumiaji anaweza kuchagua aina inayofaa ili kufanikisha usimamizi bora wa kumbukumbu na mahesabu.
