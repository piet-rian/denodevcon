# Deno におけるロギングについて

* Deno組み込みの[OpenTelemetry](https://opentelemetry.io/) (以下OTEL) 連携機能に頼る

## Open Telemetry 連携を前提としたログ出力について

* Deno側が[自動計装](https://docs.deno.com/runtime/fundamentals/open_telemetry/#auto-instrumentation) で各種データを付与したうえでログを出力してくれる
* `console.*` で標準出力に出せば、OTELが取りまとめてくれる

### リクエスト単位が分かる形でのログ出力

* 何もしなくてもリクエスト単位(が分かる情報付き)でログが出力されている
  * 基本的に 1つの `trace_id` が 1つのリクエストに対応するため

### 同ユーザー単位(他、アプリケーション側が付与した情報単位)によるログ出力

* hono のミドルウェアを自作すれば `Span attributes` にユーザー識別子を付与することは可能
* ただし、`trace_id`のように grafana 上でフィルタリングするための情報としての付与方法が不明
  * grafana loki側の設定だけでなんとかなるのか
  * それとも、アプリケーション側とかコレクター側での対応が必要なのか不明(未調査)

## 参考資料

* <https://docs.deno.com/runtime/fundamentals/open_telemetry/>
* <https://docs.deno.com/examples/basic_opentelemetry_tutorial/>
