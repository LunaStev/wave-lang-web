---
sidebar_position: 1
---

# Cài đặt

## Cách cài đặt trên Linux

### Tải về và giải nén
Tải phiên bản mới nhất của Wave từ trang phát hành chính thức trên GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### Cấu hình LLVM (dành cho bản Pre-Beta)
Vì phiên bản Pre-Beta của Wave tạm thời sử dụng LLVM, hãy cài đặt nó bằng các lệnh sau:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Kiểm tra cài đặt
Để kiểm tra xem việc cài đặt có thành công hay không, hãy nhập lệnh sau trong terminal:

```bash
wavec --version
```

Nếu thông tin phiên bản được hiển thị, điều đó có nghĩa là bạn đã cài đặt thành công.