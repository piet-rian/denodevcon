# Deno (アプリケーションの起動とデバッグ方法)

サーバーサイドプログラムのような常駐型のアプリケーションを想定した方法について記載。

## アプリケーションの起動

```shell
##### devcontainer内で実行 #####
deno task start
```

## アプリケーションのデバッグ

1. アプリケーションをデバッグ可能な状態で起動する
2. デバッガを起動する
3. ブレークポイントを設定するなどして、動きを止めたり、変数を見たりする
    - 各IDEのマニュアル参照

### アプリケーションをデバッグ可能な状態で起動する

```shell
##### devcontainer内で実行 #####
deno task debug
```

### デバッガの起動

#### vscode

実行とデバッグのビューから `Attach Deno` を選択してデバッグの開始(`F5`)を行う。

#### zed

そのまま `F5` でデバッガが起動する。

zedがvscode用のデバッグ構成(`launch.json`)の設定を参照している模様。

実行している内容としては、以下の内容に等しい。

> コマンドパレットから `tasks: spawn` > `debug` > `Attach Deno(.vscode/launch.json)` を選択

## 定義済み Task

### `cache`

- `main.ts`を起点に、ソース上で参照されている各種ライブラリを事前にダウンロードします。
- IDE上で import 周りでエラーが出ている場合に試すとよいでしょう。

### `start`

- アプリケーションが起動します。
- ソースコードを変更しても、変更内容は起動中のアプリケーションに反映されません。
- vscode上でブレークポイントなどは設定しても無効化されます。

### `debug`

- アプリケーションが起動します。
- ソースコードを変更した場合、denoによって再読み込みがかかり、アプリケーションに反映されます。
- IDE上で設定したブレークポイントで止まるようになります。
  - 前述の手順でIDE側からデバッガをアタッチする必要がある

## `main.ts`

- 前述のタスクで参照しているエントリポイント
- **ファイル名を変更したり、ファイルを削除したりしないこと。**

## 参考資料

- タスクランナーとデバッグ系統
  - <https://docs.deno.com/runtime/manual/tools/task_runner>
  - <https://docs.deno.com/runtime/manual/tools/run>
  - <https://docs.deno.com/runtime/manual/basics/debugging_your_code>
  - <https://docs.deno.com/runtime/manual/references/vscode_deno/#using-the-debugger>
