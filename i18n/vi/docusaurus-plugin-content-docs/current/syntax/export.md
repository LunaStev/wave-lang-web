---
sidebar_position: 9.5
---

# export

`export` đưa một hàm được cài đặt trong Wave ra ngoài dưới dạng ký hiệu linker bên ngoài. Nếu `extern` nhập một hàm bên ngoài vào Wave, thì `export` cho phép hàm Wave được gọi từ C, Rust, C++, Zig hoặc ngôn ngữ native khác thông qua file object.

---

## Tổng quan

FFI của Wave có hai hướng.

- `extern(c)` khai báo một hàm do thư viện bên ngoài cung cấp để mã Wave có thể gọi nó.
- `export(c)` phát sinh thân hàm Wave như một ký hiệu ABI bên ngoài.

Hai dạng này dùng cùng kiểu phần đầu ABI, nhưng ý nghĩa ngược nhau. Với `extern`, thân hàm nằm ngoài Wave. Với `export`, thân hàm nằm trong Wave.

Hiện tại ABI export duy nhất được hỗ trợ là `c`.

---

## Export theo từng hàm

Dạng cơ bản là:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Đoạn mã này phát sinh ký hiệu công khai tên `add`. File object tạo ra có thể link với mã bên ngoài mong đợi C ABI.

---

## Tên ký hiệu

Tên hàm trong Wave và tên ký hiệu linker được export có thể khác nhau.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Ở đây tên trong Wave là `add_i32`, nhưng file object xuất ra `wave_add_i32`. Ngôn ngữ bên ngoài phải khai báo và gọi đúng tên ký hiệu này.

---

## Export theo block

Nhiều hàm dùng cùng ABI có thể được gom vào một block.

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

Block export dùng tên của từng hàm làm ký hiệu công khai. `export(c, "symbol") { ... }` không được phép vì một alias dùng chung cho nhiều hàm sẽ gây xung đột ký hiệu.

---

## Gọi từ C

Build file Wave thành file object.

```bash
wavec build math.wave --emit=obj -o math.o
```

Khai báo ký hiệu được export trong C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

Sau đó link mã C và file object của Wave bằng linker thông thường.

```bash
cc main.c math.o -o app
```

---

## extern và export

`extern(c)` nghĩa là Wave sử dụng một ký hiệu bên ngoài.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` nghĩa là mã bên ngoài có thể sử dụng một ký hiệu của Wave.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

Cả hai đều thuộc FFI, nhưng hướng sử dụng khác nhau.

---

## Giới hạn

- Chỉ hỗ trợ `export(c)`.
- Hàm được export không thể là generic.
- Block export không thể dùng một alias ký hiệu chung.
- Để tương tác ổn định, hiện nên ưu tiên số nguyên, số thực, boolean và con trỏ.
- Các kiểu aggregate như struct và array cần quy tắc ABI chặt chẽ hơn và có thể được ổn định sau.
- `export` chủ yếu hữu ích cho file object và thư viện, không cần thiết cho executable đơn giản.

---

## Trường hợp nên dùng

- Cung cấp hàm tiện ích Wave như thư viện C ABI.
- Gọi hàm Wave từ Rust, C, C++, Zig hoặc ngôn ngữ native khác.
- Kết nối dần các module `front`, `utils` hoặc module native không runtime viết bằng Wave vào hệ thống build hiện có.
- Cho phép Vex hoặc công cụ build khác link file object Wave vào dự án bên ngoài.
