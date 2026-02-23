import { Context, Hono } from "@hono";
// * deno & jsrのhono の場合、ミドルウェアのインポートは `@hono/*` となる
import * as about from "@api/about.ts";
import * as fetchHandler from "@api/fetch.ts";
import * as rootest from "@api/rootest.ts";
import { default as tsxroute } from "@api/tsx.tsx";
import { etag } from "@hono/etag";
import { logger } from "@hono/logger";
import { uid } from "@mw/uid.ts";

const app = new Hono();

app.use(uid);
app.use(etag()).use(logger());

app.get("/", (c: Context): Response => c.text("Hono!"));
app.get("/about", about.Get);
app.get("/fetch", fetchHandler.Get);

// honoのベストプラクティスとしては「コントローラーを作るな(≒パス定義と実装を近くにせよ)」であるが
// ある程度の単位でまとめるのであればこうするかな、という感じ
app.route("/tsx", tsxroute);

app.get("/rootest", rootest.Get); // クエリパラメーターは定義不要

export default app;
