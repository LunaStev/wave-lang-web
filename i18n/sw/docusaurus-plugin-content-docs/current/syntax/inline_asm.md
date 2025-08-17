---
sidebar_position: 7
---

# Mkusanyiko wa Kwenye Mstari

## Utangulizi

Hati hii inashughulikia mkusanyiko wa kwenye mstari wa lugha ya Wave.
Mkusanyiko wa kwenye mstari ni mojawapo ya vipengele vinavyotolewa na Wave, ukitoa sarufi ya kipekee inayoruhusu udhibiti wa moja kwa moja wa vifaa vya kiwango cha chini huku ikihifadhi urahisi wa lugha za kiwango cha juu.

Kwa maneno mengine, inaruhusu urejelezaji wa rejista, ufikiaji wa moja kwa moja wa kumbukumbu, na utekelezaji wa maagizo maalum ambayo ni magumu kuwasilisha na msimbo wa kawaida wa Wave, na hutumika wakati utumiaji wa utendaji au kazi zinazoegemea vifaa zinahitajika.

---

## Sarufi ya Msingi

```wave
pta {
    "Maagizo ya mkusanyiko"          // Msimbo wa kweli wa mkusanyiko (agizo moja kwa kila mstari)
    ...
    katika("rejista") thamani          // Ulinganifu wa rejista ya uingizaji
    nje("rejista") kutofautisha       // Ulinganifu wa rejista ya utoaji
}
```

### Vipengele vya Sarufi

1. Maagizo ya Mkusanyiko
    - Yameandikwa kwa umbo la kamba ya `"..."`, maagizo ya mkusanyiko wa kiwango cha chini yanayotawala CPU halisi.
    - Inaruhusu maandishi ya mistari mingi, na agizo moja tu huandikwa kwa kila mstari.
    - Mfano:
           ```wave
           "hamisha rax, 1"
           "kiitisha mfumo"
           ```

2. `in("rejista") thamani`
    - Inapakia thamani ya kutofautisha (au usemi) katika rejista maalum.
    - Mfano:
           ```wave
           in("rdi") s
           ```
        -> Inajaza thamani ya kutofautisha `s` katika `rdi`, rejista ya kwanza ya kiitisho cha mfumo kulingana na mkataba wa ngamizi x86-64.

3. `out("rejista") kutofautisha`
    - Inaondoka na kuleta thamani kwenye rejista maalum kwa kutofautisha kwa Wave.
    - Mfano:
           ```wave
           out("rax") ret
           ```
        -> Inawakilisha thamani ya rejista `rax` ya thamani rudishwa ya `syscall` kwa kutofautisha `ret`.

---

## Mfano Rahisi

```wave
fun main() {
    var msg_ptr: ptr<i8> = "Habari kutoka kwa syscall!\n";
    var ret_val: i64;

    asm {
        "hamisha rax, 1"
        "kiitisha mfumo"
        in("rdi") 1
        in("rsi") msg_ptr
        in("rdx") 20
        out("rax") ret_val
    }
}
```

---

## Tahadhari

- Mkusanyiko wa kwenye mstari hukwepa utulivu wa aina za Wave, hivyo matumizi mabaya ya lugha yanaweza kusababisha programu kufunga kwa kipupwe au utendakazi usioeleweka.
- Ulinganifu wa `in`, `out` unathibitishwa wakati wa kukusanya, lakini uhalali wa maagizo wenyewe hauhakikishiwi.
