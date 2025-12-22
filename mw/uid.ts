import { Context, Next } from "@hono";
import { trace } from "@opentelemetry/api";

// ヘッダーからUIDを取得し、OpenTelemetryのスパンに設定するミドルウェア
export const uid = (c: Context, next: Next) => {
  const uidFromHeader = c.req.header("X-User-ID") || "anonymous";

  const activeSpan = trace.getActiveSpan();
  activeSpan?.setAttribute("user.id", uidFromHeader);

  // TODO: grafana lokiでuidを元にログをフィルタリングできるようにする
  // * Tempoでuid単位で「トレース」をフィルタリングすることはできている
  // * loki側でuidを元に「ログライン」をフィルタリングできるようにするにはどうすれば良いのかがわかっていない
  // * lokiだとlabelという概念でしかフィルタリングが出来ないので、送出なり集計(OTELコレクターのプロセッサ？)の段階でuidをlabelとするような設定が必要？
  return next();
};
