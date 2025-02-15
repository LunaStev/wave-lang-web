---
sidebar_position: 3
---

# IF Sentensi
## Utangulizi
Katika sehemu hii, tutajifunza kuhusu sintaksia ya IF, moja ya sentensi za udhibiti katika Wave.
Sentensi ya IF hutumika katika programu kutathmini hali fulani na kutekeleza nambari maalum wakati hali hiyo ni kweli (True).
Kwa kutumia IF, tunaweza kudhibiti mtiririko wa programu kulingana na hali na kuandika nambari yenye mantiki na ufanisi.

## Muundo wa Msingi
Sentensi ya IF hutathmini hali fulani, na inapokuwa kweli (True), hufanya tu nambari iliyoainishwa.
Muundo wa msingi wa IF katika Wave ni kama ifuatavyo:

```wave
if (hali) {
    // Nambari itakayotekelezwa ikiwa hali ni kweli
}
```

Hali inaweza kuandikwa kwa kutumia waendeshaji wa kulinganisha (`==`, `!=`, `<`, `>`, `<=`, `>=`) au waendeshaji wa kimantiki (`&&`, `||`, `!`).
Ikiwa hali ni uongo (False), basi block ya nambari haitatekelezwa.

## Mfano
Hapa kuna mfano wa rahisi wa IF:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Hali ya hewa ni joto.");
}
```

Katika mfano huu, ikiwa thamani ya temperature ni kubwa kuliko 25, ujumbe "Hali ya hewa ni joto." utaonyeshwa.

## IF_ELSE Sentensi
Ikiwa hali si kweli na unahitaji kutekeleza nambari nyingine, hutumika IF-ELSE.
Muundo wake ni kama ifuatavyo:

```wave
if (hali) {
    // Nambari itakayotekelezwa ikiwa hali ni kweli
} else {
    // Nambari itakayotekelezwa ikiwa hali ni uongo
}
```

### Mfano:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Umefaulu!");
} else {
    println("Umekosa.");
}
```

Ikiwa score ni 60 au zaidi, "Umefaulu!" itaonyeshwa, vinginevyo "Umekosa." itaonyeshwa.

## IF Sentensi Zilizo Vilio
Sentensi za IF zinaweza kutumika ndani ya sentensi nyingine za IF. Hii inaitwa IF iliyo vilio, na ni muhimu wakati wa kushughulikia hali ngumu.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Matokeo bora!");
    } else {
        println("Umefaulu.");
    } 
} else {
    println("Umekosa.");
}
```

Katika mfano huu, kulingana na score, ujumbe "Matokeo bora!", "Umefaulu." au "Umekosa." utaonyeshwa.

## Muhtasari

* IF hutathmini hali na kutekeleza block maalum ya nambari.
* IF-ELSE inaweza kutumika kutekeleza nambari ikiwa hali ni uongo.
* Sentensi za IF zilizo vilio hutumika kushughulikia hali ngumu.

Kwa kutumia IF, tunaweza kuunda mtiririko wa programu kwa njia ya mantiki na inayoweza kubadilika!
