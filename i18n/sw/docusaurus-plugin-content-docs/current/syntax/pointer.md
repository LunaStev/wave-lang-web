---
sidebar_position: 6
---

# Kielekezi

## Mfano wa Aina ya Kumbukumbu Huria ya Wave

Muundo wa pointer wa Wave unategemea **Mfano wa Aina ya Kumbukumbu Huria ya Wave**.
Mfano huu unalenga kufafanua pointers na safu kama **aina za kumbukumbu zilizo wazi katika kiwango cha lugha**, badala ya ujanja wa kisarufi au utando wa maktaba.

Kulingana na muundo huu, ndani ya Wave, pointer inaonyeshwa kama aina ya `ptr<T>`, na hii inaonyesha wazi aina inayomaanisha anuani ya kumbukumbu inayohifadhi thamani maalumu ya aina `T`.
Njia hii inachukua pointers kama sehemu ya mfumo wa aina badala ya waendeshaji au sarufi ya tamko,
ikiruhusu muundo wa kumbukumbu kuwakilishwa kwa njia ya angavu zaidi na thabiti.

---

Katika Wave, pointer ni aina wazi ya `ptr<T>`.
Upatikanaji wa anwani unatumia `&`, na rejeleo la kinyume linatumia `deref`.

## Taarifa na Uanzilishaji

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

Aina za pointer zinaweza kutundikwa.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## Kurejelea

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## Sheria ya `null` halisi

`null` ni **liteta rasmi**. Sio kitambulisho na haiwezi kutumiwa kama jina la kigezo.

Sheria ya msingi:

- `null` inaweza tu kupewa kwa shabaha ya `ptr<T>`.
- Haiwezi kutolewa kwa aina za zisizo kuwa za pointer kama `i32`, `bool`, `array<...>`.
- Haiwezekani kuanzisha pointer kutumia herufi za nambari (`0`, `123`, `-1`, nk). Tumia `null` wazi.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // ERROR
// var b: bool = null; // ERROR
```

## Hesabu ya Pointer

Wave inaunga mkono hesabu zifuatazo za pointer.

- `ptr + int`: Pointer ya GEP mbele
- `int + ptr`: Kitendo sawa
- `ptr - int`: Pointer ya GEP nyuma
- `ptr - ptr`: Hesabu ya tofauti ya byte ya `i64`

Kidokezo:

- `ptr<T> +/- n` inahama kwa misingi ya ukubwa wa `T` (`sizeof(T)`).
- Hii inamaanisha `ptr<i32> + 3` inahama kwa `+12` kutegemea bayti.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (byte diff)
```

## Ulinganisho wa Pointer

Pointers zinaweza kutumiwa kulinganisha.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## Uhusiano na safu

Safu za pointer:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

Pointer ya safu:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## Kumbuka ya Usalama

Hivi sasa, Wave si mfano wa usalama wa pointer wa msingi wa umiliki/maisha kama Rust.
Kwa hivyo, hairuhusu kiotomati urejelezaji wa `null`. Inashauriwa kutumia njia ya kuingiza cheki ya `null` kabla ya `deref`.
