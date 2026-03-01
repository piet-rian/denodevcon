import { Context, Next } from "@hono";
import { trace } from "@opentelemetry/api";

/**
 * HTTPヘッダからUIDを取得し、OpenTelemetryのスパンに設定するミドルウェア
 */
export const uid = (c: Context, next: Next) => {
  const uidFromHeader = c.req.header("X-User-ID") || "anonymous";

  const activeSpan = trace.getActiveSpan();
  activeSpan?.setAttribute("user.id", uidFromHeader);

  return next();
};
