---
sidebar_position: 3
---

# ISTRUZIONE IF
## Introduzione
In questa sezione, introdurremo la sintassi dell'istruzione IF, una delle strutture di controllo di Wave.
L'istruzione IF è una struttura di controllo che valuta una condizione ed esegue un determinato blocco di codice solo se la condizione è vera.
Questo permette di controllare il flusso del programma e scrivere codice più flessibile e logico.

## Struttura di base
L'istruzione IF valuta una determinata condizione ed esegue il blocco di codice corrispondente solo se la condizione risulta vera (True).
La struttura di base dell'istruzione IF in Wave è la seguente:

```wave
if (condizione) {
    // Codice eseguito se la condizione è vera
}
```

La condizione viene scritta utilizzando operatori di confronto (`==`, `!=`, `<`, `>`, `<=`, `>=`) o operatori logici (`&&`, `||`, `!`).
Se la condizione è falsa (False), il blocco di codice non verrà eseguito.

## Esempio
Ecco un semplice esempio di istruzione IF:

```wave
var temperatura :i32 = 30;

if (temperatura > 25) {
    println("Fa caldo.");
}
```

In questo codice, se il valore di temperatura è maggiore di 25, verrà stampato il messaggio "Fa caldo.".

## ISTRUZIONE IF-ELSE
Se si vuole eseguire un codice alternativo quando la condizione non è vera, si utilizza l'istruzione IF-ELSE.
La struttura è la seguente:

```wave
if (condizione) {
    // Codice eseguito se la condizione è vera
} else {
    // Codice eseguito se la condizione è falsa
}
```

### Esempio:

```wave
var punteggio :i32 = 70;

if (punteggio >= 60) {
    println("Promosso!");
} else {
    println("Bocciato.");
}
```

Se punteggio è maggiore o uguale a 60, verrà stampato "Promosso!", altrimenti verrà stampato "Bocciato.".

## ISTRUZIONE IF ANNIDATA
Le istruzioni IF possono essere utilizzate all'interno di altre istruzioni IF. Questo è utile per gestire condizioni più complesse.

```wave
var punteggio :i32 = 85;

if (punteggio >= 60) {
    if (punteggio >= 90) {
        println("Ottimo risultato!");
    } else {
        println("Promosso.");
    } 
} else {
    println("Bocciato.");
}
```

In questo esempio, a seconda del valore di punteggio, verranno stampati i messaggi "Ottimo risultato!", "Promosso." o "Bocciato.".

## Riepilogo

* L'istruzione IF valuta una condizione ed esegue un blocco di codice solo se la condizione è vera.
* L'istruzione IF-ELSE permette di eseguire un codice alternativo se la condizione è falsa.
* L'istruzione IF annidata consente di gestire condizioni più complesse.

Utilizzando le istruzioni IF, puoi rendere il flusso del tuo programma più logico e dinamico!