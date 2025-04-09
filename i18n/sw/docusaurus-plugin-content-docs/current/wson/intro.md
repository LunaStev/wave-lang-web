---
sidebar_position: 2
---

# Sintaksia

## 1. Muundo wa Msingi
* Maudhui ya faili huanza na kumalizika na kitu kilichozungukwa na mabano `{}`.

* Kitu kinajumuisha jozi za ufunguo-thamani, ambapo ufunguo ni jina la sifa na thamani ni thamani ya sifa hiyo.

* Ufunguzi na thamani vinatenganishwa kwa kutumia alama ya koloni (`:`) au alama ya usawa (`=`).

## 2. Maoni
* Maoni huanza na `//` au `#` na yanaandikwa kwenye mstari mmoja.

* Maoni yanatumika hadi mwisho wa mstari.

* Maoni ya mistari mingi hayakubaliwi. Ikiwa unahitaji kuandika maoni kwenye mistari mingi, lazima uongeze `//` au `#` mwanzoni mwa kila mstari.

## 3. Kitu (Object)
* Kitu kinazungukwa na mabano `{}` na kina jozi za ufunguo-thamani.

* Unaweza kutumia alama ya : au = kati ya ufunguo na thamani. Alama zote mbili zinaweza kutumika.

* Kila sifa inatenganishwa kwa alama ya koma (`,`).

* Unaweza kuweka vitu vingine ndani ya kitu.

Mfano:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Orodha (Array)
* Orodha inazungukwa na mabano ya mraba `[]`, na vipengele vimezungukwa na alama ya koma (`,`).

* Vipengele vya orodha vinaweza kuwa vitu, herufi, nambari, au aina nyingine za data.

* Katika WSON, orodha inaweza kuwekwa ndani ya kitu, na orodha inaweza kuwa na orodha nyingine au vitu.

Mfano:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Jozi za Ufunguothamani (Key-Value Pair)
* Majina ya sifa ni herufi na yanapelekwa moja kwa moja baada ya `:` au `=`, bila nafasi yoyote.

* Aina ya thamani inaweza kuwa herufi, nambari, booleans, kitu, au orodha.

* Herufi zimezungukwa na mabano ya maneno mawili (`"`).

* Nambari zinaandikwa bila mabano ya maneno na zinaweza kuwa nambari kamili au ya desimali.

Mfano:

```
name: "John Doe"
age = 25
```

## 6. Aina za Data (Data Types)
* Herufi (String): Maneno yaliyozungukwa na mabano ya maneno mawili (`"`).

```
"hello world"
```

- Nambari (Number): Thamani ya nambari kamili au ya desimali.

```
42
3.14
```

- Booleans (Boolean): Thamani ni `true` au `false`.

```
is_active = true
```

* Kitu (Object): Aseti ya jozi za ufunguo-thamani iliyozungukwa na `{}`.

* Orodha (Array): Orodha ya vipengele iliyozungukwa na `[]`.

## 7. Ufafanuzi wa Mfano

```ws
{
    // Habari za msimbo wa hali na ujumbe
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Umri wa mtumiaji
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