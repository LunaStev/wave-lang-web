---
sidebar_position: 11
---

# Kumbuka

Wave inasaidia aina mbili za maelezo.

- Maelezo ya mstari moja: `//`
- Kumbukumbu ya block: `/* ... */`

## Kumbukumbu ya mstari moja

Yaliyomo baada ya `//` yanadharauliwa hadi mwisho wa mstari.

```wave
var x: i32 = 10; // line comment
x += 5;          // still works
```

## Maoni ya block

Inadharau maudhui kati ya `/*` na `*/`.

```wave
var y: i32 = 1 /* inline block */ + 2;
```

Maoni ya block yanasaidia mistari mingi na kurudia.

```wave
/* outer
   /* inner */
   outer end
*/
```

## Nafasi ya mfuatano na alama ya maoni

Ndani ya mfuatano, `/*`, `*/`, `//` hazishughulikiwi kama mwanzo/mwisho wa maoni.

```wave
var marker: str = "/*//*/";
```

## Hitilafu ya maoni

Ikiwa maoni ya block hayajakamilika, hitilafu ya kukusanya (`E1002`) itatokea.

```wave
/* not closed
```

Kikokotoo kinachapisha nafasi ya kuanza, sababu, na vidokezo vya kurekebisha.
