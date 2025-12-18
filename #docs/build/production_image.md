# 本番環境用のDocker Imageについて

## 作成方法

プロジェクトルートディレクトリで以下のコマンドを実行する

```shell
docker compose -f '.docker/production/compose.yaml' build
```

必要であれば `--no-cache` オプションも使用する

## 動作確認方法(簡易)

プロジェクトルートディレクトリで以下のコマンドを実行する

```shell
# イメージを元にコンテナを起動
docker compose -f '.docker/production/compose.yaml' up

# devcontainer 環境内から
curl http://host.docker.internal:8000

# WSL2 環境内から
curl http://localhost:8000

# ホストOS(Windows) 環境内から
curl http://localhost:8000
```

## 内部動作について

* イメージ内にて `deno.jsonc` で定義されているタスクを使用します
* 8000ポートを使用するWebサーバーが起動します
  * 変更する場合は、以下のファイルのポート番号指定を、同時に修正する必要があります
    * `deno.jsonc`
    * `.docker/production/Dockerfile`
    * `.docker/production/compose.yaml`
* ベースイメージは `gcr.io/distroless/cc-debian13:nonroot` です
  * セキュリティ対策および軽量化を目的とした、shell等を含まないイメージです
    * よって `docker exec -it (hash) bash` といったような「コンテナに入って諸々確認する」ことは出来ません

## コンテナイメージサイズについて

* denoのバイナリ自体がそれなりに大きい(110MB超)
* `deno compile` で実行ファイル化しても 80MBを超える
  * 現状 `deno serve` で起動する想定の作りであるため、そこの修正をしないと実行ファイル化してもダメ
