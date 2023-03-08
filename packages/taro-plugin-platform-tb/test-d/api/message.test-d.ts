/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbOpenMessageReturn = Taro.tb.openMessage({
  sellerNick: "商家测试账号",
  forceH5: true,
  params: {
    itemId: "",
  },
  success(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbOpenMessageReturn);

const tbSubscribeReturn = Taro.tb.subscribe({
  domainKey: "message",
  resourceKeys: ["1000xxx"],
  success(res) {
    expectType<Taro.tb.subscribe.SuccessCallbackResult>(res);
    expectType<string>(res.accessToken);
    expectType<number>(res.validTime);
    expectType<TqtTBGeneral.IAnyObject>(res.resourceItems);
  },
  fail(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.subscribe.SuccessCallbackResult>>(tbSubscribeReturn);
