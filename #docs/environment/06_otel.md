# Open Telemetry (OTEL)

* OTELを使えるようにするための作業は不要
  * OTEL用のコンテナ(lgtm)が自動的に立ち上がるように、composeで設定済み

## 動作確認

```shell
##### devcontainer内で実行 #####
# 一行目が `HTTP/1.1 200 OK` なら正常動作
curl --head http://lgtm:3000/
```

## そもそもOTELって何

* システム監視用のフレームワークないしはツールキット
* テレメトリー(遠隔測定法)の名前の通り、メインシステムとは別で動く
  * 詳細は <https://opentelemetry.io/ja/docs/what-is-opentelemetry/> 参照

## なんでこんな仰々しいものが必要なのか

* Denoが「ログ周辺の諸々はOpen Telemetryに頼ってね」というスタンスであるため
  * [@stg/logのドキュメント](https://docs.deno.com/runtime/reference/std/log/) を見るとわかりやすい
    * "DenoのOpenTelemetry連携機能を使え" という誘導だけが残っている

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

## OpenTelemetry用のコンテナについて

* `docker.io/grafana/otel-lgtm`
  * Denoのドキュメントで推奨されていたため、そのまま採用

## 参考資料

* <https://opentelemetry.io/ja/>
* <https://hub.docker.com/r/grafana/otel-lgtm>
