---
sidebar_position: 9.5
---

# export

`export` macht eine in Wave implementierte Funktion als externes Linker-Symbol sichtbar. Wenn `extern` eine externe Funktion nach Wave importiert, macht `export` eine Wave-Funktion über eine Objektdatei aus C, Rust, C++, Zig oder einer anderen nativen Sprache aufrufbar.

---

## Überblick

Wave-FFI hat zwei Richtungen.

- `extern(c)` deklariert eine Funktion aus einer externen Bibliothek, damit Wave-Code sie aufrufen kann.
- `export(c)` gibt den Körper einer Wave-Funktion als externes ABI-Symbol aus.

Beide Formen teilen dieselbe ABI-Kopfform, haben aber entgegengesetzte Bedeutung. Bei `extern` liegt der Funktionskörper außerhalb von Wave. Bei `export` liegt er in Wave.

Derzeit wird nur das Export-ABI `c` unterstützt.

---

## Export auf Funktionsebene

Die Grundform ist:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Dies erzeugt ein öffentliches Symbol namens `add`. Die erzeugte Objektdatei kann mit externem Code gelinkt werden, der das C-ABI erwartet.

---

## Symbolnamen

Der Wave-Funktionsname und das exportierte Linker-Symbol können unterschiedlich sein.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Hier heißt die Funktion in Wave `add_i32`, aber die Objektdatei exportiert `wave_add_i32`. Externe Sprachen müssen diesen Symbolnamen deklarieren und aufrufen.

---

## Block-Export

Mehrere Funktionen mit demselben ABI können in einem Block gruppiert werden.

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

Beim Block-Export wird jeder Funktionsname als öffentliches Symbol verwendet. `export(c, "symbol") { ... }` ist nicht erlaubt, weil ein gemeinsamer Alias für mehrere Funktionen Symbolkollisionen erzeugen würde.

---

## Aufruf aus C

Bauen Sie die Wave-Datei als Objektdatei.

```bash
wavec build math.wave --emit=obj -o math.o
```

Deklarieren Sie das exportierte Symbol in C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

Danach linken Sie C-Code und Wave-Objektdatei mit einem normalen Linker.

```bash
cc main.c math.o -o app
```

---

## extern und export

`extern(c)` bedeutet, dass Wave ein externes Symbol verwendet.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` bedeutet, dass externer Code ein Wave-Symbol verwenden kann.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

Beides gehört zur FFI, aber die Richtung ist unterschiedlich.

---

## Einschränkungen

- Nur `export(c)` wird unterstützt.
- Exportierte Funktionen dürfen nicht generisch sein.
- Ein Block-Export darf keinen gemeinsamen Symbolalias verwenden.
- Für stabile Interoperabilität sollten vorerst Integer, Floating-Point-Werte, Booleans und Pointer verwendet werden.
- Aggregate Typen wie Structs und Arrays benötigen strengere ABI-Regeln und können später stabilisiert werden.
- `export` ist vor allem für Objektdateien und Bibliotheken nützlich, nicht für einfache ausführbare Dateien.

---

## Empfohlene Einsatzfälle

- Wave-Hilfsfunktionen als C-ABI-Bibliothek bereitstellen.
- Wave-Funktionen aus Rust, C, C++, Zig oder einer anderen nativen Sprache aufrufen.
- In Wave geschriebene `front`-, `utils`- oder native Module ohne Runtime schrittweise in ein bestehendes Buildsystem einbinden.
- Vex oder einem anderen Build-Tool erlauben, Wave-Objektdateien in externe Projekte zu linken.
