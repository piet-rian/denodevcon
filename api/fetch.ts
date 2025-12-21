import { Context } from "@hono";

// Deno の OpenTelemetry が fetch 単位で span を切ることを確認するためのエンドポイント

export async function Get(c: Context): Promise<Response> {
  console.log("before fetch");

  const fetched = await fetch("http://localhost:8000/about");

  console.log("after fetch");
  return c.json(await fetched.json());
}
