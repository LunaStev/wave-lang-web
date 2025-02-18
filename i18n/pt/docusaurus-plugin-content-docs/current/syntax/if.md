---
sidebar_position: 3
---

# Declaração IF
## Introdução
Nesta seção, apresentamos a sintaxe da estrutura de controle IF no Wave.
A instrução IF é um comando de controle em programação que avalia uma condição e executa um bloco de código específico se a condição for verdadeira.
Isso permite controlar o fluxo do programa e escrever um código mais flexível e lógico.

## Estrutura Básica
A instrução IF avalia uma determinada condição e executa um bloco de código apenas se essa condição for verdadeira (`True`).
A estrutura básica do IF no Wave é a seguinte:

```wave
if (condição) {
    // Código a ser executado se a condição for verdadeira
}
```

A condição pode ser escrita usando operadores de comparação (`==`, `!=`, `<`, `>`, `<=`, `>=`) e operadores lógicos (`&&`, `||`, `!`).
Se a condição for falsa (`False`), o bloco de código dentro do IF não será executado.

## Exemplo
Aqui está um exemplo simples de uma instrução IF:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("O tempo está quente.");
}
```

No código acima, se o valor de temperature for maior que 25, a mensagem "O tempo está quente." será exibida.

## Declaração IF-ELSE
Se quisermos executar um código alternativo quando a condição for falsa, usamos a instrução IF-ELSE.
A estrutura é a seguinte:

```wave
if (condição) {
    // Código a ser executado se a condição for verdadeira
} else {
    // Código a ser executado se a condição for falsa
}
```

### Exemplo:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Aprovado!");
} else {
    println("Reprovado.");
}
```

Se score for maior ou igual a 60, "Aprovado!" será exibido; caso contrário, "Reprovado." será exibido.

## IF Aninhado
A instrução IF pode ser usada dentro de outro IF, formando uma estrutura de IF aninhado. Isso é útil para lidar com condições mais complexas.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Nota excelente!");
    } else {
        println("Aprovado.");
    } 
} else {
    println("Reprovado.");
}
```

Neste exemplo, dependendo do valor da variável score, o programa pode exibir "Nota excelente!", "Aprovado." ou "Reprovado.".

## Resumo

* A instrução IF avalia uma condição e executa um bloco de código se a condição for verdadeira.
* O ELSE permite definir um bloco de código alternativo para quando a condição for falsa.
* Estruturas de IF aninhado são úteis para lidar com condições mais detalhadas.

O uso da estrutura IF torna o fluxo do programa mais lógico e dinâmico!