/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbCheckAddedStatusReturn = Taro.tb.checkAddedStatus({
  success(res) {
    expectType<Taro.tb.checkAddedStatus.SuccessCallbackResult>(res);
    expectType<boolean>(res.isFollowed);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.checkAddedStatus.SuccessCallbackResult>>(tbCheckAddedStatusReturn);
