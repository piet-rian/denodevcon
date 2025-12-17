### 本番環境用のDockerイメージを作成するためのDockerfile

### 定数定義 ###
## (各ステージで同名のARGを定義することで、この値を引き継ぐ)
ARG DENO_VERSION=2.6.1
ARG APP_DIR=/app
ARG DENO_DIR=/deno-dir
ARG NONROOT_UID=65532
ARG NONROOT_GID=65532

### ビルドステージ ###
FROM denoland/deno:debian-${DENO_VERSION} AS builder
ARG APP_DIR
ARG DENO_DIR
ARG NONROOT_UID
ARG NONROOT_GID

# 作業ディレクトリを設定
WORKDIR ${APP_DIR}
ENV DENO_DIR=${DENO_DIR}

# 依存関係のインストールとキャッシュ
COPY . .
RUN deno cache main.ts
# 依存関係の所有権をnonrootに変更 (distroless には chown コマンドがないため)
RUN chown -R ${NONROOT_UID}:${NONROOT_GID} ${DENO_DIR} ${APP_DIR}


### 本番環境ステージ ###
## バイナリ移植用のイメージ
FROM denoland/deno:bin-${DENO_VERSION} AS bin

## 本番用イメージ(distroless)
# nonrootを使用したいためgcr.ioのdistrolessイメージを使用
FROM gcr.io/distroless/cc-debian13:nonroot AS production
ARG APP_DIR
ARG DENO_DIR

# 作業ディレクトリを設定
WORKDIR ${APP_DIR}

# ポートを公開
EXPOSE 8000

# binステージからDenoバイナリをコピー
COPY --from=bin /deno /usr/local/bin/deno

# 依存関係のキャッシュをコピー
ENV DENO_DIR=${DENO_DIR}
COPY --from=builder ${DENO_DIR} ${DENO_DIR}

# アプリケーションコードをコピー
COPY --from=builder ${APP_DIR} .

# アプリケーションのエントリポイント・起動コマンドを指定
# deno.jsonc に定義された start タスクを実行
ENTRYPOINT [ "deno" ]
CMD ["task", "start"]
