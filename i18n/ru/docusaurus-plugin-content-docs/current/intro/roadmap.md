---
sidebar_position: 4
---

# Интегрированная дорожная карта разработки Wave + Whale v2

## Общие этапы

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Этап Pre-Beta

> Цель: Завершить фронтенд языка Wave + реализовать все функции с использованием LLVM-бэкенда

### Основные особенности
* Используется только LLVM (без Whale)

* Без добавления новой синтаксической конструкции, только реализация существующих спецификаций

* Стабилизация структуры, ориентированной на фронтенд: сообщения об ошибках, проверка типов, области видимости переменных и т.д.

### Объём реализации
* Объявление переменных, вывод, арифметические операции

* Определение и вызов функций

* if / else if / else

* while / break / continue

* Форматированный вывод, явное указание типа

* Проектирование указателей (`ptr<T>`)

* Проектирование массивов (`array<T, N>`)

* Проверка типов и построение структурированного AST

### Используемые технологии
* Rust (весь компилятор Wave)

* LLVM (генерация IR, AOT-исполнение)

* inkwell / llvm-sys

---

## Этап Alpha

> Цель: Начать внедрение Whale, использовать его параллельно с LLVM / начать реализацию бэкенда на базе Whale

### Основные особенности
* LLVM — бэкенд по умолчанию

* Whale — опциональный бэкенд

* Возможность выбора бэкенда с помощью опции `--backend` при запуске кода Wave

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Задачи, связанные с Whale
* Проектирование и определение структуры IR Whale (Instruction, Value, Block и др.)

* Реализация IR-генератора для Whale

* Генератор кода для Whale (ассемблер или бинарный код)

* Типы, доступные только в Whale (например, `i1024`, расширенные указатели)

### Контрольные точки
* Вывод "Hello World" через Whale

* Объявление и присваивание переменных в Whale

* Создание отладочных инструментов для IR Whale

* Обработка типов указателей в Whale

* Начало трансформации Wave → Whale IR

---

## Этап Beta

> Цель: Полный переход на Whale, удаление LLVM. Оптимизация связки Whale + Wave

### Основные особенности
* Используется только Whale

* Полное удаление LLVM (зависимости и модули)

* Упор на оптимизацию кода

* Быстрая и эффективная трансляция от IR к исполнению

### Область оптимизации
* Проектирование оптимизационных проходов для IR Whale

* Повышение скорости генерации кода Whale

* Полная поддержка синтаксиса Wave в Whale

### Тестирование
* Юнит-тесты + полный тестовый пакет

* Тестирование совместимости с WSON и стандартной библиотекой

* Проверка сборок Whale для разных платформ

---

## Этап RC (Release Candidate)

> Цель: Начать бутстрапинг Wave — полностью отказаться от Rust

### Основные особенности
* Начать переписывание компилятора Wave на самом языке Wave

* Исполнение кода Wave на основе Whale

* Whale выходит на стадию self-hosting

### Объём работ
* Переписать IR-генератор Wave с использованием Whale

* Удалить Rust и заменить его кодом на Wave

* Написать библиотеки std и core на языке Wave

* После успешного бутстрапинга появляется первый нативный компилятор Wave

---

## Этап Release (v0.0.1)

> Цель: Официальный релиз / Предоставление полностью независимой экосистемы языка на базе Whale

### Компоненты
* Wave (язык и стандартная библиотека)

* Whale (инструментарий компилятора)

* Vex (менеджер пакетов)

* WSON (формат данных)

### Особенности
* Полностью нативный компилятор на Wave (успешный бутстрапинг)

* Полная оптимизация Whale

* Стабильная система сборки и развёртывания через Vex

* Включён парсер и сериализатор WSON

* Кроссплатформенная сборка (`vex build --windows` и т.д.)

---

## Мета-стратегия разработки

| Стратегия                   | Описание                                                                  |
| --------------------------- | ------------------------------------------------------------------------- |
| Стратегия «поезд + рельсы»  | Параллельная разработка Whale и построение бэкенда Wave                   |
| Стратегия ветвления бэкенда | Возможность выбора LLVM/Whale через `--backend`, ключевой элемент в alpha |
| План инверсии структуры     | Начиная с этапа RC, Wave будет компилировать сам себя через Whale         |
