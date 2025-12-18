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

ただし、vscodeの接続の都合上、パスフレーズは空で作成すること

<https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux>

### 接続確認

```shell
##### debian(WSL)内で実行 #####
ssh -T git@github.com

# You've successfully authenticated, but GitHub does not provide shell access. といった文章が出ればOK
```

### リポジトリのクローン

```shell
cd ~/
git clone https://github.com/piet-rian/denodevcon.git
```

## 参考資料

- <https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux>
- <https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection>
