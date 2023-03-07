/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const qnCleanTokenReturn = Taro.qn.cleanToken({
  success(res) {
    expectType<TqtGeneral.CallbackResult>(res);
  },
  fail(res) {
    expectType<TqtGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtGeneral.CallbackResult>>(qnCleanTokenReturn);

const qnShowSubAccountAuthReturn = Taro.qn.showSubAccountAuth({
  api: "",
  success(res) {
    expectType<TqtGeneral.CallbackResult>(res);
  },
  fail(res) {
    expectType<TqtGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtGeneral.CallbackResult>>(qnShowSubAccountAuthReturn);
