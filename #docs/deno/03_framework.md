# Deno 環境下におけるフレームワークについて

## 要点

- Laravelのような全部入りはない
- いくつかのフレームワークとライブラリを組みあせて望みのものを作る

## Webフレームワーク

Denoのみで完結させたいなら[Fresh](https://fresh.deno.dev/)、Vite等の導入をいとわないなら[Hono](https://hono.dev/)等のマイクロフレームワーク

### [Fresh](https://fresh.deno.dev/)

- [Preact](https://preactjs.com/) にファイルベースルーティングをくっつけたような存在
- キーワード: アイランドアーキテクチャ
  - サーバーサイドレンダリングを基本とするため、実質的に静的なページならJSなし
  - 動的描画が必要な場合でも、動的描画が必要な部分に絞ったJSが配信される

### [Hono](https://hono.dev/)

- マイクロフレームワーク
  - [sinatra](https://sinatrarb.com/)@ruby
  - [flask](https://flask.palletsprojects.com/en/3.0.x/)@python
  - [express](https://expressjs.com/ja/)@nodejs
    - 的なもの
- 基本的にはAPIサーバー用
  - ミドルウェア等で拡張はある程度可能
- フロントエンドまで取り扱うなら素直に [honox](https://github.com/honojs/honox) 導入したほうが良さそう
  - honoとviteのメタフレームワーク
    - vite で取り扱うフロントエンドのフレームワークを別途選定する必要あり

## ORM

<https://docs.deno.com/examples/connecting_to_databases_tutorial/#orms> より

- Prisma, Drizzle, Kysely のどれかが候補か
  - Prisma <https://docs.deno.com/examples/prisma_tutorial/>
  - Drizzle <https://docs.deno.com/examples/drizzle_tutorial/>
    - それぞれオフィシャルなチュートリアルあり

## 単なるDB接続

- <https://docs.deno.com/examples/connecting_to_databases_tutorial/> に一通り例がある
  - 見ての通りnpmからライブラリ持ってきている例が大半
