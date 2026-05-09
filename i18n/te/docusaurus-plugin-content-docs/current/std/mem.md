---
sidebar_position: 5
---

# std::mem ఎలా ఉపయోగించాలి

ఇది తక్కువ-స్థాయి మెమరీ కేటాయింపు/కాపీ/పోలిక ప్రయోజనం.

## import

```wave
import("std::mem::alloc");
import("std::mem::ops");
import("std::mem::cstr");
```

## 1) డిఫాల్ట్ కేటాయింపు/విడుదల

```wave
fun main() {
    var p: ptr<u8> = mem_alloc_zeroed(256);
    if (p == null) {
        return;
    }

    mem_set(p, 65, 10); // 'A'
    mem_free(p, 256);
}
```

## 2) సురక్షిత కాపీని మళ్లీ కేటాయించండి మరియు తరలించండి

```wave
fun main() {
    var p: ptr<u8> = mem_alloc(16);
    p = mem_realloc(p, 16, 64);

    // అతివ్యాప్తి చెందుతున్న మెమరీ ప్రాంతాల సురక్షిత కదలిక
    mem_move(p + 1, p, 10);

    mem_free(p, 64);
}
```

## 3) సాధారణ అంశం API

```wave
fun main() {
    var arr: ptr<i32> = mem_alloc_items_zeroed<i32>(8, 4);
    if (arr == null) {
        return;
    }

    mem_set_items<i32>(arr, 7, 8, 4);
    mem_swap<i32>(&arr[0], &arr[1]);

    mem_free_items<i32>(arr, 8, 4);
}
```

## 4) C స్ట్రింగ్ యుటిలిటీ

```wave
fun main() {
    var dst: array<u8, 32>;
    mem_copy_cstr(&dst[0], "wave");

    var n: i64 = mem_len_cstr("hello");
    var eq: bool = mem_eq_cstr("abc", "abc");
}
```

## ప్రధాన విధి

```wave
fun mem_alloc(size: i64) -> ptr<u8>
fun mem_alloc_zeroed(size: i64) -> ptr<u8>
fun mem_realloc(old_ptr: ptr<u8>, old_size: i64, new_size: i64) -> ptr<u8>
fun mem_free(p: ptr<u8>, size: i64) -> i64

fun mem_copy(dst: ptr<u8>, src: ptr<u8>, size: i64)
fun mem_move(dst: ptr<u8>, src: ptr<u8>, size: i64)
fun mem_cmp(a: ptr<u8>, b: ptr<u8>, size: i64) -> i32
fun mem_eq(a: ptr<u8>, b: ptr<u8>, size: i64) -> bool
fun mem_find_byte(src: ptr<u8>, size: i64, value: u8) -> i64
```
