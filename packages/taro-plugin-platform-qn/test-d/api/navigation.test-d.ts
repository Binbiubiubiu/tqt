/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const qnSwitchTabExReturn = Taro.qn.switchTabEx({
  id: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnSwitchTabExReturn);

const qnShowTabExReturn = Taro.qn.showTabEx({
  id: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnShowTabExReturn);

const qnHideTabExReturn = Taro.qn.hideTabEx({
  id: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnHideTabExReturn);

const qnShowTabBarRedDotExReturn = Taro.qn.showTabBarRedDotEx({
  id: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnShowTabBarRedDotExReturn);

const qnHideTabBarRedDotExReturn = Taro.qn.hideTabBarRedDotEx({
  id: "",
  success(res: TqtQNGeneral.CallbackResult) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  fail(res: TqtQNGeneral.CallbackResult) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res: TqtQNGeneral.CallbackResult) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnHideTabBarRedDotExReturn);

const qnSetTabBarBadgeExReturn = Taro.qn.setTabBarBadgeEx({
  id: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnSetTabBarBadgeExReturn);

const qnRemoveTabBarBadgeExReturn = Taro.qn.removeTabBarBadgeEx({
  id: "",
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
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnRemoveTabBarBadgeExReturn);
