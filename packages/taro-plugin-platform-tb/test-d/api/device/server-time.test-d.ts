/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const getServerTimeReturn = Taro.getServerTime({
  success(res) {
    expectType<Taro.getServerTime.SuccessCallbackResult>(res);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.getServerTime.SuccessCallbackResult>>(getServerTimeReturn);
