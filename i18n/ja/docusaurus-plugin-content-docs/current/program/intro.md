---
sidebar_position: 1
---

# Hello Wave 出力

この文書はWave言語で最も基本的な出力プログラムを書く方法を説明します。

---

## 例のコード

```wave
fun main() {
    println("Hello Wave");
}
```

---

## 説明

- `fun main()`

  Waveプログラムのエントリーポイント関数です。 実行時に最初に呼び出されます。

- `println()`

  一時出力関数として文字列を出力し、出力後に改行（`\n`）を追加します。

- `;` (セミコロン)

  Waveのすべての文はセミコロンで終了します。

---

## 実行結果

```text
Hello Wave
```

---

## 追加の例

Waveは文字列補間をサポートしています。

```wave
fun main() {
    var name: str = "Wave";
    println("Hello, {}!", name);
}
```

出力：

```text
Hello, Wave!
```

---

> この例は、Wave標準ライブラリの基本的な出力関数の使い方を示しています。