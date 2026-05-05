---
sidebar_position: 5
---

# Wendeshaji

Hati hii inatoa muhtasari wa waendeshaji wanaoweza kutumika kulingana na kiwango cha kibalili cha sasa.

## Hesabu

| Wendeshaji | Maelezo    |
| ---------- | ---------- |
| `+`        | Penambahan |
| `-`        | Utoaji     |
| `*`        | Kuzidisha  |
| `/`        | Mgawanyiko |
| `%`        | Mabaki     |

## Kulinganisha

| Wendeshaji | Maelezo       |
| ---------- | ------------- |
| `==`       | sawa          |
| `!=`       | tofauti       |
| `<`        | ndogo         |
| `<=`       | ndogo au sawa |
| `>`        | kubwa         |
| `>=`       | kubwa au sawa |

## Mantiki

| Wendeshaji | Maelezo     |
| ---------- | ----------- |
| `&&`       | Mantiki AND |
| \\`\\   | Mantiki OR  |
| `!`        | Mantiki NOT |

## Kidogo

| Wendeshaji | Maelezo         |
| ---------- | --------------- |
| `&`        | Biti AND        |
| \\`\\   | Biti OR         |
| `^`        | Biti XOR        |
| `~`        | Biti SIO        |
| `<<`       | Hamisha kushoto |
| `>>`       | Hamisha kulia   |

## Ugawaji

| Wendeshaji | Maelezo                    |
| ---------- | -------------------------- |
| `=`        | Mgawaji wa Kawaida         |
| `+=`       | Mgawaji Baada ya Kitu      |
| `-=`       | Mgawaji Baada ya Kugawa    |
| `*=`       | Mgawaji Baada ya Kuzidisha |
| `/=`       | Mgawaji Baada ya Kugawa    |
| `%=`       | Mgawaji Baada ya Mabaki    |

## Kiwango / Pointer / Cast

| Waendeshaji/Neno kuu | Maelezo                             |
| -------------------- | ----------------------------------- |
| `++`, `--`           | Ongezeko/Kupungua Kabla ya/baada ya |
| `&x`                 | Upatikanaji wa Anwani               |
| `deref p`            | Rejeleo la Kinyume la Pointer       |
| `expr kama T`        | Cast wazi                           |

## Shughuli za pointer

| Maneno                     | Matokeo                                    |
| -------------------------- | ------------------------------------------ |
| `ptr<T> + int`             | `ptr<T>` (GEP harakati) |
| `int + ptr<T>`             | `ptr<T>` (GEP harakati) |
| `ptr<T> - int`             | `ptr<T>` (GEP harakati) |
| `ptr<T> - ptr<T>`          | `i64` (tofauti ya byte) |
| `ptr == ptr`, `ptr != ptr` | Ulinganisho wa pointer                     |

## Watumishi au Vitu Visivyotengenezwa

Kuna vitu ambavyo vinapatikana kama tumbo la kisarufi lakini havikubaliwi chini ya miundo ya utekelezaji wa sasa.
Mfano: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
