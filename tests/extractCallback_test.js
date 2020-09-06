import {
  testing,
} from "../deps.js";
import Method from "../mod.js";

Deno.test("extractCallback should extract callback", function () {
  const method = new Method({ name: "something", call: "eth_something" });
  const callback = function () {};
  const args = [1, callback];
  const result = method.extractCallback(args);

  testing.assertEquals(args.length, 1);
  testing.assertEquals(callback, result);
});

Deno.test("extractCallback should extract callback created using newFunction", function () {
  const method = new Method({ name: "something", call: "eth_something" });
  const callback = new Function();
  const args = [1, callback];
  const result = method.extractCallback(args);

  testing.assertEquals(args.length, 1);
  testing.assertEquals(callback, result);
});

Deno.test("extractCallback should not extract the callback", function () {
  const method = new Method({ name: "something", call: "eth_something" });
  const args = [1, 2];
  const result = method.extractCallback(args);

  testing.assertEquals(args.length, 2);
  testing.assertEquals(result, undefined);
});
