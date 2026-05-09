---
sidebar_position: 12
---

# Quy tắc gia hạn toàn cục/cục bộ

Wave phân biệt rõ ràng tuổi thọ lưu trữ và khả năng thay đổi ở cấp độ từ khóa.

## Tóm tắt

- Hằng số toàn cục: `const`
- Biến lưu trữ toàn cục: `static`
- Biến cục bộ: `var`, `let`, `let mut`

Tức là, **chỉ khai báo `const` và `static` ở cấp độ cao nhất**, và **chỉ khai báo họ `var` và `let` trong các biến cục bộ nội bộ hàm/khối**.

## Hằng số toàn cục: `const`

`const` được xử lý như là một hằng số trong thời gian biên dịch và không thể gán lại.

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## Biến lưu trữ toàn cục: `static`

`static` là một biến sở hữu không gian lưu trữ toàn cục.
Có thể gán lại; nếu không chỉ định giá trị khởi tạo, nó sẽ được khởi tạo bằng giá trị 0 của loại.

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## Biến cục bộ: `var` / `let`

Chỉ sử dụng từ khóa biến cục bộ bên trong hàm hoặc khối.

```wave
fun main() -> i32 {
    var x: i32 = 10;
    let y: i32 = 20;
    let mut z: i32 = 30;

    x = x + 1;
    z = z + 1;
    return x + y + z;
}
```

## Hạn chế

- `var`, `let` không thể được sử dụng ở cấp độ cao nhất.
- `var`, `let` không thể được sử dụng bên trong hàm hoặc khối.
- `let` là bất biến và không thể gán lại.
