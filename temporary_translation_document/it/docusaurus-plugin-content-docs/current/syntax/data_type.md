---
sidebar_position: 2
---

# Tipi di Dati

Questo documento descrive i vari tipi di dati forniti dal linguaggio di programmazione Wave.
Il linguaggio di programmazione Wave consente di memorizzare e operare con diversi tipi di dati.
I principali tipi di dati includono numeri interi, numeri in virgola mobile, stringhe e altri tipi fondamentali. Ogni tipo di dato definisce le caratteristiche dei dati stessi e il modo in cui vengono gestiti in memoria.

## Tipo Intero
Il tipo intero viene utilizzato per memorizzare valori interi.
Di default, gli interi vengono dichiarati come `i32` (intero con segno a 32 bit) e `u32` (intero senza segno a 32 bit).
Il linguaggio Wave offre diverse opzioni per impostare l'intervallo dei numeri interi con varie dimensioni.

* `i8` ~ `i1024`: tipo intero con segno, che può essere impostato da 8 bit a 1024 bit.
* `u8` ~ `u1024`: tipo intero senza segno, che può essere impostato da 8 bit a 1024 bit.

Esempio:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Tipo in Virgola Mobile
Il tipo in virgola mobile viene utilizzato per memorizzare valori reali.
Di default, i numeri in virgola mobile vengono dichiarati come `f32`.
Inoltre, è possibile definire con precisione la dimensione dei numeri in virgola mobile attraverso varie opzioni di dimensione.

* `f32` ~ `f1024`: il tipo in virgola mobile può essere impostato da 32 bit a 1024 bit, consentendo calcoli con maggiore precisione.

Esempio:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Tipo Stringa
Il tipo stringa viene utilizzato per gestire i dati di testo.
Le stringhe vengono dichiarate utilizzando la parola chiave `str` e sono generalmente racchiuse tra virgolette (`"`) per definirle.
È possibile assegnare un valore di tipo stringa a una variabile.

Esempio:
```wave
var text :str = "Hello Wave";
```

## Tipo Booleano
Il tipo booleano rappresenta i valori **vero (true)** o **falso (false)**.
Viene principalmente utilizzato nelle istruzioni condizionali e il valore può essere `true` o `false`.

Esempio:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Tipo Carattere
Il tipo carattere viene utilizzato per memorizzare un singolo carattere.
Si dichiara utilizzando la parola chiave `char`, e può contenere un solo carattere.

Esempio:
```wave
var letter :char = 'A';
```

## Tipo Byte
Il tipo byte viene utilizzato per memorizzare dati di **1 byte**.
È particolarmente utile quando si lavora con dati binari. La parola chiave `byte` viene utilizzata per dichiarare questo tipo di variabile.

Esempio:
```wave
var byteData :byte = 0xFF;
```

## Tipo Puntatore
Il tipo puntatore viene utilizzato per fare riferimento agli **indirizzi di memoria**.
Si utilizza la parola chiave `ptr` per dichiarare un puntatore, che memorizza un indirizzo di memoria.

Esempio:
```wave
var ptr :ptr<T> = &someVariable;
```

## Tipo Array
Il tipo array viene utilizzato per memorizzare **molti valori dello stesso tipo di dato** in sequenza.
La parola chiave `array` viene utilizzata per dichiarare un array, e può essere specificata la dimensione o il tipo degli elementi.

Esempio:
```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Ogni tipo di dato offre una gamma di intervalli e dimensioni diverse, quindi è possibile scegliere il tipo che meglio si adatta alle proprie esigenze per una gestione più efficiente della memoria e dei calcoli.
