---
sidebar_position: 4
---

# Wave + Whale 統合開発ロードマップ v2

## 全体ステージ

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta ステージ

> 目標: Wave 言語のフロントエンド完成 + LLVM バックエンドを利用した全機能実装

### 主な特徴

- LLVM のみ使用 (Whale なし)

- 文法の追加はなし、既存仕様のみを実装

- エラーメッセージ、タイプチェック、変数スコープなどフロント中心の構造安定化

### 実装範囲

- 変数宣言、出力、演算

- 関数定義および呼び出し

- if / else if / else

- while / break / continue

- フォーマット出力、タイプ指定

- ポインタ設計 (`ptr<T>` 形式)

- 配列設計 (`array<T, N>`)

- タイプチェックおよび構造的 AST

### 使用技術

- Rust (Wave コンパイラ全て)

- LLVM (IR 生成、AOT 実行)

- inkwell / llvm-sys

---

## Alpha ステージ

> 目標: Whale 導入開始、LLVM と並行使用 / Whale ベースのバックエンド開始実装

### 主な特徴

- LLVM はデフォルトバックエンド

- Whale はオプションバックエンド

- Wave コード実行時に `--backend` オプションで分岐可能

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale 関連作業

- Whale IR 構造設計および定義 (Instruction, Value, Block など)

- Whale 用 IR Generator 実装

- Whale コード生成器 (アセンブリ or バイナリ)

- Whale のみで可能なタイプ実装 (`i1024`、高度なポインタなど)

### チェックポイント

- Whale で Hello World 出力

- Whale で変数宣言/割り当て

- Whale IR デバッグツール実装

- Whale でポインタタイプ処理

- Wave → Whale IR 変換進行

---

## Beta ステージ

> 目標: Whale で完全転換、LLVM 除去。 Whale + Wave 組み合わせ最適化

### 主な特徴

- Whale のみ使用

- LLVM 全体除去 (依存関係およびモジュール)

- コード最適化中心

- IR → 実行まで速く効率的に

### 最適化範囲

- Whale IR最適化パス設計

- Whaleコード生成速度改善

- Waveの全ての文法がWhaleで完璧にサポート

### テスト

- 単体テスト + 全体テストスイート

- WSON、標準ライブラリ互換性テスト

- クロスプラットフォームWhaleビルド確認

---

## RC（リリース候補）段階

> 目標：Waveブートストラップ開始 — Rustコード全面削除

### 主な特徴

- WaveでWaveコンパイラを書き直し開始

- Whale基盤でWaveコードの自体実行

- Whaleはセルフホスティングの段階に入る

### 作業範囲

- Whale基盤でWave IRジェネレーターを書き直し

- Rust削除 + Waveコードに置き換え

- std及びcoreライブラリをWaveで記述

- ブートストラップ成功時に初のWaveネイティブコンパイラ誕生

---

## リリース段階（v0.0.1）

> 目標：公式リリース / 完全なWhale基盤の独立した言語生態系の提供

### 構成要素

- Wave（言語および標準ライブラリ）

- Whaleコンパイラツールチェーン)

- Vexパッケージマネージャー)

- WSON（データフォーマット）

### 特徴

- 完全なWave専用コンパイラ（ブートストラップ成功）

- Whale最適化完了

- Vexビルドおよびデプロイシステムの定着

- WSONパーサー + シリアライゼーションを含む

- クロスOSビルド可能（`vex build --windows` など）

---

## 開発メタ戦略

| 戦略         | 説明                                         |
| ---------- | ------------------------------------------ |
| 列車+レール戦略   | Whaleを開発しながら同時にWaveバックエンドを構築していく並行進行       |
| バックエンド分岐戦略 | `--backend` オプションでLLVM/Whale選択、alphaで重要な構造 |
| 構造逆転計画     | rc以降、WaveコードがWhaleを介してWave自身をコンパイル         |
