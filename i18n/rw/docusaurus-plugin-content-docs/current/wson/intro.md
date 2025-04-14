---
sidebar_position: 2
---

# Syntaxe

## 1. Imiterere y'ibanze
* Ibyo dosiye irimo bitangira kandi birangirira ku kintu kiri hagati y'utugingo `{}`.

* Ikintu kigizwe n'ibice bibiri: urufunguzo n'agaciro, aho urufunguzo ari izina ry'ikintu, naho agaciro ari agaciro k'icyo kintu.

* Urufunguzo n'agaciro bisobanurwa n'ikimenyetso cy'ikirere (`:`) cyangwa ikimenyetso cy'ubusumbane (`=`).

## 2. Ibitekerezo
* Ibitekerezo bitangira na `//` cyangwa `#`, kandi byandikwa mu murongo umwe.

* Ibitekerezo birakora kugeza ku mpera y'umurongo.

* Ibitekerezo by'urutonde rw'imirongo ntibishyigikiwe. Niba ugomba kwandika ibitekerezo ku mirongo myinshi, ugomba kongeramo `//` cyangwa `#` mu ntangiriro y'umurongo wose.

## 3. Ikintu (Object)
* Ikintu gishyirwa hagati y'utugingo `{}` kandi kigizwe n'ibice bibiri: urufunguzo n'agaciro.

* Ushobora gukoresha ikimenyetso cya : cyangwa = hagati y'urufunguzo n'agaciro. Ibyo bimenyetso byose birashobora gukoreshwa.

* Buri kintu gisobanuwe n'ikimenyetso cya virgo (`,`).

* Ushobora gushyira ibindi bintu mu kintu.

Urugero:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Urutonde (Array)
* Urutonde ruri hagati y'utugingo `[]`, kandi ibice byarwo bisobanuwe n'ikimenyetso cya virgo (`,`).

* Ibice by'urutonde bishobora kuba ibintu, imirongo, imibare cyangwa ibindi bintu.

* Muri WSON, urutonde rushobora kuba ruri mu kintu, kandi urutonde rushobora kubamo ibindi bintu cyangwa urutonde.

Urugero:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Ibice bibiri: Urufunguzo-Agaciro (Key-Value Pair)
* Izina ry'ikintu ni umurongo, kandi rishyirwa mu kiganiro hagati ya `:` cyangwa `=`, nta mwanya.

* Agaciro gashobora kuba umurongo, imibare, ukuri, ikintu, cyangwa urutonde.

* Imirongo izuzuzwa n'ikimenyetso cya virgo ( `"` ).

* Imibare igomba kwandikwa nta virgo, kandi ishobora kuba umubare wuzuye cyangwa umubare wifashishije imikoreshereze ya koma.

Urugero:

```
name: "John Doe"
age = 25
```

## 6. Ubwoko bw'ibintu (Data Types)
Umurongo (String): Umurongo w'amagambo wuzuye n'ikimenyetso cya virgo (`"`).

```
"hello world"
```

- Umubare (Number): Umubare wuzuye cyangwa umubare wifashishije imikoreshereze ya koma.

```
42
3.14
```

- Ukuri (Boolean): Agaciro ni `true` cyangwa `false`.

```
is_active = true
```

* Ikintu (Object): Icyo kintu kiri hagati y'utugingo `{}`.

* Urutonde (Array): Icyo kintu kiri hagati y'utugingo `[]`.

## 7. Gusobanura urugero

```ws
{
    // Ibyerekeye ku kodo n'ubutumwa
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Imyaka y'umukoresha
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