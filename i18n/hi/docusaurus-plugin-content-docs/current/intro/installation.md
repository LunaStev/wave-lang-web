---
sidebar_position: 1
---

# इंस्टॉलेशन

## Linux पर इंस्टॉल कैसे करें

### डाउनलोड और निकालना (Extract करना)
GitHub के आधिकारिक रिलीज़ पेज से Wave का नवीनतम संस्करण डाउनलोड करें।

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM सेटअप (Pre-Beta संस्करण के अनुसार)
Wave का Pre-Beta संस्करण अस्थायी रूप से LLVM का उपयोग करता है, इसलिए निम्नलिखित कमांड का उपयोग करके LLVM इंस्टॉल करें:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### इंस्टॉलेशन की पुष्टि करें
यह जांचने के लिए कि इंस्टॉलेशन सफल रहा है या नहीं, टर्मिनल में निम्नलिखित कमांड दर्ज करें:

```bash
wavec --version
```

यदि संस्करण की जानकारी दिखाई देती है, तो इंस्टॉलेशन सफलतापूर्वक पूरा हो गया है।