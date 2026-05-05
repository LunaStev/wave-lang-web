---
sidebar_position: 1
---

# Cài đặt

## Hướng dẫn cài đặt

Wave có thể được cài đặt dễ dàng thông qua script cài đặt được cung cấp.
Khi chạy lệnh dưới đây trong terminal, trình biên dịch Wave (`wavec`) phiên bản chỉ định sẽ được tự động cài đặt.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

Script cài đặt sẽ xác minh môi trường hệ thống và tự động cài đặt các phụ thuộc và trình biên dịch cần thiết để chạy Wave.
Nếu không chỉ định phiên bản, phiên bản ổn định mới nhất hoặc phiên bản mặc định theo tiêu chuẩn chỉ định sẽ được cài đặt.

## Ví dụ cài đặt

Để cài đặt phiên bản mới nhất, thực hiện như sau.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

Nếu muốn cài đặt một phiên bản cụ thể, hãy sử dụng tùy chọn `--version`.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

Cũng có thể chỉ định phiên bản chi tiết hơn như bản build hàng đêm.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Công việc thực hiện trong quá trình cài đặt

Script cài đặt tự động xử lý nhiều bước để đảm bảo Wave chạy đúng cách.
Trước tiên, cài đặt các gói cần thiết liên quan đến LLVM 14 qua `apt-get`.
Sau đó, tạo liên kết tượng trưng tới `/usr/lib/libllvm-14.so` để hệ thống tham chiếu LLVM ổn định.

Đặt biến môi trường `LLVM_SYS_140_PREFIX` để trình biên dịch Wave tìm thấy LLVM đúng cách, và được thêm vào `~/.bashrc` để duy trì trong các phiên terminal sau.

Tiếp theo, tải về và giải nén gói Wave (`.tar.gz`) version người dùng chỉ định.
Sau khi giải nén, cài đặt tập tin thực thi `wavec` vào `/usr/local/bin`, cấu hình để có thể sử dụng lệnh `wavec` từ bất kỳ đâu trên hệ thống.

Sau khi cài đặt hoàn tất, xác minh cài đặt đúng cách bằng lệnh `wavec --version`.

## Kiểm tra cài đặt

Sau khi cài đặt xong, chạy lệnh dưới đây để kiểm tra trình biên dịch Wave đã được cài đặt đúng chưa.

```bash
wavec --version
```

Khi thực thi lệnh, nếu thông tin phiên bản của Wave đã cài đặt được hiển thị, tức là đã cài đặt thành công.

---

## Hướng dẫn gỡ bỏ Wave (`uninstall.sh`)

Nếu muốn gỡ bỏ Wave khỏi hệ thống, bạn có thể sử dụng script gỡ bỏ cung cấp.
Script này có chức năng dọn dẹp các tệp và cài đặt đã thêm vào trong quá trình cài đặt.

### Cách gỡ bỏ

Chạy lệnh sau trong terminal.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

Sau khi gỡ bỏ hoàn tất, lệnh wavec không còn sử dụng được, và các tệp thực thi và cài đặt liên quan đến Wave bị xóa khỏi hệ thống.