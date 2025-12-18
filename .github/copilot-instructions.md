<!--
    このファイルは github copilot 向けの指示をまとめたもの
    プログラマー向けのドキュメントは `/#docs` 以下を参照

    本ファイルの詳細:
    https://docs.github.com/ja/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot?tool=vscode
-->

# 本リポジトリにおける開発ルール

## このリポジトリで行うこと

- ライブラリ `hono` を用いたWebバックエンドサービスの実装実験

## 開発環境

- `Typescript` を用いる
- Typescript の実行環境として `Deno` を用いる

### ライブラリ管理・選定

- 各種ライブラリについては `deno.jsonc` の `imports{}` で管理する
- ライブラリに関しては `jsr` に存在するものを優先的に選択する

## ファイル・ディレクトリ構成

### `main.ts`

- エントリポイント
  - **ファイル名は固定とし、変更しない**
- ミドルウェア、ルーティング定義を行う

### `/api`

- バックエンドのエンドポイントに相当するファイルを格納
- フォルダ構成とルーティング時のパスはできるだけ寄せる
  - 例1: URL `/api/about`, path `/api/about.ts`
  - 例2: URL `/api/users/:id`, path `/api/users/id.ts`

#### エンドポイント相当ファイルのルール

- export する関数名は HTTP の Method に合わせる

### `/#docs`

- プログラマ向けのドキュメントを格納
  - 環境構築手順、仕様書

### `/samples`

- 導入したライブラリの使用例のコードを格納
