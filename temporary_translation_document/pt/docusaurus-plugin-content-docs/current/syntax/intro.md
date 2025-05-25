---
sidebar_position: 1
---

# Funções e Variáveis

## Introdução

A filosofia central do design da linguagem de programação Wave é equilibrar desempenho de baixo nível com abstração de alto nível, proporcionando um ambiente eficiente e flexível para o desenvolvimento de software.
Esta seção introduz dois componentes fundamentais dos programas em Wave: funções e variáveis.
Esses elementos são essenciais para estruturar a lógica do programa e gerenciar dados.
Compreender como definir e manipular funções e variáveis permitirá que você aproveite ao máximo o potencial do Wave.

---

## Funções
Em Wave, uma função é um bloco reutilizável de código que pode ser executado independentemente.
As funções encapsulam operações específicas e podem ser chamadas em diferentes partes do programa sempre que necessário.
Isso permite realizar cálculos, gerenciar operações de entrada e saída (I/O) e dividir o código em partes mais organizadas e modulares.

A assinatura de uma função em Wave começa com a palavra-chave `fun`, seguida pelo nome da função, seus parâmetros (se houver) e um bloco de código delimitado por `{}`.

### Definição de uma função
Uma função básica em Wave é definida da seguinte forma:

```wave
fun main() {
    // Escreva seu código aqui
}
```

* A função `main` é o ponto de entrada obrigatório para a execução do programa.
* Funções podem ter parâmetros e retornar valores. O tipo de retorno é especificado após o nome da função.

### Exemplo: Função Simples

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Chamando a função add
    println(result);            // Saída: 12
}
```

Neste exemplo:

* A função `add` recebe dois inteiros `a` e `b` e retorna sua soma.
* A função `main` chama `add` e imprime o resultado.

## Variáveis
Variáveis são usadas para armazenar e manipular dados dentro de um programa.
O Wave suporta tanto variáveis mutáveis quanto imutáveis, dando aos desenvolvedores controle sobre a gestão dos dados.

### Variáveis Mutáveis
Por padrão, as variáveis em Wave são mutáveis, o que significa que seus valores podem ser alterados durante a execução do programa.

Uma variável mutável é declarada com a palavra-chave `var`:
```wave
var x :i32 = 10; // Variável mutável
x = 20;
```

Neste exemplo:
* `x` é uma variável mutável com um valor inicial de `10`, que depois é alterado para `20`.

### Variáveis Imutáveis
Se uma variável for declarada como imutável, seu valor não pode ser alterado após a atribuição inicial.

Para declarar uma variável imutável, usa-se `var imm`:
```wave
var imm y :i32 = 5;     // Variável imutável
// y = 10;              // Erro: variáveis imutáveis não podem ser modificadas.
```

Aqui:
* `y` é uma variável imutável. Se tentarmos alterá-la, o compilador emitirá um erro.

### Exemplo de Declaração de Variáveis
O código a seguir mostra diferentes tipos de variáveis mutáveis e imutáveis em Wave:

```wave
var x :i32 = 10;                    // Variável mutável do tipo inteiro
var imm y :f64 = 3.14159;           // Variável imutável do tipo ponto flutuante
var name :str = "Wave";             // Variável mutável do tipo string
var imm is_active :bool = true;     // Variável imutável do tipo booleano
```

* `x` é um número inteiro mutável.
* `y` é um número de ponto flutuante imutável.
* `name` é uma string mutável.
* `is_active` é um booleano imutável.

No Wave, usamos `var` para declarar variáveis mutáveis e `var imm` para declarar variáveis imutáveis.

A distinção entre variáveis mutáveis e imutáveis ajuda a garantir consistência dos dados e um controle mais seguro do estado do programa. Isso permite escrever código mais robusto e previsível.