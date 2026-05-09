---
sidebar_position: 10
---

# Mabadiliko yaliyosarifiwa na kutaja aina ya jina tofauti (type alias)

Wave inasaidia mfumo wa aina ya lugha inayotangamana na C, huku ikihakikisha utulivu wa muingiliano na ABI kupitia jina tofauti la aina (type alias) na mabadiliko ya nambari za bulingano.

---

## Jina tofauti la aina (Type Alias)

### Muhtasari

Neno kuu la aina hutoa jina jipya kwa aina iliyopo.
Hili si jambo la kuunda aina mpya, bali ni jina lingine (alias) lililofanana.

```wave
type MyInt = i32;
```

Katika tamko hili, MyInt inafanana kabisa na i32.

---

### Tabia

- Hakuna kuongeza mzigo wa mzunguko wa muda wa kutekeleza programu
- Inafanana kabisa katika ABI
- Hupo tu wakati wa uundaji wa programu
- Inaruhusu matumizi ya aina ya mwakilishi (repr) wa enum

---

### Mfano wa matumizi

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### Usawa wa Aina

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

aina si aina mpya bali ni jina tu tofauti kwa aina.

---

## Aina ya Orodha (enum)

### Muhtasari

Orodha ya Wave ina msingi wa nambari kamili.
Kila aina ya orodha lazima iwe na aina ya uwakilishi.

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### aina ya uwakilishi

-> i32 inaonyesha jinsi orodha hii inavyowakilishwa kama aina ya nambari kamili.

Aina zinazokubalika za uwakilishi:

- `i8`, `i16`, `i32`, `i64`
- `i8`, `i16`, `i32`, `i64`
- `aina kifupi` ya aina husika

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### Kanuni za Ugawaji wa Thamani

- Tumia thamani iliyobainishwa ikiwa ipo
- Ikiwa haipo, tumia thamani ya awali + 1
- Anza na 0 ikiwa hakuna thamani ya kwanza

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### orodha ni aina ya thamani

orodha ni thamani ya nambari kamili, na inaweza kutumika huru kama kipengele na thamani inayorudi.

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### Tumika kama Thabiti

mseto wa orodha ni thabiti ya wakati wa kutambaza.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## Mfano Halisi

```wave
type MyInt = i32;

enum ShaderUniformType -> MyInt {
    A = 0,
    B,
    C = 10,
    D
}

const X: MyInt = 123;
const Y: MyInt = B;
const Z: ShaderUniformType = D;

fun f(t: ShaderUniformType) -> MyInt {
    return t;
}

fun g(v: MyInt) -> MyInt {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```
