---
sidebar_position: 2
---

# Syntax

## 1. Basisstructuur
* De inhoud van het bestand begint en eindigt met een object, omgeven door accolades `{}`.

* Een object bestaat uit sleutel-waarde paren, waarbij de sleutel de naam van het attribuut is en de waarde de waarde van het attribuut.

* De sleutel en de waarde worden gescheiden door een dubbele punt (`:`) of een gelijkteken (`=`).

## 2. Commentaar
* Commentaar begint met `//` of `#` en wordt op één regel geschreven.

* Commentaar geldt tot het einde van de regel.

* Meerdere regels commentaar worden niet ondersteund. Als je commentaar over meerdere regels wilt schrijven, moet je `//` of `#` aan het begin van elke regel toevoegen.

## 3. Object
* Een object is omgeven door accolades `{}` en bevat sleutel-waarde paren.

* Tussen de sleutel en de waarde kan zowel `:` als `=` worden gebruikt. Beide symbolen zijn verwisselbaar.

* Elke eigenschap wordt gescheiden door een komma (`,`).

* Je kunt andere objecten in een object inbedden.

Voorbeeld:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Array
* Een array is omgeven door vierkante haken `[]`, en de elementen worden gescheiden door komma's (`,`).

* De elementen van een array kunnen objecten, strings, getallen of andere datatypes zijn.

* In WSON kunnen arrays binnen objecten worden opgenomen, en arrays kunnen andere arrays of objecten bevatten.

Voorbeeld:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Sleutel-waarde paren
* De naam van de attribuut is een string en wordt direct na `:` of `=`, zonder spaties, geplaatst.

* De waarde kan van types zoals string, getal, boolean, object of array zijn.

* Strings worden omgeven door dubbele aanhalingstekens (`"`).

* Getallen worden zonder aanhalingstekens geschreven en kunnen gehele getallen of zwevende-kommagetallen zijn.

Voorbeeld:

```
name: "John Doe"
age = 25
```

## 6. Datatypes
* String: Tekst omgeven door dubbele aanhalingstekens (`"`).

```
"hello world"
```

- Getal (Number): Een geheel getal of een zwevend-kommagetal.

```
42
3.14
```

- Boolean: De waarde is `true` of `false`.

```
is_active = true
```

* Object: Een verzameling van sleutel-waarde paren omgeven door `{}`.

* Array: Een lijst van elementen omgeven door `[]`.

## 7. Uitleg van het voorbeeld

```ws
{
    // Statuscode en berichtinformatie
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Leeftijd van de gebruiker
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```