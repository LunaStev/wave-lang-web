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
    // 여기에 코드를 작성하세요
}
```

* `main` 함수는 프로그램 실행을 위한 진입점으로 항상 필요합니다.
* 함수는 매개변수를 가질 수 있으며, 값을 반환할 수 있습니다. 반환 타입은 함수 이름 뒤에 명시합니다.

### 예제: 간단한 함수

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // add 함수 호출
    println(result);            // 출력: 12
}
```

위 예제에서:

* `add` 함수는 두 정수 `a`와 `b`를 받아 합계를 반환합니다.
* `main` 함수는 `add`를 호출하여 결과를 출력합니다.

## 변수
변수는 프로그램 내에서 데이터를 저장하고 조작하는 데 사용됩니다.
Wave는 변수 선언에서 **가변 변수**와 **불변 변수**를 모두 지원하여 데이터 관리에 대한 개발자의 제어권을 제공합니다.

### 가변 변수
Wave에서 변수는 기본적으로 **가변(mutable)** 입니다. 즉, 프로그램 실행 중에 값을 변경할 수 있습니다.

가변 변수는 var 키워드를 사용해 선언합니다.
```wave
var x :i32 = 10; // 가변 변수
x = 20;
```

위 예제에서:
* `x`는 가변 변수로, 초기값 `10`을 가지며 이후에 `20`으로 값을 변경할 수 있습니다.

### 불변 변수
변수를 **불변(immutable)** 으로 선언하면, 한 번 값이 할당된 후에는 변경할 수 없습니다.

불변 변수는 `var imm` 키워드를 사용해 선언합니다.
```wave
var imm y :i32 = 5;     // 불변 변수
// y = 10;              // 오류: 불변 변수는 값을 변경할 수 없습니다.
```

여기서:
* `y`는 불변 변수로, 값을 변경하려고 하면 컴파일 오류가 발생합니다.

### 변수 선언 예제
다양한 타입의 가변 및 불변 변수를 선언하는 예제는 다음과 같습니다:

```wave
var x :i32 = 10;                    // 가변 정수 변수
var imm y :f64 = 3.14159;           // 불변 부동소수점 변수
var name :str = "Wave";             // 가변 문자열 변수
var imm is_active :bool = true;     // 불변 논리 변수
```

* `x`는 가변 정수입니다.
* `y`는 불변 부동소수점 숫자입니다..
* `name`은 가변 문자열입니다.
* `is_active`는 불변 논리값입니다.

Wave에서는 `var` 키워드를 사용해 가변 변수를 선언하며, `var imm` 키워드를 사용해 초기 할당 후 변경할 수 없는 불변 변수를 선언합니다.

가변 변수와 불변 변수를 구분함으로써, Wave는 데이터 일관성과 프로그램 상태를 더욱 효과적으로 제어할 수 있게 합니다.
이로써 더욱 견고하고 예측 가능한 코드를 작성할 수 있습니다.