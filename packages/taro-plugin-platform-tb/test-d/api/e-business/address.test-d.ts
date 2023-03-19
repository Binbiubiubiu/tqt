/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbNavigateToTaobaoPageReturn = Taro.tb.navigateToTaobaoPage({
  appCode: "shop",
  appParams: {
    OrderListType: "",
    orderId: "",
    tabType: "",
    weexShopTab: "shopindexbar",
    weexShopSubTab: "shopindex",
    shopId: "180175726",
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbNavigateToTaobaoPageReturn);
