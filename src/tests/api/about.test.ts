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

Deno.test("fetch", async () => {
  const res = await app.request("/about");
  assertEquals(res.status, 200);
  const responseJson = await res.json();

  assert("name" in responseJson);
  assert("site" in responseJson);

  assertEquals(responseJson.name, "foobars");
  assertEquals(responseJson.site, "norhe pole");
});

Deno.test("rootest(empty)", async () => {
  const res = await app.request("/rootest");

  assertEquals(res.status, 200);
  const responseJson = await res.json();

  assert("status" in responseJson);
  assert("date" in responseJson);

  assertEquals(responseJson.status, "success");
  assertEquals(responseJson.date, "asc");
});

Deno.test("rootest(other)", async () => {
  const res = await app.request("/rootest?date=foobar");

  assertEquals(res.status, 200);
  const responseJson = await res.json();

  assert("status" in responseJson);
  assert("date" in responseJson);

  assertEquals(responseJson.status, "success");
  assertEquals(responseJson.date, "asc");
});
Deno.test("rootest(asc)", async () => {
  const res = await app.request("/rootest?date=asc");

  assertEquals(res.status, 200);
  const responseJson = await res.json();

  assert("status" in responseJson);
  assert("date" in responseJson);

  assertEquals(responseJson.status, "success");
  assertEquals(responseJson.date, "asc");
});
Deno.test("rootest(dsc)", async () => {
  const res = await app.request("/rootest?date=desc");

  assertEquals(res.status, 200);
  const responseJson = await res.json();

  assert("status" in responseJson);
  assert("date" in responseJson);

  assertEquals(responseJson.status, "success");
  assertEquals(responseJson.date, "desc");
});
