/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const qnNavigateToWebPageReturn = Taro.qn.navigateToWebPage({
  url: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnNavigateToWebPageReturn);

const qnNavigateToQAPReturn = Taro.qn.navigateToQAP({
  url: "",
  title: "",
  query: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnNavigateToQAPReturn);

const qnCloseQAPReturn = Taro.qn.closeQAP({
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnCloseQAPReturn);
