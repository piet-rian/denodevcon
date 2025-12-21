# Deno におけるロギングについて

* Deno組み込みの[OpenTelemetry](https://opentelemetry.io/) (以下OTEL) 連携機能に頼る

## Open Telemetry 連携を前提としたログ出力について

* Deno側が[自動計装](https://docs.deno.com/runtime/fundamentals/open_telemetry/#auto-instrumentation) で各種データを付与したうえでログを出力してくれる
* `console.*` で標準出力に出せば、OTELが取りまとめてくれる

### リクエスト単位でのログ出力

* 何もしなくてもリクエスト単位(が分かる情報付き)でログが出力されている
  * 基本的に 1つの `trace_id` が 1つのリクエストに対応するため

### ユーザー単位でのログ出力

* ミドルウェア側でユーザー単位(が分かる情報を付与したうえ)でログが出力されている
  * **ミドルウェア未実装**

## Webサービスにおけるユーザー単位とかリクエスト単位の情報について

* 付与可能
* ミドルウェア的な場所で付与する(未実装)

## 参考資料

* <https://docs.deno.com/runtime/fundamentals/open_telemetry/>
* <https://docs.deno.com/examples/basic_opentelemetry_tutorial/>
