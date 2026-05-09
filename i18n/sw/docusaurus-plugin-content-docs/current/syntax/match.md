---
sidebar_position: 14
---

# Sentensi ya Match

## Utangulizi

Sentensi ya `match` ni sentensi ya kudhibiti inayolinganishwa thamani moja na mifumo mingi na kutekeleza matawi.
Inasaidia kuonyesha nia ya kuweka matawi kwa uwazi zaidi kuliko msururu wa `if / else if`.

Kwa sasa `match` katika Wave ni **statement (sentensi)** na haitoi msaada kwa muktadha wa kueleza unaothaminiwa moja kwa moja kama thamani.
Yaani, `var x = match (...) { ... }` muundo kama huo hauwezi kutumika.

---

## Sarufi ya Msingi

```wave
match (value) {
    pattern1 => {
        // kizuizi cha utekelezaji
    }
    pattern2 => {
        // kizuizi cha utekelezaji
    }
    _ => {
        // kizuizi chaguo-msingi
    }
}
```

Kanuni za sarufi:

- Vichwa vinatumia muundo wa `match (expr)`.
- Kila mkono hutumia muundo `{ ... }`.
- Mwili wa mkono lazima uwe `{ ... }` block.
- Unaweza kutumia mpya tu kati ya mikono au kutumia `,` au `;` kama watenganishi.

---

## Aina za Mifumo

Mifumo mitatu inayoendelea kutumiwa ni kama ifuatavyo.

1. Mfumo wa Nambari Halisi

```wave
0 => { ... }
1 => { ... }
42 => { ... }
```

2. Mfumo wa Kitambulisho

```wave
Off => { ... }
On => { ... }
```

Mfumo wa kitambulisho unatumika kwa thamani zinazotafsiriwa kuwa **nambari za kawaida kama mbadala ya enum**.

3. Mfumo wa Kadi Pori (`_`)

```wave
_ => { ... }
```

Ni mkono wa msingi unaotekelezwa wakati hauna muundo wa kulinganisha.

---

## Aina ya walengwa wa mechi

Kwa sasa kulingana na utekelezaji, thamani zinazotekelezwa katika `match` zinapaswa kuwa ni **nambari za kawaida au enum**.
Mambo kama mistari ya maneno, alama zenye nukta au miundo haiwezi kutumika kama walengwa wa `match`.

---

## Mfano 1: Matawi ya Nambari Halisi

```wave
fun classify_num(v: i32) -> i32 {
    var result: i32 = -1;

    match (v) {
        0 => {
            result = 10;
        }
        1 => {
            result = 20;
        }
        _ => {
            result = 99;
        }
    }

    return result;
}
```

---

## Mfano 2: Matawi ya Enum

```wave
enum Mode -> i32 {
    Off = 0,
    On = 1,
    Unknown = 2
}

fun classify_mode(m: Mode) -> i32 {
    match (m) {
        Off => {
            return 1;
        }
        On => {
            return 2;
        }
        _ => {
            return 3;
        }
    }
}
```

---

## Kanuni za Uendeshaji

- Sawa na msururu wa `switch`, **ni mkono mmoja tu unaolingana utatekelezwa**.
- Hakuna `_` otomatiki.
- Mkono wa `_` unaweza kutumika mara moja tu.
- Kubuniwa kisheria kuweza kutokuwepo kwa mkono wa `_`. (Ikiwa hakuna mkono unaolingana, hakuna mkono unaotekelezwa)

---

## Mambo ya kuzingatia

1. Marufuku Kesi ya Kurudiarudia

- Kupanga tena kesi sawa husababisha kosa la uwanja.

2. Marufuku kurudiarudia kwa `_`

- Huwezi kutangaza mkono `_` zaidi ya mara moja.

3. Mkono Block Lazima

- Baada ya `=>` lazima iwe `{ ... }` inapaswa kutumika.

4. Mifumo lazima iwe thabiti

- Tumia tu mifumo ya kitambulisho ambayo inaweza kutafsiriwa kama thamani za kawaida au nambari ya enum.

---

## Muhtasari

`match` ya Wave ni sentensi ya udhibiti inayofaa kwa matai ya nambari au enum.
Inatumia `=>` + muundo wa block, na unaweza kuunda matawi ya msingi kwa kutumia kadi pori(`_`).

Unapokuwa na kesi nyingi za matawi, ni rahisi kusoma kuliko `if / else if` na inaweza kuonyesha nia kwa uwazi zaidi.
