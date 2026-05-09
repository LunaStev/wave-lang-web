---
sidebar_position: 14
---

# Câu lệnh Match

## Giới thiệu

Câu lệnh `match` là câu lệnh điều khiển phân nhánh với nhiều mẫu khác nhau để so sánh một giá trị.
Nó hữu ích khi bạn muốn biểu đạt ý định phân nhánh rõ ràng hơn so với chuỗi `if / else if`.

Hiện tại, `match` của Wave là một **câu lệnh (statement)** và không hỗ trợ dạng biểu thức (expression) được đánh giá trực tiếp thành giá trị.
Tức là, `var x = match (...) { ... Không thể sử dụng các dạng như `{

---

## Ngữ pháp cơ bản

```wave
match (giá trị) {
    mẫu1 => {
        // khối thực thi
    }
    mẫu2 => {
        // khối thực thi
    }
    _ => {
        // khối mặc định
    }
}
```

Quy tắc ngữ pháp:

- Tiêu đề sử dụng dạng `match (expr)`.
- Mỗi arm sử dụng dạng `mẫu => { khối }`.
- Nội dung arm phải là `{ ... }` phải là một khối.
- Giữa các arm có thể chỉ cần xuống dòng hoặc sử dụng `,` hoặc `;` làm dấu phân cách.

---

## Các loại mẫu

Hiện có ba mẫu được hỗ trợ dưới đây.

1. Mẫu số nguyên dạng literal

```wave
0 => { ... }
1 => { ... }
42 => { ... }
```

2. Mẫu định danh

```wave
Off => { ... }
On => { ... }
```

Mẫu định danh được sử dụng cho **giá trị có thể diễn giải là hằng số nguyên** như variant enum.

3. Mẫu wildcard (`_`)

```wave
_ => { ... }
```

Đây là arm mặc định thực thi khi không có mẫu nào phù hợp.

---

## Loại mục tiêu để match

Theo tiêu chuẩn hiện tại, giá trị mục tiêu của `match` phải là **dòng số nguyên/dòng enum**.
Không thể sử dụng chuỗi, số thực động, cấu trúc v.v. làm mục tiêu của `match`.

---

## Ví dụ 1: Phân nhánh số nguyên

```wave
fun classify_num(v: i32) -> i32 {
    var result: i32 = -1;

    match (v) {
        0 => {
            result = 10;
        }
        1 => {
            result = 20;
        }
        _ => {
            result = 99;
        }
    }

    return result;
}
```

---

## Ví dụ 2: Phân nhánh enum

```wave
enum Mode -> i32 {
    Off = 0,
    On = 1,
    Unknown = 2
}

fun classify_mode(m: Mode) -> i32 {
    match (m) {
        Off => {
            return 1;
        }
        On => {
            return 2;
        }
        _ => {
            return 3;
        }
    }
}
```

---

## Quy tắc hoạt động

- Giống như các dòng `switch`, **chỉ có arm phù hợp duy nhất được thực thi**.
- Không có fallthrough tự động.
- Arm `_` chỉ có thể được sử dụng một lần duy nhất.
- Về mặt cú pháp, arm `_` có thể không cần thiết. (Nếu không có arm nào phù hợp, không có arm nào được thực thi)

---

## Những điều cần chú ý

1. Cấm trùng lặp các trường hợp

- Khai báo lặp lại cùng một trường hợp sẽ gây ra lỗi biên dịch.

2. Cấm trùng lặp `_`

- Không thể khai báo arm `_` nhiều hơn hai lần.

3. Khối arm là bắt buộc

- Sau `=>` phải có `{ ... Phải sử dụng khối `}\`.

4. Mẫu phải là hằng số

- Chỉ sử dụng giá trị có thể được diễn giải bằng hằng số nguyên hoặc biến thể enum cho mẫu định danh.

---

## Tóm tắt

`match` của Wave là câu lệnh điều khiển được tối ưu hóa cho nhánh số nguyên/enum.
Sử dụng cấu trúc khối `=>`, có thể sử dụng wildcard (`_`) để tạo ra nhánh cơ bản.

Khi số lượng trường hợp nhánh tăng lên, dễ đọc hơn so với `if / else if` và có thể thể hiện ý định rõ ràng hơn.
