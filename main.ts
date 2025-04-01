import { Context, Hono } from '@hono/hono'
// * deno & jsrのhono の場合、ミドルウェアのインポートは `@hono/hono/*` となる 
import { logger } from '@hono/hono/logger'
import { etag } from "@hono/hono/etag"
import { prettyJSON } from "@hono/hono/pretty-json"
import AboutGet from "./api/about.ts"

const app = new Hono()

app.use(etag()).use(logger()).use(prettyJSON())

app.get('/', (c: Context): Response => c.text('Hono!'))
app.get('/about', AboutGet)

export default app
