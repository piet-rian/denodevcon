import { Context } from "@hono/hono";

export default function AboutGet(c:Context): Response {
    return c.json(
        {
            name: 'foobars',
            site: 'norhe pole'
        }
    )
}
