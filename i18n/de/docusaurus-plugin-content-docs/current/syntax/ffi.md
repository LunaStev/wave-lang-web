---
sidebar_position: 9
---

# FFI

Dieses Dokument beschreibt die Spezifikation der FFI (Foreign Function Interface) für die Aufrufung von extern implementierten Funktionen in der Wave-Sprache.
Durch FFI können Wave-Programme direkt mit in anderen Sprachen geschriebenen nativen Bibliotheken interagieren.

---

## Übersicht

Das FFI von Wave funktioniert auf deklarativer Basis.
Externe Funktionen werden nicht im Wave-Code implementiert, sondern nur angegeben, welchem ABI (Application Binary Interface) sie folgen.
Die tatsächliche Implementierung wird beim Verknüpfungsschritt von externen Bibliotheken bereitgestellt.

FFI deklariert nur die Existenz der Funktion zur Compile-Zeit, und bei der Erstellung der ausführbaren Datei verknüpft der Linker die tatsächlichen Symbole.

---

## extern Deklaration

Externe Funktionen werden mit dem Schlüsselwort extern deklariert.
Derzeit ist es in Wave erforderlich, das ABI anzugeben, und es wird nur **`extern(c)` unterstützt**.

```wave
extern(c) fun funktionName(argumente...) -> rückgabetyp;
```

---

## ABI-Spezifikation

Bei der `extern`-Deklaration muss das ABI angegeben werden.
Derzeit wird nur das ABI `c` unterstützt.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

Deklarationen wie `extern(rust)` können geparst werden, erzeugen jedoch im semantischen Analyseschritt einen Fehler.

---

## Funktionsbasierte extern-Deklaration

Wenn Sie eine einzelne externe Funktion deklarieren, schreiben Sie sie folgendermaßen:

```wave
extern(c) fun InitWindow(width: i32, height: i32, title: ptr<u8>);
```

Diese Deklaration bedeutet, dass das `InitWindow`-Symbol, das dem C-ABI folgt, in einer externen Bibliothek existiert.

---

## Blockbasierte extern-Deklaration

Wenn mehrere externe Funktionen dasselbe ABI verwenden, können Sie sie blockweise zusammenfassen und deklarieren.

```wave
extern(c) {
    fun InitWindow(width: i32, height: i32, title: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

Blockbasierte Deklarationen sind semantisch identisch mit funktionsbasierten Deklarationen und dienen lediglich der Lesbarkeit und Strukturierung.

---

## Symbolnamen Zuweisung

In einigen ABIs stimmt der Wave-Funktionsname möglicherweise nicht mit dem tatsächlichen Linker-Symbolnamen überein.
In diesem Fall können Sie den tatsächlichen Symbolnamen, mit dem die externe Funktion verknüpft wird, als Zeichenfolge angeben.

### Funktionsbasierte Symbolzuweisung

```wave
extern(c, "puts")
fun rust_func(i32);
```

Diese Deklaration gibt an, dass beim Aufruf von `rust_func` das tatsächliche Linker-Symbol `puts` verwendet wird.

---

### Blockbasierte Symbolzuweisung

In blockbasierten Deklarationen können Sie den Symbolnamen für jede Funktion individuell angeben.

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
}
```

---

## Zeiger-Typ

Zeiger werden in der Form `ptr<T>` dargestellt.

```wave
ptr<u8>
ptr<MyStruct>
```

`ptr<T>` entspricht direkt dem Zeiger einer externen Sprache, wobei Eigentum und Lebensdauer des Speichers nicht von Wave verwaltet werden.

---

## Nutzung von Strukturen

Strukturen können als Argumente oder Rückgabewerte externer Funktionen verwendet werden.

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

Bei der Verwendung von Strukturen im FFI bleibt die Reihenfolge der Felder bestehen und folgt dem vom ABI geforderten Speicherlayout.

---

## Aufruf externer Funktionen

Funktionen, die mit `extern` deklariert sind, werden auf die gleiche Weise wie normale Funktionen aufgerufen.

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

Es gibt keinen grammatikalischen Unterschied beim Aufruf, und der Aufrufkonvention und die Symbolverknüpfung werden ausschließlich vom ABI und dem Linker behandelt.

---

## Verknüpfung

Die tatsächliche Implementierung externer Funktionen wird in der Verknüpfungsphase von externen Bibliotheken bereitgestellt.
Der Wave-Compiler erzeugt Objektdateien einschließlich externer Funktionsaufrufe, und der Linker löst die Symbole über die angegebenen Bibliotheken.

Die Bibliothekszuweisung erfolgt über Build-Tools und CLI-Optionen.

---

## Einschränkungen

Wave bietet die folgenden Funktionen nicht an:

- Funktionszeiger
- Rückruffunktionen
- Automatisches Speichermanagement
- Inter-Sprach-Integration der Ausnahmebehandlung

Diese Funktionen können in zukünftigen Versionen gesondert behandelt werden.
