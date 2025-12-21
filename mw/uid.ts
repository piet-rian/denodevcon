import { Context, Next } from "@hono";
import { trace } from "@opentelemetry/api";

// ヘッダーからUIDを取得し、OpenTelemetryのスパンに設定するミドルウェア
export const uid = (c: Context, next: Next) => {
  const uidFromHeader = c.req.header("X-User-ID") || "anonymous";

  const activeSpan = trace.getActiveSpan();
  activeSpan?.setAttribute("user.id", uidFromHeader);

  // TODO: grafanaでuidを元にログをフィルタリングできるようにする
  // * Loki側の Derived fields でなんとかなるのか
  // * Structure metadeta にuidを設定する必要があるのか
  // * 仮に後者だったとして、どうやってアプリケーション側でStructure metadetaに設定するのかも要調査

  return next();
};
