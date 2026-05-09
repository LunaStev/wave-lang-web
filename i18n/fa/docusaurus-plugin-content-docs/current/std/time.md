---
sidebar_position: 9
---

# استفاده از std::time

امکاناتی برای نمایش زمان حال، محاسبه اختلاف زمانی، و خواب فراهم می‌کند.

## واردات

```wave
واردات("std::time::clock");
واردات("std::time::diff");
واردات("std::time::sleep");
واردات("std::sys::time");
```

## 1. تنظیم بازه

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

## 2. تمبر زمان نانوثانیه

```wave
fun main() {
    var rt: i64 = time_now_realtime_ns();
    var mono: i64 = time_now_monotonic_ns();
}
```

## 3. خواب

```wave
fun main() {
    time_sleep_us(500);
    time_sleep_ms(1);
    time_sleep_ns(100000);
}
```

## توابع اصلی

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
