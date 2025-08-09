---
sidebar_position: 2
---

# Syntax

## 1. Grundstruktur

- Der Inhalt der Datei beginnt und endet mit einem Objekt innerhalb von `{}` geschweiften Klammern.

- Ein Objekt besteht aus Paaren von Attributnamen (key) und Werten (value).

- Attributnamen und Werte werden durch Doppelpunkte (`:`) oder Gleichheitszeichen (`=`) getrennt.

## 2. Kommentare

- Kommentare beginnen mit `//` oder `#` und werden zeilenweise erstellt.

- Kommentare gelten bis zum Ende der Zeile.

- Mehrzeilige Kommentare werden nicht gesondert unterstützt. Wenn Kommentare über mehrere Zeilen geschrieben werden, muss in jeder Zeile `//` oder `#` hinzugefügt werden.

## 3. Objekt

- Ein Objekt ist von geschweiften Klammern `{}` umgeben und enthält Schlüssel-Wert-Paare.

- Zwischen Schlüssel und Wert können die Symbole `:` oder `=` verwendet werden. Beide Symbole können gemischt verwendet werden.

- Jedes Attribut wird durch ein Komma (\`,’) getrennt.

- Innerhalb eines Objekts können andere Objekte verschachtelt werden.

Beispiel:

```
{
    status: "Erfolg",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Array

- Ein Array ist von eckigen Klammern `[]` umgeben, und die Elemente sind durch Kommas (\`,’) getrennt.

- Die Elemente eines Arrays können verschiedene Datentypen wie Objekte, Zeichenfolgen und Zahlen sein.

- In WSON kann ein Array innerhalb eines Objekts enthalten sein, und innerhalb eines Arrays können andere Arrays oder Objekte verschachtelt sein.

Beispiel:

```
Aufgaben: [
    { task_id: 1, title: "Projektbericht abschließen" },
    { task_id: 2, title: "Team-Feedback überprüfen" }
]
```

## 5. Schlüssel-Wert-Paar

- Attributnamen bestehen aus Zeichenfolgen, und Werte werden dahinter ohne Leerzeichen nach `:` oder `=` platziert.

- Die Werttypen umfassen Zeichenfolgen, Zahlen, Boolesche, Objekte und Arrays.

- Zeichenfolgen sind von Anführungszeichen `“` umgeben.

- Zahlen werden ohne Anführungszeichen verwendet und können ganzzahlig oder gleitkommagesteuert sein.

Beispiel:

```
Name: "John Doe"
Alter = 25
```

## 6. Datentypen

- Zeichenkette(String): Ein Text, der in Anführungszeichen `"` eingeschlossen ist.

```
"hello world"
```

- Zahl(Number): Ganzzahl- oder Gleitkommawert.

```
42
3,14
```

- Boolean(Boolean): Verwendet die Werte `true` oder `false`.

```
is_active = true
```

- Objekt(Object): Ein Paar aus Schlüssel und Wert, eingeschlossen in geschweifte Klammern `{}`.
- Array(Array): Eine Liste von Elementen eingeschlossen in eckige Klammern `[]`.

## 7. Beispielbeschreibung

```ws
{
    // Statuscode und Nachrichteninformation
    status: "erfolgreich",
    code: 200,
    message: "Daten erfolgreich abgerufen",

    benutzer = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        alter: 25  # Benutzeralter
    },

    aufgaben: [
        {
            aufgaben_id: 1,
            titel: "Projektbericht abschließen",
            status: "in-Progress",
            faelliges_datum: "2024-10-15"
        },
        {
            aufgaben_id: 2,
            titel: "Feedback vom Team überprüfen",
            status: "ausstehend",
            faelliges_datum: "2024-10-20"
        }
    ]
}
```