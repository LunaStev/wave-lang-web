---
sidebar_position: 7
---

# std:: మార్గం వినియోగం

అసైన్‌మెంట్ లేకుండా మార్గాలను విశ్లేషించండి/కాపీ చేయండి.

## import

```wave
import("std::path::core");
import("std::path::analyze");
import("std::path::copy");
```

## 1) మార్గాలను కలపండి

```wave
fun main() {
    var out: array<u8, 256>;
    var n: i32 = path_join2(&out[0], 256, "/var/log", "wave/app.log");

    if (n < 0) {
        // బఫర్ అయిపోయింది
    }
}
```

## 2) బేస్‌నేమ్/డిర్‌నేమ్‌ను సంగ్రహించండి

```wave
fun main() {
    var base: array<u8, 64>;
    var dir: array<u8, 128>;

    path_basename_copy(&base[0], 64, "/tmp/data/report.txt"); // report.txt
    path_dirname_copy(&dir[0], 128, "/tmp/data/report.txt"); // /tmp/data
}
```

## 3) విశ్లేషణ ఫంక్షన్

```wave
fun main() {
    var abs: bool = path_is_abs("/usr/bin");
    var has_ext: bool = path_has_ext("main.wave");
    var ext_pos: i32 = path_ext_start("main.wave");
}
```

## ప్రధాన విధి

```wave
fun path_is_sep(c: u8) -> bool
fun path_len(path: str) -> i32
fun path_is_abs(path: str) -> bool
fun path_basename_start(path: str) -> i32
fun path_basename_len(path: str) -> i32
fun path_dirname_len(path: str) -> i32
fun path_ext_start(path: str) -> i32
fun path_has_ext(path: str) -> bool
fun path_join2(dst: ptr<u8>, dst_cap: i32, left: str, right: str) -> i32
fun path_basename_copy(dst: ptr<u8>, dst_cap: i32, path: str) -> i32
fun path_dirname_copy(dst: ptr<u8>, dst_cap: i32, path: str) -> i32
```
