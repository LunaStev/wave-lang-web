---
sidebar_position: 1
---

# መደበኛ ቤተ መጻሕፍት (std)

ይህ ክፍል የWave መደበኛ ቤተ-መጽሐፍትን ተግባራዊ አጠቃቀም ይገልጻል።

## ሞጁል

- [buffer](./buffer)
- [env](./env)
- [math](./math)
- [mem](./mem)
- [net](./net)
- [path](./path)
- [string](./string)
- [time](./time)
- [sys](./sys)
- [libc](./libc)

## የአጠቃቀም መርሆዎች

- የከፍተኛ ደረጃ ኮድ `std::*` ይጠቀማል።
- የOS ጥገኛ ተግባራት ከ`std::sys::*` ጀርባ ተደብቀዋል።
- የC ተኳኋኝነት ሲያስፈልግ ብቻ `std::libc` ይጠቀሙ።

## ስምምነቶችን አያያዝ ላይ ስህተት

ብዙ ተግባራት ይህንን ስምምነት ይከተላሉ-

- `>= 0`: ስኬት
- `< 0`: ውድቀት (`-errno` ወይም ሞጁል-ተኮር የስህተት ኮድ)

ምሳሌ፡-

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // አያያዝ ላይ ስህተት
        return;
    }

    // ጥሬው NUL የተቋረጠ ሕብረቁምፊ ይዟል
}
```
