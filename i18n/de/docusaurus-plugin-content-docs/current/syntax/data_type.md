---
sidebar_position: 2
---

# Datentypen

Dieses Dokument erklärt die verschiedenen Datentypen, die von der Wave-Programmiersprache bereitgestellt werden.
In Wave können Sie Werte mit verschiedenen Datentypen speichern und berechnen, wobei jeder Datentyp den Darstellungs- und Speicherverwaltungsmodus der jeweiligen Daten klar definiert.

Die klare Spezifikation von Datentypen ist eine der zentralen Designphilosophien von Wave.
Wave ist ein **vollständig starkes Typsystem**. Alle `var`/`fun` Deklarationen und Variableninitialisierungen erfordern einen expliziten Typ; kontextbasierte Typableitung wird nicht unterstützt. Daher schlägt die Kompilierung fehl, wenn es wie bei `var x = 1;` keinen Typ gibt.
Dadurch können Sie die Absicht des Codes klar ausdrücken, Fehler frühzeitig während der Kompilierung erkennen und effiziente Speichernutzung sowie stabile Ausführung sicherstellen.

---

## Ganzzahl-Typ

Ganzzahl-Typen werden verwendet, um Ganzzahlwerte zu speichern.
In Wave werden standardmäßig `i32` (vorzeichenbehaftete 32-Bit-Ganzzahlen) und `u32` (vorzeichenlose 32-Bit-Ganzzahlen) häufig verwendet, aber bei Bedarf kann die Bitgröße der Ganzzahlen sehr genau angegeben werden.

Vorzeichenbehaftete Ganzzahltypen werden von `i8` bis `i1024` bereitgestellt, während vorzeichenlose Ganzzahltypen von `u8` bis `u1024` verwendet werden können.
Dies ermöglicht die Erfüllung einer Vielzahl von Anforderungen, von einfachen Berechnungen über umfangreiche Ganzzahlberechnungen bis hin zu kryptografischer Verarbeitung und Low-Level-Systemprogrammierung.

Das folgende ist ein einfaches Beispiel für die Verwendung von Ganzzahltypen.

```wave
var a: i32 = 100;
var b: u32 = 200;
```

---

## Gleitkomma-Typen

Gleitkomma-Typen werden verwendet, um reelle Werte zu speichern.
In Wave wird standardmäßig der Gleitkommatyp `f32` verwendet, und bei höherem Präzisionsbedarf können größere Typen gewählt werden.

Wave bietet Gleitkommatypen von `f32` bis `f128`, sodass der Benutzer zwischen Genauigkeit und Leistung wählen kann.
Dies ermöglicht die Durchführung verschiedenster Einsatzmöglichkeiten von numerischen Berechnungen bis zu präzisen wissenschaftlichen Berechnungen.

Das folgende ist ein Beispiel für die Verwendung von Gleitkommatypen.

```wave
var pi: f32 = 3.14;
var e: f64 = 2.71828;
```

---

## Zeichenketten-Typen

Zeichenketten-Typen werden zur Verarbeitung von Textdaten verwendet.
In Wave wird das Schlüsselwort `str` verwendet, um Zeichenketten zu deklarieren, und Zeichenkettenliterale werden in Anführungszeichen (`"`) eingeschlossen dargestellt.

Zeichenketten werden weitreichend in Programmen für die Ausgabe von Nachrichten, die Verarbeitung von Benutzereingaben und die Verarbeitung textbasierter Daten verwendet.

Das folgende ist ein einfaches Beispiel für die Verwendung des Zeichenkettentyps.

```wave
var text: str = "Hello Wave";
```

---

## Boolescher Typ

Der Boolesche Typ ist ein Datentyp, der Wahr (True) oder Falsch (False) darstellt.
In Wave wird der `bool` Typ verwendet, wobei die Werte `true` oder `false` sein können.

Der Boolesche Typ spielt eine wesentliche Rolle in Bedingungs- und Schleifenanweisungen und wird verwendet, um den Ablauf des Programms zu steuern.

```wave
var isActive: bool = true;
var isAvailable: bool = true;
```

---

## Zeichen-Typ

Zeichen-Typen werden verwendet, um einzelne Zeichen zu speichern.
Es wird mit dem Schlüsselwort `char` deklariert und kann nur ein Zeichen enthalten.

Zeichenliterale werden in einfachen Anführungszeichen (`'`) dargestellt.

```wave
var letter: char = 'A';
```

## Byte-Typ

Der Byte-Typ wird verwendet, um Daten von 1 Byte Größe zu speichern.
Dieser Typ ist nützlich für die Verarbeitung von Binärdaten, Datei-I/O und Netzwerkprogrammierung, bei denen eine Low-Level-Datenverarbeitung erforderlich ist.

In Wave wird das Schlüsselwort `byte` verwendet, um den Byte-Typ zu deklarieren.

```wave
var byteData: byte = 0xFF;
```

## Zeiger-Typ

Der Zeiger-Typ wird verwendet, um Speicheradressen direkt zu referenzieren.
In Wave wird der Zeigertyp in der Form `ptr<T>` deklariert.

Zeiger werden verwendet, wenn ein Low-Level-Speicherzugriff erforderlich ist, und werden hauptsächlich in der Systemprogrammierung oder bei leistungskritischem Code verwendet.

```wave
var ptr: ptr<T> = &someVariable;
```

## `null` Literal

In Wave ist `null` ein reguläres Literal.

- `null` ist kein Bezeichner. (Die Form `var null = ...` ist ungültig)
- `null` kann nur dem Typ `ptr<T>` zugewiesen werden.

```wave
var p: ptr<i32> = null;  // OK

// var n: i32 = null;    // FEHLER
// var b: bool = null;   // FEHLER
```

## Array-Typ

Der Array-Typ wird verwendet, um mehrere Werte des gleichen Datentyps sequenziell zu speichern.
In Wave wird ein Array in der Form `array<Typ, Größe>` deklariert, wobei die Größe des Arrays zur Kompilierungszeit eindeutig festgelegt wird.

Dies sorgt für eine klare Speicherstruktur und ermöglicht einen stabilen Zugriff.

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Jeder Datentyp ist so konzipiert, dass er einen passenden Bereich und eine geeignete Größe für seine Verwendung und Eigenschaften auswählen kann.
Durch die Wahl des geeigneten Datentyps kann der Speicher effizient verwaltet werden, und auch die Stabilität und Lesbarkeit des Codes wird erheblich verbessert.
