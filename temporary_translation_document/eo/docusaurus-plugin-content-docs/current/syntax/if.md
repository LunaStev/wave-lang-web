---
sidebar_position: 3
---

# IF Komando
## Enkonduko
En ĉi tiu sekcio, ni enkondukas la sintakson de la IF-komando, unu el la kontrolkomandoj de Wave.
La IF-komando estas kontrolkomando en programado, kiu taksas kondiĉon kaj ekzekutas specifan kodon nur se la kondiĉo estas vera.
Per tio, ni povas kontroli la fluon de la programo laŭ kondiĉoj kaj skribi flekseblan kaj logikan kodon.

## Bazstrukturo
La IF-komando taksas specifan kondiĉon kaj nur ekzekutas la difinitan kodon, se la kondiĉo estas vera (True).
La baza strukturo de IF-komando en Wave estas:

```wave
if (kondiĉo) {
    // Kodo ekzekutita kiam la kondiĉo estas vera
}
```

La kondiĉo povas esti verkita uzante komparajn operatorojn (`==`, `!=`, `<`, `>`, `<=`, `>=`) aŭ logikajn operatorojn (`&&`, `||`, `!`) ktp. Se la kondiĉo estas falsa (False), la kodo-bloko ne estos ekzekutita.

## Ekzemplo
Jen simpla ekzemplo de la IF-komando:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("La vetero estas varma.");
}
```

En ĉi tiu kodo, se la valoro de temperature estas pli granda ol 25, la mesaĝo "La vetero estas varma." estos montrita.

## IF_ELSE Komando
Se la kondiĉo ne estas vera kaj vi volas ekzekuti alternativan kodon, vi uzos la IF-ELSE-komandon.
La strukturo estas la sekvanta:

```wave
if (kondiĉo) {
    // Kodo ekzekutita kiam la kondiĉo estas vera
} else {
    // Kodo ekzekutita kiam la kondiĉo estas falsa
}
```

### Ekzemplo:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Vi pasis!");
} else {
    println("Vi ne pasis.");
}
```

Se la valoro de score estas 60 aŭ pli granda, "Vi pasis!" estos montrita, alie "Vi ne pasis." estos montrita.

## Nestoitaj IF Komandoj
La IF-komando povas esti uzata ene de alia IF-komando. Tio estas nomata nesto de IF-komandoj, kaj ĝi estas utila por trakti komplikitajn kondiĉojn.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Elstara rezulto!");
    } else {
        println("Vi pasis.");
    } 
} else {
    println("Vi ne pasis.");
}
```

En ĉi tiu ekzemplo, la mesaĝoj "Elstara rezulto!", "Vi pasis." aŭ "Vi ne pasis." estos montritaj depende de la valoro de la score.

## Resumo

* La IF-komando taksas kondiĉon kaj ekzekutas specifan kodon.
* La ELSE-komando ebligas difini kodon, kiu estos ekzekutita kiam la kondiĉo estas falsa.
* Nesto de IF-komandoj estas uzata por trakti komplikitajn kondiĉojn.

Per la IF-komandoj, vi povas krei logikan kaj dinamikan fluon de la programo!
