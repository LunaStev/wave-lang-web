---
sidebar_position: 11
---

# std::libc பயன்பாடு (பொருந்தக்கூடிய அடுக்கு)

`std::libc` என்பது C நூலகத்துடன் நேரடியாக இணையும் போது பயன்படுத்தப்படும் ஒரு விருப்ப அடுக்கு ஆகும்.

## எப்போது பயன்படுத்த வேண்டும்

- இருக்கும் C நூலகச் சின்னத்தை அப்படியே அழைக்க வேண்டும்
- படிப்படியான இடம்பெயர்வின் போது Wave மற்றும் C குறியீடுகளை ஒன்றாகப் பயன்படுத்தும் போது

பொதுவாக Wave குறியீட்டில், முதலில் `std::sys`/`std::*` ஐப் பயன்படுத்தவும்.

## இறக்குமதி உதாரணம்

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1) stdio அழைப்பு

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

## 3) சாக்கெட் C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## தொகுதி வழங்கப்பட்டது

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
