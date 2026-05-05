---
sidebar_position: 9
---

# Cách sử dụng std::time

Hiển thị thời gian hiện tại, tính toán khoảng thời gian, và cung cấp chức năng ngủ.

## nhập khẩu

```wave
import("std::time::clock");
import("std::time::diff");
import("std::time::sleep");
import("std::sys::time");
```

## 1. Đoạn đo đếm

```wave
fun main() {
    var start: TimeSpec;
    var end: TimeSpec;

    time_now_monotonic(&start);
    time_sleep_ms(10);
    time_now_monotonic(&end);

    var elapsed_ns: i64 = time_diff_ns(start, end);
    var elapsed_ms: i64 = time_diff_ms(start, end);
}
```

## 2. Dấu thời gian nano giây

```wave
fun main() {
    var rt: i64 = time_now_realtime_ns();
    var mono: i64 = time_now_monotonic_ns();
}
```

## 3. Ngủ

```wave
fun main() {
    time_sleep_us(500);
    time_sleep_ms(1);
    time_sleep_ns(100000);
}
```

## Các hàm chính

```wave
fun time_now_realtime(tp: ptr<TimeSpec>) -> i64
fun time_now_monotonic(tp: ptr<TimeSpec>) -> i64
fun time_now_realtime_ns() -> i64
fun time_now_monotonic_ns() -> i64
fun time_diff_ns(start_ts: TimeSpec, end_ts: TimeSpec) -> i64
fun time_diff_ms(start_ts: TimeSpec, end_ts: TimeSpec) -> i64
fun time_sleep_ns(ns: i64) -> i64
fun time_sleep_us(us: i64) -> i64
fun time_sleep_ms(ms: i64) -> i64
```
