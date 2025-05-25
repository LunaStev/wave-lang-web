---
sidebar_position: 1
---

# การติดตั้ง

## วิธีการติดตั้งบน Linux

### ดาวน์โหลดและแยกไฟล์
ดาวน์โหลดเวอร์ชันล่าสุดของ Wave จากหน้ารุ่นทางการบน GitHub

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### การตั้งค่า LLVM (รุ่น Pre Beta)
เวอร์ชัน Pre Beta ของ Wave ใช้ LLVM ชั่วคราว ดังนั้นให้ติดตั้ง LLVM โดยใช้คำสั่งต่อไปนี้:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### ตรวจสอบการติดตั้ง
เพื่อตรวจสอบว่าการติดตั้งเสร็จสมบูรณ์หรือไม่ ให้พิมพ์คำสั่งต่อไปนี้ในเทอร์มินัล:

```bash
wavec --version
```

หากข้อมูลเวอร์ชันปรากฏขึ้น การติดตั้งสำเร็จแล้ว