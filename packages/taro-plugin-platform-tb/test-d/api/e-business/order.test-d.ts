/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbConfirmCustomOrderReturn = Taro.tb.confirmCustomOrder({
  data: {
    itemId: 12345,
    skuId: -1,
    quantity: 1,
    customization: {
      pic: [{ id: 1, url: "https://gw.alicdn.com/tfs/TB1T6PfBFzqK1RjSZSgXXcpAVXa-96-96.jpg" }],
      text: [
        { id: 1, content: "手镯颜色:黑色纯银开口手镯" },
        { id: 2, content: "图案颜色:测试" },
        { id: 3, content: "尺码:SS" },
      ],
    },
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbConfirmCustomOrderReturn);
