---
sidebar_position: 1
---

# Functies en Variabelen

## Introductie

De kernfilosofie van de programmeertaal Wave is het vinden van een balans tussen lage-niveau prestaties en hoge-niveau abstractie, waardoor een efficiënte en flexibele ontwikkelomgeving ontstaat.
In deze sectie worden de basiscomponenten van een Wave-programma geïntroduceerd: functies en variabelen.
Deze componenten zijn essentieel voor het structureren van de logica en het beheren van gegevens binnen een programma.
Door te begrijpen hoe functies en variabelen worden gedefinieerd en beheerd, kun je het volledige potentieel van Wave benutten.

---

## 함수
In Wave zijn functies **herbruikbare codeblokken** die onafhankelijk kunnen worden uitgevoerd.
Ze encapsuleren specifieke acties en kunnen worden aangeroepen waar nodig in het programma.
Dit maakt het mogelijk om berekeningen uit te voeren, I/O-operaties te beheren en code te organiseren in beheersbare eenheden.

Een functie in Wave begint met het sleutelwoord `fun`, gevolgd door de functienaam, parameters (indien aanwezig) en een functielichaam omgeven door accolades `{}`.

### Een functie definiëren
Een eenvoudige functie in Wave wordt als volgt gedefinieerd:

```wave
fun main() {
    // Schrijf hier je code
}
```

* De functie `main` is het **entry point** van het programma en is altijd vereist.
* Een functie kan parameters accepteren en een waarde retourneren. Het **returntype** wordt na de functienaam gespecificeerd.

### Voorbeeld: een eenvoudige functie

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Aanroepen van de functie add
    println(result);            // Output: 12
}
```

In dit voorbeeld:

* De functie `add` accepteert twee gehele getallen `a` en `b` en retourneert hun som.
* De main-functie roept `add` aan en drukt het resultaat af.

## Variabelen
Variabelen worden gebruikt om gegevens op te slaan en te manipuleren binnen een programma.
Wave ondersteunt zowel **mutable (veranderlijke)** als **immutable (onveranderlijke)** variabelen, waardoor ontwikkelaars meer controle krijgen over databeheer.

### Mutable variabelen
Standaard zijn variabelen in Wave **mutable**, wat betekent dat hun waarde tijdens de uitvoering kan worden gewijzigd.

Een mutable variabele wordt gedeclareerd met het sleutelwoord `var`:
```wave
var x :i32 = 10; // Mutable variabele
x = 20;
```

In dit voorbeeld:
* `x` is een **mutable variabele** met een initiële waarde van `10`, die later wordt gewijzigd naar `20`.

### Immutable variabelen
Een **immutable** variabele kan na toewijzing niet meer worden gewijzigd.

Een immutable variabele wordt gedeclareerd met het sleutelwoord `var imm`:
```wave
var imm y :i32 = 5;     // Immutable variabele
// y = 10;              // Fout: immutable variabelen kunnen niet worden gewijzigd
```

In dit geval:
* `y` is een immutable variabele en een wijziging van de waarde leidt tot een compilatiefout.

### Voorbeeld: declaratie van variabelen
Hier is een voorbeeld van verschillende soorten variabelen in Wave:

```wave
var x :i32 = 10;                    // Mutable integer
var imm y :f64 = 3.14159;           // Immutable floating-point getal
var name :str = "Wave";             // Mutable string
var imm is_active :bool = true;     // Immutable boolean
```

* `x` is een mutable integer.
* `y` is een immutable floating-point getal.
* `name` is een mutable string.
* `is_active` is een immutable boolean.

In Wave worden mutable variabelen gedeclareerd met `var`, terwijl immutable variabelen worden gedeclareerd met `var imm`.

Door onderscheid te maken tussen mutable en immutable variabelen, helpt Wave bij het handhaven van dataconsistentie en programma-stabiliteit.
Dit draagt bij aan het schrijven van robuuste en voorspelbare code.