---
sidebar_position: 9
---

# FFI

Hati hii inaelezea kanuni za FFI (Kiolesura cha Kazi za Nje) kwa ajili ya kutumia kazi zilizotekelezwa nje katika lugha ya Wave.
Kupitia FFI, programu ya Wave inaweza kuingiliana moja kwa moja na maktaba asilia yaliyoandikwa katika lugha tofauti.

---

## Muhtasari

FFI ya Wave hufanya kazi kwa msingi wa matamko.
Kazi za nje hazitekelezwi katika msimbo wa Wave, lakini huorodhesha ni ABI gani (Kiolesura cha Binary cha Programu) kazi hiyo ifuate.
Utekelezaji halisi unatekelezwa katika kiwango cha kiungo kutoka kwenye maktaba za nje.

FFI hutangaza uwepo wa kazi wakati wa utunzi, na katika awamu ya kizazi cha faili za utekelezaji, kiunganishi huamua viungo vya utekelezaji halisi.

---

## Matamko ya nje

Kazi za nje hutangazwa kwa kutumia neno kuu 'extern'.
Kwa sasa, ABI ya Wave inahitaji kutangazwa, na inasaidia **`extern(c)` tu**.

```wave
extern(c) fun function_name(args...) -> return_type;
```

---

## Ufafanuzi wa ABI

Matamko ya 'extern' yanahitaji kutaja ABI.
ABI inayoungwa mkono sasa ni moja tu `c`.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

Matamko kama `extern(rust)` yanaweza kuruhusiwa lakini yanaweza kusababisha hitilafu katika sehemu ya uchanganuzi wa maana.

---

## Taarifa za nje za kiwango cha kazi

Unapotangaza kazi moja ya nje, andika kama ifuatavyo.

```wave
extern(c) fun InitWindow(width: i32, height: i32, title: ptr<u8>);
```

Taarifa hii ina maana kwamba alama ya `InitWindow` inayofuata C ABI ipo kwenye maktaba ya nje.

---

## Taarifa za nje za kiwango cha sehemu

Wakati kuna kazi nyingi za nje zinazotumia ABI sawa, unaweza kuziunganisha pamoja kwa umbo la sehemu na kuzitangaza.

```wave
extern(c) {
    fun InitWindow(width: i32, height: i32, title: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

Taarifa za sehemu ni sawa kabisa kimantiki na taarifa za kiwango cha kazi na ni sarufi tu kwa ajili ya usomaji bora na uundaji.

---

## Uteuzi wa jina la alama

Katika baadhi ya ABI, jina la kazi ya Wave linaweza kuwa tofauti na jina halisi la alama ya linker.
Katika kesi hii, unaweza kubainisha jina halisi la alama ambalo kazi ya nje itaunganishwa nalo kwa maandishi.

### Uainishaji wa alama za kiwango cha kazi

```wave
extern(c, "puts")
fun rust_func(i32);
```

Tamko hili linaelekeza kutumia `rust_func` kama kiungo cha ndani wakati `puts` inaitwa.

---

### Uainishaji wa alama za kiwango cha sehemu

Katika matangazo ya kiwango cha sehemu, unaweza kubainisha jina la alama kando ya kila jina la kazi.

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
}
```

---

## Aina ya pointeri

Pointeri huwasilishwa kama `ptr<T>`.

```wave
ptr<u8>
ptr<MyStruct>
```

`ptr<T>` inalingana moja kwa moja na pointer ya lugha za nje, na umiliki wa kumbukumbu au umri wa matumizi hauwolfiwi na Wave.

---

## Matumizi ya miundo

Miundo inaweza kutumika kama vigezo vya kazi za nje au kama thamani zinazorejeshwa.

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

Unapotumia miundo katika FFI, utaratibu wa mashamba unafuata mpangilio uliotangazwa na unapanga mpangilio wa kumbukumbu inayotakiwa na ABI.

---

## Wito wa kazi za nje

Kazi zilizotangazwa kama `extern` huitwa kama kazi za kawaida.

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

Hakuna tofauti za kisarufi wakati wa kuita, na mikataba ya wito na unganisho la alama hufanywa kabisa na ABI na linker.

---

## Kiungo

Utekelezaji halisi wa kazi ya nje hutolewa kutoka kwa maktaba ya moja kwa moja kwenye viungo.
Kifurushi cha Wave huzalisha faili ya kitu iliyo na miito ya kazi za nje, ikitatua utegemezi kupitia maktaba maalum.

Njia ya kufafanua maktaba hupitishwa kupitia zana za ujenzi na chaguo za CLI.

---

## Masharti ya vizuizi

Mwendo hautoa huduma zifuatazo.

- Kitambuzi cha kazi
- Kazi ya callback
- Usimamizi wa kumbukumbu otomatiki
- Muunganiko wa utunzaji wa istisna kati ya lugha

Huduma hizi zinaweza kutenganishwa katika toleo lijalo.
