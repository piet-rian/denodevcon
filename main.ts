import { Context, Hono } from "@hono/hono";
// * deno & jsrのhono の場合、ミドルウェアのインポートは `@hono/hono/*` となる
import { logger } from "@hono/hono/logger";
import { etag } from "@hono/hono/etag";
import { prettyJSON } from "@hono/hono/pretty-json";
import * as about from "./api/about.ts";
import * as tsx from "./api/tsx.tsx";

const app = new Hono();

app.use(etag()).use(logger()).use(prettyJSON());

app.get("/", (c: Context): Response => c.text("Hono!"));
app.get("/about", about.Get);
app.get("/tsx", tsx.Get);

export default app;
