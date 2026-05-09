---
sidebar_position: 1
---

# Majukumu na Vigezo

## Utangulizi

Falsafa kuu ya muundo wa lugha ya programu ya Wave ni kudumisha usawa kati ya utendaji wa kiwango cha chini na uimarishaji wa kiwango cha juu, huku ukitoa mazingira bora na yenye kubadilika ya uendelezaji wa programu.
Sehemu hii inatoa utangulizi kwa kazi na vigezo ambavyo ni vifaa vya msingi vya mpangilio wa programu ya Wave.

Kazi ni sehemu kuu ya kupanga tabia na mantiki ya programu, huku vigezo vikihifadhi na kusimamia data inayohitajika katika mchakato huo.
Ukielewa kwa usahihi jinsi ya kufafanua na kutumia kazi na vigezo, unaweza kutumia kwa kina zaidi muundo wa lugha ya Wave na nia yake ya muundo.

---

## Kazi

Katika Wave, kazi ni kipande cha msimbo kinachoweza kutumika tena ambacho kinaweza kutekelezwa kwa uhuru.
Inaweza kufunga tabia au hesabu fulani pamoja kuwa kipande kimoja, na inaweza kuitwa wakati inahitajika katika programu yote.

Kwa kutumia kazi, unaweza kupunguza msimbo unaorudia, na kutenganisha programu kiwmantiki ili kuongeza usomaji na urahisi wa utunzaji.
Inaweza pia kutumika kwa madhumuni mbalimbali kama vile usindikaji wa hesabu, usimamizi wa pembejeo/pato, na mgawanyo wa mantiki.

Katika Wave, kazi hufafanuliwa kwa kutumia neno kuu `fun`, ikiundwa na jina la kazi, orodha ya vigezo, na mwili wa kazi uliozingirwa ndani ya mabano `{}`.

### Kufafanua Jukumu

Muundo wa msingi wa ufafanuzi wa kazi katika Wave ni kama ifuatavyo.

```wave
fun main() {
    // Andika nambari yako hapa
}
```

Kazi ya `main` ni sehemu ya kuanzia utekelezaji wa programu, na katika programu ya Wave lazima kuwepo na kazi moja `main`.
Programu inaanzisha utekelezaji kutoka kazi hii.

Kazi inaweza kuwa na vigezo kulingana na mahitaji, na inaweza pia kurudisha matokeo ya hesabu au thamani kwa mahali ilipoitwa.
Kama kuna kurudisha thamani, aina ya thamani inayorudishwa huainishwa katika sehemu ya tangazo la kazi.

### Mfano: Kazi rahisi

Mfano ufuatao ni kazi rahisi inayopokea namba mbili nzima na kurudisha jumla yao.

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // ongeza simu ya utendaji
    println(result);            // Pato: 12
}
```

Katika mfano huu, kazi `add` inapokea vigezo vya namba nzima `a` na `b`, huzijumlisha, kisha inarudisha matokeo.
Katika kazi ya `main`, kazi `add` inaitwa, thamani inayorudishwa huhifadhiwa katika kigezo na kisha kuchapishwa.

Kazi hufunga tabia maalum na kuruhusu kutumiwa tena kutoka sehemu mbalimbali za programu.

## Kigezo

Vigezo hutumika kuhifadhi na kudhibiti data katika programu.
Wave imeundwa kuonyesha nia ya mabadiliko ya data hadi kwenye kiwango cha msimbo kwa kutenganisha wazi vigezo vinavyoweza kubadilika na visivyoweza kubadilika wakati wa ufafanuzi wa kigezo.

Hii hutoa hali ya wazi ya mabadiliko ya hali ya programu, na inaweza kupunguza makosa yanayosababishwa na mabadiliko yasiyokusudiwa ya thamani.

### Kigezo kinachoweza kubadilika

Katika Wave, kigezo kwa chaguomsingi kinaweza kubadilika (mutable).
Hii inamaanisha kuwa, unaweza kubadilisha thamani baada ya kufafanuliwa na wakati wa utekelezaji wa programu.

Vigezo vinavyoweza kubadilika hutangazwa kwa kutumia neno `var`.

```wave
var x :i32 = 10;
x = 20;
```

Katika msimbo huo, `x` ina thamani ya awali `10`, na baadaye inaweza kubadilishwa kuwa `20`.
Kwa data ambazo hali yake inapaswa kubadilishwa, tunatumia vigezo vinavyoweza kubadilika.

### Kigezo kisichobadilika

Ikiwa unatanganza kigezo kama kisichobadilika (immutable), baada ya thamani ya awali kutolewa, haiwezi kubadilishwa.
Vigezo visivyobadilika hutangazwa kwa kutumia neno let.

```wave
let y :i32 = 5;
// y = 10;   // Hitilafu: Vigezo visivyoweza kubadilika haviwezi kubadilisha thamani yake.
```

Vigezo visivyobadilika vinahakikisha thamani haibadiliki, ikisaidia kuimarisha uthabiti na ubashiri wa programu.
Inashauriwa kutumia vigezo visivyobadilika kwa data za kila mara ambapo mabadiliko ya thamani hayahitajiki.

Katika Wave, unaweza kutumia neno `let` pamoja na `mut` ili kuruhusu mabadiliko ya wazi.

```wave
let mut y :i32 = 5;
y = 10;
```

Kigezo kimetangazwa kwa kutumia `let`, lakini mabadiliko ya thamani yanaruhusiwa kupitia neno `mut`.

### Mfano wa tamko la kigezo

Ifuatayo ni mfano wa kutangaza vigezo vinavyoweza na visivyoweza kubadilika vya aina mbalimbali.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = true;
```

Katika mfano huu, `x` na `name` ni vigezo vinavyoweza kubadilika, wakati `y` na `is_active` ni vigezo visivyobadilika.
Katika Wave, utofautishaji wa wazi wa `var` na `let` unaonyesha uwezekano wa mabadiliko ya data katika kiwango cha msimbo.

Ukichagua kati ya vigezo vinavyoweza na visivyoweza kubadilika ipasavyo, unaweza kuandika programu thabiti zaidi na inayoweza kutabirika huku ukidumisha uthabiti wa data.