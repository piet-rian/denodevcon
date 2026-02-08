# git (及び githubとの接続とリポジトリのクローン)

## 手順

### git の導入

```shell
##### debian(WSL)内で実行 #####
# git のインストール
sudo apt install git
# インストール完了確認
git -v
```

### ssh-keyの作成 (github接続用)

github のドキュメントに従ってssh鍵を準備する

<https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux>

ただし、vscodeの接続の都合上、パスフレーズは空で作成すること。

<https://code.visualstudio.com/docs/devcontainers/containers#_dev-containers-limitations>

> If you clone a Git repository using SSH and your SSH key has a passphrase, VS Code's pull and sync features may hang when running remotely.
> Either use an SSH key without a passphrase, clone using HTTPS, or run git push from the command line to work around the issue.
>
> (機械翻訳) SSH を使用して Git リポジトリをクローンし、SSH キーにパスフレーズが設定されている場合、VS Code のプル機能と同期機能がリモートで実行中にハングする可能性があります。
> この問題を回避するには、 **パスフレーズのない SSH キーを使用するか** 、HTTPS を使用してクローンするか、コマンドラインから git push を実行してください。

### 接続確認

```shell
##### debian(WSL)内で実行 #####
ssh -T git@github.com

# You've successfully authenticated, but GitHub does not provide shell access.
# といった文章が出ればOK
```

### リポジトリのクローン

```shell
##### debian(WSL)内で実行 #####
# ホームディレクトリ直下にクローンしないこと
# 詳細についてはクローン後に `.devcontainer/compose.yaml` 参照
cd ~/
mkdir denodev
cd ~/denodev
git clone https://github.com/piet-rian/denodevcon.git
```

### 補足

globalでもリポジトリ単位でも良いので、git側にユーザー名とメールアドレスも登録するように

- <https://docs.github.com/ja/get-started/git-basics/setting-your-username-in-git>
- <https://docs.github.com/ja/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address>

## 参考資料

- <https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux>
- <https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection>
