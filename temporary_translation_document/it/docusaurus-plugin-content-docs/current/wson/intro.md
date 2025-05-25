---
sidebar_position: 2
---

# Sintassi

## 1. Struttura di base
* Il contenuto del file inizia e termina con un oggetto racchiuso tra parentesi graffe `{}`.

* Un oggetto è composto da coppie chiave-valore, dove la chiave è il nome dell'attributo e il valore è il valore dell'attributo.

* La chiave e il valore sono separati da due punti (`:`) o da un segno di uguale (`=`).

## 2. Commenti
* I commenti iniziano con `//` o `#` e sono scritti su una sola riga.

* I commenti si applicano fino alla fine della riga.

* I commenti multilinea non sono supportati. Se è necessario scrivere commenti su più righe, è necessario aggiungere `//` o `#` all'inizio di ogni riga.

## 3. Oggetto
* Un oggetto è racchiuso tra parentesi graffe `{}` e contiene coppie chiave-valore.

* È possibile utilizzare sia `:` che `=` tra la chiave e il valore. Entrambi i simboli sono intercambiabili.

* Ogni attributo è separato da una virgola (`,`).

* È possibile annidare altri oggetti all'interno di un oggetto.

Esempio:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Array
* Un array è racchiuso tra parentesi quadre `[]`, e gli elementi sono separati da virgole (`,`).

* Gli elementi di un array possono essere oggetti, stringhe, numeri o altri tipi di dati.

* In WSON, gli array possono essere inclusi all'interno degli oggetti e gli array possono contenere altri array o oggetti.

Esempio:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Coppie chiave-valore
* I nomi degli attributi sono stringhe e sono posti direttamente dopo `:` o `=`, senza spazi.

* Il valore può essere di tipi come stringhe, numeri, booleani, oggetti o array.

* Le stringhe sono racchiuse tra virgolette doppie (`"`).

* I numeri sono scritti senza virgolette e possono essere interi o in virgola mobile.

Esempio:

```
name: "John Doe"
age = 25
```

## 6. Tipi di dati
* Stringa (String): Testo racchiuso tra virgolette doppie (`"`).

```
"hello world"
```

- Numero (Number): Valore intero o in virgola mobile.

```
42
3.14
```

- Booleano (Boolean): Il valore è `true` o `false`.

```
is_active = true
```

* Oggetto (Object): Un insieme di coppie chiave-valore racchiuso tra `{}`.
* Array: Una lista di elementi racchiusa tra `[]`.

## 7. Spiegazione dell'esempio

```ws
{
    // Informazioni sul codice di stato e sul messaggio
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Età dell'utente
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