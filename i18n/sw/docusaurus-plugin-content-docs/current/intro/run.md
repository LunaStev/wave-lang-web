---
sidebar_position: 3
---

# Kuendesha Programu ya Kwanza

Ikiwa tayari umeweka Wave kutoka kwa hati ya awali ya usakinishaji, sasa ni wakati wa kutekeleza programu yako ya kwanza ya Wave.
Katika sehemu hii, tunaangalia mchakato mzima wa kuandika na kutekeleza programu ya Wave kwa hatua kupitia kielelezo rahisi.

## Kujenga faili ya `hello.wave`

Kwanza, unda faili mpya iliyo na jina `hello.wave` katika saraka unayofanyia kazi.
Unaweza kuchagua jina na kiendelezi chochote cha faili, lakini hapa tunatumia `hello.wave` kama kielelezo.

## Kuandika Msimbo

Andika msimbo ufuatao katika faili `hello.wave` ulioiunda.

```wave
fun main() {
    println("Hello Wave");
}
```

Katika msimbo huu, `fun main()` inaonyesha sehemu ya mwanzo ya utekelezaji wa programu ya Wave.
Programu za Wave huanza kutekelezwa kila mara kutoka kwa kazi ya `main`.

Kazi ya `println` ni kazi ya kutoa mnyororo wa herufi kwenye pato la kawaida, hutumiwa kimsingi katika kuonyesha maandishi kwenye skrini.

## Kuendesha Programu

Baada ya kumaliza kuandika msimbo, fungua terminal na utekeleze amri ifuatayo katika saraka ambapo faili iko.

```bash
wavec run hello.wave
```

Amri hii inamwelekeza kiunda-msimbo wa Wave kuboresha faili ya chanzo na kisha kutekeleza bila kuchelewa.

## Kuangalia Matokeo

Ikiwa programu itatekelezwa vilivyo, pato lifuatalo linaweza kuonekana kwenye terminal.

```
Hello Wave
```

Iwapo utaliona hili pato, inamaanisha kuwa Wave imesakinishwa vizuri na kwamba uandishi na utekelezaji wa programu vimefanikiwa.

Sasa umefanikiwa kutekeleza programu yako ya kwanza ya Wave.
Kuanzia sasa, unaweza kuendelea kuangalia sarufi na vipengele vya Wave na kujaribu kuandika programu ngumu zaidi.

Unaweza kuona chaguzi sahihi za amri (`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`) katika hati ya CLI ya `wavec`.
