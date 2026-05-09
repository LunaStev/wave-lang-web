---
sidebar_position: 2
---

# Sarufi

## 1. Muundo wa Msingi

- Yaliyomo ya faili huanza na kuishia na kitu (object) kilicho ndani ya mabano ya `{}`.

- Object huundwa na jozi za jina la mali (key) na thamani (value).

- Majina ya mali na thamani hutenganishwa na koloni (`:`) au alama ya usawa (`=`).

## 2. Maelezo ya Mabano

- Maoni huanza na `//` au `#`, na huandikwa katika kiwango cha mstari mmoja.

- Maoni yanatumika hadi mwisho wa mstari huo.

- Haiungi mkono maoni ya mistari mingi, na ikiwa maoni yanahitaji mistari mingi, lazima uongeze `//` au `#` kwenye kila mstari.

## 3. Kitu (Object)

- Object imezungukwa na `{}` na inajumuisha jozi za funguo-thamani.

- Ishara ya `:` au `=` inaweza kutumika kati ya funguo na thamani. Ishara hizo mbili zinaweza kutumiwa kwa zamu.

- Kila mali hutenganishwa na koma (`,`).

- Unaweza kutumia object nyingine kwa kuzishumikia ndani ya object nyingine.

Mfano:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Kiwango (Array)

- Safu zimezungukwa na mabano `[]`, na vipengele vinatenganishwa kwa koma (`,`).

- Vipengele vya safu vinaweza kuwa aina mbalimbali za data kama vile vitu, maandishi, na namba.

- Katika WSON, safu inaweza kujumuishwa ndani ya kitu na safu nyingine au vitu vinaweza kuwa ndani ya safu.

Mfano:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Panda ya Kifunguo-Thamani

- Majina ya vigezo yanajumuishwa na maandishi, na thamani huwekwa bila nafasi baada ya `:` au `=`.

- Aina za thamani ni pamoja na maandishi, namba, boolean, vitu, na safu.

- Maandishi yamezungukwa na alama za nukuu `“`.

- Namba zinatumika bila alama za nukuu, na inaweza kuwa namba kamili au desimali.

Mfano:

```
name: "John Doe"
age = 25
```

## 6. Aina za Takwimu

- Maandishi(String): Maandishi yaliyofungwa ndani ya alama za nukuu `"`.

```
"hello world"
```

- Namba(Number): Thamani ya nambari kamili au desimali.

```
42
3.14
```

- Boolean: Inatumia thamani za `true` au `false`.

```
is_active = true
```

- Kitu(Object): Panda ya Kifunguo-Thamani iliyofungwa ndani ya mabano `{}`.
- Safu(Array): Orodha ya vipengele vilivyofungwa ndani ya mabano `[]`.

## 7. Maelezo ya Mfano

```ws
{
    // Msimbo wa hali na habari ya ujumbe
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # umri wa mtumiaji
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```
