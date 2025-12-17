import { assert, assertFalse } from "@std/assert";
import { RangeCC, RangeCO, RangeOC, RangeOO } from "@utils/range.ts";

Deno.test("oo", () => {
  const range = new RangeOO(0, 10);

  assertFalse(range.constain(-1));
  assertFalse(range.constain(0));
  assert(range.constain(1));

  assert(range.constain(9));
  assertFalse(range.constain(10));
  assertFalse(range.constain(11));
});

Deno.test("cc", () => {
  const range = new RangeCC(0, 10);

  assertFalse(range.constain(-1));
  assert(range.constain(0));
  assert(range.constain(1));

  assert(range.constain(9));
  assert(range.constain(10));
  assertFalse(range.constain(11));
});

Deno.test("oc", () => {
  const range = new RangeOC(0, 10);

  assertFalse(range.constain(-1));
  assertFalse(range.constain(0));
  assert(range.constain(1));

  assert(range.constain(9));
  assert(range.constain(10));
  assertFalse(range.constain(11));
});

Deno.test("co", () => {
  const range = new RangeCO(0, 10);

  assertFalse(range.constain(-1));
  assert(range.constain(0));
  assert(range.constain(1));

  assert(range.constain(9));
  assertFalse(range.constain(10));
  assertFalse(range.constain(11));
});
