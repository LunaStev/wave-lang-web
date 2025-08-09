---
sidebar_position: 1
---

# Ausgabe von Hello Wave

Dieses Dokument erklärt, wie man das grundlegendste Ausgabeprogramm in der Wave-Sprache erstellt.

---

## Beispielcode

```wave
fun main() {
    println("Hello Wave");
}
```

---

## Beschreibung

- `fun main()`

    Dies ist die Einstiegspunktfunktion eines Wave-Programms. Es wird beim Ausführen als erstes aufgerufen.

- `println()`

    Eine temporäre Ausgabe-Funktion, die eine Zeichenkette ausgibt und nach der Ausgabe einen Zeilenumbruch (`\n`) hinzufügt.

- `;` (Semikolon)

    Alle Anweisungen in Wave enden mit einem Semikolon.

---

## Ergebnis der Ausführung

```text
Hello Wave
```

---

## Zusätzliches Beispiel

Wave unterstützt String-Interpolation.

```wave
fun main() {
    var name: str = "Wave";
    println("Hello, {}!", name);
}
```

Ausgabe:

```text
Hello, Wave!
```

---

> Dieses Beispiel zeigt die Verwendung der grundlegenden Ausgabefunktionen der Wave-Standardbibliothek.