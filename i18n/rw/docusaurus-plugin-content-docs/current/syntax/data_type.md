---
sidebar_position: 2
---

# Imiterere y'Ibintu

Iki gitabo gisobanura imiterere y'ibintu bitandukanye muri gahunda ya Wave. Gahunda ya Wave itanga amoko atandukanye y'ibintu kugira ngo bigerweho kandi bihuzwe. Ibintu by'ingenzi birimo imibare, imibare ifite amahoro (floating-point numbers), amagambo (strings), n'ibindi. Buri bwoko bw'ibintu bugena uko bigomba gufatwa n'uko bibikwa mu bubiko.

## Ubwoko bw'Imibare Wuzuye (Integer Types)
Imibare y'integer ikoreshwa mu kubika agaciro k'imibare yose. Muri gahunda ya Wave, imibare isanzwe itangirwa na `i32` (integer ifite ibimenyetso, 32-bit integer) cyangwa `u32` (integer itagira ibimenyetso, 32-bit unsigned integer). Gahunda ya Wave itanga amahitamo atandukanye yo gushyiraho ubunini bw'imibare.
Wave itanga integer zifite ubunini butandukanye kuva kuri 8-bit kugeza kuri 1024-bit:

* `i8` ~ `i1024`: Imibare ifite ibimenyetso, kuva kuri 8-bit kugeza kuri 1024-bit.
* `u8` ~ `u1024`: Imibare itagira ibimenyetso, kuva kuri 8-bit kugeza kuri 1024-bit.

Urugero:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Imibare ya Floating-Point
Imibare ya floating-point ikoreshwa mu kubika agaciro k'imibare ifite amahoro (decimals). Gahunda ya Wave, imibare ya floating-point isanzwe itangirwa na `f32`. Byongeye, Wave itanga amahitamo yo gushyiraho ibindi bice kugira ngo ibimenyetso by'iyo mibare byoroshye.

* `f32` ~ `f1024`: Imibare ya floating-point kuva kuri 32-bit kugeza kuri 1024-bit, bituma habaho gutanga ibisubizo by'ukuri mu mibare ifite amahoro.

Urugero:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Imiterere y'Amagambo
Imiterere y'amagambo ikoreshwa mu kubika amakuru y'inyandiko. Amagambo yashyizweho muri Wave atangwa hakoreshejwe ijambo `str`. Amagambo asanzwe ashyirwa mu maboko y'ibimenyetso bikozwe n'inyuguti za (`"`) kandi bishobora gushyirwaho agaciro.

Urugero:
```wave
var text :str = "Hello Wave";
```

## Imiterere ya Boolean
Imiterere ya Boolean yerekana ukuri (True) cyangwa ikinyoma (False). 
Ibi bikoreshwa cyane mu bisobanuro by'ibibazo (conditional statements), kandi agaciro kabyo kashyizweho ni `true` cyangwa `false`.

Urugero:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Imiterere y'Ibara
Imiterere y'ibara ikoreshwa mu kubika inyuguti imwe. Yatangirwa hakoreshejwe ijambo `char`, kandi buri nyuguti iba irimo agaciro kamwe gusa.

Urugero:
```wave
var letter :char = 'A';
```

## Imiterere y'Icyemezo
Imiterere y'icyemezo ikoreshwa mu kubika ibintu bya 1-byte. Bikoreshwa cyane mu gucunga amakuru y'ububiko (binary data). Yatangirwa hakoreshejwe ijambo `byte`.

Urugero:
```wave
var byteData :byte = 0xFF;
```

## Imiterere y'Ikimenyetso
Imiterere y'ikimenyetso ikoreshwa mu kubika ahantu ha adresse ya memory. Gahunda ya Wave itanga ijambo `ptr` kugirango yemerere kubika adresse ya memory.

Urugero:
```wave
var ptr :ptr = &someVariable;
```

## Imiterere y'Ibyiciro

Imiterere y'ibyiciro ikoreshwa mu kubika agaciro k'ibintu byinshi bingana. Iyo ushyiraho ibyiciro, ukaba ushobora kwerekana ubunini ndetse n'ubwoko bw'ibintu mu byiciro.

Urugero:
```wave
var numbers: array<i32> = [1, 2, 3, 4, 5];
```

Buri bwoko bw'ibintu butanga amahitamo yo kubushyiraho ubunini n'ubunini, bituma abakoresha bashobora guhitamo ubwoko bukwiriye kugira ngo bagenzure imikoreshereze ya memory no gukorera ku mibare.