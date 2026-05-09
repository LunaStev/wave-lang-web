---
sidebar_position: 11
---

# std::libc వినియోగం (అనుకూలత పొర)

`std::libc` అనేది C లైబ్రరీతో నేరుగా ఇంటర్‌ఫేస్ చేస్తున్నప్పుడు ఉపయోగించే ఐచ్ఛిక పొర.

## ఎప్పుడు ఉపయోగించాలి

- మీరు ఇప్పటికే ఉన్న C లైబ్రరీ చిహ్నాన్ని అలాగే కాల్ చేయవలసి వచ్చినప్పుడు
- క్రమంగా మైగ్రేషన్ సమయంలో Wave మరియు C కోడ్‌లను కలిపి ఉపయోగిస్తున్నప్పుడు

సాధారణంగా Wave కోడ్‌లో, ముందుగా `std::sys`/`std::*`ని ఉపయోగించండి.

## దిగుమతి ఉదాహరణ

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1) stdio కాల్

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
}
```

## 2) malloc/free

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

## 3) సాకెట్ C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## మాడ్యూల్ అందించబడింది

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
