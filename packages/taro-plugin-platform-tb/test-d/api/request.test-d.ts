/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbRequestReturn = Taro.tb.request({
  url: "",
  method: "",
  headers: { "content-type": "application/json", "x-ada": "dasd" },
  params: { aaa: "bbb", ccc: "dddd" },
  options: { enableSystemParams: true, timeout: 6000 },
  body: { "1111": "22222", "3333": "4444" },
  success(res) {
    expectType<Taro.tb.request.SuccessCallbackResult>(res);
    expectType<string>(res.code);
    expectType<string>(res.content);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.request.SuccessCallbackResult>>(tbRequestReturn);
