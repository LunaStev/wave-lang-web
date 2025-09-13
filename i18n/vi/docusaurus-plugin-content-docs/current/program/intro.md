---
sidebar_position: 1
---

# Xuất "Xin chào Wave".

Tài liệu này giải thích cách viết chương trình xuất cơ bản nhất bằng ngôn ngữ Wave.

---

## Mã ví dụ.

```wave
fun main() {
    println("Xin chào Wave");
}
```

---

## Mô tả.

- `fun main()`.

  Đây là hàm điểm vào của chương trình Wave. Được gọi đầu tiên khi thực hiện chạy.

- `println()`.

  Là hàm xuất tạm thời, xuất chuỗi và thêm dòng mới (`\n`) sau khi xuất.

- `;` (dấu chấm phẩy).

  Mọi câu lệnh trong Wave đều kết thúc bằng dấu chấm phẩy.

---

## Kết quả thực hiện.

```text
Xin chào Wave.
```

---

## Ví dụ bổ sung.

Wave hỗ trợ nối chuỗi.

```wave
fun main() {
    var name: str = "Wave";
    println("Xin chào, {}!", name);
}
```

Xuất:

```text
Xin chào, Wave!
```

---

> Ví dụ này cho thấy cách sử dụng hàm xuất cơ bản của thư viện chuẩn Wave.