/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const sendSMSReturn = Taro.sendSMS({
  mobile: "95888",
  content: "测试",
  success(res) {
    expectType<Taro.sendSMS.SuccessCallbackResult>(res);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.sendSMS.SuccessCallbackResult>>(sendSMSReturn);
