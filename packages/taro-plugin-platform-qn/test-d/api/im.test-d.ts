/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const qnOpenChatReturn = Taro.qn.openChat({
  nick: "",
  text: "",
  success(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  fail(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnOpenChatReturn);

const qnImGetActiveUserReturn = Taro.qn.imGetActiveUser({
  success(res) {
    expectType<Taro.qn.imGetActiveUser.SuccessCallbackResult>(res);
    expectType<string>(res.user_nick);
  },
  fail(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.qn.imGetActiveUser.SuccessCallbackResult>>(qnImGetActiveUserReturn);

const qnChangePriceReturn = Taro.qn.changePrice({
  tid: "",
  success(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  fail(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnChangePriceReturn);
