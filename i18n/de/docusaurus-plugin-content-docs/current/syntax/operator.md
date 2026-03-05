---
sidebar_position: 5
---

# Operatoren

Dieses Dokument fasst die tatsächlich verwendbaren Operatoren basierend auf dem aktuellen Compiler zusammen.

## Arithmetik

| Operator | Beschreibung   |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraktion    |
| `*`      | Multiplikation |
| `/`      | Division       |
| `%`      | Rest           |

## Vergleich

| Operator | Beschreibung        |
| -------- | ------------------- |
| `==`     | gleich              |
| `!=`     | ungleich            |
| `<`      | kleiner             |
| `<=`     | kleiner oder gleich |
| `>`      | größer              |
| `>=`     | größer oder gleich  |

## Logik

| Operator   | Beschreibung    |
| ---------- | --------------- |
| `&&`       | Logisches UND   |
| \\\`\\ | Logisches ODER  |
| `!`        | Logisches NICHT |

## Bit

| Operator   | Beschreibung    |
| ---------- | --------------- |
| `&`        | Bitweises UND   |
| \\\`\\ | Bitweises ODER  |
| `^`        | Bitweises XOR   |
| `~`        | Bitweises NICHT |
| `<<`       | Linksshift      |
| `>>`       | Rechtsshift     |

## Zuweisung

| Operator | Beschreibung                 |
| -------- | ---------------------------- |
| `=`      | Grundzuweisung               |
| `+=`     | Addition und Zuweisung       |
| `-=`     | Subtraktion und Zuweisung    |
| `*=`     | Multiplikation und Zuweisung |
| `/=`     | Division und Zuweisung       |
| `%=`     | Modulo und Zuweisung         |

## Unär/Zeiger/Cast

| Operator/Schlüsselwort | Beschreibung            |
| ---------------------- | ----------------------- |
| `++`, `--`             | Inkrement/Dekrement     |
| `&x`                   | Adressgewinnung         |
| `deref p`              | Zeiger-Dereferenzierung |
| `expr as T`            | Explizites Casting      |

## Zeigeroperation

| Ausdruck                   | Ergebnis                                       |
| -------------------------- | ---------------------------------------------- |
| `ptr<T> + int`             | `ptr<T>` (GEP-Verschiebung) |
| `int + ptr<T>`             | `ptr<T>` (GEP-Verschiebung) |
| `ptr<T> - int`             | `ptr<T>` (GEP-Verschiebung) |
| `ptr<T> - ptr<T>`          | `i64` (Byte-Differenz)      |
| `ptr == ptr`, `ptr != ptr` | Zeigervergleich                                |

## Reservierte oder nicht implementierte Elemente

Es gibt Syntax-Token, die existieren, aber derzeit nicht von Ausdrucksoperationen unterstützt werden.
Beispiele: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
