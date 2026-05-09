---
sidebar_position: 8
---

# Kiểm soát thủ công sysroot liên kết (`-C link-sysroot`)

Tài liệu này mô tả cách **kiểm soát rõ ràng** sysroot giai đoạn liên kết trong `wavec`.

Nguyên tắc cốt lõi:

- `--sysroot=<path>`: sysroot giai đoạn biên dịch (clang `-c`)
- `-C link-sysroot=<path>`: sysroot giai đoạn liên kết (liên kết)

Tức là, xử lý sysroot của biên dịch và liên kết cách riêng biệt.

---

## 1. Tại sao cần thiết

Khi sử dụng `-C linker=<path>` trong liên kết chéo, thường phải chỉ định riêng các đường dẫn runtime (`aarch64-linux-gnu-gcc`, `crt1.o`, `libc`) mà trình điều khiển liên kết (ví dụ: `libm`).

Khi đó thiết kế để không suy luận tự động sysroot liên kết mà truyền tải rõ ràng từ CLI.

---

## 2. Định nghĩa tùy chọn

## 2.1 `-C link-sysroot=<path>`

Chèn `--sysroot=<path>` vào giai đoạn liên kết.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

Nội bộ có cùng nghĩa với `-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

Tiếp tục hỗ trợ phương thức tham số liên kết thô hiện tại.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. Quy tắc xác minh

Nếu các điều kiện sau đồng thời tồn tại trong quá trình biên dịch cần giai đoạn liên kết, sẽ kết thúc bằng lỗi sử dụng.

1. Sử dụng `-C linker=...`
2. Sử dụng `--sysroot=<path>`
3. Chưa chỉ định sysroot liên kết (`-C link-sysroot` hoặc `-C link-arg=--sysroot=...`)

Ví dụ thông báo lỗi:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. Ví dụ sử dụng

## 4.1 Liên kết chéo Linux AArch64

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 Phương thức tham số liên kết thô

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 Biên dịch không có liên kết (`--emit=obj`)

Nếu không có giai đoạn liên kết thì không cần sysroot liên kết.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. Tóm tắt

- Điều khiển giai đoạn biên dịch bằng `--sysroot`
- Điều khiển giai đoạn liên kết bằng `-C link-sysroot`
- Ưu tiên kiểm soát rõ ràng hơn so với suy luận tự động
