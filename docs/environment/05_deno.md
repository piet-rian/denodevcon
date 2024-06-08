# Deno (run, debug, and Library)

devcontainerとして構築された時点でdenoの環境構築も完了している。

そのため、定義済みtaskやライブラリ追加時の注意点等を記載。

## `main.ts`

下記のタスク等でも参照しているエントリポイントなのでファイル名を変更したり、ファイルを削除したりしないこと。

## 定義済み Task

### `cache`

ソース上で参照されている各種ライブラリを事前にダウンロードします。
IDE上で import 周りでエラーが出ている場合に試すとよいでしょう。

### `start`

- アプリケーションが起動します。
- ソースコードを変更しても、変更内容は起動中のアプリケーションに反映されません。
- vscode上でブレークポイントなどは設定しても無効化されます。

### `debug`

- アプリケーションが起動します。
- ソースコードを変更した場合、denoによって再読み込みがかかり、アプリケーションに反映されます。
- vscode上で設定したブレークポイントで止まるようになります。
  - vscode側からデバッガをアタッチする必要がある

## デバッガ設定(vscode)

`.vscode` フォルダ自体が .gitignore指定される可能性があるため、以下に `launch.json` に追加するための最小の構成を記載。

```jsonc
// configurations内に追加
{
    "request": "attach",
    "name": "Attach Deno",
    "type": "node",
    "cwd": "${workspaceFolder}",
    "env": {},
    "restart": true
}
```

これを追加した上で、実行とデバッグのビューから `Attach Deno` を起動すると、デバッガが立ち上がり、既存のDenoのプロセスに接続する。デバッガを立ち上げたあとで実行されたプロセスにも接続してくれる。

## ライブラリの導入について

- 基本的には jsr.io にあるライブラリを採用する
- deno.land/x および npm 上のライブラリは代替ライブラリが jrs.io に存在しない場合のみ
  - 特に npm は慎重
  - npm上のライブラリは基本的にはnodejs環境用のライブラリ
  - denoがnpm上のライブラリも動くと謳っているが、互換性が100%確保できているわけではない

## 参考資料

- タスクランナーとデバッグ系統
  - <https://docs.deno.com/runtime/manual/tools/task_runner>
  - <https://docs.deno.com/runtime/manual/tools/run>
  - <https://docs.deno.com/runtime/manual/basics/debugging_your_code>
  - <https://docs.deno.com/runtime/manual/references/vscode_deno/#using-the-debugger>
- ライブラリ
  - <https://jsr.io/>
  - <https://deno.land/x>
  - <https://www.npmjs.com/>
