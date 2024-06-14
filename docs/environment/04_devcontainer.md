# devcontainer

devcontainer を使うにはvscodeが必要であるため、vscodeの導入及びdevcontainer環境への接続手順を記載する。

## 手順書

### vscode の導入

windows環境にインストールする。

インストーラーは <https://code.visualstudio.com/download> から。

### 拡張機能の導入

拡張機能セット Remote Development(`ms-vscode-remote.vscode-remote-extensionpack`) を導入する

### WSL環境に接続

1. vscode 左下の `><` から `WLSへの接続` を選択
2. フォルダを選択する必要があるので、リポジトリをクローンしたフォルダを選択する
3. 左下の `><` に `WSL:Debian` と表示されていればOK

### devcontainer 環境への接続、あるいはdevcontainerの起動

※右下に "開発コンテナで開きますか？" といった通知が出ているのであれば、そこからでもOK

1. (WSL接続後に)vscode 左下の `><` から `コンテナーで再度開く` を選択
2. 開発コンテナの初回構築に少し時間がかかるので待つ
3. 左下の `><` に `開発コンテナー: ...` と表示されていればOK

### コマンドの疎通確認

```shell
##### devcontainer内で実行 #####
## docker が動くかどうか
# vsc-... といった devcontainer用のイメージが見えていたら成功
docker image ls

## compose が動くかどうか 
# ***_devcontainer   running(1) となっていればOK
docker compose -f .devcontainer/docker-compose.yml ls

## githubにつながるかどうか
git fetch
```

## 全ユーザー共通で使用して欲しい拡張機能がある場合

- vscodeの拡張機能ビュー上において、該当の拡張機能を右クリック→`devcontainer.jsonに追加`で追加できる。
- その後、コンテナーのrebuildを促す通知が右下から出てくるので、それに従ってリビルドする

## 同時に起動しておいて欲しいコンテナがある場合

`.devcontainer/docker-compose.yml` を編集して追加する。yml内にコメントとして記載したためそちら参照。
