---
sidebar_position: 5
---

# Wendeshaji

## Utangulizi

Lugha ya Wave inatoa wendeshaji mbalimbali ili kutekeleza hesabu kati ya vigezo, uamuzi wa mantiki, kulinganisha, na operesheni za biti.

Hati hii inaelezea aina kuu za wendeshaji ambazo zinaweza kutumika katika Wave, inaelezea jinsi kila moja inavyofanya kazi, na inatoa mifano pia.

Wendeshaji zimegawanywa katika makundi yafuatayo:

- Wendeshaji wa hesabu
- Wendeshaji wa kulinganisha
- Wendeshaji wa mantiki
- Wendeshaji wa biti
- Wendeshaji wa usambazaji
- Wendeshaji maalum wengine

---

## Wendeshaji wa hesabu

Wendeshaji wa hesabu hufanya shughuli za msingi za hesabu kwa data ya nambari.

| Wendeshaji | Maelezo              | Mfano (`a = 10`, `b = 3`)                    |
| ---------- | -------------------- | --------------------------------------------------------------- |
| `+`        | Penambahan           | `a + b` → `13`                                                  |
| `-`        | Utoaji               | `a - b` → `7`                                                   |
| `*`        | Kuzidisha            | `a * b` → `30`                                                  |
| `/`        | Mgawanyiko           | `a / b` → `3` (mgawanyiko wa nambari kamili) |
| `%`        | Operesheni ya mabaki | `a % b` → `1`                                                   |

---

## Wendeshaji wa kulinganisha

Wendeshaji wa kulinganisha hurejesha thamani ya `bool` kama matokeo ya kulinganisha maadili mawili.

| Wendeshaji | Maelezo       | Mfano (`a = 10`, `b = 3`) |
| ---------- | ------------- | -------------------------------------------- |
| `==`       | sawa          | `a == b` → `uongo`                           |
| `!=`       | tofauti       | `a != b` → `kweli`                           |
| `<`        | ndogo         | `a < b` → `uongo`                            |
| `>`        | kubwa         | `a > b` → `kweli`                            |
| `<=`       | ndogo au sawa | `a <= 10` → `kweli`                          |
| `>=`       | kubwa au sawa | `a >= b` → `kweli`                           |

---

## Wendeshaji wa mantiki

Wendeshaji wa mantiki hushughulikia mchanganyiko wa kweli/uongo kwa thamani za `bool`.

| Wendeshaji | Jina        | Maelezo                                            | mfano                      |
| ---------- | ----------- | -------------------------------------------------- | -------------------------- |
| `&&`       | Mantiki AND | Ni `kweli` tu wakati thamani zote mbili ni `kweli` | `kweli && uongo` → `uongo` |
| \\`\\   | Mantiki OR  | `kweli` ikiwa hata moja ni `kweli`                 | \`true \\                |
| `!`        | Mantiki NOT | Pindua `kweli` kuwa `uongo`, `uongo` kuwa `kweli`  | `!kweli` → `uongo`         |

---

## Wendeshaji wa biti

Wendeshaji wa biti hubadilisha data ya aina ya nambari kwa vitengo vya biti.

| Wendeshaji | Jina            | Maelezo                           | mfano           |
| ---------- | --------------- | --------------------------------- | --------------- |
| `&`        | Biti AND        | Moja ikiwa biti zote mbili ni 1   | `a & b` → `2`   |
| \\`\\   | Biti OR         | Moja ikiwa hata moja ya biti ni 1 | \`a \\        |
| `^`        | Biti XOR        | Moja ikiwa biti tofauti           | `a ^ b` → `5`   |
| `~`        | Biti SIO        | Geuza biti                        | `~a` → `-7`     |
| `<<`       | Hamisha kushoto | Hamisha biti kushoto              | `a << 1` → `12` |
| `>>`       | Hamisha kulia   | Hamisha biti kulia                | `a >> 1` → `3`  |

---

## Wendeshaji wa usambazaji

Inatumika kuhifadhi thamani kwa kigezo. Katika hali nyingi, inaweza kuunganishwa na wendeshaji wa hesabu ili kufupishwa.

| Wendeshaji | Maelezo                    | Mfano (`a = 5`) |
| ---------- | -------------------------- | ---------------------------------- |
| `=`        | Ugawaji wa Msingi          | `a = 10`                           |
| `+=`       | Ugawaji baada ya Kuongeza  | `a += 2` → `7`                     |
| `-=`       | Ugawaji baada ya Kuondoa   | `a -= 1` → `4`                     |
| `*=`       | Ugawaji baada ya Kuzidisha | `a *= 3` → `15`                    |
| `/=`       | Ugawaji baada ya Kugawa    | `a /= 5` → `1`                     |
| `%=`       | Ugawaji baada ya Mabaki    | `a %= 4` → `1`                     |

---

## Wendeshaji maalum wengine

Wave pia hutoa waendeshaji wenye maana ya kipekee au maalum kama ifuatavyo.

| Wendeshaji | Jina                                                       | Maelezo                                                 | mfano                                           |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------- |
| `??`       | Wendeshaji wa kuunganisha null                             | Tumia thamani ya kulia ikiwa thamani ya kushoto ni null | `a ?? b` → `a ikiwa ni null basi b`             |
| `?:`       | Wendeshaji wa hali (Ternari Wendeshaji) | Chagua thamani kulingana na hali                        | `Sharti ? Thamani ya ukweli : Thamani ya uongo` |
| `ndani`    | Kukagua ikiwa inajumuishwa                                 | Kukagua ikiwa thamani ipo katika mkusanyiko             | `"a" katika orodha`                             |
| `ni`       | Wendeshaji wa kulinganisha aina                            | Kukagua aina ya thamani                                 | `x ni i32`                                      |
| `!&`       | NAND                                                       | Mantiki ya NAND                                         | Wendeshaji wa mantiki ya juu                    |
| \\`!\\  | NOR                                                        | Mantiki ya NOR                                          | Wendeshaji wa mantiki ya juu                    |
| `~^`       | XNOR                                                       | Mantiki ya XNOR                                         | Wendeshaji wa mantiki ya juu                    |

---

## Muhtasari

Wave inatoa wendeshaji mbalimbali kutoka kwa hesabu za kihisabati hadi hukumu za kimantiki, udhibiti wa biti, na tawala za masharti.
Wendeshaji hawa ni zana muhimu kwa kuwasiliana na mabadiliko au kuunda hali na udhibiti wa mtiririko au mahesabu magumu.

Kipaumbele cha kila wendeshaji na mwelekeo wa kuunganisha vinaweza kushughulikiwa katika sehemu za baadaye za "Kipaumbele na mpangilio wa utathmini."