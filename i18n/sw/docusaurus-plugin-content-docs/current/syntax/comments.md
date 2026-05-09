---
sidebar_position: 11
---

# Kumbuka

Mwave inasaidia aina mbili za maelezo.

- Maelezo ya mstari moja: `//`
- Kumbukumbu ya block: `/* ... */`

## Kumbukumbu ya mstari moja

Yaliyomo baada ya `//` yanadharauliwa hadi mwisho wa mstari.

```wave
var x: i32 = 10; // maoni ya mstari
x += 5;          // bado inaendelea kufanya kazi
```

## Maoni ya block

Inadharau maudhui kati ya `/*` na `*/`.

```wave
var y: i32 = 1 /* block ya mstari */ + 2;
```

Maoni ya block yanasaidia mistari mingi na kurudia.

```wave
/* ya nje
   /* ya ndani */
   mwisho wa nje
*/
```

## Nafasi ya mfuatano na alama ya maoni

Ndani ya mfuatano, `/*`, `*/`, `//` hazishughulikiwi kama mwanzo/mwisho wa maoni.

```wave
var marker: str = "/*//*";
```

## Hitilafu ya maoni

Ikiwa maoni ya block hayajakamilika, hitilafu ya kukusanya (`E1002`) itatokea.

```wave
/* haijafungwa
```

Kikokotoo kinachapisha nafasi ya kuanza, sababu, na vidokezo vya kurekebisha.
