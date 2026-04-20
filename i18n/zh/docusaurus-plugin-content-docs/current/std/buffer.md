---
sidebar_position: 2
---

# std::buffer 使用方法

`std::buffer` 提供可变字节缓冲区和通用缓冲区。

## 导入

```wave
import("std::buffer::types");
import("std::buffer::alloc");
import("std::buffer::read");
import("std::buffer::write");
```

## 1）字节缓冲区（`Buffer`）

### 创建/添加/修改

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

### 核心函数

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

## 2. 泛型缓冲区 (`TypedBuffer<T>`)

由于Wave没有类型推断，因此需要指定类型参数。

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

### 核心函数

```wave
fun tbuffer_new<T>(elem_size: i64, initial_cap: i64) -> TypedBuffer<T>
fun tbuffer_reserve<T>(buf: ptr<TypedBuffer<T>>, required_len: i64) -> i64
fun tbuffer_push<T>(buf: ptr<TypedBuffer<T>>, value: T) -> i64
fun tbuffer_at<T>(buf: TypedBuffer<T>, index: i64, out_value: ptr<T>) -> bool
fun tbuffer_set<T>(buf: ptr<TypedBuffer<T>>, index: i64, value: T) -> bool
fun tbuffer_free<T>(buf: ptr<TypedBuffer<T>>) -> i64
```

注意:

- `elem_size`必须由调用者准确提供。
- 范围外访问会返回`false`或默认值（`buffer_at`为`0`）。
