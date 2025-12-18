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
  - [sinatra](https://sinatrarb.com/)@ruby, [flask](https://flask.palletsprojects.com/en/3.0.x/)@python, [express](https://expressjs.com/ja/)@nodejs 的なもの
- 基本的にはAPIサーバー用
  - ミドルウェア等で拡張はある程度可能
- フロントエンドまで取り扱うなら素直に [honox](https://github.com/honojs/honox) 導入したほうが良さそう
  - honoとviteのメタフレームワーク
    - vite で取り扱うフロントエンドのフレームワークを別途選定する必要あり

## ORM

2024-06-23時点ではいい感じのものはない、自前でSQL組み立てよう

- [DenoDB](https://github.com/eveningkid/denodb) は開発が止まっている
- [JUSTAOS's ORM](https://github.com/justaos/orm) はサンプル見た感じ微妙
- [Prisma](https://www.prisma.io/)@node は Deno対応が非常に限定的
