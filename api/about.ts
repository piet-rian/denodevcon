import { Context } from "@hono/hono";

export function Get(c: Context): Response {
  console.log("GET /about");

  return c.json(
    {
      name: "foobars",
      site: "norhe pole",
    },
  );
}
