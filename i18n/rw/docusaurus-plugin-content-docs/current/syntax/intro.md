---
sidebar_position: 1
---

# Imikorere na Variables

## Intangiriro

Ingingo nyamukuru y’igenzura rya porogaramu ya Wave ni ukugira ihuriro hagati y'ubushobozi bwo kugenzura hasi no hejuru, bituma itanga ibidukikije byiza kandi byoroshye mu gukora porogaramu. Muri iyi ngingo, tuzareba ibice by’ibanze bya porogaramu ya Wave, ari byo imikorere (functions) na variables. Izi ni ingingo z'ingenzi mu gushyiraho ibitekerezo by'ingenzi no gucunga amakuru muri porogaramu. Kumenya uburyo bwo gushyiraho no gukoresha imikorere na variables bizatuma ushobora gukoresha ubushobozi bwa Wave mu buryo bwiza.

---

## Imikorere (Functions)

Muri Wave, imikorere (functions) ni ibice by'ibikorwa bishobora gukoreshwa kandi bikaza mu buryo bwo kongera kubyazwa umusaruro. Imikorere ikora ibikorwa bimwe na bimwe kandi ushobora kuyikoresha igihe cyose ukeneeye.

Imikorere ituma ushobora gukoresha kode imwe mu bice bitandukanye bya porogaramu. Mu buryo bworoshye, imikorere ifasha gukora igenzura ry’ibikorwa cyangwa kugabanya ibikubiye mu rwego rwo hejuru mu buryo bworoshye kandi buhuriweho.

Mu kwandika imikorere muri Wave, dukoresha ijambo `fun` nk'ibimenyetso byo gutangiza imikorere, ikurikirwa n'izina ry'imikorere, imbonerahamwe y'ibice bihabwa agaciro (parameters), hamwe n'ibikubiye muri `{}`.

### Gushyiraho Imikorere
Imikorere isanzwe muri Wave yandikwa muri ubu buryo:

```wave
fun main() {
    // Andika kode hano
}
```

* `main` ni imikorere isanzwe izajya itangira porogaramu kandi ikaba ari ngombwa.
* Imikorere ishobora kugira ibice bihabwa agaciro (parameters) kandi igasubiza (return) agaciro. Ibisubizo bigomba kugaragazwa nyuma y'izina ry'imikorere.

### Urugero: Imikorere Yoroheje

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Gukoresha imikorere ya add
    println(result);            // Ibisohoka: 12
}
```

Mu rugero rwo hejuru:

* `add` ni imikorere yakira `a` na `b`, byombi ni imibare (i32), hanyuma igasubiza is suma yabyo.
* `main` niyo ikoresha `add`, igasohora igisubizo cyayo.

## Variables
Variables ni uburyo bwo kubika no gucunga amakuru muri porogaramu. Mu rurimi rwa Wave, ushobora kugenga variables zishobora guhinduka (mutable) cyangwa variables zidahinduka (immutable).

### Variables Zishobora Guhinduka
Muri Wave, variables zishobora guhinduka ni zo zikoreshwa cyane. Ibi bivuze ko igihe porogaramu irimo gukora, ushobora guhindura agaciro ka variable.

Variables zishobora guhinduka zishyirwaho hakoreshejwe ijambo `var`.
```wave
var x :i32 = 10; // Variable ishobora guhinduka
x = 20;
```

Mu rugero hejuru:
* `x` ni variable ishobora guhinduka, ifite agaciro ka mbere `10`, ariko nyuma ishobora guhindurwa kugera kuri `20`.

### Variables Zidahinduka
Variables zidahinduka zishyirwaho mu buryo budahinduka, aho guhindura agaciro bishobora kubangamira porogaramu. Iyo umaze guha agaciro variable, ntushobora kugahindura ukundi.

Variables zidahinduka zishyirwaho hakoreshejwe ijambo `var imm`.
```wave
var imm y :i32 = 5;     // Variable idahinduka
// y = 10;              // Ikosa: Variable idahinduka ntishobora guhindurwa
```

Aha:
* `y` ni variable idahinduka. Niba ushaka kuyihindura, uzabona ikosa muri compilation.

### Urugero rwa Variables
Hano hari urugero rwo gushyiraho variables zitandukanye:

```wave
var x :i32 = 10;                    // Variable ishobora guhinduka y'ubwoko bwa integer
var imm y :f64 = 3.14159;           // Variable idahinduka y'ubwoko bwa floating-point
var name :str = "Wave";             // Variable ishobora guhinduka y'ubwoko bwa string
var imm is_active :bool = true;     // Variable idahinduka y'ubwoko bwa boolean
```

* `x` ni variable ishobora guhinduka y'ubwoko bwa integer.
* `y` ni variable idahinduka y'ubwoko bwa floating-point.
* `name` ni variable ishobora guhinduka y'ubwoko bwa string.
* `is_active` ni variable idahinduka y'ubwoko bwa boolean.

Muri Wave, ukoresha `var` mu gushyiraho variables zishobora guhinduka, naho `var imm` mu gushyiraho variables zidahinduka nyuma yo guha agaciro.

Mu kumenyekanisha variables ishobora guhinduka n'izidahinduka, Wave ifasha kugenzura ibimenyetso n'uburyo bw'imikorere ya porogaramu ku buryo bunoze, bityo igafasha gukoresha kode yizewe kandi ifite umurongo uhamye.