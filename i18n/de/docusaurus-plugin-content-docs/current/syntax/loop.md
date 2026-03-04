---
sidebar_position: 4
---

# Schleife

## Einführung

Die Wave-Sprache bietet Schleifen, um Situationen zu bewältigen, in denen derselbe Code mehrmals ausgeführt werden muss.
Schleifen werden verwendet, um Code entweder so lange auszuführen, bis eine bestimmte Bedingung erfüllt ist, oder für eine bestimmte Anzahl von Wiederholungen.

Dadurch kann man sich das wiederholte Schreiben derselben Logik ersparen und die Wiederholung mit klarem und prägnantem Code ausdrücken.
Wave unterstützt sowohl bedingungsbasierte als auch anzahlbasierte Wiederholungen und bietet auch Schlüsselwörter zur Steuerung des Ausführungsflusses während der Wiederholung.

In diesem Abschnitt wird erklärt, wie die `while` Schleife, die `for` Schleife und die Schlüsselwörter `break` und `continue` zur Steuerung des Schleifenflusses verwendet werden.

---

## while Schleife

Eine `while` Schleife führt einen Codeblock aus, solange der Ausdruck als `true` bewertet wird.
Wenn die Bedingung `false` wird, endet die Schleife sofort.

Dieses Verfahren eignet sich für Situationen, in denen die Anzahl der Wiederholungen nicht klar ist und die Schleife ausgeführt werden muss, bis eine bestimmte Bedingung erfüllt ist.

### Grundstruktur

Die Grundstruktur einer while-Schleife in Wave sieht wie folgt aus.

```wave
while (Bedingung) {
    // Code zum Wiederholen
}
```

Der Bedingungsausdruck muss auf den Typ `bool` auswerten,
und innerhalb des von `{}` umschlossenen Codeblocks können eine oder mehrere Anweisungen platziert werden.

### Beispiel: Ausgabe von 0 bis 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i ist {}.", i);
    i = i + 1;
}
```

In diesem Beispiel wird die Schleife ausgeführt, solange die Variable `i` kleiner als 5 ist.
Bei jeder Wiederholung wird der aktuelle Wert ausgegeben und der Wert von `i` um 1 erhöht, sodass die Bedingung schließlich `false` wird.

---

## for Schleife

Die `for` Schleife ist für Fälle geeignet, in denen die Anzahl der Wiederholungen relativ klar ist.
Durch die gleichzeitige Definition von Anfangswert, Bedingungsausdruck und Inkrement kann der Fluss der Wiederholung klar ausgedrückt werden.

Da alle für die Wiederholung erforderlichen Steuerungselemente an einem Ort zusammengefasst sind, ist die Schleifenstruktur leicht zu erkennen.

### Grundstruktur

```wave
for (Initialisierung; Bedingungsausdruck; Inkrement) {
    // zu wiederholender Code
}
```

Die for-Initialisierung in Wave unterstützt verschiedene Formen.

- Implizite `var` Typinitialisierung
- `var` / `let mut` / `const` Deklarationsinitialisierung
- Allgemeine Ausdrucksinitialisierung (Wiederverwendung bestehender Variablen)

### Beispiel 1: Implizite Typinitialisierung

```wave
for (i :i32 = 1; i <= 5; i += 1) {
    println("i = {}", i);
}
```

### Beispiel 2: `var` / `let mut` Initialisierung

```wave
for (var i: i32 = 0; i < 3; i += 1) {
    println("var i = {}", i);
}

for (let mut j: i32 = 0; j < 3; j += 1) {
    println("let mut j = {}", j);
}
```

### Beispiel 3: Ausdrucksbasierte Initialisierung (Wiederverwendung bestehender Variablen)

```wave
var i: i32 = 99;

for (i = 3; i <= 5; i += 1) {
    println("i = {}", i);
}

println("after loop: {}", i); // 6
```

Deklarative Initialisierungen (`var`, `let mut`, `i :i32 = ...`) funktionieren als Schleifenbereichsvariablen,
Ausdrucksbasierte Initialisierung (`i = ...`) aktualisiert die äußere Variable selbst.

---

## Verschachtelte Schleifen

Schleifen können innerhalb anderer Schleifen geschrieben werden und werden dann als verschachtelte Schleifen bezeichnet.
Verschachtelte Schleifen sind nützlich, um zweidimensionale Datenstrukturen zu durchlaufen oder Kombinationen mehrerer Bedingungen zu bearbeiten.

### Beispiel: doppelte while Schleife

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

In diesem Beispiel wird jedes Mal, wenn die äußere `while` Schleife ausgeführt wird, die innere `while` Schleife vollständig ausgeführt.
Dadurch können Kombinationen der Form (`i`, `j`) sequenziell bearbeitet werden.

---

## break Anweisung

Ein `break` Befehl beendet sofort die Schleife und leitet die Ausführung aus der Schleife heraus.
Es wird verwendet, wenn während der Wiederholung keine weitere Ausführung der Schleife erforderlich ist.

### Beispiel: Schleifenende bei einem bestimmten Wert

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

이 예제에서는 무한 반복문 안에서 `i`가 5가 되는 순간 `break`가 실행되어 반복이 종료됩니다.
이처럼 `break` 문은 반복 조건과 별개로 반복을 제어하고 싶을 때 유용합니다.

---

## continue Anweisung

`continue` 문은 현재 반복에서 남은 코드를 건너뛰고, 다음 반복을 바로 시작합니다.
특정 조건일 때 일부 로직만 생략하고 싶을 경우에 사용됩니다.

### Beispiel: nur gerade Zahlen ausgeben

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

이 코드에서는 `i`가 홀수일 경우 `continue`가 실행되어 출력 부분을 건너뜁니다.
그 결과 짝수 값만 출력됩니다.

---

## Zusammenfassung

Wave의 반복문은 조건 기반과 횟수 기반 반복을 모두 자연스럽게 표현할 수 있도록 설계되었습니다.
`while` 문은 조건 중심의 반복에 적합하며, `for` 문은 반복 횟수와 흐름이 명확한 경우에 유용합니다.

`break`와 `continue`를 함께 사용하면 반복 도중에도 실행 흐름을 세밀하게 제어할 수 있어,
보다 정교하고 유연한 반복 로직을 구성할 수 있습니다.
