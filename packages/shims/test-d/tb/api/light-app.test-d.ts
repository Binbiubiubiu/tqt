/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.tb
  .checkAddedStatus({
    success(res: Taro.tb.checkAddedStatus.SuccessCallbackResult) {
      expectType<boolean>(res.isFollowed);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.checkAddedStatus.SuccessCallbackResult) => {});
