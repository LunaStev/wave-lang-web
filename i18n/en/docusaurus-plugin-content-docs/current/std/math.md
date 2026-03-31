---
sidebar_position: 4
---

# Usage of std::math

Provides integer/real/bit/number theory/trigonometric approximation functions.

## import

```wave
import("std::math::int");
import("std::math::float");
import("std::math::bits");
import("std::math::num");
import("std::math::trig");
```

## 1. Generic Numerical Functions

```wave
fun main() {
    var a: i32 = num_abs<i32>(-10, 0);
    var b: f64 = num_clamp<f64>(3.14, 0.0, 1.0);
}
```

## 2. Bit/Alignment Calculations

```wave
fun main() {
    var aligned: i32 = align_up(1000, 64);  // 1024
    var pc: i32 = popcount(0b101101);       // 4
    var lg: i32 = ilog2_floor(1024);         // 10
}
```

## 3. Number Theory/Trigonometric Approximation

```wave
fun main() {
    var g: i32 = gcd(48, 18);        // 6
    var p: i32 = pow_i32(2, 10);     // 1024

    var s: f64 = sin_f64(MATH_PI_F64 / 2.0);
    var c: f64 = cos_f64(0.0);
    var r: f64 = sqrt_f64(9.0);
}
```

## Main Functions

```wave
fun num_abs<T>(x: T, zero: T) -> T
fun num_min<T>(a: T, b: T) -> T
fun num_max<T>(a: T, b: T) -> T
fun num_clamp<T>(x: T, lo: T, hi: T) -> T
fun ptr_swap<T>(a: ptr<T>, b: ptr<T>)

fun is_pow2(x: i32) -> bool
fun align_down(x: i32, align: i32) -> i32
fun align_up(x: i32, align: i32) -> i32
fun popcount(x0: i32) -> i32
fun ilog2_floor(x: i32) -> i32
fun ilog2_ceil(x: i32) -> i32

fun gcd(a0: i32, b0: i32) -> i32
fun lcm(a: i32, b: i32) -> i32
fun pow_i32(base0: i32, exp0: i32) -> i32

fun sin_f64(x0: f64) -> f64
fun cos_f64(x0: f64) -> f64
fun sqrt_f64(x: f64) -> f64
```
