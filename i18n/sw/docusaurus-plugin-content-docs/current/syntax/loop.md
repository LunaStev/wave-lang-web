---
sidebar_position: 4
---

# Lugha ya kurudia

## Utangulizi

Katika lugha ya Wave, mchakato wa kurudia hutolewa ili kushughulikia hali ambapo msimbo sawa unahitaji kutekelezwa mara nyingi.
Kurudia hutumika wakati masharti fulani yanapokutana au utekelezaji unarahisishwa kwa kufanya marudio idadi maalum ya nyakati.

Hii inaruhusu mchakato wa kurejelea mantiki sawa na kuiandika tena bila haja, na kuweka msimbo aua kazi ya kurudia wazi na rahisi.
Wave inasaidia urudufu unaotegemea hali na urudufuliko unaotegemea idadi ya nyakati zilizochaguliwa na pia hutoa maneno muhimu ili kudhibiti mchakato wa marudio katikati ya utekelezaji.

Sehemu hii inaelezea jinsi ya kutumia maneno ya `while`, `for`, pamoja na maneno muhimu ya `break` na `continue` ambayo yanadhibiti mchakato wa urudiaji.

---

## wakati neno lililohifadhiwa

`while` linazingatia utekelezaji wa kizuizi cha msimbo wakati sharti lililopeanwa litaangaliwa kama kweli (`true`).
Marudio yatakamilika mara tu hali inapokuwa ya uongo (`false`).

Njia hii inafaa kwa hali ambapo idadi ya marudio haijulikani wazi na lazima kurudia hadi hali fulani iridhike.

### Muundo wa Msingi

Muundo wa msingi wa sentensi ya while katika Wave ni kama ifuatavyo.

```wave
while (hali) {
    // misimbo ya kurudia
}
```

Hali lazima itathminiwe kwa aina ya `bool`, na ndani ya block ya kificho inayofungwa na vibano `{}`, unaweza kuandika tamko moja au zaidi.

### Mfano: Chapisha kutoka 0 hadi 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i ni {}.", i);
    i = i + 1;
}
```

Katika mfano huu, rudia wakati thamani ya kigezo `i` ni ndogo kuliko 5.
Kwa kila marudio, toa thamani ya sasa na ongeza thamani ya `i` kwa 1 ili kufanya hali iwe ya uwongo.

---

## kwa neno lililohifadhiwa

Kauli ya `for` ni sahihi kwa matumizi wakati idadi ya marudio ni sawa.
Unaweza kuweka wazi mtiririko wa marudio kwa kufafanua thamani ya awali, hali, na upunguzaji kwa mara moja.

Kwa sababu sehemu zote zinazohitajika kwa kudhibiti marudio ziko sehemu moja, ni rahisi kuelewa muundo wa marudio kwa haraka.

### Muundo wa Msingi

```wave
kwa (kuanzishwa; hali; uboreshaji) {
    // misimbo ya kurudia
}
```

Uanzishaji wa for katika Wave unatoa msaada kwa njia nyingi.

- Uanzishaji wa aina ya `var` ya kudhaniwa
- Uanzishaji wa kutangaza `var` / `let mut` / `const`
- Uanzishaji wa kawaida wa usemi (utumiaji tena wa kigezo kilichopo)

### Mfano 1: Uanzishaji wa aina ya kudhaniwa

```wave
kwa (i :i32 = 1; i <= 5; i += 1) {
    println("i = {}", i);
}
```

### Mfano 2: Uanzishaji wa `var` / `let mut`

```wave
kwa (var i: i32 = 0; i < 3; i += 1) {
    println("var i = {}", i);
}

kwa (let mut j: i32 = 0; j < 3; j += 1) {
    println("let mut j = {}", j);
}
```

### Mfano 3: Uanzishaji unaotegemea usemi (utumiaji tena wa kigezo kilichopo)

```wave
var i: i32 = 99;

kwa (i = 3; i <= 5; i += 1) {
    println("i = {}", i);
}

println("after loop: {}", i); // 6
```

Uanzishaji wa kutangaza (`var`, `let mut`, `i :i32 = ...`) hutenda kama kihodhi cha kigezo cha kitanzi, wakati uanzishaji unaotegemea usemi (`i = ...`) husasisha kigezo kilicho nje.

---

## Lugha ya kurudia zilizobebana

Marudio yanaweza kuandikwa ndani ya marudio mengine, na hii huitwa marudio yaliyopachikwa.
Marudio yaliyopachikwa ni muhimu wakati wa kupitia miundo ya data ya vipimo viwili au kushughulikia michanganyiko ya hali mbalimbali.

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

Katika mfano huu, kila wakati sentensi ya `while` ya nje inatekelezwa, sentensi ya ndani ya `while` inatekelezwa kabisa.
Kwa njia hii, unaweza kushughulikia michanganyiko ya aina ya (`i`, `j`) kwa mpangilio.

---

## Neno lililohifadhiwa break

Sentensi ya `break` hukomesha marudio moja kwa moja na kusogeza mtiririko nje ya marudio.
Hutumiwa wakati hakuna haja ya kufanya marudio zaidi katikati ya marudio.

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

Katika mfano huu, marudio yasiyo na mwisho husimama wakati `i` inakuwa 5, kutokana na utekelezaji wa `break`.
Kwa njia hii, sentensi ya `break` ni muhimu wakati unataka kudhibiti marudio tofauti na hali ya marudio.

---

## Neno lililohifadhiwa continue

Sentensi ya `continue` huruka kificho kilichobaki katika marudio ya sasa na kuanza mara moja marudio mengine.
Hutumiwa wakati unataka kuacha sehemu fulani tu ya logi katika hali fulani.

### Mfano: Chapisha nambari shufwa pekee

```wave
kwa (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

Katika kificho hiki, endapo `i` ni nambari isiyo ya jozi, `continue` inatekelezwa na kipengele cha kutoa matokeo kinakwepwa.
Matokeo yake ni kwamba ni maadili ya jozi pekee yanayozalishwa.

---

## Muhtasari

Sentensi za marudio za Wave zimetengenezwa ili kutoa maelezo ya kiasili ya marudio ya kutegemea hali na idadi ya marudio.
Sentensi ya `while` inafaa kwa marudio yanayotegemea hali, wakati kwa sentensi ya `for` ni muhimu unapojua idadi kamili na mtiririko wa marudio.

Ukitumia `break` na `continue` kwa pamoja, unaweza kudhibiti mtiririko wa utekelezaji kwa undani hata katikati ya marudio, na hivyo kuwezesha muundo wa logiki ya marudio ambayo ni sahihi zaidi na inayobadilika.
