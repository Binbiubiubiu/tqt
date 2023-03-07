/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.tb
  .openMessage({
    sellerNick: "商家测试账号",
    forceH5: true,
    params: {
      itemId: "",
    },
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .subscribe({
    domainKey: "message",
    resourceKeys: ["1000xxx"],
    success(res: Taro.tb.subscribe.SuccessCallbackResult) {
      expectType<string>(res.accessToken);
      expectType<number>(res.validTime);
      expectType<TqtGeneral.IAnyObject>(res.resourceItems);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.subscribe.SuccessCallbackResult) => {});
