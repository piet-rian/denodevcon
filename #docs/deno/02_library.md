# Library

## 導入について

- 基本的には [jsr.io](https://jsr.io/) にあるライブラリを採用する
- 実際の手順は jsr.io 上の各ライブラリの画面の右側に `Add Package` と `Import symbol` の項目があるので、それに従う

### 例: `@std/assert` 導入の場合

1. `deno add jsr:@std/assert` をdevcontainer上のターミナルで実行
    - `deno.jsonc` の `$.imports` に設定が追加される追加
2. `import * as assert from "@std/assert";`  といった具合で各コードから読み込む

### [deno.land/x](https://deno.land/x) および [npm](https://www.npmjs.com/) 上のライブラリについて

- 代替ライブラリが jrs.io に存在しない場合のみ採用ないし参照を検討する。
  - jsr.io で公開されているがバージョンが低い
  - jrs.io に類似機能を持つ代替のライブラリが存在しない
    - 等の条件を満たしたら jsr.io 以外からもOK
- 特に npm からの採用は慎重に
  - npm上のライブラリは基本的にはnodejs環境用のライブラリ
  - denoがnpm上のライブラリも動くと謳っているが、互換性が100%確保できているわけではない

## Deno Standard Library ([@std/*](https://jsr.io/@std))

Denoの開発元が公開しているLibrary群がある。

csvやらjsoncの取り扱い、ファイルシステムへのアクセス等、様々な汎用ライブラリが公開されている。

それぞれのイントロダクションは <https://docs.deno.com/runtime/reference/std/> にある。

サードーパーティーのモジュールよりこれらの採用・使用を優先して検討するべきでしょう。

## 参考資料

- node 関連機能 および npm モジュールの導入について
  - <https://docs.deno.com/runtime/manual/node/>
- ライブラリ
  - <https://jsr.io/>
  - <https://deno.land/x>
  - <https://www.npmjs.com/>
- Deno Standard Library
  - <https://jsr.io/@std>
  - <https://docs.deno.com/runtime/reference/std/>
