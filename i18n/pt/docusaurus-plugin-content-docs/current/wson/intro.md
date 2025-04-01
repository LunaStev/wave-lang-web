---
sidebar_position: 2
---

# Sintaxe

## 1. Estrutura básica
* O conteúdo do arquivo começa e termina com um objeto, envolto por chaves `{}`.

* Um objeto é composto por pares chave-valor, onde a chave é o nome do atributo e o valor é o valor do atributo.

* A chave e o valor são separados por dois pontos (`:`) ou sinal de igual (`=`)

## 2. Comentários
* Comentários começam com `//` ou `#` e são escritos em uma única linha.

* Comentários se aplicam até o final da linha.

* Comentários multilinha não são suportados. Se você precisar escrever comentários em várias linhas, deve adicionar `//` ou `#` no início de cada linha.

## 3. Objeto
* Um objeto é envolvido por chaves `{}` e contém pares chave-valor.

* Você pode usar tanto `:` quanto `=` entre a chave e o valor. Ambos os símbolos são intercambiáveis.

* Cada atributo é separado por uma vírgula (`,`).

* Você pode aninhar outros objetos dentro de um objeto.

Exemplo:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Array
* Um array é envolvido por colchetes `[]`, e os elementos são separados por vírgulas (`,`).

* Os elementos de um array podem ser objetos, strings, números ou outros tipos de dados.

* No WSON, os arrays podem ser incluídos dentro de objetos, e os arrays podem conter outros arrays ou objetos.

Exemplo:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Pares chave-valor
* Os nomes dos atributos são strings e são colocados diretamente após `:` ou `=`, sem espaços.

* O valor pode ser de tipos como strings, números, booleanos, objetos ou arrays.

* Strings são envolvidas por aspas duplas (`"`).

* Números são escritos sem aspas e podem ser inteiros ou de ponto flutuante.

Exemplo:

```
name: "John Doe"
age = 25
```

## 6. Tipos de dados
* String: Texto envolvido por aspas duplas (`"`).

```
"hello world"
```

- Número (Number): Um valor inteiro ou de ponto flutuante.

```
42
3.14
```

- Booleano (Boolean): O valor é `true` ou `false`.

```
is_active = true
```

* Objeto (Object): Um conjunto de pares chave-valor envoltos por `{}`.

* Array: Uma lista de elementos envolta por `[]`.

## 7. Explicação do exemplo

```ws
{
    // Informações sobre o código de status e a mensagem
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Idade do usuário
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