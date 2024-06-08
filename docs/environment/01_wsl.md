# WSL(Windows Subsystem for Linux)

## 手順

### WSLのインストールとディストリビューションの導入

ubuntsu でも良いが今回は debian を導入する。

```powershell
##### powershell なり コマンドラインで実行 #####
# windows に wsl を導入すると同時に debian のディストリビューションの導入
wsl --install -d Debian
```

### debian の更新

```shell
##### debian(WSL)内で実行 #####
sudo apt update
sudo apt upgrade
```

### git の導入

```shell
##### debian(WSL)内で実行 #####
# git のインストール
sudo apt install git
# インストール完了確認
git -v
```

## WSL環境のリセット

ディストリビューションごとアンインストールしてから、再度インストールする。

```powershell
##### powershell なり コマンドラインで実行 #####
wsl --unregister Debian
wsl --install Debian
```

## 参考資料

- https://learn.microsoft.com/ja-jp/windows/wsl/install
