# Deno (アプリケーションの起動とデバッグ方法)

## アプリケーションの起動

```shell
##### devcontainer内で実行 #####
deno task start
```

## アプリケーションのデバッグ

### アプリケーションをデバッグ可能な状態で起動

```shell
##### devcontainer内で実行 #####
deno task debug
```

### デバッガの起動(vscode)

実行とデバッグのビューから `Attach Deno` を選択してデバッグの開始(`F5`)を行う。

なお、アプリケーションの起動と順番が前後しても問題ない。

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

## `main.ts`

下記のタスク等でも参照しているエントリポイントなのでファイル名を変更したり、ファイルを削除したりしないこと。

## 参考資料

- タスクランナーとデバッグ系統
  - <https://docs.deno.com/runtime/manual/tools/task_runner>
  - <https://docs.deno.com/runtime/manual/tools/run>
  - <https://docs.deno.com/runtime/manual/basics/debugging_your_code>
  - <https://docs.deno.com/runtime/manual/references/vscode_deno/#using-the-debugger>
