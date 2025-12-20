# Deno におけるロギングについて

* [OpenTelemetry](https://opentelemetry.io/) 連携が出来るからそれに頼れ、というスタンス
* [JSRの@std/log](https://jsr.io/@std/log) も「将来的に削除されるので、Open Telemetry へ乗り換えを検討しろ」と告知を出している

## 開発環境(devcontainer+docker compose)における Open Telemetry

* `docker.io/grafana/otel-lgtm` として別コンテナ(同一ネットワーク内)で立ち上がっている
  * Denoのドキュメントで推奨されていたDockerImageをそのまま採用
  * 詳細は <https://hub.docker.com/r/grafana/otel-lgtm> 参照
* Webインタフェース搭載
  * <http://localhost:3000/> で ホストOSからアクセス可能

### ログの見方(超簡易)

* <http://localhost:3000/> にアクセスする
  * ログインとかはとりあえずしなくて良い
* 左サイドメニューの **Drilldown** → **Logs** を選択
  * サイドメニューがない場合は **≡** をクリックすると表示されるはず
* 右上の 🕘️ から表示機関の制御が可能

## 参考資料

* <https://docs.deno.com/runtime/fundamentals/open_telemetry/>
* <https://docs.deno.com/examples/basic_opentelemetry_tutorial/>
