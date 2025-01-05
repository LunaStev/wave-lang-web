---
sidebar_position: 2
---

# Datentypen

Dieses Dokument beschreibt die verschiedenen Datentypen, die in der Wave-Programmiersprache verfügbar sind.
Die Wave-Programmiersprache verwendet verschiedene Datentypen, um Werte zu speichern und Operationen durchzuführen.
Die wichtigsten Datentypen umfassen Ganzzahlen, Fließkommazahlen, Zeichenketten und andere. Jeder Datentyp definiert die Eigenschaften der Daten und die Art und Weise, wie sie im Speicher behandelt werden.

## Ganzzahl-Typen
Der Ganzzahl-Typ wird verwendet, um ganzzahlige Werte zu speichern.
Standardmäßig werden Ganzzahlen als `i32` (vorzeichenbehaftete 32-Bit-Ganzzahl) und `u32` (vorzeichenlose 32-Bit-Ganzzahl) deklariert.
Die Wave-Programmiersprache bietet verschiedene Größenoptionen, um den Bereich der Ganzzahlen fein zu definieren.

* `i4` bis `i32768`: Vorzeichenbehaftete Ganzzahlen, deren Größe von 4 Bit bis 32768 Bit eingestellt werden kann.
* `u4` bis `u32768`: Vorzeichenlose Ganzzahlen, deren Größe von 4 Bit bis 32768 Bit eingestellt werden kann.

Beispiel:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Fließkomma-Typen
Der Fließkomma-Typ wird verwendet, um **Fließkommazahlen** zu speichern.
Standardmäßig wird eine Fließkommazahl als `f32` deklariert.
Es werden auch verschiedene Größenoptionen angeboten, um die Fließkommazahl genauer zu definieren.

* `f32` bis `f32768`: Der Fließkomma-Typ kann in Größen von 32 Bit bis 32768 Bit festgelegt werden. Dies ermöglicht genauere Berechnungen mit Fließkommazahlen.

Beispiel:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Zeichenketten-Typ
Der Zeichenketten-Typ wird verwendet, um **Textdaten** zu handhaben. Eine Zeichenkette wird mit dem Schlüsselwort `str` deklariert.
Zeichenketten werden in der Regel in doppelte Anführungszeichen (`"`) gesetzt und können Variablen zugewiesen werden.

Beispiel:
```wave
var text :str = "Hello Wave";
```

## Boolescher Typ
Der boolesche Typ wird verwendet, um **wahr (true)** oder **falsch (false)** darzustellen.
Dieser Typ wird hauptsächlich in Bedingungsanweisungen verwendet, wobei die Werte `true` oder `false` gesetzt werden.

Beispiel:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Zeichen-Typ
Der Zeichen-Typ wird verwendet, um ein **einzelnes Zeichen** zu speichern.
Er wird mit dem Schlüsselwort `char` deklariert und kann nur einen einzigen Zeichenwert enthalten.

Beispiel:
```wave
var letter :char = 'A';
```

## Byte-Typ
Der Byte-Typ wird verwendet, um **1 Byte** große Daten zu speichern.
Er ist besonders nützlich, wenn mit binären Daten gearbeitet wird. Der Byte-Typ wird mit dem Schlüsselwort `byte` deklariert.

Beispiel:
```wave
var byteData :byte = 0xFF;
```

## Zeiger-Typ
Der Zeiger-Typ wird verwendet, um auf **Speicheradressen** zu verweisen.
Zeiger werden mit dem Schlüsselwort `ptr` deklariert und speichern eine Speicheradresse.

Beispiel:
```wave
var ptr :ptr = &someVariable;
```

## Array-Typ
Der Array-Typ wird verwendet, um **mehrere Werte des gleichen Datentyps** in einer Reihenfolge zu speichern.
Arrays werden mit dem Schlüsselwort `array` deklariert, und ihre Größe sowie der Datentyp können festgelegt werden.

Beispiel:
```wave
var numbers: array<i32> = [1, 2, 3, 4, 5];
```

Jeder Datentyp bietet eine Vielzahl von Optionen, um den Bereich und die Größe genau zu definieren, sodass der Benutzer den am besten geeigneten Typ auswählen kann, um eine effiziente Speicherverwaltung und Berechnungen durchzuführen.
