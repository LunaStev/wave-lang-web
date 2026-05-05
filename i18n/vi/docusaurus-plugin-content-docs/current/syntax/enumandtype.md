---
sidebar_position: 10
---

# Enum và Alias kiểu (type alias)

Wave hỗ trợ alias kiểu (type alias) và enum dựa trên số để duy trì hệ thống kiểu tường minh tương tự như C, và nâng cao độ ổn định của ABI và tính đọc được.

---

## Alias kiểu (Type Alias)

### Tóm tắt

Từ khoá type gán một tên mới cho kiểu dữ liệu hiện có.
Đây không phải là tạo ra kiểu dữ liệu mới, mà là một alias hoàn toàn.

```wave
type MyInt = i32;
```

Trong khai báo trên, MyInt hoàn toàn đồng nhất với i32.

---

### Đặc điểm

- Không có overload runtime
- Hoàn toàn đồng nhất trên ABI
- Chỉ tồn tại trong thời gian biên dịch
- Có thể sử dụng như kiểu repr của enum

---

### Ví dụ sử dụng

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### Tính đồng nhất kiểu dữ liệu

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type không phải là một kiểu mới mà chỉ là kiểu với tên khác.

---

## Enum

### Tóm tắt

Enum của Wave là enum dựa trên số nguyên.
Tất cả các enum đều phải có một kiểu repr.

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### Kiểu repr

-> i32 chỉ ra enum này được biểu thị bằng kiểu số nguyên nào.

Các loại repr cho phép:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- `type alias` của loại này

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### Quy tắc phân bổ giá trị

- Sử dụng giá trị hiện có nếu có giá trị tường minh
- Nếu không có, giá trị trước + 1
- Nếu giá trị đầu tiên không tồn tại, bắt đầu từ 0

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum là kiểu giá trị

enum là giá trị số nguyên và có thể tự do sử dụng làm tham số hàm hoặc giá trị trả về.

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### Sử dụng như hằng số

Các biến thể enum là hằng số thời gian biên dịch.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## Ví dụ thực tế

```wave
type MyInt = i32;

enum ShaderUniformType -> MyInt {
    A = 0,
    B,
    C = 10,
    D
}

const X: MyInt = 123;
const Y: MyInt = B;
const Z: ShaderUniformType = D;

fun f(t: ShaderUniformType) -> MyInt {
    return t;
}

fun g(v: MyInt) -> MyInt {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", g(Z)); // 11
}
```