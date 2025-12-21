# Open Telemetry (OTEL)

* システム監視用のフレームワークないしはツールキット
* テレメトリー(遠隔測定法)の名前の通り、メインシステムとは別で動く
  * 詳細は <https://opentelemetry.io/ja/docs/what-is-opentelemetry/> 参照

## なんでこんな仰々しいものが必要なのか

* Denoが「ログ周辺の諸々はOpen Telemetryに頼ってね」というスタンスであるため
  * [@stg/logのドキュメント](https://docs.deno.com/runtime/reference/std/log/) を見るとわかりやすい
    * "DenoのOpenTelemetry連携機能を使え" という誘導だけが残っている

## devcontainer環境 で OpenTelemetry

* OpenTelemetry用のコンテナが自動的に立ち上がるようにcomposeで設定済み

### OpenTelemetry用のコンテナについて

* `docker.io/grafana/otel-lgtm`
  * Denoのドキュメントで推奨されていたため、そのまま採用

## Open Telemetryが収集した諸々の情報の見方(超簡易)

* <http://localhost:3000/> にアクセスする
  * ログインとかはとりあえずしなくて良い
* 左サイドメニューの **Drilldown** → **Logs** を選択
  * サイドメニューがない場合は **≡** をクリックすると表示されるはず
* 右上の 🕘️ から表示期間の制御が可能

### XXX単位で情報を見ることは出来る？

#### リクエスト単位

* ログ閲覧画面の `Filter by label value` から `trace_id` でフィルタをかければOK
  * `trace_id` が同一であれば、単一リクエスト内の処理であると認識して良い

### ユーザー単位

* 同 `XXXXX(今後実装)` でフィルタをかければOK

### 補足 `trace_id` と `span_id` の違い

* `trace_id` が一単位の処理の全体
* `span_id` は全体の中の部分
  * モノリシックな場合はほぼ等価となる
  * マイクロサービスの場合はサービスごとの処理単位が `span_id` になるぐらいの認識でよい

## 参考資料

* <https://docs.deno.com/runtime/reference/std/log/>
* <https://docs.deno.com/runtime/fundamentals/open_telemetry/>
* <https://opentelemetry.io/ja/>
* <https://hub.docker.com/r/grafana/otel-lgtm>
