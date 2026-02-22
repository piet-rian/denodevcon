# git (及び githubとの接続とリポジトリのクローン)

githubとのssh接続の確立を完了させていることを前提とする。

## 手順

### git の導入

```shell
##### debian(WSL)内で実行 #####
# git のインストール
sudo apt install git
# インストール完了確認
git -v
```

### リポジトリのクローン

```shell
##### debian(WSL)内で実行 #####
# ホームディレクトリ直下にクローンしないこと
# 詳細についてはクローン後に `.devcontainer/compose.yaml` 参照
cd ~/
mkdir denodev
cd ~/denodev
git clone git@github.com:piet-rian/denodevcon.git
```

### 補足

globalでもリポジトリ単位でも良いので、git側にユーザー名とメールアドレスも登録するように

- <https://docs.github.com/ja/get-started/git-basics/setting-your-username-in-git>
- <https://docs.github.com/ja/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address>

### 補足2 devcontainer 内のgitについて

- ベースイメージに含まれているためインストール作業は不要
- `.devcontainer/postCreateCommand.sh` 内で共通のconfig設定が行われている
