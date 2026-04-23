---
sidebar_position: 7
---

# Verwendung von std::path

Analysiert/Kopiert den Pfad ohne Zuweisung.

## Import

```wave
import("std::path::core");
import("std::path::analyze");
import("std::path::copy");
```

## 1. Pfad-Kombination

```wave
fun main() {
    var ausgabe: array<u8, 256>;
    var n: i32 = pfad_kombinieren2(&ausgabe[0], 256, "/var/log", "wave/app.log");

    if (n < 0) {
        // Puffer zu klein
    }
}
```

## 2. Basename / Dirname-Extraktion

```wave
fun main() {
    var basis: array<u8, 64>;
    var verzeichnis: array<u8, 128>;

    pfad_basename_kopieren(&basis[0], 64, "/tmp/data/report.txt"); // report.txt
    pfad_dirname_kopieren(&verzeichnis[0], 128, "/tmp/data/report.txt"); // /tmp/data
}
```

## 3. Analysefunktionen

```wave
fun main() {
    var abs: bool = pfad_ist_abs("/usr/bin");
    var hat_erw: bool = pfad_hat_erw("main.wave");
    var erw_pos: i32 = pfad_erw_start("main.wave");
}
```

## Hauptfunktionen

```wave
fun pfad_ist_sep(c: u8) -> bool
fun pfad_länge(pfad: str) -> i32
fun pfad_ist_abs(pfad: str) -> bool
fun pfad_basename_start(pfad: str) -> i32
fun pfad_basename_länge(pfad: str) -> i32
fun pfad_dirname_länge(pfad: str) -> i32
fun pfad_erw_start(pfad: str) -> i32
fun pfad_hat_erw(pfad: str) -> bool
fun pfad_kombinieren2(dst: ptr<u8>, dst_kap: i32, links: str, rechts: str) -> i32
fun pfad_basename_kopieren(dst: ptr<u8>, dst_kap: i32, pfad: str) -> i32
fun pfad_dirname_kopieren(dst: ptr<u8>, dst_kap: i32, pfad: str) -> i32
```
