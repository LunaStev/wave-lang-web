---
sidebar_position: 11
---

# Jinsi ya kutumia std::libc (safu ya utangamano)

`std::libc` ni safu ya hiari inayotumiwa wakati wa kuingiliana moja kwa moja na maktaba za C.

## Wakati wa kutumia

- Wakati ni lazima kuita alama zote katika maktaba za C zinazojulikana
- Wakati wa kutumia msimbo wa Wave na C pamoja katika uhamaji wa hatua kwa hatua

Kwa msimbo wa kawaida wa Wave, tumia `std::sys`/`std::*` kwanza.

## Mfano wa Ingizo

```wave
ingiza("std::libc::stdio");
ingiza("std::libc::stdlib");
ingiza("std::libc::string");
```

## 1. Kuitwa kwa stdio

```wave
fun main() {
    weka("hello kutoka libc" kama ptr<i8>);
}
```

## 2. malloc/free

```wave
fun main() {
    var p: ptr<i8> = malloc(128);
    ikiwa (p == null) {
        return;
    }

    memset(p, 0, 128);
    huria(p);
}
```

## 3. Soketi C ABI

```wave
ingiza("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    ikiwa (fd >= 0) {
        funga(fd, SHUT_RDWR);
    }
}
```

## Moduli zinazotolewa

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
