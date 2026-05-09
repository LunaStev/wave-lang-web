---
sidebar_position: 5
---

# toán tử

Tài liệu này tổng hợp các toán tử thực sự có thể sử dụng theo tiêu chuẩn trình biên dịch hiện tại.

## Số học

| toán tử | Mô tả        |
| ------- | ------------ |
| `+`     | phép cộng    |
| `-`     | phép trừ     |
| `*`     | phép nhân    |
| `/`     | phép chia    |
| `%`     | Phần còn lại |

## So sánh

| toán tử | Mô tả             |
| ------- | ----------------- |
| `==`    | bằng nhau         |
| `!=`    | khác nhau         |
| `<`     | nhỏ hơn           |
| `<=`    | nhỏ hơn hoặc bằng |
| `>`     | lớn hơn           |
| `>=`    | lớn hơn hoặc bằng |

## Logic

| toán tử    | Mô tả     |
| ---------- | --------- |
| `&&`       | logic AND |
| \\\`\\ | logic OR  |
| `!`        | logic NOT |

## Bit

| toán tử    | Mô tả    |
| ---------- | -------- |
| `&`        | bit AND  |
| \\\`\\ | bit OR   |
| `^`        | bit XOR  |
| `~`        | bit NOT  |
| `<<`       | dời trái |
| `>>`       | dời phải |

## Gán

| toán tử | Mô tả                   |
| ------- | ----------------------- |
| `=`     | Gán cơ bản              |
| `+=`    | Gán sau khi cộng        |
| `-=`    | Gán sau khi trừ         |
| `*=`    | Gán sau khi nhân        |
| `/=`    | Gán sau khi chia        |
| `%=`    | Gán sau khi lấy phần dư |

## Một ngôi / Con trỏ / Chuyển kiểu

| Toán tử/Từ khóa | Mô tả                    |
| --------------- | ------------------------ |
| `++`, `--`      | Tăng/giảm trước/sau      |
| `&x`            | Lấy địa chỉ              |
| `deref p`       | Tham chiếu ngược con trỏ |
| `expr as T`     | Chuyển kiểu tường minh   |

## Toán tử con trỏ

| Biểu thức                  | Kết quả                                     |
| -------------------------- | ------------------------------------------- |
| `ptr<T> + int`             | `ptr<T>` (Di chuyển GEP) |
| `int + ptr<T>`             | `ptr<T>` (Di chuyển GEP) |
| `ptr<T> - int`             | `ptr<T>` (Di chuyển GEP) |
| `ptr<T> - ptr<T>`          | `i64` (Chênh lệch byte)  |
| `ptr == ptr`, `ptr != ptr` | So sánh con trỏ                             |

## Mục dự trữ hoặc chưa triển khai

Có các mục mà token cú pháp tồn tại nhưng không được hỗ trợ bởi các phép toán diễn đạt hiện tại.
Ví dụ: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
