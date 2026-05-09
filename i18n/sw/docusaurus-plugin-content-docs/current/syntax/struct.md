---
sidebar_position: 8
---

# muundo

## Muhtasari

Muundo katika lugha ya Wave ni kipengele muhimu cha mwandiko kwa kutangaza aina za data zilizoainishwa na mtumiaji.
Kwa kutumia muundo, unaweza kuunganisha thamani za aina tofauti katika kitengo kimoja cha kimantiki, na kupitia hapa unaweza kuunda mifano ya miundo ya data ngumu kwa uwazi na usalama.

Miundo ya Wave hufanya kazi kama aina ya thamani (value type).
Mashamba yote lazima yawe na aina dhahiri, na mashamba yote lazima yaanze wakati mzio wa muundo unapoundwa.
Kupitia sheria hizi hali ya muundo inabakia kamili na inaweza kutabirika kila wakati.
-----------------------------------------------------------------------------------------------------

## Mwandiko wa tamko la muundo

Muundo unatangazwa kwa kutumia neno kuu `struct`.
Jina la muundo linatumia noti ya PascalCase, na mwili wa muundo unaweza kueleza angalau uwanja mmoja.

Mashamba yanatangazwa katika muundo wa `jina: aina;`, na kila tamko la uwanja lazima liwe na sehemu.

```wave
muundo Sanduku {
 ukubwa: i32;
 uzito: f32;
}
```

Wakati muundo unatangazwa, mpangilio wa mashamba yanayoandikwa hutumiwa kwa usawa na mpangilio wa mipangilio ya kumbukumbu.
Ndani ya muundo huruhusiwa tu tamko la uwanja, huwezi kujumuisha kazi au mbinu.
Mantiki ya uendeshaji inaelezewa tofauti nje ya muundo.
-----------------------------------------------------------------------

## Mwandiko wa uundaji wa muundo

Miundo imeundwa katika muundo wa kitamshi kutumia jina la muundo.
Kitamshi cha muundo ni `JinaLaMuundo { jina_la_uwanja: thamani; ... }` imeandikwa kwa muundo.

```wave
var b: Box = Box {
    ukubwa: 42;
    uzito: 10.5;
};
```

Unapotengeneza muundo, mashamba yote yaliyoainishwa yanapaswa kuwa ya awali ili kuepuka hitilafu ya usanidi.

Ingawa mpangilio wa chini wa mashamba hauhitaji kufuata mpangilio wa ufafanuzi wa muundo, aina ya thamani iliyotengwa kwa kila uwanja lazima iwe sawa na aina iliyofafanuliwa katika muundo.
Katika Wave, ubadilishaji wa aina ya kimya wakati wa uanzilishi wa uwanja wa muundo hairuhusiwi.

---

## Nafasi ya uwanja wa muundo

Sehemu za muundo hufikiwa kupitia alama ya nukta.
Ufikiaji wa uwanja hutumia mlingano wa mbinu sawa ya kusoma na kuandika.

```wave
chapisha("Ukubwa: {}", b.ukubwa);
chapisha("Uzito: {}", b.uzito);
```

Ikiwa unajaribu kutumia jina la uwanja ambalo halipo, kutakuwa na hitilafu ya usanidi.
Kwa sababu muundo ni aina ya thamani, ikiwa unapitisha muundo mzima au kama kigezo cha kazi, mashamba yote ndani ya muundo yanakiliwa pamoja.

---

## Mbinu ya ufafanuzi wa muundo

Lugha ya Wave haikubali kufafanua mbinu moja kwa moja ndani ya muundo.
Badala yake, tumia neno kuu `proto` kubainisha mkusanyiko wa mbinu zinazohusishwa na muundo.

Kizuizi cha `proto` ni mkusanyiko wa mbinu zinazoendela kwa muundo maalum, na mbinu ambazo zimebainika ndani ya kizuizi zinatumika kama mbinu za muundo husika.

Mbinu hutumia `self` kama kigezo cha kwanza kufanikisha uidhinishaji wa mfano wa muundo.
`self` inawakilisha thamani ya jumla ya muundo, na inapitishwa kwa njia ya nakala ya thamani.

```wave
proto Box {
    furahia chapisha(mwenyewe) {
        chapisha("ukubwa={}, uzito={}", mwenyewe.ukubwa, mwenyewe.uzito);
    }

    furahia ukubwa_ulioongezwa(mwenyewe, x: i32) -> i32 {
        rudi mwenyewe.ukubwa + x;
    }
}
```

Kizuizi cha `proto` hakiitaji kuwekwa kwenye faili sawa na ufafanuzi wa muundo, na unaweza kutumia vizuizi kadhaa vya `proto` kubainisha mbinu tofauti za muundo mmoja.

Utoaji wa mbinu hutumia alama ya nukta, na hufanya kazi kwa njia sawa na mwito wa mbinu wa kawaida.

```wave
b.chapisha();
var n: i32 = b.ukubwa_ulioongezwa(5);
```

---

## Matumizi ya muundo kama kigezo cha kazi

Muundo unapopitishwa kama kigezo cha kazi, unashughulikiwa kwa kutumia mlinganyo wa nakala ya thamani.
Hata ikiwa utafanya mabadiliko kwenye uwanja wa muundo ndani ya kazi, haiathiri mfano wa muundo ulioitwa.

```wave
furahia calc(box: Box) -> i32 {
    rudi box.ukubwa * 2;
}
```

Hata ikiwa muundo utatumika kama thamani ya kurudi kwa kazi, kutakuwa na nakala ya thamani.
Kitendo hiki huhakikisha data iliyo ndani ya muundo inajulikana kwa utulivu na uwezo wa utabiri.

---

## Muundo uliopachikwa (Nested Structure)

Katika Wave, unaweza kutumia muundo mwingine ndani ya uwanja wa aina ya muundo.
Kwa kuwa muundo ni aina kamili, unaweza kupachika muundo mwingine kwa uhuru ndani ya muundo.

```wave
muundo Nafasi {
    x: i32;
    y: i32;
}

muundo Mchezaji {
    jina: str;
    pos: Nafasi;
}
```

Shamba la miundo iliyopachikwa hutumiwa kwa kusema kwa nukta.

```wave
var p: Mchezaji = Mchezaji {
    jina: "Alice";
    nafasi: Nafasi { x: 10; y: 20; };
};

chapisha("Mchezaji X: {}", p.nafasi.x);
chapisha("Mchezaji Y: {}", p.nafasi.y);
```

Ndani ya miundo sanifu, unaweza kuchanganya miundo mingine. Katika hali hii, sheria za uanzishaji wa amana zinaweza kutumika sawa.

---

## Safu ya Miundo

Muundo unaweza kutumika kama aina ya kipengee cha safu.
Marudio ya safu katika Wave hutumia muundo wa `array<aina, urefu>`, na aina ya muundo hufafanuliwa vilevile.

```wave
var wachezaji: safu<Mchezaji, 3> = [
    Mchezaji { jina: "A"; nafasi: Nafasi { x: 1; y: 2; }; },
    Mchezaji { jina: "B"; nafasi: Nafasi { x: 3; y: 4; }; },
    Mchezaji { jina: "C"; nafasi: Nafasi { x: 5; y: 6; }; }
];
```

Unapopata kipengee cha safu ya muundo, kwanza tumia indeksi ya safu, kisha ufikie shamba la ndani la muundo kupitia alama ya nukta.

```wave
chapisha("Mchezaji wa Pili X: {}", wachezaji[1].nafasi.x);
```

---

## Je, msingi wa uendeshaji wa muundo unapatikana

Miundo ya Wave haihusishi moja kwa moja katika uendeshaji au usanisi wa hesabu, kwa sababu ina aina iliyoainishwa na mtumiaji.

Ikiwa unahitaji kulinganisha kwa usawa, kupanga, hashing, au uendeshaji wa hesabu wa muundo, inahitaji kuelezea kwa wazi opereseni hiyo kwa kutumia 'proto' ya bendi.
Wave haitoi waendeshaji wa ndani kwa miundo, na ina kanuni kwamba operesheni zote zinapaswa kufafanuliwa kwa uwazi.