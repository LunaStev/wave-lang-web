---
sidebar_position: 8
---

# std::string 사용법

NUL 종료 문자열(`str`) 유틸입니다.

## import

```wave
import("std::string::len");
import("std::string::cmp");
import("std::string::find");
import("std::string::trim");
import("std::string::ascii");
import("std::string::hash");
```

## 1. 길이/비교

```wave
fun main() {
    var l: i32 = len("wave");
    var e: bool = eq("a", "a");
    var c: i32 = cmp("abc", "abd"); // -1
    var sw: bool = starts_with("/api/v1", "/api");
}
```

## 2. 검색/카운트

```wave
fun main() {
    var p1: i32 = find_char("hello", 108); // 'l' -> 2
    var p2: i32 = find("wave-lang", "lang");
    var cnt: i32 = count("aaaa", "aa");
}
```

## 3. 트림 범위 + ASCII

```wave
fun main() {
    var s: str = "  hello\n";
    var st: i32 = 0;
    var en: i32 = 0;
    trim_range(s, &st, &en);

    var d: bool = is_digit(53);    // '5'
    var up: u8 = to_upper(97);     // 'a' -> 'A'
}
```

## 4. 해시

```wave
fun main() {
    var h1: i32 = djb2_32("cache-key");
    var h2: i64 = fnv1a_64("cache-key");
}
```

## 주요 함수

```wave
fun len(s: str) -> i32
fun is_empty(s: str) -> bool
fun eq(a: str, b: str) -> bool
fun cmp(a: str, b: str) -> i32
fun find(s: str, needle: str) -> i32
fun contains(s: str, needle: str) -> bool
fun count(s: str, needle: str) -> i32
fun trim_range(s: str, out_start: ptr<i32>, out_end: ptr<i32>)
fun is_digit(c: u8) -> bool
fun to_lower(c: u8) -> u8
fun to_upper(c: u8) -> u8
fun djb2_32(s: str) -> i32
fun fnv1a_64(s: str) -> i64
```
