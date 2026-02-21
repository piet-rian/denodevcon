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

loki ではなくて tempo 経由で見ることが出来る

1. 左サイドメニューの **Explore** を選択
2. 左上の方のドロップダウンから **Tempo** を選択
3. `Query type` から `TraceQL` を選択
4. クエリ入力欄が出てくるので `{span.user.id = "<ユーザーID>"}` と入力
    * `<ユーザーID>` の部分が実際には `12345` とかそういうのになる
5. 右上の方の 🔄(マウスオーバーで `Run query` と出てくる青いボタン) をクリック
6. クエリ欄の下部に `Table - Traces` という新たな欄が出てきて、ここで指定したユーザーのログが `trace_id` 単位でまとめられてでてくる

#### そこから実際のログを見る

1. `Table - Traces` 内の `trace_id` をクリックすると、右側に選択したトレース単位の情報を表示する領域が新たに出てくる
2. `Service & Operation` 欄に `📄LOG` というアイコンがあるのでクリックする
3. 選択したトレース単位でのログがまとめて表示される

### lokiのほうでユーザー単位のログをばっと見たいのだが

* 現状では出来ない
  * 正確には、出来るようにするための方法がわからない
* Loki における Label として ユーザー単位の情報を送出ないしは集計できれば出来そうな気配はあるが…

## OpenTelemetry用のコンテナについて

* `docker.io/grafana/otel-lgtm`
  * Denoのドキュメントで推奨されていたため、そのまま採用

## 参考資料

* <https://opentelemetry.io/ja/>
* <https://hub.docker.com/r/grafana/otel-lgtm>
