---
sidebar_position: 4
---

# Ramani ya Maendeleo ya Ujumuishaji wa Wave + Whale v2

## Hatua Zote

```matlab
pre-alpha → pre-beta → alfa → beta → rc → kutolewa
```

---

## Hatua ya Pre-Beta

> Lengo: Kukamilisha frontend ya lugha ya Wave + utekelezaji wa kipengele kamili kwa kutumia backend ya LLVM

### Sifa Kuu

- Kutumia LLVM pekee (Hakuna Whale)

- Hakuna nyongeza ya sarufi, utekelezaji wa maelezo yaliyopo tu

- Uthabiti wa muundo wa mbele, kama vile ujumbe wa hitilafu, ukaguzi wa aina, na wigo wa tofauti

### Upeo wa Utekelezaji

- Tamko la kubadilika, pato, operesheni

- Ufafanuzi wa kazi na mwito

- ikiwa / vinginevyo ikiwa / vinginevyo

- wakati / pumzika / endelea

- Pato la umbizo, uteuzi wa aina

- Ubunifu wa kielekezi (`ptr<T>` muundo)

- Ubunifu wa safu (`array<T, N>`)

- Uhakiki wa aina na AST ya kimuundo

### Teknolojia iliyotumika

- Rust (Kompyuta yote ya Wave)

- LLVM (Uundaji wa IR, Utekelezaji wa AOT)

- inkwell / llvm-sys

---

## Hatua ya Alpha

> Lengo: Kuanza utangulizi wa Whale, kutumia LLVM sambamba / Kuanzisha utekelezaji wa Whale inayotegemea nyuma

### Sifa Kuu

- LLVM ni mkondo wa nyuma chaguo-msingi

- Whale ni mkondo wa nyuma wa hiari

- Wakati wa kutekeleza msimbo wa Wave, inawezekana kugawana kwa kutumia chaguo `--backend`

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Kazi zinazohusiana na Whale

- Uundaji na ufafanuzi wa muundo wa Whale IR (Maagizo, Thamani, Kizuizi nk)

- Utekelezaji wa Kianzilishi cha IR kwa Whale

- Kianzilishi cha msimbo kwa Whale (Assembly au Binary)

- Utekelezaji wa aina zinazowezekana kwa Whale tu (`i1024`, pointer za hali ya juu nk.)

### Kipengele cha kuangalia

- Hello World yaonyesha kwa Whale

- Tamko/ugawaji wa mabadiliko katika Whale

- Utekelezaji wa chombo cha kuuondoa makosa katika Whale IR

- Ushughulikiaji wa aina za pointers katika Whale

- Mabadiliko ya Wave → Whale IR yanaendelea

---

## Hatua ya Beta

> Lengo: Kubadilisha kabisa kwa Whale, kuondoa LLVM. Uboreshaji wa mchanganyiko wa Whale + Wave

### Sifa Kuu

- Matumizi ya Whale pekee

- Kuondoa kabisa LLVM (utaratibu na moduli)

- Msingi wa uboreshaji wa msimbo

- Kutoka IR hadi utekelezaji kwa haraka na ufanisi

### Upeo wa Uboreshaji

- Uundaji wa Mchakato wa Uboreshaji wa Whale IR

- Uboreshaji wa kasi ya uundaji wa msimbo wa Whale

- Syntaksi yote ya Wave inasaidiwa kikamilifu katika Whale

### Jaribio

- Jaribio la kitengo + suite kamili ya majaribio

- Jaribio la utangamano la WSON, maktaba ya kiwango

- Uthibitishaji wa ujenzi wa Whale wa jukwaa kubwa

---

## Hatua ya RC (Mgombea wa Kutolewa)

> Lengo: Kuanza kubunifu upya Wave — Kuondoa kabisa msimbo wa Rust

### Sifa Kuu

- Kuanza kuandika upya kompyuta ya Wave kwa Wave

- Utekelezaji wa msimbo wa Wave yenyewe kwa msingi wa Whale

- Whale inaingia hatua ya kujihostisha

### Upeo wa kazi

- Kuandika upya Kianzilishi cha IR ya Wave kwa msingi wa Whale

- Kuondoa Rust + Kubadilisha na msimbo wa Wave

- Kuandika maktaba ya std na core kwa Wave

- Kuzaliwa kwa mkusanyaji wa kwanza wa asili wa Wave baada ya kufanikiwa kwa bootstrap

---

## Hatua ya Kutolewa (v0.0.1)

> Lengo: Kuzindua rasmi / Kutoa mfumo wa ikolojia wa lugha huru wa msingi wa Whale

### Vipengele

- Wave (lugha na maktaba ya kawaida)

- Whale (zana ya muundo ya Whale)

- Vex (meneja wa kifurushi cha Vex)

- WSON (muundo wa data)

### Vipengele

- Mkusanyaji kamili wa Wave pekee (siku ya kwanza ya bootstrap)

- Uboreshaji wa Whale umekamilika

- Mfumo wa ujenzi na usambazaji wa Vex umekamilika

- Ikiwa ni pamoja na parser ya WSON na serialization

- Inaweza kujenga OS-msalaba (`vex build --windows`, nk)

---

## Mkakati wa Meta wa Maendeleo

| Mkakati                    | Maelezo                                                                           |
| -------------------------- | --------------------------------------------------------------------------------- |
| Mkakati wa Reli na Treni   | Kujenga na kuendeleza backend ya Wave wakati wa kuendeleza Whale kwa wakati mmoja |
| Mkakati wa Tawi la Backend | Chagua LLVM/Whale kwa chaguo la `--backend`, kwa muundo muhimu katika alpha       |
| Mpango wa Kugeuza Muundo   | Baada ya rc, msimbo wa Wave unajikusanya kupitia Whale                            |
