---
sidebar_position: 6
---

# Kielekezi

## Utangulizi

Hati hii inaelezea njia za kutumia kielekezi cha Wave.
Wave ni lugha inayounga mkono uandishi wa programu wa mfumo wa kiwango cha chini kwani inatoa uwezo wa kielekezi kwa udhibiti wazi wa anwani ya kumbukumbu.
Kielekezi ni mabadiliko yanayoonyesha anwani ya kumbukumbu ya aina fulani, ambayo inawezesha kufikia na kubadilisha thamani moja kwa moja.

---

## Tamko la kielekezi

Katika Wave, kielekezi kinatangazwa kwa muundo wa `ptr<aina>`. Kwa mfano, kielekezi cha aina ya namba inaweza kutangazwa kama ifuatavyo:

```wave
var p: ptr<i32>;
```

Tamko hili linaunda kielekezi `p` kinachoonyesha thamani ya aina `i32`.

---

## Uanzishaji wa kielekezi

Kielekezi unaweza kuanzishwa kwa kutumia operator `&` kwenye anwani ya mabadiliko:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

Hapa `&a` inamaanisha anwani ya kumbukumbu ya mabadiliko `a`, na `p` inakuwa kielekezi kinachoonyesha anwani hiyo.

---

## Kielekezi upotovu

Ili kusoma au kubadilisha thamani inayorejelewa na kielekezi, tumia neno kuu `deref`. Hii inaitwa upotovu:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // Matokeo ni 10

deref p = 20;
println("{}", a); // Matokeo ni 20
```

---

## Kielekezi NULL

Katika Wave, kielekezi cha null kinaonyeshwa kwa neno kuu `null`.
Variable ya kielekezi inaweza kuanzishwa na `null`, katika hali hii haisainii kumbukumbu yoyote halali:

```wave
var p: ptr<i32> = null;
```

Ikiwa utatumia upotovu kwenye kielekezi null, mbunifu atatoa kosa.

---

## Vielekezi vingi

Wave inasaidia pointer nyingi. Unaweza kutangaza na kutumia pointer kwa hatua nyingi zinazojumuishwa:

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

---

## Viwango na Pointer

Pointer inaweza kuashiria kipengele cha kiwango au kiwango chenyewe.

### Pointer inayoashiria kipengele cha kiwango

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];

println("deref arr[0] = {}, deref arr[1] = {}", deref arr[0], deref arr[1]); // 10, 20
```

### Pointer inayoashiria kiwango chote

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // Inatoa anwani ya kumbukumbu
```

---

## Usalama na Umiliki

Wave inachukua mfumo wa umiliki na umri sawa na Rust ili kuhakikisha usalama wa kumbukumbu wakati wa kutumia pointer.
Kwa hivyo, inachunguza kwa makini ili kuzuia masuala kama vile pointer isiyo halali, kufuta mara mbili, na pointer inayopepesuka.

```wave
fun main() {
    let x: i32 = 42;
    let p: ptr<i32> = &x;
    
    println("x = {}", deref p);
    
    deref p = 99;
    println("x = {}", x);
}
```

Tokeo:

```text
x = 42
x = 99
```

---

## Hitimisho

Pointer ni mojawapo ya vipengele muhimu vinavyowezesha programu za kiwango cha chini katika Wave.
Inafaa sana kwa ajili ya ukuzaji wa mifumo inayohitaji udhibiti wa moja kwa moja wa kumbukumbu, maktaba za asili, udhibiti wa vifaa, na shukrani kwa muundo wa compilator salama wa Wave, inazuia kwa ufanisi mambo hatarishi ambayo yanaweza kutokea wakati wa matumizi ya pointer.