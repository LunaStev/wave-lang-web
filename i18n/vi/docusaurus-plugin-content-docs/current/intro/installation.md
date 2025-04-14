---
sidebar_position: 1
---

# Cài đặt

## Phương pháp cài đặt trên Linux

### Tải xuống và giải nén
Tải phiên bản mới nhất của Wave từ trang phát hành chính thức trên GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Cấu hình LLVM (Phiên bản Pre Beta)
Phiên bản Pre Beta của Wave tạm thời sử dụng LLVM, vì vậy hãy cài đặt LLVM bằng lệnh sau:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Kiểm tra cài đặt
Để kiểm tra xem cài đặt đã hoàn tất hay chưa, hãy nhập lệnh sau vào terminal:

```bash
wavec --version
```

Nếu thông tin phiên bản hiển thị, cài đặt đã thành công.