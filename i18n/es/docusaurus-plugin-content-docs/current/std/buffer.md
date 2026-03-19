---
sidebar_position: 2
---

# std::buffer 사용법

`std::buffer`는 가변 바이트 버퍼와 제네릭 버퍼를 제공합니다.

## import

```wave
import("std::buffer::types");
import("std::buffer::alloc");
import("std::buffer::read");
import("std::buffer::write");
```

## 1. 바이트 버퍼 (`Buffer`)

### 생성/추가/수정

```wave
fun main() {
    var buf: Buffer = buffer_new(128);

    buffer_append_str(&buf, "GET /health\n");
    buffer_push(&buf, 0);

    var first: u8 = buffer_at(buf, 0);
    var ok: bool = buffer_set(&buf, 0, 80); // 'P'

    buffer_free(&buf);
}
```

### 핵심 함수

```wave
fun buffer_new(capacity: i64) -> Buffer
fun buffer_reserve(buf: ptr<Buffer>, required_cap: i64) -> i64
fun buffer_push(buf: ptr<Buffer>, value: u8) -> i64
fun buffer_append(buf: ptr<Buffer>, src: ptr<u8>, size: i64) -> i64
fun buffer_append_str(buf: ptr<Buffer>, s: str) -> i64
fun buffer_at(buf: Buffer, index: i64) -> u8
fun buffer_set(buf: ptr<Buffer>, index: i64, value: u8) -> bool
fun buffer_free(buf: ptr<Buffer>) -> i64
```

## 2. 제네릭 버퍼 (`TypedBuffer<T>`)

Wave는 타입 추론이 없으므로 타입 인자를 명시합니다.

```wave
fun main() {
    var nums: TypedBuffer<i32> = tbuffer_new<i32>(4, 16); // elem_size=4

    tbuffer_push<i32>(&nums, 10);
    tbuffer_push<i32>(&nums, 20);

    var out: i32 = 0;
    var got: bool = tbuffer_at<i32>(nums, 1, &out); // out = 20

    tbuffer_free<i32>(&nums);
}
```

### 핵심 함수

```wave
fun tbuffer_new<T>(elem_size: i64, initial_cap: i64) -> TypedBuffer<T>
fun tbuffer_reserve<T>(buf: ptr<TypedBuffer<T>>, required_len: i64) -> i64
fun tbuffer_push<T>(buf: ptr<TypedBuffer<T>>, value: T) -> i64
fun tbuffer_at<T>(buf: TypedBuffer<T>, index: i64, out_value: ptr<T>) -> bool
fun tbuffer_set<T>(buf: ptr<TypedBuffer<T>>, index: i64, value: T) -> bool
fun tbuffer_free<T>(buf: ptr<TypedBuffer<T>>) -> i64
```

주의:

- `elem_size`는 호출자가 정확히 넣어야 합니다.
- 범위 밖 접근은 `false` 또는 기본값(`buffer_at`은 `0`)을 반환합니다.
