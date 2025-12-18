// deno-lint-ignore no-unused-vars
import { assert, assertEquals, assertFalse } from "@std/assert";

import app from "@entrypoint";

// * see. https://hono.dev/docs/getting-started/deno#testing

Deno.test("root", async () => {
  const res = await app.request("/");
  assertEquals(res.status, 200);

  const responseBody = await res.text();

  assertEquals(responseBody, "Hono!");
});

Deno.test("about", async () => {
  const res = await app.request("/about");
  assertEquals(res.status, 200);

  const responseJson = await res.json();

  assert("name" in responseJson);
  assert("site" in responseJson);

  assertEquals(responseJson.name, "foobars");
  assertEquals(responseJson.site, "norhe pole");
});

Deno.test("notExits", async () => {
  const res = await app.request("/notExits");
  assertEquals(res.status, 404);
});
