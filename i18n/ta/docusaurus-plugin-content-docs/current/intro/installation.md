---
sidebar_position: 1
---

# நிறுவல்

## Linux-ல் நிறுவல் முறை

### பதிவிறக்கம் மற்றும் அகற்றுதல்
GitHub இன் அதிகாரப்பூர்வ வெளியீட்டு பக்கத்தில் இருந்து Wave இன் புதிய பதிப்பை பதிவிறக்கம் செய்யவும்.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM அமைப்பு (Pre Beta பதிப்பு)
Wave இன் Pre Beta பதிப்பில் தற்காலிகமாக LLVM பயன்படுத்தப்படுகிறது, அதனால் கீழ்காணும் கட்டளையைப் பயன்படுத்தி LLVM ஐ நிறுவவும்:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### நிறுவல் சரிபார்ப்பு
நிறுவல் முடிந்ததா என சரிபார்க்க, கீழ்காணும் கட்டளையை டெர்மினலில் உள்ளிடவும்:

```bash
wave --version
```

பதிப்பு தகவல் காண்பிக்கப்பட்டால், நிறுவல் வெற்றிகரமாக நிறைவடைந்தது.
