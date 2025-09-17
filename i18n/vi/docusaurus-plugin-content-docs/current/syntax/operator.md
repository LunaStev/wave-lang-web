---
sidebar_position: 5
---

# toán tử

## Giới thiệu

Ngôn ngữ Wave cung cấp các toán tử đa dạng để thực hiện tính toán, đánh giá logic, so sánh, và xử lý bit giữa các biến.

Tài liệu này giải thích các toán tử chính có thể sử dụng trong Wave theo từng loại, kèm theo cách hoạt động và ví dụ cho từng loại.

Các toán tử được chia thành các loại sau:

- toán tử số học
- toán tử so sánh
- toán tử logic
- toán tử bit
- toán tử gán
- các toán tử đặc biệt khác

---

## toán tử số học

Toán tử số học thực hiện các phép toán cơ bản trên dữ liệu số.

| toán tử | Mô tả        | Ví dụ (`a = 10`, `b = 3`)   |
| ------- | ------------ | ---------------------------------------------- |
| `+`     | phép cộng    | `a + b` → `13`                                 |
| `-`     | phép trừ     | `a - b` → `7`                                  |
| `*`     | phép nhân    | `a * b` → `30`                                 |
| `/`     | phép chia    | `a / b` → `3` (chia nguyên) |
| `%`     | phép chia dư | `a % b` → `1`                                  |

---

## toán tử so sánh

Toán tử so sánh trả lại giá trị `bool` sau khi so sánh hai giá trị.

| toán tử | Mô tả             | Ví dụ (`a = 10`, `b = 3`) |
| ------- | ----------------- | -------------------------------------------- |
| `==`    | bằng nhau         | `a == b` → `false`                           |
| `!=`    | khác nhau         | `a != b` → `true`                            |
| `<`     | nhỏ hơn           | `a < b` → `false`                            |
| `>`     | lớn hơn           | `a > b` → `true`                             |
| `<=`    | nhỏ hơn hoặc bằng | `a <= 10` → `true`                           |
| `>=`    | lớn hơn hoặc bằng | `a >= b` → `true`                            |

---

## toán tử logic

Toán tử logic xử lý sự kết hợp của các giá trị `bool`.

| toán tử    | Tên       | Mô tả                                                            | Ví dụ                     |
| ---------- | --------- | ---------------------------------------------------------------- | ------------------------- |
| `&&`       | logic AND | Chỉ `true` nếu cả hai giá trị đều `true`.        | `true && false` → `false` |
| \\\`\\ | logic OR  | Chỉ cần một trong hai `true` thì kết quả `true`. | \\`true \\             |
| `!`        | logic NOT | Đảo ngược `true` thành `false`, `false` thành `true`             | `!true` → `false`         |

---

## toán tử bit

Toán tử bit thao tác dữ liệu kiểu số nguyên theo đơn vị bit.

| toán tử    | Tên      | Mô tả                                | Ví dụ           |
| ---------- | -------- | ------------------------------------ | --------------- |
| `&`        | bit AND  | 1 khi cả hai bit đều là 1            | `a & b` → `2`   |
| \\\`\\ | bit OR   | 1 khi ít nhất một trong hai bit là 1 | \\`a \\      |
| `^`        | bit XOR  | 1 khi hai bit khác nhau              | `a ^ b` → `5`   |
| `~`        | bit NOT  | đảo ngược bit                        | `~a` → `-7`     |
| `<<`       | dời trái | dời bit sang trái                    | `a << 1` → `12` |
| `>>`       | dời phải | dời bit sang phải                    | `a >> 1` → `3`  |

---

## toán tử gán

Sử dụng khi lưu trữ giá trị vào biến. Phần lớn các trường hợp có thể rút gọn kết hợp với toán tử số học.

| toán tử | Mô tả                       | Ví dụ (`a = 5`) |
| ------- | --------------------------- | ---------------------------------- |
| `=`     | Phân bổ cơ bản              | `a = 10`                           |
| `+=`    | Phân bổ sau khi cộng thêm   | `a += 2` → `7`                     |
| `-=`    | Phân bổ sau khi trừ đi      | `a -= 1` → `4`                     |
| `*=`    | Phân bổ sau khi nhân        | `a *= 3` → `15`                    |
| `/=`    | Phân bổ sau khi chia        | `a /= 5` → `1`                     |
| `%=`    | Phân bổ sau khi chia lấy dư | `a %= 4` → `1`                     |

---

## các toán tử đặc biệt khác

Wave cung cấp các toán tử có ý nghĩa riêng hoặc đặc biệt như sau.

| toán tử     | Tên                                                    | Mô tả                                                  | Ví dụ                                    |
| ----------- | ------------------------------------------------------ | ------------------------------------------------------ | ---------------------------------------- |
| `??`        | Toán tử hợp nhất giá trị null                          | Sử dụng giá trị bên phải nếu giá trị bên trái là null  | `a ?? b` → `nếu a null thì b`            |
| `?:`        | Toán tử điều kiện (toán tử ba ngôi) | Lựa chọn giá trị theo điều kiện                        | `điều kiện ? giá trị đúng : giá trị sai` |
| `in`        | Kiểm tra xem có chứa hay không                         | Kiểm tra xem giá trị có nằm trong bộ sưu tập hay không | `"a" trong danh sách`                    |
| `is`        | Toán tử so sánh kiểu                                   | Kiểm tra kiểu của giá trị                              | `x là i32`                               |
| `!&`        | NAND                                                   | Toán tử Logic NAND                                     | Phép toán logic nâng cao                 |
| \\\`!\\ | NOR                                                    | Toán tử Logic NOR                                      | Phép toán logic nâng cao                 |
| `~^`        | XNOR                                                   | Toán tử Logic XNOR                                     | Phép toán logic nâng cao                 |

---

## Tóm tắt

Wave cung cấp các toán tử đa dạng từ toán học đến phán đoán logic, thao tác bit và chia nhánh điều kiện.
Những toán tử này là công cụ cần thiết để tương tác với biến, cấu thành điều kiện, và thực hiện các phép toán phức tạp hoặc kiểm soát luồng.

Sẽ xem xét thứ tự ưu tiên và hướng kết hợp của mỗi toán tử trong phần "Thứ tự ưu tiên và trình tự đánh giá" tiếp theo.