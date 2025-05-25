---
sidebar_position: 2
---

# Syntax

## 1. Grundstruktur

* Der Inhalt der Datei beginnt und endet mit einem Objekt, das in `{}` geschweifte Klammern eingeschlossen ist.
* Ein Objekt besteht aus Schlüssel-Wert-Paaren, wobei der Schlüssel der Attributname und der Wert der Attributwert ist.
* Der Attributname und der Wert werden durch einen Doppelpunkt (`:`) oder ein Gleichheitszeichen (`=`) getrennt.

## 2. Kommentare

* Kommentare beginnen mit `//` oder `#` und werden in einer einzelnen Zeile geschrieben.
* Kommentare gelten für den Rest der Zeile.
* Mehrzeilige Kommentare werden nicht unterstützt. Wenn Kommentare über mehrere Zeilen geschrieben werden müssen, muss zu Beginn jeder Zeile `//` oder `#` hinzugefügt werden.

## 3. Objekt

* Ein Objekt ist in `{}` geschweifte Klammern eingeschlossen und enthält Schlüssel-Wert-Paare.
* Zwischen Schlüssel und Wert kann entweder `:` oder `=` verwendet werden. Beide Symbole sind austauschbar.
* Jede Eigenschaft wird durch ein Komma (`,`) getrennt.
* Es können andere Objekte innerhalb eines Objekts verschachtelt werden.

Beispiel:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Array

* Ein Array ist in `[]` eckige Klammern eingeschlossen, und die Elemente sind durch Kommas (`,`) getrennt.
* Array-Elemente können Objekte, Strings, Zahlen oder andere Datentypen sein.
* In WSON können Arrays innerhalb von Objekten enthalten sein, und Arrays können auch andere Arrays oder Objekte enthalten.

Beispiel:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Schlüssel-Wert-Paar

* Attributnamen sind Strings und werden direkt nach `:` oder `=`, ohne Leerzeichen, platziert.
* Der Wert kann verschiedene Datentypen wie Strings, Zahlen, Booleans, Objekte oder Arrays haben.
* Strings werden in doppelte Anführungszeichen (`"`) gesetzt.
* Zahlen werden ohne Anführungszeichen geschrieben und können Ganzzahlen oder Fließkommazahlen sein.

Beispiel:

```
name: "John Doe"
age = 25
```

## 6. Datentypen

* String: Text, der in doppelte Anführungszeichen (") eingeschlossen ist.

```
"hello world"
```

- Zahl: Ein ganzzahliger oder Fließkommawert.

```
42
3.14
```

- Boolean: Der Wert ist entweder `true` oder `false`.

```
is_active = true
```

* Objekt: Ein Satz von Schlüssel-Wert-Paaren, die in `{}` eingeschlossen sind.
* Array: Eine Liste von Elementen, die in `[]` eingeschlossen ist.

## 7. Beispiel-Erklärung

```ws
{
    // Statuscode und Nachrichteninformation
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Benutzeralter
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