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
# `projectname-devcontainer` という devcontainer用のイメージが見えていたら成功
docker image ls

## compose が動くかどうか
# `projectname running(1)` となっていればOK
docker compose -f .devcontainer/docker-compose.yml ls

## githubにつながるかどうか
git fetch
```

## 全ユーザー共通で使用して欲しいVSCodeの拡張機能がある場合

- vscodeの拡張機能ビュー上において、該当の拡張機能を右クリック→`devcontainer.jsonに追加`で追加できる。
- その後、コンテナーのrebuildを促す通知が右下から出てくるので、それに従ってリビルドする

## コンテナそのものに対して `apt install` が必要な場合

1. devcontainer の [features](https://containers.dev/features/) で代用できないか検討する
2. 代用できない場合に限り `.devcontainer/postCreateCommand.sh` を編集して `apt install` 相当の処理を行う
3. dockerfile内では行わない

## 同時に起動しておいて欲しいコンテナがある場合

`.devcontainer/docker-compose.yml`を編集して追加する。
yml内にコメントとして記載したためそちら参照。

追加候補としては、システム構成次第ではあるが、以下のようなものが予想される

- データベース(postgres, mysql等)
- テレメトリ(grafana)
- KVS(memcached, redis, dragonfly等)
- クラウドストレージ(minio, Azurite等)
- 連動するwebサービスのスタブ

## トラブルシュート

### `git fetch` に失敗する場合

コンテナ内で `ssh -T git@github.com` を改めて実行して、エラーメッセージを確認。

高確率で `git@github.com: Permission denied (publickey).` とかでてるはずなので、以下を確認する。

- そもそもWindows側の ssh-agent は動いているか、秘密鍵が登録されているか
  - 登録状況の確認は `ssh-add -l`
  - 鍵登録時に `TOO OPEN` と怒られた場合は、Windows上にて秘密鍵の権限を削ること
    - see. <https://qiita.com/eltociear/items/02e8b1f5590b49eb9d87>
- 同WSL(debian)で ssh-agent は動いているか、秘密鍵が登録されているか
  - 登録状況の確認は `ssh-add -l` で同じ
  - 権限変更は `chmod`

#### 簡易解説

ssh周りは上位環境(コンテナから見たWSL、WSLから見たWindows)でssh鍵が登録されているなら、devcontainer拡張機能がよしなに処理してくれる。

<https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials#_using-ssh-keys> より

> the extension will automatically forward your local SSH agent if one is running.
> First, you should ensure that SSH agent forwarding is enabled on the host.
>
> (機械翻訳) ローカルの SSH エージェントが実行中の場合、拡張機能が自動的に(筆者補足:SSH キーを)転送します。
> まず、ホストで SSH エージェント転送が有効になっていることを確認してください。

よって、上位環境のsshエージェントが動いていない、動いていても秘密鍵が登録されていない、という可能性が高い。
