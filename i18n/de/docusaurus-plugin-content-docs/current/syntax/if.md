---
sidebar_position: 3
---

# IF-Anweisung
## Einführung
In diesem Abschnitt wird die Syntax der IF-Anweisung, einer der Kontrollstrukturen in Wave, vorgestellt. Die IF-Anweisung wird in der Programmierung verwendet, um eine Bedingung zu bewerten und bei wahrem Ergebnis einen bestimmten Code auszuführen. Dadurch lässt sich der Ablauf eines Programms steuern und es können flexible und logische Codes geschrieben werden.

## Grundstruktur
Die IF-Anweisung bewertet eine bestimmte Bedingung und führt nur den angegebenen Codeblock aus, wenn die Bedingung wahr (True) ist. 
Die Grundstruktur der IF-Anweisung in Wave sieht folgendermaßen aus:

```wave
if (Bedingung) {
    // Code, der ausgeführt wird, wenn die Bedingung wahr ist
}
```

Die Bedingung wird unter Verwendung von Vergleichsoperatoren (`==`, `!=`, `<`, `>`, `<=`, `>=`) oder logischen Operatoren (`&&`, `||`, `!`) formuliert. 
Ist die Bedingung falsch (False), wird der Codeblock nicht ausgeführt.

## Beispiel
Hier ist ein einfaches Beispiel für eine IF-Anweisung:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Es ist heiß.");
}
```

n diesem Code wird die Nachricht "Es ist heiß." ausgegeben, wenn der Wert von `temperature` größer als 25 ist.

## IF_ELSE-Anweisung
Wenn eine alternative Aktion ausgeführt werden soll, falls die Bedingung nicht wahr ist, wird die IF-ELSE-Anweisung verwendet. Die Struktur sieht folgendermaßen aus:

```wave
if (Bedingung) {
    // Code, der ausgeführt wird, wenn die Bedingung wahr ist
} else {
    // Code, der ausgeführt wird, wenn die Bedingung falsch ist
}
```

### Beispiel:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Bestanden!");
} else {
    println("Nicht bestanden.");
}
```

Wenn der Wert von `score` 60 oder mehr beträgt, wird "Bestanden!" ausgegeben. Andernfalls wird "Nicht bestanden." ausgegeben.

## Verschachtelte IF-Anweisungen
Eine IF-Anweisung kann auch innerhalb einer anderen IF-Anweisung verwendet werden. Dies wird als verschachtelte IF-Anweisung bezeichnet und ist nützlich, um komplexe Bedingungen zu behandeln.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Ausgezeichnete Leistung!");
    } else {
        println("Bestanden.");
    } 
} else {
    println("Nicht bestanden.");
}
```

In diesem Beispiel wird je nach Punktzahl die Nachricht "Ausgezeichnete Leistung!", "Bestanden." oder "Nicht bestanden." ausgegeben.

## Zusammenfassung

* Die IF-Anweisung bewertet eine Bedingung und führt einen bestimmten Codeblock aus.
* Mit der ELSE-Anweisung kann auch der Code für den Fall ausgeführt werden, dass die Bedingung falsch ist.
* Verschachtelte IF-Anweisungen werden verwendet, um komplexe Bedingungen zu behandeln.

Mit der IF-Anweisung können Sie den Ablauf eines Programms logisch und dynamisch gestalten!