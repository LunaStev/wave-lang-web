---
sidebar_position: 1
---

# Funzioni e Variabili

## Introduzione

La filosofia di progettazione principale del linguaggio di programmazione Wave è trovare un equilibrio tra prestazioni di basso livello e astrazione di alto livello, offrendo un ambiente efficiente e flessibile per lo sviluppo software.
In questa sezione introdurremo gli elementi fondamentali di un programma Wave: funzioni e variabili.
Questi componenti sono essenziali per strutturare la logica del programma e gestire i dati.
Comprendere come definire e utilizzare funzioni e variabili ti permetterà di sfruttare appieno il potenziale di Wave.

---

## Funzioni
In Wave, una funzione è un blocco di codice riutilizzabile che può essere eseguito in modo indipendente.
Le funzioni incapsulano operazioni specifiche e possono essere chiamate ovunque nel programma.
Ciò permette di eseguire calcoli, gestire operazioni di I/O o suddividere il codice in unità più gestibili.

La firma di una funzione in Wave inizia con la parola chiave `fun`, seguita dal nome della funzione, dai parametri (se presenti) e dal corpo della funzione racchiuso tra parentesi graffe `{}`.

### Definire una funzione
Una funzione di base in Wave si definisce nel seguente modo:

```wave
fun main() {
    // Scrivi qui il tuo codice
}
```

* La funzione `main` è il punto di ingresso del programma ed è sempre necessaria.
* Le funzioni possono accettare parametri e restituire valori. Il tipo di ritorno viene specificato dopo il nome della funzione.

### Esempio: funzione semplice

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Chiamata della funzione add
    println(result);            // Output: 12
}
```

In questo esempio:

* La funzione `add` accetta due numeri interi `a` e `b` e restituisce la loro somma.
* La funzione `main` chiama `add` e stampa il risultato.

## Variabili
Le variabili vengono utilizzate per memorizzare e manipolare dati all'interno di un programma.
Wave supporta sia **variabili mutabili** che **variabili immutabili**, offrendo agli sviluppatori un maggiore controllo sulla gestione dei dati.

### Variabili mutabili
In Wave, le variabili sono **mutabili** per impostazione predefinita, il che significa che il loro valore può essere modificato durante l'esecuzione del programma.

Una variabile mutabile si dichiara con la parola chiave `var`:
```wave
var x :i32 = 10; // Variabile mutabile
x = 20;
```

In questo esempio:
* `x` è una variabile mutabile inizializzata a `10`, il cui valore può essere modificato in seguito a `20`.

### Variabili immutabili
Se si dichiara una variabile come **immutabile**, il suo valore non potrà più essere modificato dopo l'assegnazione iniziale.

Per dichiarare una variabile immutabile, si utilizza `var imm`:
```wave
var imm y :i32 = 5;     // Variabile immutabile
// y = 10;              // Errore: le variabili immutabili non possono essere modificate
```

In questo caso:
* `y` è una variabile immutabile: tentare di modificarla causerà un errore di compilazione.

### Esempio di dichiarazione di variabili
Ecco alcuni esempi di dichiarazione di variabili mutabili e immutabili con diversi tipi di dati:

```wave
var x :i32 = 10;                    // Variabile intera mutabile
var imm y :f64 = 3.14159;           // Variabile a virgola mobile immutabile
var name :str = "Wave";             // Variabile stringa mutabile
var imm is_active :bool = true;     // Variabile booleana immutabile
```

* `x` è un intero mutabile.
* `y` è un numero a virgola mobile immutabile.
* `name` è una stringa mutabile.
* `is_active` è una variabile booleana immutabile.

In Wave, le variabili mutabili si dichiarano con `var`, mentre le variabili immutabili si dichiarano con `var imm`.

La distinzione tra variabili mutabili e immutabili aiuta a mantenere la coerenza dei dati e a controllare lo stato del programma in modo più efficace.
Questo consente di scrivere codice più robusto e prevedibile.