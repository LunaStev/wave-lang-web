---
sidebar_position: 7
---

# Tùy chọn backend (`--llvm`, `--whale`)

Tài liệu này giải thích các tùy chọn CLI liên quan đến backend của `wavec`.

Nguyên tắc quan trọng:

- `wavec` không phải là trình quản lý gói.
- Hoạt động backend được điều khiển bằng **tham số rõ ràng** càng nhiều càng tốt.
- Các tùy chọn chi tiết của backend chỉ được phân tích sau `--llvm`.

---

## 1. Bộ chọn backend

## 1.1 `--llvm`

Chính `--llvm` là dấu đánh dấu bắt đầu cho khối tùy chọn backend.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Như trên, chỉ các mục hỗ trợ trong số các tham số đến sau `--llvm` mới được xử lý như là cài đặt backend LLVM.

## 1.2 `--whale` (hiện tại TODO)

Hiện tại `--whale` là **cờ tạm thời được dự trữ**.

- Parser nhận diện.
- Pipeline backend Whale thực tế vẫn chưa được kết nối.
- Khi sử dụng sẽ kết thúc với lỗi TODO.

---

## 2. Các tùy chọn được hỗ trợ sau `--llvm`

## 2.1 Target/Codegen

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

Điểm phản ánh:

- Bước tạo IR (TargetMachine): `target`, `cpu`, `features`
- Bước Object/Link (gọi clang): `target`, `abi`

Các target triple chính cần được tài liệu hóa cơ bản hiện tại:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Toolchain/Link

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (có thể lặp lại)
- `-C link-sysroot=<đường dẫn>`
- `-C no-default-libs`

Điểm phản ánh:

- Ở bước tạo Object (clang `-c`) có `--sysroot`
- Ghi đè trình liên kết trong giai đoạn liên kết, chèn tham số liên kết thô, chèn link-sysroot
- Khi sử dụng `-C no-default-libs`, tự động vô hiệu hóa `-lc -lm`

---

## 3. Quy tắc phân tích cú pháp (quan trọng)

Nếu không sử dụng `--llvm`, các tùy chọn chi tiết backend sẽ không được hiểu như là tùy chọn toàn cục.

Ví dụ như dưới đây là lỗi.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

Phải viết giống như dưới đây.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. Ví dụ sử dụng

Tạo object cơ bản:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

Tạo đối tượng kernel độc lập:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

Liên kết tùy chỉnh:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

Vô hiệu hóa tự động liên kết libc/libm:

```bash
wavec --llvm -C no-default-libs build app.wave
```

Sử dụng `--freestanding` hoạt động theo cùng hướng với `-C no-default-libs` bên trong, và điều chỉnh để xây dựng không dựa trên thư viện chạy mặc định như code kernel/boot.

---

## 5. Tóm tắt trạng thái

- Backend LLVM: Đang hoạt động
- Backend Whale: Đã dự trữ (TODO), chưa thực hiện
