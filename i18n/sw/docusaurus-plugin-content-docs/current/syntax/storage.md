---
sidebar_position: 12
---

# Kanuni za Uhifadhi wa Amri/Eneo

Wave inagawanya uhifadhi na mabadiliko katika viwango vya ufunguo kwa usahihi.

## Muhtasari

- Mbadiliko wa Amri: `const`
- Kigezo cha uhifadhi wa kimataifa: `static`
- Kigezo cha eneo: `var`, `let`, `let mut`

Hivyo, **katika kiwango cha juu, tangaza `const` na `static` pekee** na
**katika eneo la ndani ya kazi/block, tangaza aina za `var` na `let` pekee**.

## Kigezo cha kimataifa cha `const`

`const` inachukuliwa kama kigezo cha thamani inayotambulika wakati wa kuunganisha na haiwezi kupewa thamani tena.

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## Kigezo cha uhifadhi wa kimataifa: `static`

`static` ni kigezo kinachohifadhiwa kimataifa.
Inaweza kupewa thamani tena, na kama haijapewa thamani ya awali, inatambulika na thamani ya 0 kwa aina hiyo.

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## Kigezo cha eneo: `var` / `let`

Tumia maneno muhimu ya kigezo cha eneo pekee ndani ya kazi au block.

```wave
fun main() -> i32 {
    var x: i32 = 10;
    let y: i32 = 20;
    let mut z: i32 = 30;

    x = x + 1;
    z = z + 1;
    return x + y + z;
}
```

## Mambo ya kuzingatia

- `var`, `let` haviwezi kutumika katika kiwango cha juu.
- `const`, `static` haviwezi kutumika ndani ya kazi/block.
- `let` haitabadilisha na haiwezi kupewa thamani tena.
