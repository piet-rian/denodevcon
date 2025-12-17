### 本番環境用のDockerイメージを作成するためのDockerfile
ARG DENO_VERSION=2.6.1

### ビルドステージ ###
FROM denoland/deno:debian-${DENO_VERSION} AS builder

# 作業ディレクトリを設定
WORKDIR /app
ENV DENO_DIR=/deno-dir

# 依存関係のインストールとキャッシュ
COPY . .
RUN deno cache main.ts
# 依存関係の所有権をnonrootに変更 (distroless には chown コマンドがないため)
RUN chown -R 65532:65532 /deno-dir /app


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

# 依存関係のキャッシュをコピー
ENV DENO_DIR=/deno-dir
COPY --from=builder /deno-dir /deno-dir

# アプリケーションコードをコピー
COPY --from=builder /app .

# アプリケーションのエントリポイント・起動コマンドを指定
# deno.jsonc に定義された start タスクを実行
ENTRYPOINT [ "deno" ]
CMD ["task", "start"]
