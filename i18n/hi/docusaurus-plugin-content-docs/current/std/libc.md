---
sidebar_position: 11
---

# std::libc का उपयोग (संगत परत)

`std::libc` एक वैकल्पिक परत है जिसका उपयोग तभी किया जाता है जब सी लाइब्रेरी के साथ सीधे जोड़ना हो।

## कब उपयोग करें

- जब मौजूदा C लाइब्रेरी प्रतीकों को उसी तरह से कॉल करना हो
- तरंग कोड के साथ सी कोड का उत्तरोत्तर प्रवासन के दौरान उपयोग करें

सामान्य तरंग कोड में `std::sys`/`std::*` को प्राथमिकता दें।

## आयात उदाहरण

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. stdio कॉल

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
}
```

## 2. malloc/मुक्त करें

```wave
fun main() {
    var p: ptr<i8> = malloc(128);
    if (p == null) {
        return;
    }

    memset(p, 0, 128);
    free(p);
}
```

## 3. सॉकेट C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## प्रदान किए गए मॉड्यूल

- `std::libc::errno`
- `std::libc::string`
- `std::libc::stdio`
- `std::libc::stdlib`
- `std::libc::unistd`
- `std::libc::time`
- `std::libc::socket`
- `std::libc::netinet`
- `std::libc::arpa`
- `std::libc::poll`
