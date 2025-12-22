# Deno におけるロギングについて

* Deno組み込みの[OpenTelemetry](https://opentelemetry.io/) (以下OTEL) 連携機能に頼る

## Open Telemetry 連携を前提としたログ出力について

* Deno側が[自動計装](https://docs.deno.com/runtime/fundamentals/open_telemetry/#auto-instrumentation) で各種データを付与したうえでログを出力してくれる
* `console.*` で標準出力に出せば、OTELが取りまとめてくれる

### リクエスト単位が分かる形でのログ出力

* 何もしなくてもリクエスト単位(が分かる情報付き)でログが出力されている
  * Deno側の自動計装によるもの
  * 基本的に 1つの `trace_id` が 1つのリクエストに対応する

### 他、アプリケーション側が付与した情報単位によるログ出力

#### ユーザー単位

* hono のミドルウェア側にてSpan attributes(Span属性)に `user.id` として情報を付与済み
  * `mw/uid.ts` 参照

#### それ以外

* 追加実装が必要
* `mw/uid.ts` を参考に情報を付与すれば、grafana tempo側でフィルタリングが可能

## 参考資料

* <https://docs.deno.com/runtime/fundamentals/open_telemetry/>
* <https://docs.deno.com/examples/basic_opentelemetry_tutorial/>
