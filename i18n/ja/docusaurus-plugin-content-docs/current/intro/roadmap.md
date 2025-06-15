---
sidebar_position: 4
---

# Wave + Whale 統合開発ロードマップ v2

## 全体フェーズ

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta フェーズ

> 目標：Wave言語のフロントエンド完成 + LLVMバックエンドによるすべての機能の実装

### 主な特徴
* LLVM のみ使用（Whale なし）

* 新しい構文の追加なし、既存仕様のみを実装

* エラーメッセージ、型チェック、変数スコープなど、フロントエンド中心の構造を安定化

### 実装範囲
* 変数宣言、出力、演算

* 関数の定義と呼び出し

* if / else if / else

* while / break / continue

* フォーマット付き出力、型の明示

* ポインタ設計（`ptr<T>` 形式）

* 配列設計（`array<T, N>` 形式）

* 型チェックと構造的ASTの構築

### 使用技術
* Rust（Waveコンパイラ全体）

* LLVM（IR生成、AOT実行）

* inkwell / llvm-sys

---

## Alpha フェーズ

> 目標：Whale の導入開始、LLVMと併用 / Whale ベースのバックエンドを実装開始

### 主な特徴
* LLVM がデフォルトバックエンド
* 
* Whale は選択式バックエンド
* 
* `--backend` オプションでバックエンドを切り替えてWaveコードを実行可能

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale 関連作業
* Whale IR の構造設計（Instruction、Value、Blockなど）

* Whale用IRジェネレータの実装

* Whale コードジェネレータ（アセンブリまたはバイナリ）

* Whale専用の型（例：`i1024`、高機能ポインタなど）の実装

### チェックポイント
* Whaleで「Hello World」出力

* Whaleで変数の宣言・代入

* Whale IR用のデバッグツール実装

* Whaleでポインタ型の処理

* Wave → Whale IR変換を開始

---

## Beta フェーズ

> 目標：Whale へ完全移行、LLVM の除去。Whale + Wave 組み合わせの最適化

### 主な特徴
* Whale のみ使用

* LLVM を完全に削除（依存関係とモジュールすべて）

* コードの最適化に集中

* IR から実行まで高速かつ効率的に処理

### 最適化範囲
* Whale IR の最適化パス設計

* Whale のコード生成速度向上

* Whale 上で Wave のすべての構文を完全サポート

### テスト
* 単体テスト + 総合テストスイート

* WSON、および標準ライブラリとの互換性テスト

* クロスプラットフォームでのWhaleビルドの確認

---

## RC（リリース候補）フェーズ

> 目標：Wave のブートストラップ開始 — Rustコードを完全に除去

### 主な特徴
* WaveコンパイラをWave言語で再実装し始める

* WhaleベースでWaveコードを実行

* Whaleはセルフホスティング段階へ突入

### 作業範囲
* WhaleベースのWave IRジェネレータを再実装

* Rust を削除し、Waveコードに置き換え

* stdおよびcoreライブラリをWaveで記述

* ブートストラップ成功時、初のネイティブWaveコンパイラが誕生

---

## リリースフェーズ（v0.0.1）

> 目標：公式リリース / 完全なWhaleベースの独立した言語エコシステムを提供

### 構成要素
* Wave（言語と標準ライブラリ）

* Whale（コンパイラツールチェーン）

* Vex（パッケージマネージャ）

* WSON（データフォーマット）

### 特徴
* 完全なWaveオンリーコンパイラ（ブートストラップ成功）

* Whaleの最適化完了

* Vexによるビルド・デプロイシステムが確立

* WSONパーサとシリアライザを含む

* クロスOSビルド可能（例：`vex build --windows`）

---

## 開発メタ戦略

| 戦略         | 説明                                            |
| ---------- | --------------------------------------------- |
| 列車＋レール戦略   | Whaleを開発しつつ、同時にWaveバックエンドを構築                  |
| バックエンド分岐戦略 | `--backend` オプションでLLVMとWhaleを切り替え、alphaで重要な構造 |
| 構造逆転計画     | RCフェーズ以降、WaveコードがWhaleを通じてWave自身をコンパイルする      |
