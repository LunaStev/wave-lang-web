---
sidebar_position: 3
---

# Verwendung von std::env

Bietet Abfragen von Umgebungsvariablen und Steuerung von Arbeitsverzeichnissen.

## Import

```wave
import("std::env::environ");
import("std::env::cwd");
import("std::env::consts");
```

## 1. Lesen von Umgebungsvariablen als Zeichenfolge

```wave
fun main() {
    var buf: array<u8, 256>;
    var n: i64 = env_get("HOME", &buf[0], 256);

    if (n >= 0) {
        // buf ist eine NUL-terminierte Zeichenfolge
    } else if (n == ENV_ERR_NOT_FOUND) {
        // kein Schlüssel
    } else if (n == ENV_ERR_NO_SPACE) {
        // Puffer nicht ausreichend
    }
}
```

## 2. Lesen von Umgebungsvariablen als Ganzzahl (Generischer Ergebnistyp)

```wave
fun main() {
    var port_res: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(port_res, 8080);

    var workers: i64 = env_get_i64_default("WORKERS", 4);
}
```

## 3. Aktuelles Verzeichnis/Wechsel

```wave
fun main() {
    var cwd: array<u8, 512>;
    var n: i64 = env_getcwd(&cwd[0], 512);

    if (n >= 0) {
        env_chdir("/tmp");
    }
}
```

## Hauptfunktionen

```wave
fun env_get(name: str, dst: ptr<u8>, dst_cap: i64) -> i64
fun env_exists(name: str) -> bool
fun env_get_i32(name: str) -> EnvResult<i32>
fun env_get_i64(name: str) -> EnvResult<i64>
fun env_get_i32_default(name: str, default_value: i32) -> i32
fun env_get_i64_default(name: str, default_value: i64) -> i64
fun env_getcwd(dst: ptr<u8>, cap: i64) -> i64
fun env_chdir(path: str) -> i64
fun env_access(path: str, mode: i32) -> i64
```
