---
sidebar_position: 2
---

# Tipos de Dados

Este documento explica os diversos tipos de dados disponíveis na linguagem de programação Wave.
O Wave permite armazenar e operar valores usando diferentes tipos de dados, como inteiros, números de ponto flutuante, strings, entre outros.
Cada tipo de dado define as características do valor armazenado e como ele é tratado na memória.

## Tipos Inteiros
Os tipos inteiros são usados para armazenar valores numéricos inteiros.
Por padrão, os inteiros podem ser declarados como `i32` (inteiro com sinal de 32 bits) ou `u32` (inteiro sem sinal de 32 bits).
A linguagem Wave oferece várias opções de tamanhos para controle preciso dos valores armazenados.

* `i8` ~ `i1024`: Inteiros com sinal, variando de 8 a 1024 bits.
* `u8` ~ `u1024`: Inteiros sem sinal, variando de 8 a 1024 bits.

Exemplo:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Tipos de Ponto Flutuante
Os tipos de ponto flutuante são usados para armazenar valores decimais.
Por padrão, os números de ponto flutuante são declarados como `f32`, mas o Wave também permite definir tamanhos maiores para cálculos mais precisos.

* `f32` ~ `f1024`: Tipos de ponto flutuante que variam de 32 a 1024 bits, proporcionando maior precisão nos cálculos.

Exemplo:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Tipo String
O tipo string é usado para armazenar dados textuais.
As strings são declaradas com a palavra-chave `str` e geralmente são definidas usando aspas duplas (`"`).

Exemplo:
```wave
var text :str = "Hello Wave";
```

## Tipo Booleano
O tipo booleano representa valores **verdadeiro (`true`)** ou **falso (`false`)**.
É amplamente utilizado em estruturas condicionais.

Exemplo:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Tipo Caractere
O tipo **caractere (`char`)** armazena um único caractere.
Os caracteres são declarados usando aspas simples (`'`).

Exemplo:
```wave
var letter :char = 'A';
```

## Tipo Byte
O tipo byte armazena dados binários de 1 byte.
É útil para manipular dados em nível binário.

Exemplo:
```wave
var byteData :byte = 0xFF;
```

## Tipo Ponteiro
Os ponteiros armazenam endereços de memória e são usados para manipulação direta de memória.
São declarados com a palavra-chave `ptr`.

Exemplo:
```wave
var ptr :ptr = &someVariable;
```

## Tipo Array
Os arrays armazenam múltiplos valores do mesmo tipo em uma estrutura sequencial.
São declarados com a palavra-chave `array`, permitindo definir o tamanho e o tipo dos elementos.

Exemplo:
```wave
var numbers: array<i32> = [1, 2, 3, 4, 5];
```

Cada tipo de dado pode ser ajustado conforme a necessidade, permitindo controle eficiente da memória e execução otimizada dos cálculos.
