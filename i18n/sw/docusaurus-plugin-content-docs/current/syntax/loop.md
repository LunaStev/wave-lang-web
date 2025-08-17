---
sidebar_position: 4
---

# Lugha ya kurudia

## Utangulizi

Lugha ya Wave inatoa njia za kurudia kutekeleza misimbo.
Lugha ya kurudia hutumika wakati masharti fulani yanapokutana kutekeleza misimbo au kurudia mara kadhaa.

Mifano ya lugha ya kurudia inayopeanwa na Wave ni kama ifuatavyo:

- Neno lililohifadhiwa: Kurudia msingi wa masharti

- kwa neno lililohifadhiwa: Kurudia msingi wa kurudia mara kadhaa

Pia, wakati wa kurudia, neno kuu `break` na `continue` zinatolewa kwa kudhibiti mchakato wa kurudia.
Kifungu hiki kinaelezea lugha ya kurudia na maneno muhimu ya kudhibiti mtiririko.

---

## wakati neno lililohifadhiwa

Neno la `while` linarudia utekelezaji wa kizuizi cha misimbo wakati hali iliyotolewa inapoelezewa kama `true`.
Wakati hali ni `false`, urudiaji unakamilika.

### Muundo wa Msingi

Hizi ni sarufi za msingi za neno la `while`:

```wave
while (hali) {
    // misimbo ya kurudia
}
```

- Hali lazima iwe ya aina ya `bool`.

- Kizuizi cha msimbo kimefunikwa na `{}` na kinaweza kuwa na zaidi ya amri moja.

### Mfano: Chapisha kutoka 0 hadi 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i ni {}.", i);
    i = i + 1;
}
```

Mfano huu unarudia hadi `i` ni ndogo kuliko 5, kuchapisha thamani kila marudio na kuongeza 1.

---

## kwa neno lililohifadhiwa

Neno `for` linafaa wakati idadi ya marudio imepangwa.
Inajengwa na kutaja thamani ya awali, hali ya kukamilika, na kusema mwendeleo.

### Muundo wa Msingi

```wave
kwa (var jina_la_kigezo: aina = thamani_ya_awali; hali; mwendeleo) {
    // misimbo ya kurudia
}
```

- jina_la_kigezo: kigezo kinachotumika kudhibiti marudio

- hali: marudio yanatekelezwa wakati ni `true`

- mwendeleo: inabadilisha thamani ya kigezo cha marudio

### Mfano: Chapisha kutoka 1 hadi 5

```wave
kwa (var i: i32 = 1; i <= 5; i = i + 1) {
    println("i = {}", i);
}
```

---

## Lugha ya kurudia zilizobebana

Unaweza kuandika lugha nyingine ya kurudia ndani ya lugha ya awali ya kurudia, na hii inaitwa lugha ya kurudia zilizobebana.
Mfano, ni muhimu wakati wa kupitia safu mbili au mchanganyiko.

### Mfano: while marudio mara mbili

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

---

## Neno lililohifadhiwa break

Neno `break` linamaliza haraka lugha ya kurudia na kutoka nje.
Inapofaa wakati unataka kuacha marudio wakati hali imekamilika.

### Mfano: Kusitisha kurudiwa kwenye thamani maalum

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

---

## Neno lililohifadhiwa continue

Neno `continue` linaruka sehemu iliyobaki ya marudio ya sasa na kuanza tena marudio mengine.
Inatumika wakati unataka kutekeleza sehemu tu ya kizuizi cha marudio wakati wa hali maalum.

### Mfano: Chapisha nambari shufwa pekee

```wave
kwa (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

---

## Muhtasari

| Sarufi  | Maelezo                                                            |
| ------- | ------------------------------------------------------------------ |
| wakati  | Kurudia wakati hali ni ya kweli                                    |
| kwa     | Kutekeleza kurudia kwa kutumia thamani ya awali, hali, na ongezeko |
| vunja   | Maliza haraka marudio                                              |
| endelea | Ruka hadi marudio yanayofuata                                      |

Lugha ya kurudia ya Wave imeundwa kuruhusu kushughulikia marudio ya msingi wa hali au nambari kwa urahisi.

Unapotumia `break` na `continue` pamoja, inawezekana kudhibiti mtiririko wa marudio kwa umakini zaidi.