---
sidebar_position: 3
---

# Sentensi ya IF

## Utangulizi

Sehemu hii inatoa utangulizi kwa sarufi ya sentensi ya IF, mojawapo ya sentensi za kudhibiti za Wave.
Sentensi ya IF ni sentensi ya kudhibiti katika programu ambayo hutathmini hali na hutekeleza msimbo maalum ikiwa hali ni kweli.
Hii inakuruhusu kudhibiti mtiririko wa programu kulingana na hali na kuandika msimbo unaonyumbulika na wa kimantiki.

## Muundo wa Msingi

Sentensi ya IF hutathmini hali maalum na kutekeleza tu kizuizi cha msimbo kilichoainishwa wakati hali hiyo ni kweli.
Muundo wa msingi wa sentensi ya IF ya Wave ni kama ifuatavyo:

```wave
ikiwa (hali) {
    // Msimbo utaotekelezwa ikiwa hali ni kweli
}
```

Hali huandikwa kwa kutumia waendeshaji wa kulinganisha (`==`, `!=`, `<`, `>`, `<=`, `>=`) au waendeshaji wa mantiki (`&&`, `||`, `!`). Ikiwa hali ni uwongo (False), kizuizi cha msimbo hakitatekelezwa.

## Mfano

Ifuatayo ni mfano rahisi wa sentensi ya IF:

```wave
var joto :i32 = 30;

ikiwa (joto > 25) {
    chapisha("Hali ya hewa ni ya joto.");
}
```

Katika msimbo hapo juu, ikiwa thamani ya joto ni kubwa kuliko 25, ujumbe "Hali ya hewa ni ya joto." utatolewa.

## Sentensi ya IF_ELSE

Unapotaka kuandika msimbo mbadala wa kutekelezwa ikiwa hali sio kweli, tumia sentensi ya IF-ELSE.
Muundo ni kama ifuatavyo:

```wave
ikiwa (hali) {
    // Msimbo utaotekelezwa ikiwa hali ni kweli
} vinginevyo {
    // Msimbo utaotekelezwa ikiwa hali ni uwongo
}
```

### Mfano:

```wave
var alama :i32 = 70;

ikiwa (alama >= 60) {
    chapisha("Umefaulu!");
} vinginevyo {
    chapisha("Umeshindwa.");
}
```

Ikiwa alama ni 60 au zaidi, "Umefaulu!" itatolewa, la sivyo, "Umeshindwa." itatolewa.

## Sentensi ya IF iliyonakiliwa

Sentensi ya IF inaweza kutumiwa ndani ya sentensi nyingine ya IF. Hii inaitwa sentensi ya IF iliyonakiliwa na ni muhimu kwa kushughulikia hali changamano.

```wave
var alama :i32 = 85;

ikiwa (alama >= 60) {
    ikiwa (alama >= 90) {
        chapisha("Matokeo bora!");
    } vinginevyo {
        chapisha("Umefaulu.");
    } 
} vinginevyo {
    chapisha("Umeshindwa.");
}
```

Katika mfano hapo juu, kulingana na alama, ujumbe "Matokeo bora!", "Umefaulu.", au "Umeshindwa." utatolewa.

## Muhtasari

- Sentensi ya IF ni sentensi ya kudhibiti inayotathmini hali na kutekeleza kizuizi maalum cha msimbo.
- Unaweza kuongeza sentensi ya ELSE ili kubainisha msimbo utakaotekelezwa ikiwa hali ni uwongo.
- Sentensi ya IF iliyonakiliwa inatumika kwa kushughulikia hali changamano.

Kwa kutumia sentensi ya IF, unaweza kupanga mtiririko wa programu kwa njia ya kimantiki zaidi na inayobadilika zaidi!