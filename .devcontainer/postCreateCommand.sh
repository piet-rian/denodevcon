#!/bin/sh

##### devcontainer の postCreateCommand から実行されるスクリプト
# ! devcontainer の features によらない `apt install` あるいはそれに準ずる行為はここで行うこと
# * 準ずる行為
#   * ソースからビルドする: `make install`
#   * http(s)ネットワーク上からファイルを取得: `wget`, `curl` など
#   * 言語固有のパッケージマネージャーを使う: `npm install -g`, `pip install --user`, `luarocks install` など
#     * 開発環境が必要としているパッケージを想定 (特定の静的解析ツールの導入など)
#     * アプリケーションが必要としているパッケージについては、(denoなら)deno.jsoncのような形で管理がされているはず

### スクリプト内でエラーが発生した場合に即座に終了するためのオプション
set -e

### 以下、tmp以下のディレクトリで実施する
mkdir /tmp/dev-container-post-create-user-define-actions
cd /tmp/dev-container-post-create-user-define-actions

##### 本体部分 #####
#
# 本プロジェクトにおいては、現時点では feature などで事が足りているため何もしない
#

##### git ローカル設定 #####
# see. https://git-scm.com/docs/git-config
# devcontainer環境なら global 指定でも他に影響が出ないはずなので良いだろうという判断
git config --global fetch.prune true
git config --global fetch.pruneTags true
git config --global log.date iso8601
git config --global blame.date iso8601
git config --global merge.ff false # 必ずマージコミットを作る
git config --global merge.autoStash true
git config --global pull.autoStash true
git config --global core.longpaths true # パス長すぎ対策

##### print completion message #####
echo "postCreateCommand.sh: \033[42m completed. \033[0m"
echo "\033[32m ===== devcontainer のセットアップが完了しました。 ===== \033[0m"
exit 0
