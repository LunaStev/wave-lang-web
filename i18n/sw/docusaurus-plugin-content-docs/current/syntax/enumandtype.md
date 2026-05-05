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
aina ya MyInt = i32
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
aina ya Ukubwa = i64;
aina ya Kiashiria = u32;

fanya kuongeza(a: Ukubwa, b: Ukubwa) -> Ukubwa {
    rudisha a + b;
}
```

---

### Usawa wa Aina

```wave
aina ya A = i32;
aina ya B = A;

fanya f(x: i32) -> i32 { rudisha x; }

fanya kuu() {
    var v: B = 10;
    f(v); // SAWA
}
```

aina si aina mpya bali ni jina tu tofauti kwa aina.

---

## Aina ya Orodha (enum)

### Muhtasari

Orodha ya Wave ina msingi wa nambari kamili.
Kila aina ya orodha lazima iwe na aina ya uwakilishi.

```wave
orodha ShaderUniformType -> i32 {
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
- `u8`, `u16`, `u32`, `u64`
- `aina kifupi` ya aina husika

```wave
aina MyInt = i32;

enum Mfano -> MyInt {
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
orodha E -> i32 {
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
fanya f(t: Aina ya ShaderUniform) -> i32 {
    rudisha t;
}
```

---

### Tumika kama Thabiti

mseto wa orodha ni thabiti ya wakati wa kutambaza.

```wave
thabiti X: i32 = B;
thabiti Y: Aina ya ShaderUniform = D;
```

---

## Mfano Halisi

```wave
aina MyInt = i32;

enum Aina ya ShaderUniform -> MyInt {
    A = 0,
    B,
    C = 10,
    D
}

thabiti X: MyInt = 123;
thabiti Y: MyInt = B;
thabiti Z: Aina ya ShaderUniform = D;

fanya f(t: Aina ya ShaderUniform) -> MyInt {
    rudisha t;
}

fanya g(v: MyInt) -> MyInt {
    rudisha v;
}

fanya kuu() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```