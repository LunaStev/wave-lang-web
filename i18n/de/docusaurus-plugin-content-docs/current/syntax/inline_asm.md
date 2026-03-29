---
sidebar_position: 7
---

# Inline-Assembly

## Einführung

Die Inline-Assembly von Wave wird mit \`asm { ... } geschrieben.
Innerhalb von Wave-Code können Register, Speicher und Systemaufrufpfade direkt gesteuert werden.

Derzeit unterstützte Ziele:

- Linux `x86_64`
- Linux `aarch64`
- macOS (Darwin) `arm64`
- freestanding `x86_64`
- freestanding `aarch64`
- freestanding `riscv64`

Windows와 32비트 타깃은 아직 지원하지 않습니다.

---

## Grundform

`asm` kann sowohl als **Anweisung** als auch als **Ausdruck** verwendet werden.

```wave
asm {
    "Instruction"
    in("constraint_or_reg") Wert
    out("constraint_or_reg") Ziel
    clobber("item")
}
```

Komponenten:

- Zeichenfolgenzeile: Tatsächliche Assembly-Befehle
- `in(...)`: Eingabe-Operanden
- `out(...)`: Ausgabe-Operanden
- `clobber(...)`: Hinweise auf zerstörte Register/Zustände/Speicher

---

## `asm` Anweisung (Statement)

Wenn kein Rückgabewert erforderlich ist, wird es als allgemeine Anweisung verwendet.

```wave
var ret: i64 = 0;
asm {
    "mov rax, 1"
    "syscall"
    in("rdi") 1
    in("rsi") msg_ptr
    in("rdx") 20
    out("rax") ret
}
```

Es können mehrere `out(...)` platziert werden.

---

## `asm` Ausdruck (Expression)

Kann als Ausdruck verwendet werden, der direkt einen Wert erzeugt.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

Achtung:

- Ein `asm` Ausdruck erlaubt **genau 1 `out(...)`**.

---

## `in(...)` / `out(...)` Einschränkung

Die Zeichenfolgen von `in("...")`, `out("...")` sind entweder:

1. Spezifische Register

- 예: `"rax"`, `"rdi"`, `"x0"`, `"w1"`, `"a0"`, `"t0"`, `"x10"`

2. Einschränkungsklasse (constraint class)

- z.B.: `"r"`, `"m"`, `"rm"`

Beispiel:

```wave
in("r") &buf
out("rax") ret
```

Ausgabeziel (`out(...) Zu diesem Zeitpunkt wird das folgende Muster für `target\`) empfohlen.

- Variable: `out("rax") ret`
- Zeiger-Dereferenzierung: `out("rax") deref p`

---

## `clobber(...)`

`clobber(...)` kann mehrere Elemente auf einmal annehmen und kann mehrmals verwendet werden.

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

Schlüsselpositionen:

- Register: `"rax"`, `"x0"` usw.
- Spezielle: `"memory"`, `"cc"` (zielabhängig interne Normalisierung)

Der Compiler fügt im konservativen Sicherheitsmodus automatisch ein Standard-clobber hinzu.
(`memory`, flags/cc 계열 등; RISC-V freestanding에서는 주로 `memory`)

---

## Operanden-Platzhalter (`$0`, `$1`, ...)

Verwenden Sie `$N`, um auf Operanden innerhalb eines Befehl-Strings zu verweisen.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

Hinweis:

- Die `%0`-Schreibweise wird intern in die `$0`-Schreibweise umgewandelt.

---

## Unterstützter Umfang der Eingabeoperanden

Der `in(...)`-Wert unterstützt derzeit die folgenden Formen.

- Variablenbezeichner
- Integer-Literale
- String-Literale
- `&Bezeichner`
- `deref Bezeichner`
- Negative Ganzzahlen/Gleitkomma-Literale

Da komplexe generische Ausdrücke eingeschränkt sein können, wird empfohlen, sie bei Bedarf in temporäre Variablen zu verpacken und zu übergeben.

---

## Vorsichtsmaßnahmen

Inline-Assembly umgeht teilweise den Schutz des Typsystems.
Falsche Registerangaben, Einschränkungskonflikte und fehlende clobber-Anweisungen können zu fehlerhafter Codegenerierung oder Laufzeitfehlverhalten führen.

Empfehlungen:

- Zuerst das Ziel-ABI und die Aufrufkonventionen festlegen
- Eingabe-/Ausgaberegister und clobber explizit verwalten
- Bei direktem Zugriff auf den Speicher auch `clobber("memory")` deklarieren
