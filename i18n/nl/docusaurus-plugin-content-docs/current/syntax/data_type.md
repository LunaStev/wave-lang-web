---
sidebar_position: 2
---

# Gegevenstypen

Dit document beschrijft de verschillende gegevenstypen die beschikbaar zijn in de programmeertaal Wave.
Wave ondersteunt een breed scala aan gegevenstypen waarmee waarden kunnen worden opgeslagen en bewerkingen kunnen worden uitgevoerd.
De belangrijkste gegevenstypen zijn gehele getallen, drijvende-komma getallen, strings en meer.
Elk gegevenstype definieert de kenmerken van de gegevens en hoe deze in het geheugen worden verwerkt.

## Gehele getallen (Integer types)
Gehele getallen worden gebruikt om hele waarden op te slaan.
Standaard worden gehele getallen gedefinieerd als `i32` (32-bits integer met teken) en `u32` (32-bits integer zonder teken).
Wave biedt echter ook flexibiliteit door verschillende bitgroottes toe te staan.

* `i8` ~ `i1024`: Gehele getallen met teken, variërend van 8-bits tot 1024-bits.
* `u8` ~ `u1024`: Gehele getallen zonder teken, variërend van 8-bits tot 1024-bits.

Voorbeeld:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Drijvende-komma getallen (Floating-point types)
Drijvende-komma getallen worden gebruikt voor decimale waarden.
Standaard worden ze gedefinieerd als `f32`, maar Wave biedt meerdere bitgroottes voor nauwkeurigere berekeningen.

* `f32` ~ `f1024`: Drijvende-komma getallen variërend van 32-bits tot 1024-bits, geschikt voor complexe berekeningen.

Voorbeeld:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## String type
Strings worden gebruikt om **tekstgegevens** op te slaan en worden gedeclareerd met het sleutelwoord `str`.
Een string wordt omsloten door dubbele aanhalingstekens (`"`).

Voorbeeld:
```wave
var text :str = "Hello Wave";
```

## Booleaanse waarden (Boolean type)
Het booleaanse type (`bool`) vertegenwoordigt **waar (true)** of **onwaar (false)** waarden.
Het wordt voornamelijk gebruikt in voorwaardelijke expressies.

Voorbeeld:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Karakter type (Character type)
Het `char` type wordt gebruikt om een **enkel teken** op te slaan.
Een karakter wordt omsloten door enkele aanhalingstekens (`'`).

Voorbeeld:
```wave
var letter :char = 'A';
```

## Byte type
Het `byte` type wordt gebruikt voor **binaire gegevens** en heeft een vaste grootte van **1 byte**.
Dit is handig bij het werken met ruwe data zoals bestanden en netwerkverkeer.

Voorbeeld:
```wave
var byteData :byte = 0xFF;
```

## Pointer type
Een **pointer** slaat een **geheugenadres** op en wordt gedeclareerd met het sleutelwoord `ptr`.

Voorbeeld:
```wave
var ptr :ptr = &someVariable;
```

## Array type
Een **array** is een **geordende lijst** met waarden van hetzelfde type.
Een array wordt gedeclareerd met het sleutelwoord `array`.

Voorbeeld:
```wave
var numbers: array<i32> = [1, 2, 3, 4, 5];
```

Wave biedt uitgebreide controle over geheugengebruik en precisie door verschillende gegevenstypen aan te bieden.
Door de juiste gegevenstypen te kiezen, kan de efficiëntie van zowel geheugengebruik als berekeningen worden geoptimaliseerd.