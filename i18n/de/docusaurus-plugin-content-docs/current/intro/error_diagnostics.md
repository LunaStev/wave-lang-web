---
sidebar_position: 5
---

# Fehlerdiagnose

Der Wave-Compiler zeigt Fehler zusammen mit dem Code (`E####`), dem Quellort/-kontext und Lösungshinweisen gleichzeitig.

## Ausgabeformat

Das Grundformat sieht wie folgt aus.

```text
Fehler[E3001]: Semantische Validierung fehlgeschlagen: Verwendung einer nicht deklarierten Kennung `x`
  --> datei.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ in diesem Bereich nicht gefunden
   = Kontext: Semantische Validierung
   = Hilfe: Beheben Sie Probleme mit Mutabilität, Gültigkeit des Bereichs und des Ausdrucks
```

Ausgabepositionen:

- `error[E....]`: Fehlercode und Zusammenfassung
- `--> datei:zeile:spalte`: Problemlokalisierung
- Quellblock + Caret(`^`) Hervorhebung
- `Kontext`, `Erwartet`, `Gefunden`, `Hinweis`, `Hilfe`, `Vorschlag`

## Repräsentativer Fehlercode

- `E1001` Unerwartetes Zeichen
- `E1002` Nicht geschlossener Blockkommentar
- `E1003` Nicht abgeschlossener String
- `E1004` Ungültige Zeichenketten-Escape
- `E1005` Ungültiges Zeichenliteral
- `E1006` Ungültiges Zahlenliteralformat
- `E2001` Parser Syntaxfehler
- `E3001` Semantische Analysefehlermeldung
- `E3102` `null` an Nicht-Pointer zugewiesen
- `E3201` Verbot der impliziten Ganzzahlverkleinerung
- `E9001` Interner Fehler bei der Backend-Codegenerierung

## Backend-Fehler zeigen ebenfalls die Quellenposition an

Selbst wenn während der Codegenerierung (LLVM) ein interner Panikzustand auftritt, wird die tatsächliche Aufruf-/Deklarationsposition, wenn möglich, ermittelt und angezeigt.

```text
Fehler[E9001]: Interner Compiler-Fehler während der Codegenerierung (llvm-ir-Generierung)
  --> test.wave:12:9
   = gefunden: Funktion 'foo' nicht gefunden
   = Hinweis: Quellenposition aus nicht aufgelöstem Funktionsnamen in Backend-Panik herausgefiltert
```

Wenn eine Positionsbestimmung nicht möglich ist, wird eine Fallback-Position verwendet, die im `Hinweis` angezeigt wird.
