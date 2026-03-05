---
sidebar_position: 11
---

# Kommentar

Wave unterstützt zwei Arten von Kommentaren.

- Einzeiliger Kommentar: `//`
- Blockkommentar: `/* ... */`

## Einzeiliger Kommentar

Der Inhalt nach `//` wird bis zum Ende der Zeile ignoriert.

```wave
var x: i32 = 10; // Zeilenkommentar
x += 5;          // funktioniert noch
```

## Blockkommentar

Der Inhalt zwischen `/*` und `*/` wird ignoriert.

```wave
var y: i32 = 1 /* inline block */ + 2;
```

Blockkommentare unterstützen mehrere Zeilen und Schachtelungen.

```wave
/* außen
   /* innen */
   außen Ende
*/
```

## Zeichenketten und Kommentarzeichen

`/*`, `*/`, `//` innerhalb einer Zeichenkette werden nicht als Kommentarstart/-ende behandelt.

```wave
var marker: str = "/*//*/";
```

## Kommentierungsfehler

Wenn ein Blockkommentar nicht geschlossen wird, tritt ein Kompilierungsfehler (`E1002`) auf.

```wave
/* nicht geschlossen
```

Der Compiler gibt die Startposition, Ursache und Korrekturhinweise aus.
