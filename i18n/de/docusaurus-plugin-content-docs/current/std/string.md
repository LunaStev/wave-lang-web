---
sidebar_position: 8
---

# Verwendung von std::string

NUL-beendeter String (`str`) Dienstprogramm.

## Import

```wave
import("std::string::len");
import("std::string::cmp");
import("std::string::find");
import("std::string::trim");
import("std::string::ascii");
import("std::string::hash");
```

## 1. Länge/Vergleich

```wave
fun main() {
    var l: i32 = länge("wave");
    var g: bool = gleich("a", "a");
    var v: i32 = vergl("abc", "abd"); // -1
    var bg: bool = beginnt_mit("/api/v1", "/api");
}
```

## 2. Suche/Zählung

```wave
fun main() {
    var p1: i32 = find_char("hallo", 108); // 'l' -> 2
    var p2: i32 = finden("welle-spr", "spr");
    var zähler: i32 = zählen("aaa", "aa");
}
```

## 3. Trimmbereich + ASCII

```wave
fun main() {
    var s: str = "  hallo\n";
    var st: i32 = 0;
    var en: i32 = 0;
    trimm_bereich(s, &st, &en);

    var z: bool = ist_ziffer(53);    // '5'
    var ho: u8 = zu_groß(97);     // 'a' -> 'A'
}
```

## 4. Hash

```wave
fun main() {
    var h1: i32 = djb2_32("cache-schlüssel");
    var h2: i64 = fnv1a_64("cache-schlüssel");
}
```

## Hauptfunktionen

```wave
fun länge(s: str) -> i32
fun ist_leer(s: str) -> bool
fun gleich(a: str, b: str) -> bool
fun vergleiche(a: str, b: str) -> i32
fun finde(s: str, nadel: str) -> i32
fun enthält(s: str, nadel: str) -> bool
fun zählen(s: str, nadel: str) -> i32
fun trimm_bereich(s: str, aus_start: ptr<i32>, aus_ende: ptr<i32>)
fun ist_ziffer(c: u8) -> bool
fun zu_kleinbuchstabe(c: u8) -> u8
fun zu_großbuchstabe(c: u8) -> u8
fun djb2_32(s: str) -> i32
fun fnv1a_64(s: str) -> i64
```
