import {
  testing,
} from "../deps.js";
import Method from "../mod.js";

Deno.test("formatInput should format plain input", function () {
  const star = function (arg) {
    return arg + "*";
  };

  const method = new Method({
    name: "something",
    call: "eth_something",
    inputFormatter: [star, star, star],
  });
  const args = ["1", "2", "3"];
  const expectedArgs = ["1*", "2*", "3*"];
  const result = method.formatInput(args);

  testing.assertEquals(result, expectedArgs);
});

Deno.test("formatInput should do nothing if there is no formatter", function () {
  const method = new Method({ name: "something", call: "eth_something" });
  const args = [1, 2, 3];
  const result = method.formatInput(args);

  testing.assertEquals(result, args);
});
