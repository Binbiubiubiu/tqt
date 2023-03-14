/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const setNavigationBarReturn = Taro.setNavigationBar({
  title: "你好",
  backgroundColor: "#108ee9",
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(setNavigationBarReturn);
