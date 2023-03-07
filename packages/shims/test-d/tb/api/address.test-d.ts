/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";

Taro.tb
  .navigateToTaobaoPage({
    appCode: "shop",
    appParams: {
      OrderListType: "",
      orderId: "",
      tabType: "",
      weexShopTab: "shopindexbar",
      weexShopSubTab: "shopindex",
      shopId: "180175726",
    },
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
