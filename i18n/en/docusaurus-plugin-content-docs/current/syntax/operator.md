---
sidebar_position: 5
---

# Operator

이 문서는 현재 컴파일러 기준으로 실제 사용 가능한 연산자를 정리합니다.

## 산술

| Operator | Description    |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | 나머지            |

## 비교

| Operator | Description              |
| -------- | ------------------------ |
| `==`     | Equal                    |
| `!=`     | Not Equal                |
| `<`      | Less Than                |
| `<=`     | Less Than or Equal To    |
| `>`      | Greater Than             |
| `>=`     | Greater Than or Equal To |

## 논리

| Operator | Description |
| -------- | ----------- |
| `&&`     | Logical AND |
| \`\\   | Logical OR  |
| `!`      | Logical NOT |

## 비트

| Operator | Description |
| -------- | ----------- |
| `&`      | Bitwise AND |
| \`\\   | Bitwise OR  |
| `^`      | Bitwise XOR |
| `~`      | Bitwise NOT |
| `<<`     | Left Shift  |
| `>>`     | Right Shift |

## 대입

| Operator | Description |
| -------- | ----------- |
| `=`      | 기본 대입       |
| `+=`     | 덧셈 후 대입     |
| `-=`     | 뺄셈 후 대입     |
| `*=`     | 곱셈 후 대입     |
| `/=`     | 나눗셈 후 대입    |
| `%=`     | 나머지 후 대입    |

## 단항 / 포인터 관련

| 연산자/키워드    | Description |
| ---------- | ----------- |
| `++`, `--` | 전위/후위 증감    |
| `&x`       | 주소 획득       |
| `deref p`  | 포인터 역참조     |

포인터의 경우 현재 `==`, `!=` 비교 중심으로 사용하며, 포인터 산술은 지원하지 않습니다.

## 예약 또는 미구현 항목

문법 토큰은 존재하지만 현재 표현식 연산으로는 지원되지 않는 항목이 있습니다.  
예: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
