# Docker (Docker on WSL)

Docker Desktop は商用利用時にライセンス云々の話が出るため Docker on WSL の構築にする

## 手順

基本的には <https://docs.docker.com/engine/install/debian/#install-using-the-repository> の手順の通り

### apt に docker 用のリポジトリを追加する

```shell
##### debian(WSL)内で実行 #####
# sudo apt-get update に関しては同等の処理を実行済みであるため略
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
```

### apt からdockerの諸々をインストールする

```shell
##### debian(WSL)内で実行 #####
# インストール
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
# インストール確認
docker -v
```

### 追加設定

基本的に <https://docs.docker.com/engine/install/linux-postinstall/> の内容と同じ

```shell
##### debian(WSL)内で実行 #####
# sudo 無しで dockerが動くようにする設定
sudo groupadd docker
sudo usermod -aG docker $USER

### ここまで終わったら、いったんWSLに接続し直す ###

# docker のサービスを起動
sudo service docker restart

# WSL起動時に docker サービスが自動起動するようにする
sudo systemctl enable docker
```

### 動作確認

```shell
##### debian(WSL)内で実行 #####
## docker 自体の動作確認
# サンプルイメージの実行
docker run hello-world

### サンプルイメージのpullとかが行われるので少し待つ ###

## 以下のようなメッセージが表示されたら完了

# Hello from Docker!
# This message shows that your installation appears to be working correctly.
```

```shell
##### debian(WSL)内で実行 #####
## docker compose の動作確認
# compose が動くかどうかだけ確認
docker compose version
```

## 参考資料

- <https://docs.docker.com/engine/install/debian/>
- <https://docs.docker.com/engine/install/linux-postinstall/>
