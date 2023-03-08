/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbSetActionSheetReturn = Taro.tb.setActionSheet({
  menuList: [
    {
      name: "点击事件",
      logo: "https://img.alicdn.com/tfs/TB1OQrxrHr1gK0jSZFDXXb9yVXa-80-80.png",
      eventName: "menuItemClick",
      openUrl: "",
    },
  ],
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbSetActionSheetReturn);
