/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbFavorShopReturn = Taro.tb.favorShop({
  id: 0,
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbFavorShopReturn);

const tbCheckShopFavoredStatusReturn = Taro.tb.checkShopFavoredStatus({
  id: 0,
  success(res) {
    expectType<Taro.tb.checkShopFavoredStatus.SuccessCallbackResult>(res);
    expectType<number>(res.id);
    expectType<boolean>(res.isFavor);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.checkShopFavoredStatus.SuccessCallbackResult>>(
  tbCheckShopFavoredStatusReturn,
);

const tbUnFavorShopReturn = Taro.tb.unFavorShop({
  id: 1838187801,
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbUnFavorShopReturn);
