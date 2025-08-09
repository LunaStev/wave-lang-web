---
sidebar_position: 5
---

# Operatoren

## Einführung

Die Wave-Sprache bietet eine Vielzahl von Operatoren, um Berechnungen zwischen Variablen, logische Entscheidungen, Vergleiche und Bit-Operationen durchzuführen.

In diesem Dokument werden die wichtigsten in Wave verfügbaren Operatoren kategorisiert erklärt und für jede Kategorie die Funktionsweise und Beispiele gegeben.

Operatoren werden in folgende Kategorien unterteilt:

- Arithmetische Operatoren
- Vergleichsoperatoren
- Logische Operatoren
- Bit-Operatoren
- Zuweisungsoperatoren
- Andere spezielle Operatoren

---

## Arithmetische Operatoren

Arithmetische Operatoren führen grundlegende mathematische Operationen auf numerischen Daten durch.

| Operator | Beschreibung     | Beispiel (`a = 10`, `b = 3`)     |
| -------- | ---------------- | --------------------------------------------------- |
| `+`      | Addition         | `a + b` → `13`                                      |
| `-`      | Subtraktion      | `a - b` → `7`                                       |
| `*`      | Multiplikation   | `a * b` → `30`                                      |
| `/`      | Division         | `a / b` → `3` (Ganzzahldivision) |
| `%`      | Modulo-Operation | `a % b` → `1`                                       |

---

## Vergleichsoperatoren

Vergleichsoperatoren geben einen `bool`-Wert zurück, indem sie zwei Werte vergleichen.

| Operator | Beschreibung        | Beispiel (`a = 10`, `b = 3`) |
| -------- | ------------------- | ----------------------------------------------- |
| `==`     | gleich              | `a == b` → `false`                              |
| `!=`     | ungleich            | `a != b` → `true`                               |
| `<`      | kleiner             | `a < b` → `false`                               |
| `>`      | größer              | `a > b` → `true`                                |
| `<=`     | kleiner oder gleich | `a <= 10` → `true`                              |
| `>=`     | größer oder gleich  | `a >= b` → `true`                               |

---

## Logische Operatoren

Logische Operatoren verarbeiten Kombinationen von Wahrheitswerten (`bool`).

| Operator   | Name            | Beschreibung                                                                     | Beispiel                  |
| ---------- | --------------- | -------------------------------------------------------------------------------- | ------------------------- |
| `&&`       | Logisches UND   | Nur wenn beide Werte `true` sind, ist das Ergebnis `true`.       | `true && false` → `false` |
| \\\`\\ | Logisches ODER  | Wenn einer der beiden Werte `true` ist, ist das Ergebnis `true`. | \\\`true \\           |
| `!`        | Logisches NICHT | Kehrt `true` zu `false` und `false` zu `true` um.                | `!true` → `false`         |

---

## Bit-Operatoren

Bit-Operatoren manipulieren Integer-Daten auf Bit-Ebene.

| Operator   | Name            | Beschreibung                                                           | Beispiel        |
| ---------- | --------------- | ---------------------------------------------------------------------- | --------------- |
| `&`        | Bitweises UND   | Ergibt 1, wenn beide Bits 1 sind.                      | `a & b` → `2`   |
| \\\`\\ | Bitweises ODER  | Ergibt 1, wenn mindestens eines der beiden Bits 1 ist. | b`→`7\\\`     |
| `^`        | Bitweises XOR   | Ergibt 1, wenn die beiden Bits unterschiedlich sind.   | `a ^ b` → `5`   |
| `~`        | Bitweises NICHT | Umkehrung der Bits                                                     | `~a` → `-7`     |
| `<<`       | Linksshift      | Bits nach links verschieben                                            | `a << 1` → `12` |
| `>>`       | Rechtsshift     | Bits nach rechts verschieben                                           | `a >> 1` → `3`  |

---

## Zuweisungsoperatoren

Verwendung zum Speichern eines Werts in einer Variablen. Kann in den meisten Fällen mit arithmetischen Operatoren kombiniert werden, um es abzukürzen.

| Operator | Beschreibung                 | Beispiel (`a = 5`) |
| -------- | ---------------------------- | ------------------------------------- |
| `=`      | Standardzuweisung            | `a = 10`                              |
| `+=`     | Addition und Zuweisung       | `a += 2` → `7`                        |
| `-=`     | Subtraktion und Zuweisung    | `a -= 1` → `4`                        |
| `*=`     | Multiplikation und Zuweisung | `a *= 3` → `15`                       |
| `/=`     | Division und Zuweisung       | `a /= 5` → `1`                        |
| `%=`     | Modulo und Zuweisung         | `a %= 4` → `1`                        |

---

## Andere spezielle Operatoren

Wave bietet auch einzigartige oder spezielle Operatoren wie die folgenden an.

| Operator    | Name                                                      | Beschreibung                                         | Beispiel                                      |
| ----------- | --------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------- |
| `??`        | Null-Koaleszenz-Operator                                  | Verwendet den rechten Wert, wenn der linke null ist  | `a ?? b` → `Wenn a null ist, dann b`          |
| `?:`        | Bedingungsoperator (Ternärer Operator) | Wählt Wert basierend auf Bedingung                   | `Bedingung ? Wahrheitswert : Falschheitswert` |
| `in`        | Überprüft, ob enthalten                                   | Überprüft, ob der Wert in der Sammlung enthalten ist | `"a" in Liste`                                |
| `is`        | Typvergleichsoperator                                     | Überprüft den Typ des Wertes                         | `x ist i32`                                   |
| `!&`        | NAND                                                      | Logische NAND-Operation                              | Fortgeschrittene logische Operationen         |
| \\\`!\\ | NOR                                                       | Logische NOR-Operation                               | Fortgeschrittene logische Operationen         |
| `~^`        | XNOR                                                      | Logische XNOR-Operation                              | Fortgeschrittene logische Operationen         |

---

## Zusammenfassung

Wave bietet eine Vielzahl von Operatoren, die von mathematischen Berechnungen bis hin zu logischen Entscheidungen, Bit-Manipulationen und bedingten Verzweigungen reichen.
Diese Operatoren interagieren mit Variablen, bilden Bedingungen und sind essenzielle Werkzeuge für komplexe Berechnungen oder Flusskontrolle.

Die Priorität und Assoziativität der einzelnen Operatoren werden im Abschnitt "Priorität und Bewertungsreihenfolge" behandelt.