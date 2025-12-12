import { Context, Hono } from "@hono";
// * deno & jsrのhono の場合、ミドルウェアのインポートは `@hono/*` となる
import { logger } from "@hono/logger";
import { etag } from "@hono/etag";
import { prettyJSON } from "@hono/pretty-json";
import * as about from "./api/about.ts";
import * as tsx from "./api/tsx.tsx";
import * as rootest from "./api/rootest.ts";

const app = new Hono();

app.use(etag()).use(logger()).use(prettyJSON());

app.get("/", (c: Context): Response => c.text("Hono!"));
app.get("/about", about.Get);
app.get("/tsx", tsx.Get);
app.get("/rootest", rootest.Get); // クエリパラメーターは定義不要

export default app;
