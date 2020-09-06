import {
  helpers,
  testing,
} from "../deps.js";
import Method from "../mod.js";

const { errors } = helpers;

Deno.test("validateArgs should pass", function () {
  const method = new Method({
    name: "something",
    call: "eth_something",
    params: 1,
  });

  method.validateArgs([1]);
  method.validateArgs(["heloas"]);
});

Deno.test("validateArgs should return call based on args", function () {
  const method = new Method({
    name: "something",
    call: "eth_something",
    params: 2,
  });

  testing.assertThrows(
    () => method.validateArgs([1]),
    Error,
    errors.InvalidNumberOfParams(1, 2, "something").message,
  );
  testing.assertThrows(
    () => method.validateArgs(["heloas", "12", 3]),
    Error,
    errors.InvalidNumberOfParams(3, 2, "something").message,
  );
});
