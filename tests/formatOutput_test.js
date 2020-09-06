import {
  testing,
} from "../deps.js";
import Method from "../mod.js";

Deno.test("formatOutput should format plain output", function () {
  const formatter = function (arg) {
    return arg + "*";
  };

  const method = new Method({
    name: "something",
    call: "eth_something",
    outputFormatter: formatter,
  });
  const args = "1";
  const expectedArgs = "1*";
  const result = method.formatOutput(args);

  testing.assertEquals(result, expectedArgs);
});

Deno.test("formatOutput should format plain output if array", function () {
  const formatter = function (arg) {
    return arg + "*";
  };

  const method = new Method({
    name: "something",
    call: "eth_something",
    outputFormatter: formatter,
  });
  const args = "1";
  const expectedArgs = ["1*", "1*"];
  const result = method.formatOutput([args, args]);
  testing.assertEquals(result, expectedArgs);
});

Deno.test("formatOutput should format output arrays with the same formatter", function () {
  const formatter = function (arg) {
    return arg + "*";
  };

  const method = new Method({
    name: "something",
    call: "eth_something",
    outputFormatter: formatter,
  });
  const args = ["1", "2", "3"];
  const expectedArgs = ["1*", "2*", "3*"];

  const result = method.formatOutput(args);
  testing.assertEquals(result, expectedArgs);
});

Deno.test("formatOutput should do nothing if there is no formatter", function () {
  const method = new Method({ name: "something", call: "eth_something" });
  const args = [1, 2, 3];

  const result = method.formatOutput(args);
  testing.assertEquals(result, args);
});
