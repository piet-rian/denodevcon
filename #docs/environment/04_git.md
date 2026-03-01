# git (及び githubとの接続とリポジトリのクローン)

githubとssh接続が確立できていることを前提とする。

## 手順

### 前提の確認

```sh
##### debian(WSL)内で実行 #####
### 疎通確認
ssh -T git@github.com
# 以下のようなメッセージが出力されていればOK
# You've successfully authenticated, but GitHub does not provide shell access.
```

### git の導入

```sh
##### debian(WSL)内で実行 #####
### git のインストール
sudo apt install git
### インストール完了確認
git -v
```

### リポジトリのクローン

```sh
##### debian(WSL)内で実行 #####
### クローン用ディレクトリの作成
# `.devcontainer/compose.yaml` 参照
cd ~/
mkdir devcon
cd ~/devcon
### リポジトリのクローン
# クローン先のURLは `git@なんたら.git` 形式であること
git clone git@github.com:piet-rian/denodevcon.git
```

### ユーザーとメールアドレスの設定

github上の内容と統一を取ること

```sh
##### debian(WSL)内で実行 #####
### 設定
# プロジェクトルートで実施
git config user.name "<youruname>"
git config user.email "<youruname@address>"

# 登録内容確認
git config user.name && git config user.email
```

## リポジトリ(ローカル)のメンテナンス

```sh
##### debian(WSL)内で実行 #####
# devcontainer(別紙参照)内も可
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

### コマンドの簡易解説

- `git reflog expire --expire=now --all`
  - コマンドミスなどの救済用に残されている履歴(reflog)の削除
  - `git log --graph` とか git-graph(vscode拡張機能)で表示される線がある程度整理される
- `git gc  --prune=now --aggressive`
  - ガベージコレクション
  - 容量が減る
