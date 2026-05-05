---
sidebar_position: 4
---

# Ramani ya Maendeleo ya Ujumuishaji wa Wave + Whale v2

Hati hii ni ramani ya njia ya hatua kwa hatua ya mchakato wa maendeleo jumuishi wa lugha ya Wave na mnyororo wa zana ya Whale.
Wave na Whale huanza kama vipengele vilivyotengwa mwanzoni lakini kwa mwisho lengo lao ni kujumuishwa kama mfumo wa lugha huru kabisa.

Hatua zote za maendeleo hufuata mtiririko kama ufuatao.

```matlab
pre-alpha → pre-beta → alfa → beta → rc → kutolewa
```

Kila hatua inategemea matokeo ya hatua iliyotangulia, na maendeleo ya mwelekeo mmoja yamaanisha mtiririko wa ujenzi usioweza kurudishwa mara moja.

---

## Hatua ya Pre-Beta

Lengo la awamu ya kabla ya Beta ni kukamilisha sehemu ya mbele ya lugha ya Wave na kutekeleza utendaji kamili wa lugha kwa msingi wa mwisho wa nyuma wa LLVM.
Katika hatua hii, Whale haitumiki, na muungano na utekelezaji wote hufanyika kupitia LLVM pekee.

Kazi ya kupanua sarufi hewa haijafanyika katika hatua hii.
Lengo kuu ni kufanya vipengele vyote vya sarufi vireje kwenye vitendo msingi kutokana na maelezo tayari yaliyotolewa.
Tunalenga kutuliza muundo wa mbele kwa kuboresha ubora wa ujumbe wa hitilafu, ukaguzi wa aina, na utunzaji wa upeo wa huzitova.

Utekelezaji unajumuisha tamko na utoaji wa huzitova, shughuli za msingi, ufafanuzi wa kazi na wito, na vipengele vya matawi (`if` / `else if` / `else`) pamoja na viboreshaji (`while` / `break` / `continue`) zote ambazo zinafanywa katika hatua hii.
Pia unajumuisha utoaji kwa utaratibu, ufafanuzi wa aina wazi, muundo wa kiashiria kwa `ptr<T>`, na muundo wa safu kwa `array<T, N>`.

Katika hatua hii, mkusanyaji wa Wave unandikwa kikamilifu kwa Rust, ukitumia inkwell na llvm-sys kwa uzalishaji wa LLVM IR na utekelezwaji wa AOT.

---

## Hatua ya Alpha

Lengo la awamu ya Alpha ni kuanzisha mwisho wa nyuma wa Whale, na kuanzisha muundo wa kutumia LLVM na Whale sambamba.
LLVM inabaki kuwa mwisho wa nyuma wa msingi, na Whale inaongezwa kama nyuma ambayo inaweza kutumika kwa chaguo.

Unapotekeleza msimbo wa Wave, unaweza kuchagua kutumia backend ya LLVM au Whale kupitia chaguo la `--backend`.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

Katika hatua hii, tunaunda na kufafanua muundo wa IR wa Whale yenyewe.
Tunapanga vipengele muhimu kama vile Instruction, Value, Block, na kutekeleza IR Generator ya kubadilisha AST ya Wave kuwa Whale IR.

Pia, tunatekeleza kizalisha msimbo kwa Whale ili uweze kutekelezwa katika aina ya assembly au binary.
Aina zinazoweza kuwa ngumu au zisizo na ufanisi kutekelezwa katika LLVM, kama vile `i1024` au miundo ya pointer ya hali ya juu, zinaanzishwa kama vipengele vya kipekee vya Whale katika hatua hii.

Kama kiwango cha kuangalia, Whale backend inapaswa kuweza kutoa Hello World, na tangazo na uteuzi wa variable, usindikaji wa pointer, na zana za kusuluhisha IR zinapaswa kufanya kazi kwa kawaida.
Hii ni awamu ambapo mchakato halisi wa kubadilisha Wave kuwa Whale IR hufanyika.

---

## Hatua ya Beta

Lengo la awamu ya Beta ni kubadilisha kabisa hadi Whale na kuondoa utegemezi wa LLVM.
Kuanzia awamu hii, uundaji na utekelezaji wa Wave hutumia Whale pekee.

Utegemezi na moduli zinazohusiana na LLVM zote zinaondolewa, na njia za kuzalisha na kutekeleza msimbo zinaboreshwa kwa msingi wa Whale.
Kazi kuu ni kufanya mtiririko kutoka kwa uundaji wa IR hadi utekelezaji kuwa rahisi na wa haraka.

Tunabuni upitisho wa kuboresha Whale IR, kuboresha kasi ya uzalishaji wa msimbo na ufanisi wa utekelezaji.
Sarufi zote za Wave zinapaswa kuungwa mkono kikamilifu katika awamu hii kwa msingi wa Whale backend.

Kwa upande wa majaribio, tunafanya vipimo vya kitengo na mpango wa majaribio jumla, na pia kuthibitisha utangamano wa WSON na maktaba za kawaida, na uthibitishaji wa ujenzi wa Whale wa majukwaa mbalimbali.

---

## Hatua ya RC (Mgombea wa Kutolewa)

Lengo la awamu ya RC ni kuanzisha bootstrap ya Wave.
Kuanzia awamu hii, tunaanza kuondoa utekelezaji wa Rust wa kiunda-msimbo wa Wave polepole na kuandika upya kiunda-msimbo wa Wave katika lugha yenyewe ya Wave.

Tunajenga tena jenereta ya Wave IR kwa msingi wa Whale, na kubadilisha mantiki ya msingi ya kiunda-msimbo na maktaba za std / core na msimbo wa Wave.
Kupitia mchakato huu, Whale inaingia katika awamu ya kujihostisha.

Ikiwa bootstrap itafanikiwa, kiunda-msimbo wa kwanza asilia wa Wave atazaliwa.

---

## Hatua ya Kutolewa (v0.0.1)

Awamu ya Kutolewa inamaanisha toleo rasmi la kwanza la Wave.
Wakati huu, Wave na Whale zinajumuisha kikamilifu mfumo huru wa lugha.

Vipengele vya Utoaji vinajumuisha lugha ya Wave na maktaba ya kawaida, msururu wa zana wa kiunda-msimbo wa Whale, meneja wa kifurushi cha Vex, na umbizo la data la WSON.

Wave katika awamu hii inapaswa kuwa na kiunda-msimbo kilichoandikwa kikamilifu katika msimbo wa Wave, na maboresho ya Whale yanapaswa kuwa yamekamilika.
Mtiririko wa ujenzi na usambazaji kupitia Vex utaanzishwa, na ujenzi wa OS tofauti kama `vex build --windows` unapaswa pia kuwa unawezekana.

---

## Mkakati wa Meta wa Maendeleo

Maendeleo ya Wave + Whale hayafanyiki kwa hatua tu, lakini hufanyika kwa msingi wa mkakati wazi.
Tunapochukua mkakati wa treni+reli wa kuendeleza Whale na kupanga backend ya Wave kwa wakati mmoja, tunaendeleza muundo wa backend na usanifu wa lugha kwa pamoja.

Katika awamu ya Alpha, mkakati wa mgawanyiko wa backend kupitia chaguo la `--backend` unacheza jukumu muhimu, na unatoa msingi wa kulinganisha na kuthibitisha moja kwa moja kati ya LLVM na Whale.

Baada ya RC, muundo hurejea ambapo msimbo wa Wave unajiunda kupitia Whale, na mpango wa kurejesha muundo unaendelea kwa umakini.