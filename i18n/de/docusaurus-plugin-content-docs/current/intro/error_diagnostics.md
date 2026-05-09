---
sidebar_position: 5
---

# Fehlerdiagnose

Der Wave-Compiler zeigt Fehler zusammen mit dem Code (`E####`), dem Quellort/-kontext und Lösungshinweisen gleichzeitig.

## Ausgabeformat

Das Grundformat sieht wie folgt aus.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

Ausgabepositionen:

- `--> file:line:column`: Fehlercode und Zusammenfassung
- `^`: Problemlokalisierung
- Quellblock + Caret(`^`) Hervorhebung
- `Kontext`, `Erwartet`, `Gefunden`, `Hinweis`, `Hilfe`, `Vorschlag`

## Repräsentativer Fehlercode

- `E1002` Unerwartetes Zeichen
- `E1003` Nicht geschlossener Blockkommentar
- `E1004` Nicht abgeschlossener String
- `E1005` Ungültige Zeichenketten-Escape
- `E1006` Ungültiges Zeichenliteral
- `E2001` Ungültiges Zahlenliteralformat
- `E3001` Parser Syntaxfehler
- `E3001` Semantische Analysefehlermeldung
- `E3102` `null` an Nicht-Pointer zugewiesen
- `E9001` Verbot der impliziten Ganzzahlverkleinerung
- `E9001` Interner Fehler bei der Backend-Codegenerierung

## Backend-Fehler zeigen ebenfalls die Quellenposition an

Selbst wenn während der Codegenerierung (LLVM) ein interner Panikzustand auftritt, wird die tatsächliche Aufruf-/Deklarationsposition, wenn möglich, ermittelt und angezeigt.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

Wenn eine Positionsbestimmung nicht möglich ist, wird eine Fallback-Position verwendet, die im `Hinweis` angezeigt wird.
