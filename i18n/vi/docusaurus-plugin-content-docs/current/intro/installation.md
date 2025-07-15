---
sidebar_position: 1
---

# Cài đặt

## Hướng dẫn cài đặt

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

## Công việc thực hiện trong quá trình cài đặt

- Cài đặt LLVM 14 và các gói liên quan (`apt-get`)

- Tạo liên kết tượng trưng `/usr/lib/libllvm-14.so`

- Thiết lập biến môi trường `LLVM_SYS_140_PREFIX` (`~/.bashrc`)

- Tải xuống Wave `.tar.gz` cho phiên bản xác định

- Giải nén và cài đặt `wavec` vào `/usr/local/bin`

- Kiểm tra cài đặt bằng `wavec --version`

## Kiểm tra cài đặt

```bash
wavec --version
```

## Hướng dẫn gỡ bỏ Wave (`uninstall.sh`)

### Cách gỡ bỏ

Chạy lệnh sau trong terminal:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
