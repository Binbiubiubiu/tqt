/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.login({
  success(res) {
    expectType<Taro.login.SuccessCallbackResult>(res);
    expectType<string>(res.accessToken);
  },
  fail(res) {
    expectType<TaroGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TaroGeneral.CallbackResult>(res);
  },
});
