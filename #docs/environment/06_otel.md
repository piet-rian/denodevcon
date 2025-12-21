# Open Telemetry (OTEL)

* システム監視用のフレームワークないしはツールキット
* テレメトリー(遠隔測定法)の名前の通り、メインシステムとは別で動く

<https://opentelemetry.io/ja/docs/what-is-opentelemetry/> を読んでも良い

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

### ログ

* 左サイドメニューの **Drilldown** → **Logs** を選択
  * サイドメニューがない場合は **≡** をクリックすると表示されるはず
* 右上の 🕘️ から表示期間の制御が可能

## ユーザー単位とかリクエスト単位で情報を見ることは出来る？

* (メインシステム側でそういった情報を付与した上でOTELに諸々を送信すれば)出来る。
  * アプリケーションコード内でそういった情報を付与するための格闘をする必要は基本的にない
    * Webフレームワークのミドルウェア的な所でどうにかする内容
    * 情報の付与に際して[OTELにおけるスパン](https://opentelemetry.io/ja/docs/concepts/signals/traces/#spans)と概念が登場する

## 参考資料

* <https://docs.deno.com/runtime/reference/std/log/>
* <https://docs.deno.com/runtime/fundamentals/open_telemetry/>
* <https://opentelemetry.io/ja/>
* <https://hub.docker.com/r/grafana/otel-lgtm>
