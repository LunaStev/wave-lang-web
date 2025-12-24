---
sidebar_position: 2
---

# Datentypen

Dieses Dokument erklärt die verschiedenen Datentypen, die von der Wave-Programmiersprache bereitgestellt werden.
Die Wave-Programmiersprache ermöglicht es, Werte zu speichern und zu berechnen, indem sie verschiedene Datentypen verwendet.
Zu den wichtigsten Datentypen gehören Ganzzahlen, Gleitkommazahlen und Zeichenketten. Jeder Datentyp definiert die Eigenschaften der Daten und die Art und Weise der Speicherverwaltung.

## Ganzzahl-Typen

Ganzzahl-Typen werden verwendet, um **Ganzzahlwerte** zu speichern.
Grundsätzlich werden Ganzzahlen als `i32` (vorzeichenbehaftete 32-Bit-Ganzzahl) und `u32` (vorzeichenlose 32-Bit-Ganzzahl) deklariert.
Die Wave-Programmiersprache bietet verschiedene Größenoptionen, um den Bereich der Ganzzahlen detailliert festzulegen.

- `i8` bis `i1024`: Vorzeichenbehafteter Ganzzahltyp, der von 8 Bit bis 1024 Bit skaliert werden kann.
- `u8` bis `u1024`: Vorzeichenloser Ganzzahltyp, der von 8 Bit bis 1024 Bit konfiguriert werden kann.

Beispiel:

```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Gleitkomma-Typen

Gleitkomma-Typen werden verwendet, um reelle Werte zu speichern.
Standardmäßig werden Gleitkommazahlen mit `f32` deklariert.
Er bietet auch verschiedene Größenoptionen, um die Größe von Gleitkommazahlen präzise zu definieren.

- `f32` ~ `f128`: 부동소수점 타입은 32비트부터 128비트까지 크기를 설정할 수 있습니다. Dies ermöglicht eine höhere Genauigkeit bei Berechnungen mit reellen Zahlen.

Beispiel:

```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Zeichenketten-Typen

Zeichenketten-Typen werden zur Verarbeitung von Textdaten verwendet. Zeichenketten werden mit dem `str`-Schlüsselwort deklariert.
Zeichenketten werden normalerweise in Anführungszeichen (`"`) eingeschlossen und können Variablen zugewiesen werden.

Beispiel:

```wave
var text :str = "Hello Wave";
```

## Boolescher Typ

Boolescher Typ ist ein Datentyp, der **Wahr** (True) oder **Falsch** (False) darstellt.
Er wird hauptsächlich in Bedingungssätzen verwendet, wobei die Werte `true` oder `false` sind.

Beispiel:

```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Zeichen-Typ

Zeichen-Typen werden verwendet, um einzelne Zeichen zu speichern.
Sie werden mit dem Schlüsselwort `char` deklariert und können nur einen Zeichenwert enthalten.

Beispiel:

```wave
var letter :char = 'A';
```

## Byte-Typ

Der Byte-Typ wird verwendet, um Daten von **1 Byte** Größe zu speichern.
Es ist nützlich, wenn es um die Verarbeitung von Binärdaten geht. Mit dem `byte`-Schlüsselwort deklariert.

Beispiel:

```wave
var byteData :byte = 0xFF;
```

## Zeiger-Typ

Der Zeiger-Typ wird verwendet, um auf **Speicheradressen** zu verweisen.
Mit dem `ptr`-Schlüsselwort werden Zeiger deklariert und zum Speichern von Speicheradressen verwendet.

Beispiel:

```wave
var ptr :ptr<T> = &someVariable;
```

## Array-Typ

Der Array-Typ wird verwendet, um **mehrere gleiche Datentypen** sequenziell zu speichern.
Verwendet das Schlüsselwort `array`, um die Größe oder den Typ des Arrays anzugeben.

Beispiel:

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Jeder Datentyp kann in verschiedenen Bereichen und Größen festgelegt werden, sodass Sie den Typ auswählen können, der Ihren Anforderungen entspricht, um eine effiziente Speicherverwaltung und Berechnung zu ermöglichen.
