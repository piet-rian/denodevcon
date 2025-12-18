# WSL(Windows Subsystem for Linux)

## 手順

### WSLのインストールとディストリビューションの導入

ubuntsu でも良いが今回は debian を導入する。

```powershell
##### ホストOS(Windows)上で実行 #####
# windows に wsl を導入すると同時に debian のディストリビューションの導入
wsl --install -d Debian
```

### debian の更新

```shell
##### debian(WSL)内で実行 #####
sudo apt update
sudo apt upgrade
```

### systemd の有効化

※一部のサービスをWSL開始時に自動起動するために必要

**debian(WSL)内** の `/etc/wsl.conf` に以下の記述を追加(ファイル自体がない場合は作成する)(要sudo)

```bash
[boot]
systemd=true
```

`/etc/wsl.conf` にWSLを再起動する

```shell
##### ホストOS(Windows)上で実行 #####
wsl --terminate Debian
wsl -d Debian
```

## WSL環境のリセット

ディストリビューションごとアンインストールしてから、再度インストールする。

```powershell
##### ホストOS(Windows)上で実行 #####
wsl --unregister Debian
wsl --install Debian
```

## 参考資料

- <https://learn.microsoft.com/ja-jp/windows/wsl/install>
- <https://learn.microsoft.com/ja-jp/windows/wsl/wsl-config#systemd-support>
