import { assertEquals } from "@std/assert";
import { Stub, stub } from "@std/testing/mock";

/*
 ! see https://docs.deno.com/examples/mocking_tutorial/#stubbing
*/

Deno.test("stub(Object.property)", () => {
  // スタブ対象となるクラス(略記のため内部クラス)
  const target = new class {
    id = () => 1; // スタブによって置き換えられるプロパティ(基本的にはメソッド)
  }();

  assertEquals(1, target.id()); // 置き換え前なので 1 が返ってくる

  // stubTarget の プロパティ`id` を置き換える
  const idStub: Stub = stub(target, "id", () => 3);

  try {
    assertEquals(3, target.id()); // 置き換わっているので 3 が返ってくる
  } finally {
    idStub.restore(); // 元のプロパティを復元する
  }

  assertEquals(1, target.id()); // 復元されたため 1 が返ってくる
});

Deno.test("stub(fetch)", async () => {
  // スタブ化される前のfetchを復旧用に確保
  const originalFetch = globalThis.fetch;

  // mock化された fetch に return させる内容
  const mockResponse = new Response(
    JSON.stringify({ id: "123", name: "John Doe" }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );

  // 置き換え
  globalThis.fetch = stub(
    globalThis,
    "fetch",
    () => Promise.resolve(mockResponse),
  ) as typeof globalThis.fetch;

  try {
    const response = await fetch(`http://localhost:8000/about`);
    const result = await response.json();
    assertEquals(result, { id: "123", name: "John Doe" });
  } finally {
    // Restore original fetch
    globalThis.fetch = originalFetch;
  }
});
