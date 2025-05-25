---
sidebar_position: 3
---

# IF-verklaring
## Inleiding
In dit gedeelte introduceren we de syntaxis van de IF-verklaring, een van de controle-instructies van Wave. De IF-verklaring wordt gebruikt in programmeren om voorwaarden te evalueren en een bepaald stuk code uit te voeren wanneer de voorwaarde waar (True) is. Dit stelt ons in staat om de stroom van het programma te beheersen en flexibele en logische code te schrijven.

## Basisstructuur
De IF-verklaring evalueert een bepaalde voorwaarde en voert de opgegeven codeblock alleen uit wanneer de voorwaarde waar is. De basisstructuur van een IF-verklaring in Wave is als volgt:

```wave
if (voorwaarde) {
    // Code die wordt uitgevoerd als de voorwaarde waar is
}
```

De voorwaarde kan worden opgesteld met vergelijkingsoperatoren (`==`, `!=`, `<`, `>`, `<=`, `>=`) of logische operatoren (`&&`, `||`, `!`). Als de voorwaarde onwaar (False) is, wordt het codeblock niet uitgevoerd.

## Voorbeeld
Hier is een eenvoudig voorbeeld van een IF-verklaring:

```wave
var temperatuur :i32 = 30;

if (temperatuur > 25) {
    println("Het weer is heet.");
}
```

In de bovenstaande code wordt de boodschap "Het weer is heet." weergegeven als de waarde van temperatuur groter is dan 25.

## IF_ELSE-verklaring
Als de voorwaarde niet waar is, wordt meestal de IF-ELSE-verklaring gebruikt om alternatieve code uit te voeren. De structuur is als volgt:

```wave
if (voorwaarde) {
    // Code die wordt uitgevoerd als de voorwaarde waar is
} else {
    // Code die wordt uitgevoerd als de voorwaarde onwaar is
}
```

### Voorbeeld:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Geslaagd!");
} else {
    println("Gezakt.");
}
```

Als de score 60 of meer is, wordt "Geslaagd!" weergegeven; anders wordt "Gezakt." weergegeven.

## Geneste IF-verklaring
De IF-verklaring kan binnen andere IF-verklaringen worden gebruikt. Dit wordt een geneste IF-verklaring genoemd en is handig voor het verwerken van complexe voorwaarden.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Uitstekende prestatie!");
    } else {
        println("Geslaagd.");
    } 
} else {
    println("Gezakt.");
}
```

In het bovenstaande voorbeeld worden de berichten "Uitstekende prestatie!", "Geslaagd." of "Gezakt." weergegeven, afhankelijk van de score.

## Samenvatting

* De IF-verklaring evalueert een voorwaarde en voert een specifiek codeblok uit.
* Door de ELSE-verklaring toe te voegen, kun je ook de code specificeren die uitgevoerd moet worden als de voorwaarde onwaar is.
* Geneste IF-verklaringen worden gebruikt voor complexe voorwaarden.

Door de IF-verklaring te gebruiken, kun je de stroom van je programma logischer en dynamischer maken!