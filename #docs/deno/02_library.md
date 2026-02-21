# Library

## 導入について

- [jsr.io](https://jsr.io/) か [npm](https://www.npmjs.com/) から導入する
  - バージョン含めて全く同じものが両方にある場合は jsr.io を優先、そうでない場合はnpmから導入する
- 実際の手順は jsr.io 上の各ライブラリの画面の右側に `Add Package` と `Import symbol` の項目があるので、それに従う

### 例: `@std/assert` を jsr.io から導入する場合

1. `deno add jsr:@std/assert` をdevcontainer上のターミナルで実行
   - `deno.jsonc` の `$.imports` に設定が追加される
2. `import * as assert from "@std/assert";` といった具合で各コードから読み込む

## urlインポート

> import { Application } from "<https://deno.land/x/oak/mod.ts>";

上述のようなやつ。古いコード上に多い。**使わないこと。**

`deno add` および `deno remove` を用いる `deno.jsonc` による管理を原則とすること。

## Deno Standard Library ([@std/\*](https://jsr.io/@std))

Denoの開発元が公開しているLibrary群がある。

csvやらjsoncの取り扱い、ファイルシステムへのアクセス等、様々な汎用ライブラリが公開されている。

それぞれのイントロダクションは <https://docs.deno.com/runtime/reference/std/> にある。

## npm モジュールの導入について

- Deno側のnode互換対応と各ライブラリ側のDeno対応によって、npmに登録されているあれこれがDeno上で十分に動作するようになってきている
  - [drizzle](https://orm.drizzle.team/)(ORM) のように、[Denoの公式ドキュメント](https://docs.deno.com/examples/drizzle_tutorial/)でnpmからもってこいと書いてある例もある
- ただし、npm上の全てが正確に動くわけではない。

### [deno.land/x](https://deno.land/x) 上のライブラリについて

- 基本的に使わない。古いコードコピペしてstd等をこっちから引っ張ってこないように。

## 参考資料

- サードーパーティーライブラリに全般
  - <https://docs.deno.com/runtime/fundamentals/modules/#importing-third-party-modules-and-libraries>
- node 関連機能 および npm モジュールの導入について
  - <https://docs.deno.com/runtime/manual/node/>
- ライブラリのリポジトリ
  - <https://jsr.io/>
  - <https://www.npmjs.com/>
- Deno Standard Library
  - <https://jsr.io/@std>
  - <https://docs.deno.com/runtime/reference/std/>
