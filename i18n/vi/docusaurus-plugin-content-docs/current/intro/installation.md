---
sidebar_position: 1
---

# Cài đặt

## Cách cài đặt
Chạy lệnh sau trong terminal:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### Ví dụ

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Các bước được thực hiện trong quá trình cài đặt
- Cài đặt LLVM 14 và các gói liên quan (sử dụng `apt-get`)

- Tạo liên kết tượng trưng (symbolic link) tới `/usr/lib/libllvm-14.so`

- Thiết lập biến môi trường LLVM_SYS_140_PREFIX (trong `~/.bashrc`)

- Tải xuống phiên bản `.tar.gz` của Wave đã chỉ định

- Giải nén và cài đặt wavec vào thư mục `/usr/local/bin`

- Xác minh cài đặt bằng lệnh `wavec --version`

## Kiểm tra cài đặt

```bash
wavec --version
```

## Hướng dẫn gỡ cài đặt Wave (`uninstall.sh`)
### Cách gỡ cài đặt
Chạy lệnh sau trong terminal:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
