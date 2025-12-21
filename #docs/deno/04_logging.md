# Deno におけるロギングについて

* Deno組み込みの[OpenTelemetry](https://opentelemetry.io/) (以下OTEL) 連携機能に頼る

## Open Telemetry 連携を前提としたログ出力について

* `console.*` で標準出力に出せば、OTELが取りまとめてくれる

## Webサービスにおけるユーザー単位とかリクエスト単位の情報について

* 付与可能
* ミドルウェア的な場所で付与する(未実装)

## 参考資料

* <https://docs.deno.com/runtime/fundamentals/open_telemetry/>
* <https://docs.deno.com/examples/basic_opentelemetry_tutorial/>
