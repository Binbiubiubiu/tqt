import { test } from "uvu";
import assert from "uvu/assert";
import { promisefy } from "../src/convert";

test("promisefy", async () => {
  const mock = {
    string(t: string) {
      return t;
    },
    strings(_: string, ...ts: string[]) {
      return ts[0];
    },
    helloSuccess(ops: any) {
      ops.success("success");
    },
    helloFail(ops: any) {
      ops.fail("fail");
    },
    world(_: any, cb: any) {
      cb("done");
    },
    world2(args: string) {
      return args;
    },
    env: "development",
  };
  const target = {} as any;
  promisefy(target, mock, {
    sfcApis: new Set(["string", "strings", "helloSuccess", "helloFail"]),
    cbApis: new Set(["world"]),
  });
  let res = await target.string("1");
  assert.is(res, "1");

  res = await target.strings("1", "2");
  assert.is(res, "2");

  res = await target.helloSuccess();
  assert.is(res, "success");

  try {
    res = await target.helloFail({}, 1);
  } catch (e) {
    assert.is(e, "fail");
  }

  res = await target.world({}, () => {});
  assert.is(res, "done");

  res = await target.world({});
  assert.is(res, "done");

  res = await target.world2("done");
  assert.is(res, "done");

  assert.is(target.env, "development");
});

test.run();
