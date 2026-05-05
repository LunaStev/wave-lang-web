---
sidebar_position: 7
---

# Mkusanyiko wa Kwenye Mstari

## Utangulizi

Kusanyiko la moja kwa moja la Wave ni `asm { ... }` imeandikwa kama block.
Ndani ya msimbo wa Wave, unaweza kudhibiti kwa usahihi rejista, kumbukumbu, na njia za kuita mfumo.

Madhumuni yanayoungwa mkono sasa:

- Linux `x86_64`
- Linux `aarch64`
- macOS (Darwin) `arm64`
- panga peke yake `x86_64`
- panga peke yake `aarch64`
- panga peke yake `riscv64`

Windows na malengo ya 32-bit bado hayatumiki.

---

## Umbo la msingi

`asm` inaweza kutumika kama **kauli(statement)** au **maneno(expression)**.

```wave
asm {
    "maelezo"
    in("kizuizi_au_reg") thamani
    out("kizuizi_au_reg") lengo
    clobber("kipengele")
}
```

Vipengele:

- Mstari wa herufi: Amri halisi ya mchakato
- `in(...)`: operandi ya pembejeo
- `out(...)`: operandi ya kutoka
- `clobber(...)`: rejista/ hali/ kidokezo cha kumbukumbu kinachoharibika

---

## `asm` tamko (Statement)

Hutumia sentensi ya kawaida ikiwa hakuna thamani ya kurudisha.

```wave
var ret: i64 = 0;
asm {
    "mov rax, 1"
    "syscall"
    in("rdi") 1
    in("rsi") msg_ptr
    in("rdx") 20
    out("rax") ret
}
```

`out(...)` inaweza kuwa na vipengele vingi.

---

## `asm` usemi (Expression)

Inaweza kutumika kama usemi unaotengeneza thamani moja kwa moja.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

Tahadhari:

- `asm` usemi unaruhusu **kwa hakika `out(...)` 1 pekee**.

---

## `in(...)` / `out(...)` vikwazo vya usemi

Kamba ya `in("...")`, `out("...")` ni moja kati ya yafuatayo.

1. Rejista maalum

- Mfano: `"rax"`, `"rdi"`, `"x0"`, `"w1"`, `"a0"`, `"t0"`, `"x10"`

2. Darasa la kizuizi (constraint class)

- Mfano: `"r"`, `"m"`, `"rm"`

Mfano:

```wave
in("r") &buf
out("rax") ret
```

Lengo la pato (`out(...) target`) inashauriwa kuwa na mifumo ifuatayo kulingana na utekelezaji wa sasa.

- Kigeu: `out("rax") ret`
- Kurejelea upya pointeri: `out("rax") deref p`

---

## `uchafuzi(...)`

`uchafuzi(...)` unaweza kupokea vitu kadhaa kwa wakati mmoja, na inaweza kuandikwa mara kadhaa.

```wave
asm {
 "xor rax, rax"
 uchafuzi("rax")
 uchafuzi("rcx", "rdx")
 uchafuzi("kumbukumbu")
}
```

Vitu kuu:

- Viandikisha: `"rax"`, `"x0"` nk.
- Maalum: `"kumbukumbu"`, `"cc"`(uratibu wa ndani usio wa kawaida)

Mkutanisha huongeza uchafuzi msingi kiotomatiki katika hali salama ya kihafidhina.
(`kumbukumbu`, bendera/cc nk; Kwenye RISC-V freestanding, hasa `kumbukumbu`)

---

## Vishikizi vya nafasi za operandi (`$0`, `$1`, ...)

Katika mistari ya maagizo, tumia `$N` kurejelea kiasi cha uingizaji.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

Marejeo:

- Hata ukiandika `%0` mtindo wa kazi ya ndani, inabadilishwa na `$0` katika mtindo wa ndani.

---

## Maeneo yanayoungwa mkono sasa ya uingizaji wa vitengo

Thamani za `in(...)` zinasaidiwa kwa fomu zifuatazo.

- Mtambulishaji wa kigezo
- Nambari iliyowekwa
- Maandiko halisi ya Kamba ya Herufi
- `&kitambulisho`
- `fungua kitambulisho`
- Tarakimu hasi za nambari kamili/kondoo za maandiko halisi

Nakala tata inaweza kuwa na vizuizi, kwa hivyo inashauriwa kutumia mduara wa muda inapohitajika.

---

## Tahadhari

Mkota ulionganishwa moja kwa moja unapuuza sehemu ya ulinzi wa mfumo wa aina.
Uwekaji wa usajili mbaya, mivutano ya migogoro, au uhaba wa kuhifadhi inaweza kusababisha kizazi cha kanuni kibaya au utendaji usiofaa wakati wa uendeshaji.

Mapendekezo:

- Thibitisha sheria za ABI za msingi na rejea kwanza
- Dhibiti kwa wazi usajili wa pembejeo/pato na kuhifadhi
- Weka wazi `clobber("kumbukumbu")` unaposhughulikia moja kwa moja kumbukumbu
