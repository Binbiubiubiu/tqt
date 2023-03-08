/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const qnCleanTokenReturn = Taro.qn.cleanToken({
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnCleanTokenReturn);

const qnShowSubAccountAuthReturn = Taro.qn.showSubAccountAuth({
  api: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnShowSubAccountAuthReturn);
