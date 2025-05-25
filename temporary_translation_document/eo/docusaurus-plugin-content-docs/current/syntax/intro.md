---
sidebar_position: 1
---

# Funkcioj kaj Variabloj

## Enkonduko

La ĉefa dezajna filozofio de la programlingvo **Wave** estas ekvilibrigi malalt-nivelan rendimenton kun alt-nivela abstraktado, por provizi efikan kaj flekseblan medion por softvara disvolvado.
Ĉi tiu sekcio prezentas la bazajn komponantojn de Wave-programo: **funkciojn kaj variablojn**. Tiuj elementoj estas esencaj por organizi logikon kaj administri datumojn en la programo. Komprenante kiel difini kaj manipuli funkciojn kaj variablojn, vi povas plene utiligi la eblecojn de Wave.


---

## Funkcioj
En Wave, funkcioj estas **reuzeblaj kodoblokoj**, kiujn oni povas ekzekuti sendepende.
Ili kapsuligas specifajn agadojn kaj ebligas alvokadon de tiuj agadoj tra la programo. Tio helpas efektivigi kalkulojn, administri en- kaj eligajn operaciojn, kaj dividi kodon en facile administreblajn unuojn.

La strukturo de funkcio en Wave komenciĝas per la ŝlosilvorto `fun`, sekvata de la funkcia nomo, parametroj (se haveblas), kaj la funkcia korpo, enfermitaj per kurbaj krampoj `{}`.

### Difini Funkcion
Baza funkcio en Wave aspektas jene:

```wave
fun main() {
    // Skribu vian kodon ĉi tie
}
```

* La funkcio `main` estas la ĉefa enirpunkto de programo kaj estas ĉiam necesa.
* Funkcioj povas havi parametrojn kaj ankaŭ redoni valoron. La tipo de la redonita valoro estas indikita post la funkcia nomo.

### Ekzemplo: Simpla Funkcio

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Alvokas la funkcion add
    println(result);            // Rezulto: 12
}
```

En ĉi tiu ekzemplo:

* La funkcio `add` akceptas du entjerojn `a` kaj `b` kaj redonas ilian sumon.
* La funkcio `main` alvokas `add` kaj presas la rezulton.

## Variabloj
Variabloj estas uzataj por stoki kaj manipuli datumojn ene de programo. Wave subtenas kaj `ŝanĝeblajn` kaj `neŝanĝeblajn` variablojn, donante al programistoj plian kontrolon pri datumadministrado.

### Ŝanĝeblaj Variabloj
Per la ŝlosilvorto `var`, vi povas difini **ŝanĝeblajn variablojn**, kies valoroj povas esti ŝanĝitaj dum la programo funkcias.

```wave
var x :i32 = 10; // Ŝanĝebla variablo
x = 20;
```

En ĉi tiu ekzemplo:
* `x` estas ŝanĝebla variablo, kiu komence enhavas la valoron `10` sed povas esti ŝanĝita al `20`.

### Neŝanĝeblaj Variabloj
Por krei **neŝanĝeblan** variablon, vi uzu la ŝlosilvorton `var imm`. Tia variablo ne povas esti ŝanĝita post la komenca asigno.

```wave
var imm y :i32 = 5;     // Neŝanĝebla variablo
// y = 10;              // Eraro: Neŝanĝebla variablo ne povas esti ŝanĝita
```

Ĉi tie:
* `y` estas neŝanĝebla variablo, kaj provo modifi ĝin kaŭzos kompililan eraron.

### Ekzemplo: Deklarado de Variabloj
Jen ekzemplo de diversaj tipoj de ŝanĝeblaj kaj neŝanĝeblaj variabloj:


```wave
var x :i32 = 10;                    // Ŝanĝebla entjera variablo  
var imm y :f64 = 3.14159;           // Neŝanĝebla poentnombra variablo  
var name :str = "Wave";             // Ŝanĝebla ŝnura variablo  
var imm is_active :bool = true;     // Neŝanĝebla boolea variablo  
```

* `x` estas ŝanĝebla entjero.``
* `y` estas neŝanĝebla decimalnombro.``
* `name` estas ŝanĝebla ŝnuro.``
* `is_active` estas neŝanĝebla boolea valoro.``

Per la uzo de `var` por ŝanĝeblaj variabloj kaj `var imm` por neŝanĝeblaj, Wave helpas certigi daten-konsistencon kaj plibonigas la fidindecon de programoj.
Tio ebligas al vi krei pli solidan kaj antaŭvideblan kodon.