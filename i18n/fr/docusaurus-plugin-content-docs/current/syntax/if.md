---
sidebar_position: 3
---

# Instruction IF

## Introduction

Cette section explique la syntaxe et l'utilisation de l'instruction IF, l'une des instructions de contrôle fournies par le langage Wave.
L'instruction IF est une structure de contrôle de base qui évalue une condition et exécute un bloc de code spécifique uniquement si la condition est vraie.

Cela permet au programme de réaliser différentes actions en fonction des situations et des conditions, au-delà d'un simple flux d'exécution de haut en bas.
L'instruction IF constitue un élément central de presque tous les programmes et est essentielle pour implémenter des branches logiques et contrôler le flux.

## Structure de base

L'instruction IF évalue d'abord une expression conditionnelle et exécute le bloc de code écrit entre accolades `{}` uniquement si le résultat est vrai (True).
Si la condition est fausse (False), ce bloc est ignoré et le programme passe au code suivant.

La structure de base de l'instruction IF dans Wave est la suivante.

```wave
if (condition) {
    // Code exécuté si la condition est vraie
}
```

조건식에는 비교 연산자나 논리 연산자를 자유롭게 사용할 수 있습니다.
예를 들어 `==`, `!=`, `<`, `>`, `<=`, `>=`와 같은 비교 연산자를 통해 값의 관계를 비교할 수 있으며,
`&&`, `||`, `!`와 같은 논리 연산자를 사용해 여러 조건을 조합할 수도 있습니다.

조건식의 결과는 반드시 참 또는 거짓으로 평가되어야 하며, 조건이 거짓인 경우 IF 블록 내부의 코드는 실행되지 않습니다.

## Exemple

다음은 가장 단순한 형태의 IF 문 예제입니다.

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Il fait chaud.");
}
```

위 코드에서는 `temperature` 변수의 값이 25보다 큰지를 조건으로 평가합니다.
조건이 참일 경우 `"날씨가 덥습니다."`라는 메시지가 출력되며, 조건이 거짓일 경우에는 아무 동작도 수행하지 않습니다.

이처럼 IF 문은 특정 조건을 만족할 때만 코드를 실행하고 싶을 때 사용됩니다.

## IF-ELSE 문

조건이 참이 아닐 경우에도 실행해야 할 코드가 있다면 IF 문에 ELSE 절을 추가할 수 있습니다.
IF-ELSE 문은 조건의 결과에 따라 두 개의 코드 블록 중 하나를 선택적으로 실행하는 구조입니다.

기본적인 구조는 다음과 같습니다.

```wave
if (condition) {
    // Code exécuté si la condition est vraie
} else {
    // Code exécuté si la condition est fausse
}
```

조건이 참이면 IF 블록이 실행되고, 조건이 거짓이면 ELSE 블록이 실행됩니다.
두 블록 중 하나만 실행되며, 동시에 실행되는 경우는 없습니다.

다음은 IF-ELSE 문을 사용한 예제입니다.

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Vous avez réussi!");
} else {
    println("Échec.");
}
```

이 코드에서는 `score`가 60 이상인지 여부에 따라 서로 다른 메시지를 출력합니다.
조건이 참일 경우 `"합격입니다!"`가 출력되며, 그렇지 않으면 `"불합격입니다."`가 출력됩니다.

## Instruction IF imbriquée

IF 문은 다른 IF 문 내부에서도 사용할 수 있으며, 이를 중첩 IF 문이라고 합니다.
중첩 IF 문은 여러 단계의 조건을 순차적으로 평가해야 할 때 유용합니다.

다음 예제는 점수에 따라 서로 다른 결과를 출력하는 중첩 IF 문의 예시입니다.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("C'est une excellente note !");
    } else {
        println("Vous avez réussi.");
    } 
} else {
    println("Vous avez échoué.");
}
```

이 코드에서는 먼저 점수가 60 이상인지 확인합니다.
60 미만일 경우에는 바로 `"불합격입니다."`가 출력됩니다.
60 이상일 경우에는 다시 한 번 조건을 평가하여, 점수가 90 이상이면 `"우수한 성적입니다!"`를 출력하고, 그렇지 않으면 `"합격입니다."`를 출력합니다.

이처럼 중첩 IF 문을 사용하면 복잡한 조건 분기를 단계적으로 표현할 수 있습니다.

## Résumé

IF 문은 조건을 평가하여 프로그램의 실행 흐름을 제어하는 기본적인 제어문입니다.
ELSE 절을 함께 사용하면 조건이 거짓일 경우의 동작도 명확히 정의할 수 있으며,
중첩 IF 문을 통해 여러 조건을 조합한 복잡한 분기 처리도 가능합니다.

IF 문을 적절히 활용하면 프로그램의 흐름을 보다 논리적이고 명확하게 구성할 수 있습니다.