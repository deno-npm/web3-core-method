import {
  testing,
} from "../deps.js";
import Method from "../mod.js";

Deno.test("getCall should return call name", function () {
  const call = "hello_call_world";
  const method = new Method({
    name: "something",
    call: call,
  });

  testing.assertEquals(call, method.getCall());
});

Deno.test("getCall should return call based on args", function () {
  const call = function (args) {
    return args ? args.length.toString() : "0";
  };

  const method = new Method({
    name: "something",
    call: call,
  });

  var r0 = method.getCall();
  var r1 = method.getCall([1]);
  var r2 = method.getCall([1, 2]);

  testing.assertEquals(r0, "0");
  testing.assertEquals(r1, "1");
  testing.assertEquals(r2, "2");
});
