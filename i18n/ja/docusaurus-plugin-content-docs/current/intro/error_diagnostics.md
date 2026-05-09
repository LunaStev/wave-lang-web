---
sidebar_position: 5
---

# エラー診断

Waveコンパイラはエラーコード（`E####`）とともに、ソース位置/コンテキスト/解決のヒントを一度に表示します。

## 出力形式

基本形式は次の通りです。

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

出力項目:

- `--> file:line:column`: エラーコードと要約
- `^`: 問題の位置
- ソースブロック + caret(`^`) ハイライト
- `コンテキスト`, `期待される`, `見つかった`, `注`, `ヘルプ`, `提案`

## 代表的なエラーコード

- `E1002` 予期しない文字
- `E1003` 閉じられていないブロックコメント
- `E1004` 閉じられていない文字列
- `E1005` 正しくない文字列エスケープ
- `E1006` 正しくない文字リテラル
- `E2001` 正しくない数値リテラル形式
- `E3001` パーサ構文エラー
- `E3001` 意味解析（セマンティックバリデーション）エラー
- `E3102` 非ポインタに `null` を代入
- `E9001` 暗黙の整数縮小禁止
- `E9001` バックエンドコード生成内部エラー

## バックエンドエラーにもソースの位置を表示

コード生成（LLVM）段階で内部パニックが発生しても、可能な場合は実際の呼び出し・宣言位置を推論して表示します。

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

位置の推論が不可能な場合はフォールバック位置が使用され、その事実が `注` に一緒に表示されます。
