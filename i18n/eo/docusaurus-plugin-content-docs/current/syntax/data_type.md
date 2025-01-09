---
sidebar_position: 2
---

# Datumaj Tipoj

Ĉi tiu dokumento priskribas la diversajn datumajn tipojn en la programlingvo **Wave**.
Wave uzas diversajn datumajn tipojn por stoki valorojn kaj plenumi operaciojn.
La ĉefaj datumaj tipoj inkluzivas entjerojn, poentnombrajn valorojn, ŝnurojn kaj aliajn. Ĉiu datumtipo difinas la karakterizaĵojn de la datumoj kaj la manierojn de memoro-traktado.

## Entjera Tipo
Entjera tipo estas uzata por stoki **entjerajn valorojn**.
Ĝenerale, entjeroj estas deklaritaj kiel `i32` (subskriba 32-bit-entro) aŭ `u32` (ne-subskriba 32-bit-entro).
Wave subtenas diversajn longojn de entjeroj, kiuj permesas precizigan skalon de valoro.

* `i4` ~ `i32768`: Subskribaj entjeroj kun grandeco de 4 bitoj ĝis 32768 bitoj.
* `u4` ~ `u32768`: Ne-subskribaj entjeroj kun grandeco de 4 bitoj ĝis 32768 bitoj.

Ekzemplo:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Poentnombra Tipo
Poentnombra tipo estas uzata por stoki **realajn valorojn**.
Ĝenerale, poentnombroj estas deklaritaj kiel `f32`.
Wave ankaŭ permesas precizigi la grandecon de poentnombro por ebligi pli altan precizecon.

* `f32` ~ `f32768`: Poentnombraj tipoj de 32 bitoj ĝis 32768 bitoj. Ĉi tio ebligas realajn kalkulojn kun pli alta precizeco.

Ekzemplo:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Ŝnura Tipo
Ŝnura tipo estas uzata por manipuli tekstajn datumojn.
Ŝnuroj estas deklaritaj per la ŝlosilvorto `str` kaj kutime estas enkapsulitaj en duobla citaĵo (`"`).

Ekzemplo:
```wave
var text :str = "Hello Wave";
```

## Boola Tipo
Boola tipo reprezentas **verajn (true)** aŭ **malverajn (false)** valorojn.
Ĝi estas ofte uzata en kondiĉaj deklaroj, kaj ĝiaj valoroj estas `true` aŭ `false`.

Ekzemplo:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Karaktera Tipo
Karaktera tipo estas uzata por stoki **unuopaĵajn literojn**.
Ĝi estas deklarita per la ŝlosilvorto `char`, kaj povas stoki nur unu literon.

Ekzemplo:
```wave
var letter :char = 'A';
```

## Bajta Tipo
Bajta tipo estas uzata por stoki **1-bajtajn** valorojn.
Ĝi estas utila por labori kun binaraj datumoj. La ŝlosilvorto `byte` estas uzata por deklari bajton.

Ekzemplo:
```wave
var byteData :byte = 0xFF;
```

## Pointera Tipo
Pointera tipo estas uzata por referenci **memoran adreson**.
La ŝlosilvorto `ptr` estas uzata por deklari pointerojn, kiuj stokenas memoradresojn.

Ekzemplo:
```wave
var ptr :ptr = &someVariable;
```

## Aranĝa Tipo
Aranĝa tipo estas uzata por stoki **serion de samaj tipoj de datumoj** en sinsekvo.
La ŝlosilvorto `array` estas uzata, kaj oni povas precizigi la grandeco de la aranĝo aŭ ĝian tipon.

Ekzemplo:
```wave
var numbers: array<i32> = [1, 2, 3, 4, 5];
```

Ĉiu datumtipo en Wave povas havi malsamajn intervalojn kaj grandecojn, kiuj permesas al uzantoj elekti la plej taŭgan tipon por efika memoro-administrado kaj kalkulado.
