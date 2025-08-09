---
sidebar_position: 7
---

# Inline-Assembly

## Einführung

Dieses Dokument behandelt Inline-Assembly in der Wave-Sprache.
Inline-Assembly ist eine der Funktionen, die Wave bietet; es ermöglicht die Beibehaltung des Komforts von Hochsprachen und gleichzeitig den direkten Zugriff auf die Steuerung von Low-Level-Hardware mit einer extremen Syntax.

Das bedeutet, dass es Registermanipulationen, direkten Speicherzugriff und die Ausführung spezieller Befehle ermöglicht, die mit normalem Wave-Code schwer zu handhaben sind. Es wird genutzt, wenn Leistungsoptimierung oder hardwareabhängige Arbeiten erforderlich sind.

---

## Grundsyntax

```wave
asm {
    "Assembly-Befehl"          // Tatsächlicher Assembly-Code (ein Befehl pro Zeile)
    ...
    in("Register") Wert         // Eingangsregisterzuordnung
    out("Register") Variable    // Ausgangsregisterzuordnung
}
```

### Syntaxelemente

1. Assembly-Befehle
    - Wird in Form eines `"..."`-Strings geschrieben und ist ein Low-Level-Assembly-Befehl, der auf der tatsächlichen CPU ausgeführt wird.
    - Es können mehrere Zeilen geschrieben werden, wobei jede Zeile einen Befehl enthält.
    - Beispiel:
           ```wave
           "mov rax, 1"
           "syscall"
           ```

2. `in("Register") Wert`
    - Lädt den Wert einer Variable (oder eines Ausdrucks) in das angegebene Register.
    - Beispiel:
           ```wave
           in("rdi") s
           ```
        -> Setzt den Wert der Variable `s` in das `rdi`-Register, das gemäß der x86-64-Konvention das erste Argumentregister für syscalls ist.

3. `out("Register") Variable`
    - Holt den Wert des angegebenen Registers in eine Wave-Variable.
    - Beispiel:
           ```wave
           out("rax") ret
           ```
        -> Speichert den Wert des `rax`-Registers, in dem der Rückgabewert des `syscall` gespeichert ist, in der Variable `ret`.

---

## Einfaches Beispiel

```wave
fun main() {
    var msg_ptr: ptr<i8> = "Hello from syscall!\n";
    var ret_val: i64;

    asm {
        "mov rax, 1"
        "syscall"
        in("rdi") 1
        in("rsi") msg_ptr
        in("rdx") 20
        out("rax") ret_val
    }
}
```

---

## Vorsichtsmaßnahmen

- Inline-Assembly umgeht die Typensicherheit von Wave und kann bei falscher Nutzung zur abnormalen Beendigung von Programmen oder undefiniertem Verhalten führen.
- `in`, `out`-Mappings werden zur Kompilierzeit überprüft, jedoch wird die Gültigkeit der Instruktionen selbst nicht gewährleistet.
