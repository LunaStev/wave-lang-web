---
sidebar_position: 3
---

# Sentensi ya IF

## Utangulizi

Sehemu hii inatoa maelezo juu ya sarufi na matumizi ya IF statement, mojawapo ya sentensi za udhibiti zinazotolewa na lugha ya Wave.
Sentensi ya IF ni muundo wa msingi wa udhibiti ambao hutathmini kigezo, na inatekeleza tu kizuizi cha nambari maalum ikiwa kigezo hicho ni kweli.

Hii inawezesha programu kufanya shughuli tofauti kulingana na hali na kigezo, zaidi ya mtiririko wa utekelezaji kutoka juu kwenda chini.
Sentensi ya IF ni kipengele muhimu katika karibu programu zote, na inatumiwa kutekeleza matawi ya kimantiki na udhibiti wa mtiririko.

## Muundo wa Msingi

Sentensi ya IF kwanza hujaribu kigezo, na ikiwa matokeo yake ni kweli, hutekeleza tu kizuizi cha nambari ndani ya mabano `{}`.
Ikiwa kigezo ni uongo (False), inaruka juu ya kizuizi na kuendelea kwenye nambari inayofuata.

Muundo wa msingi wa sentensi ya IF katika Wave ni kama ifuatavyo.

```wave
ikiwa (hali) {
    // Msimbo utaotekelezwa ikiwa hali ni kweli
}
```

Katika masharti, unaweza kutumia waendeshaji wa kulinganisha au wa kupanga bila vikwazo.
Kwa mfano, unaweza kulinganisha uhusiano wa thamani kwa kutumia waendeshaji wa kulinganisha kama `==`, `!=`, `<`, `>`, `<=`, `>=', na unaweza pia kuchanganya masharti kadhaa kwa kutumia waendeshaji wa mantiki kama `&&`, `||`, `!\`.

Matokeo ya kifungu lazima yatathminiwe kama kweli au uongo, na kama kipengele ni uongo, basi kifungu cha IF ndani hakitatekelezwa.

## Mfano

Ifuatayo ni mfano wa muundo wa msingi zaidi wa sentensi ya IF.

```wave
var joto :i32 = 30;

ikiwa (joto > 25) {
    chapisha("Hali ya hewa ni ya joto.");
}
```

Katika msimbo wa juu, ikiwa thamani ya kigezo `temperature` ni kubwa kuliko 25 hutathminiwa kama sharti.
Iwapo sharti ni kweli, ujumbe `"Hali ya hewa ni ya joto."` utachapishwa, na iwapo sharti ni uongo, hakuna hatua itakayofanyika.

Vile vile, sentensi ya IF hutumika wakati unataka msimbo utekelezwe tu wakati kipengele fulani kinakidhi masharti.

## Sentensi ya IF-ELSE

Iwapo kuna msimbo unaohitaji kutekelezwa hata kama sharti sio kweli, unaweza kuongeza kifungu cha ELSE kwa sentensi ya IF.
Muundo wa sentensi ya IF-ELSE hupitisha utekelezaji wa moja kati ya vizuizi viwili vya msimbo kulingana na matokeo ya sharti.

Muundo wa msingi ni kama ifuatavyo.

```wave
ikiwa (hali) {
    // Msimbo utaotekelezwa ikiwa hali ni kweli
} vinginevyo {
    // Msimbo utaotekelezwa ikiwa hali ni uwongo
}
```

Iwapo sharti ni kweli, kizuizi cha IF hufanya kazi, na iwapo sharti si kweli, kizuizi cha ELSE hufanya kazi.
Moja tu kati ya vizuizi viwili hufanya kazi, na si kwa wakati mmoja.

Ifuatayo ni mfano wa matumizi ya sentensi ya IF-ELSE.

```wave
var alama :i32 = 70;

ikiwa (alama >= 60) {
    chapisha("Umefaulu!");
} vinginevyo {
    chapisha("Umeshindwa.");
}
```

Katika msimbo huu, ujumbe tofauti huchapishwa kulingana na kama `alama` ni 60 au zaidi.
Kama sharti liko kweli, `"Umefaulu!"` itachapishwa, la sivyo `"Haujafaulu."` itachapishwa.

## Sentensi ya IF iliyonakiliwa

Sentensi ya IF inaweza kutumika ndani ya sentensi nyingine za IF, ambapo hii huitwa sentensi ya IF iliyoundwa.
Sentensi za IF zilizoundwa ni muhimu wakati ambapo masharti yamepangwa kupimwa mfululizo.

Mfano ufuatao unaonyesha sentensi za IF zilizoundwa zinazotoa matokeo tofauti kulingana na alama.

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

Katika msimbo huu, kwanza tunathibitisha kama alama ni 60 au zaidi.
Kama ni chini ya 60, basi `"Haujafaulu."` itachapishwa moja kwa moja.
Iwapo ni 60 au zaidi, sharti litathminiwa tena na kama alama ni 90 au zaidi, `"Umefaulu kwa ubora!"` itachapishwa. La sivyo `"Umefaulu."` itachapishwa.

Kwa kutumia sentensi za IF zilizoundwa, unaweza kuonyesha matawi magumu ya hali kwa mtiririko.

## Muhtasari

Sentensi ya IF ni sentensi ya msingi ya kudhibiti inayotathmini sharti kwa ajili ya kudhibiti mtiririko wa utekelezaji wa programu.
Kutumia kifungu cha ELSE pamoja kunaweza kufafanua wazi nini kitatokea ikiwa kipengele ni uongo, na kutumia sentensi ya IF iliyoundwa unaweza kusindika matawi magumu kwa kuchanganya masharti tofauti.

Kwa kutumia sentensi ya IF ipasavyo, unaweza kuandaa mtiririko wa programu kwa njia ya kimantiki na wazi zaidi.