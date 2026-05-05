---
sidebar_position: 2
---

# Jinsi ya kutumia std::buffer

`std::buffer` inatoa buffer ya byte inayobadilika na buffer ya generali.

## Ingiza

```wave
ingiza("std::buffer::types");
ingiza("std::buffer::alloc");
ingiza("std::buffer::read");
ingiza("std::buffer::write");
```

## 1. Buffer ya Byte (`Buffer`)

### Uundaji/Uongezaji/Hariri

```wave
furaha kuu() {
    var buf: Buffer = buffer_new(128);

    buffer_append_str(&buf, "GET /health\n");
    buffer_push(&buf, 0);

    var kwanza: u8 = buffer_at(buf, 0);
    var sawa: bool = buffer_set(&buf, 0, 80); // 'P'

    buffer_free(&buf);
}
```

### Kazi kuu

```wave
furaha buffer_new(uwezo: i64) -> Buffer
furaha buffer_reserve(buf: ptr<Buffer>, inayohitajika: i64) -> i64
furaha buffer_push(buf: ptr<Buffer>, thamani: u8) -> i64
furaha buffer_append(buf: ptr<Buffer>, src: ptr<u8>, ukubwa: i64) -> i64
furaha buffer_append_str(buf: ptr<Buffer>, s: str) -> i64
furaha buffer_at(buf: Buffer, index: i64) -> u8
furaha buffer_set(buf: ptr<Buffer>, index: i64, thamani: u8) -> bool
furaha buffer_free(buf: ptr<Buffer>) -> i64
```

## 2. Generic Buffer (`TypedBuffer<T>`)

Kwa kuwa Wave haina uchambuzi wa aina, unapaswa kueleza vigezo vya aina.

```wave
furaha kuu() {
    var nums: TypedBuffer<i32> = tbuffer_new<i32>(4, 16); // elem_size=4

    tbuffer_push<i32>(&nums, 10);
    tbuffer_push<i32>(&nums, 20);

    var matokeo: i32 = 0;
    var imepata: bool = tbuffer_at<i32>(nums, 1, &matokeo); // matokeo = 20

    tbuffer_free<i32>(&nums);
}
```

### Kazi kuu

```wave
furaha tbuffer_new<T>(elem_size: i64, uwezo wa awali: i64) -> TypedBuffer<T>
furaha tbuffer_reserve<T>(buf: ptr<TypedBuffer<T>>, urefu unaohitajika: i64) -> i64
furaha tbuffer_push<T>(buf: ptr<TypedBuffer<T>>, thamani: T) -> i64
furaha tbuffer_at<T>(buf: TypedBuffer<T>, index: i64, thamani_ya_matapizo: ptr<T>) -> bool
furaha tbuffer_set<T>(buf: ptr<TypedBuffer<T>>, index: i64, thamani: T) -> bool
furaha tbuffer_free<T>(buf: ptr<TypedBuffer<T>>) -> i64
```

Tahadhari:

- `elem_size` ni lazima iwekwe kwa usahihi na anayepiga simu.
- Ufikiaji nje ya mipaka utarejesha `false` au thamani ya msingi (`buffer_at` ni `0`).
