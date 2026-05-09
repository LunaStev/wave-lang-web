---
sidebar_position: 1
---

# Thư viện chuẩn (std)

Phần này giải thích cách sử dụng thực tế của thư viện chuẩn Wave.

## Mô-đun

- [buffer](./buffer)
- [env](./env)
- [math](./math)
- [mem](./mem)
- [net](./net)
- [path](./path)
- [string](./string)
- [time](./time)
- [sys](./sys)
- [libc](./libc)

## Nguyên tắc sử dụng

- Trong mã cấp cao, sử dụng `std::*`.
- Các chức năng phụ thuộc vào OS được ẩn sau `std::sys::*`.
- `std::libc` chỉ được sử dụng khi cần tương thích với C.

## Quy tắc xử lý lỗi

Nhiều hàm tuân theo các quy tắc sau:

- `>= 0`: thành công
- `< 0`: thất bại (`-errno` hoặc mã lỗi theo mô-đun)

Ví dụ:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // Xử lý lỗi
        return;
    }

    // raw chứa chuỗi kết thúc bằng NUL
}
```
