### 本番環境用のDockerイメージを作成するためのDockerfile
ARG DENO_VERSION=2.6.1

### ビルドステージ ###
FROM denoland/deno:debian-${DENO_VERSION} AS builder

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のインストールとビルド
COPY . .
RUN deno install --entrypoint main.ts


### 本番環境ステージ ###
## バイナリ移植用のイメージ
FROM denoland/deno:bin-${DENO_VERSION} AS bin

## 本番用イメージ(distroless)
# nonrootを使用したいためgcr.ioのdistrolessイメージを使用
FROM gcr.io/distroless/cc-debian13:nonroot AS production

# 作業ディレクトリを設定
WORKDIR /app

# ポートを公開
EXPOSE 8000

# binステージからDenoバイナリをコピー
COPY --from=bin /deno /usr/local/bin/deno

# builderステージから必要なファイルをコピー
# TODO: builderステージで行ったキャッシュが本番環境ステージに引き継がれない問題の解決
# 現状、この問題によりコンテナ起動時に再度依存関係の解決が発生してしまう(具体的にはhono系統のモジュール)
# プロジェクトルート以外の場所にキャッシュが保存されている？
COPY --from=builder /app .

# アプリケーションのエントリポイント・起動コマンドを指定
# deno.jsonc に定義された start タスクを実行
ENTRYPOINT [ "deno" ]
CMD ["task", "start"]
