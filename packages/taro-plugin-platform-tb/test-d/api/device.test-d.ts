/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbAddGetDeviceId = Taro.tb.getDeviceId({
  success(res) {
    expectType<Taro.tb.getDeviceId.SuccessCallbackResult>(res);
    expectType<string>(res.deviceId);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.getDeviceId.SuccessCallbackResult>>(tbAddGetDeviceId);
