import { Context } from "@hono";

export function Get(c: Context): Response {
  console.log("in /about endpoint");

  return c.json(
    {
      name: "foobars",
      site: "norhe pole",
    },
  );
}
