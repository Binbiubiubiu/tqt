/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";

Taro.tb
  .openScuCombination({
    productItems: [{ itemId: 627478204974 }],
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
