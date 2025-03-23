---
sidebar_position: 2
---

# Sintakso

## 1. Bazstrukturo

* La enhavo de la dosiero komencas kaj finas kun objekto inter `{}` krampoj.
* Objekto konsistas el ŝlosil-valoraj paroj, kie la ŝlosilo estas la nomo de la atributo kaj la valoro estas la valoro de la atributo.
* La ŝlosilo kaj la valoro estas apartigitaj per kolono (`:`) aŭ egala signo (`=`).

## 2. Komentoj

* Komentoj komenciĝas per `//` aŭ `#` kaj estas skribitaj sur unu linio.
* Komentoj validas ĝis la fino de la linio.
* Multliniaj komentoj ne estas subtenataj. Se vi bezonas skribi komentojn sur pluraj linioj, vi devas aldoni // aŭ # ĉe la komenco de ĉiu linio.

## 3. Objekto

* Objekto estas enkapsulita en `{}` krampoj kaj enhavas ŝlosil-valorajn parojn.
* Vi povas uzi aŭ `:` aŭ `=` inter la ŝlosilo kaj la valoro. Ambaŭ simboloj estas interŝanĝeblaj.
* Ĉiu atributo estas apartigita per komo (`,`).
* Vi povas nesti aliajn objektojn ene de objekto.

Ekzemplo:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Aranĝo

* Aranĝo estas enkapsulita en `[]` angulaj krampoj, kaj la elementoj estas apartigitaj per komoj (`,`).
* Elementoj de aranĝo povas esti objektoj, ŝnuroj, nombroj aŭ aliaj datotipoj.
* En WSON, aranĝoj povas esti inkluditaj ene de objektoj, kaj aranĝoj ankaŭ povas enhavi aliajn aranĝojn aŭ objektojn.

Ekzemplo:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Ŝlosil-valoraj paroj

* La ŝlosilaj nomoj estas ŝnuroj kaj estas metitaj rekte post `:` aŭ `=`, sen spacoj.
* La valoroj povas esti de tipoj kiel ŝnuroj, nombroj, booleanoj, objektoj aŭ aranĝoj.
* Ŝnuroj estas enkapsulitaj en duobla citilo (`"`).
* Nombroj estas skribitaj sen citiloj kaj povas esti entjeroj aŭ realaj nombroj.

Ekzemplo:

```
name: "John Doe"
age = 25
```

## 6. Datotipoj

- Ŝnuro (String): Teksto enkapsulita en duobla citilo (`"`).

```
"hello world"
```

- Nombro (Number): Entjero aŭ reala nombro.

```
42
3.14
```

- Booleano (Boolean): La valoro estas aŭ `true` aŭ `false`.

```
is_active = true
```

* Objekto (Object): Aro de ŝlosil-valoraj paroj enkapsulitaj en `{}`.
* Aranĝo (Array): Listo de elementoj enkapsulitaj en `[]`.

## 7. Ekzemplo Klarigo

```ws
{
    // Ŝtata kodo kaj mesaĝinformoj
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Aĝo de la uzanto
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