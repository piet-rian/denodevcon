import { Context, Hono } from "@hono";
// * deno & jsrのhono の場合、ミドルウェアのインポートは `@hono/*` となる
import { logger } from "@hono/logger";
import { etag } from "@hono/etag";
import { prettyJSON } from "@hono/pretty-json";
import * as about from "./api/about.ts";
import { default as tsxroute } from "./api/tsx.tsx";
import * as rootest from "./api/rootest.ts";

const app = new Hono();

app.use(etag()).use(logger()).use(prettyJSON());

app.get("/", (c: Context): Response => c.text("Hono!"));
app.get("/about", about.Get);

// honoのベストプラクティスとしては「コントローラーを作るな(≒パス定義と実装を近くにせよ)」であるが
// ある程度の単位でまとめるのであればこうするかな、という感じ
app.route("/tsx", tsxroute);

app.get("/rootest", rootest.Get); // クエリパラメーターは定義不要

export default app;
