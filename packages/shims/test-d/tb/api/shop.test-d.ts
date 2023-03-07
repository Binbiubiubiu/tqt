/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.tb
  .favorShop({
    id: 0,
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .checkShopFavoredStatus({
    id: 0,
    success(res: Taro.tb.checkShopFavoredStatus.SuccessCallbackResult) {
      expectType<number>(res.id);
      expectType<boolean>(res.isFavor);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.checkShopFavoredStatus.SuccessCallbackResult) => {});

Taro.tb
  .unFavorShop({
    id: 1838187801,
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
