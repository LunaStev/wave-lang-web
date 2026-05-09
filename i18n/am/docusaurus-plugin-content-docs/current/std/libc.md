---
sidebar_position: 11
---

# std :: libc አጠቃቀም (የተኳኋኝነት ንብርብር)

`std::libc` ከC ቤተ-መጽሐፍት ጋር በቀጥታ ሲገናኝ ጥቅም ላይ የሚውል አማራጭ ንብርብር ነው።

## መቼ መጠቀም እንዳለበት

- ያለውን የC ቤተ-መጽሐፍት ምልክት እንደዚው መደወል ሲያስፈልግ
- ቀስ በቀስ በስደት ወቅት Wave እና C ኮዶችን አንድ ላይ ሲጠቀሙ

በአጠቃላይ Wave ኮድ መጀመሪያ `std::sys`/`std::*` ይጠቀሙ።

## የማስመጣት ምሳሌ

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1) የስቲዲዮ ጥሪ

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

## 3) ሶኬት C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## የቀረበ ሞጁል

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
