---
sidebar_position: 1
---

# स्थापना

## Linux पर स्थापना विधि

### डाउनलोड और एक्सट्रैक्ट
GitHub की आधिकारिक रिलीज़ पेज से Wave का नवीनतम संस्करण डाउनलोड करें।

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM सेटअप (Pre Beta संस्करण)
Wave के Pre Beta संस्करण में अस्थायी रूप से LLVM का उपयोग किया जाता है, इसलिए LLVM को निम्नलिखित कमांड से इंस्टॉल करें:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### स्थापना की जांच
यह सुनिश्चित करने के लिए कि स्थापना पूरी हो चुकी है, टर्मिनल में निम्नलिखित कमांड दर्ज करें:

```bash
wave --version
```

यदि संस्करण जानकारी प्रदर्शित होती है, तो स्थापना सफलतापूर्वक पूरी हो गई है।