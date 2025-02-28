---
sidebar_position: 3
---

# ITEGEKO IF
## Intangiriro
Muri iki gice, turaza kwerekana imiterere y'itegeko rya IF, rimwe mu mategeko ya Wave.
ITEGEKO IF ni itegeko rikoreshwa mu gufata imyanzuro mu gusuzuma niba ibyo ugerageza kuba ari ukuri, hanyuma ugashyira mu bikorwa code imwe mu gihe ibyo ugerageza ari ukuri.
Ibi bituma ushobora kugenzura uko porogaramu ikora, ndetse ukandika kode yoroshye kandi ifite logic.

## Imiterere Isanzwe
ITEGEKO IF isuzuma kimwe mu bipimo, hanyuma igihe icyo gipimo kiba ari ukuri (True), itegeka ryashyirwa mu bikorwa.
Imiterere isanzwe y'itegeko IF muri Wave ni uku:

```wave
if (igipimo) {
    // Code izashyirwa mu bikorwa igihe igipimo ari ukuri
}
```

Igipimo kirimo kugereranya ibimenyetso (`==`, `!=`, `<`, `>`, `<=`, `>=`) cyangwa ibimenyetso by’imyifatire (`&&`, `||`, `!`) kugira ngo gikorwe. Iyo igipimo kiri kubiri (False), kode ntabwo izashyirwa mu bikorwa.

## Urugero
Dore urugero rworoshye rw'itegeko IF:

```wave
var ubushyuhe :i32 = 30;

if (ubushyuhe > 25) {
    println("Igihe kirashyushye.");
}
```

Muri iki kode, igihe ubushyuhe buzarenga 25, ubutumwa "Igihe kirashyushye." buzagaragara.

## ITEGEKO IF_ELSE
Niba igipimo kitari ukuri, ushobora gukoresha IF-ELSE kugira ngo ushyireho code izashyirwa mu bikorwa mu gihe igipimo kitarimo ukuri.
Imiterere yayo ni:

```wave
if (조건) {
    // 조건이 참일 경우 실행될 코드
} else {
    // 조건이 거짓일 경우 실행될 코드
}
```

### Urugero:

```wave
var amanota :i32 = 70;

if (amanota >= 60) {
    println("Watsinze!");
} else {
    println("Ntutsinze.");
}
```

Iyo amanota azamuka ku 60 cyangwa arenga, ubutumwa "Watsinze!" buzagaragara, mu gihe bitari byo "Ntutsinze." buzaba bwanditse.

## ITEGEKO IF ISUMBUYE
ITEGEKO IF rishobora no gushyirwa mu rindi tegeko IF, ibintu byitwa Nested IF. Bikoreshwa mu kugenzura ibipimo bigoye.

```wave
var amanota :i32 = 85;

if (amanota >= 60) {
    if (amanota >= 90) {
        println("Watsinze neza!");
    } else {
        println("Watsinze.");
    } 
} else {
    println("Ntutsinze.");
}
```

Muri uru rugero, bitewe n'amanota, ubutumwa "Watsinze neza!", "Watsinze.", cyangwa "Ntutsinze." buzagaragara.

## Isuzuma

* ITEGEKO IF rikoreshwa mu gusuzuma ibipimo hanyuma rikuzuza code igihe icyo gipimo ari ukuri.
* Ushobora kongeramo ELSE kugira ngo ushyireho code izashyirwa mu bikorwa igihe igipimo kitari ukuri.
* Nested IF ikoreshwa mu gusuzuma ibipimo biremereye.

Koresha ITEGEKO IF kugira ngo ugire porogaramu ifite logic kandi irambuye!
