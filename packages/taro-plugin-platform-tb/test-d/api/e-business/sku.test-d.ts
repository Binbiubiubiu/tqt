/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbShowSkuReturn = Taro.tb.showSku({
  itemId: "",
  success(res) {
    expectType<Taro.tb.showSku.SuccessCallbackResult>(res);
    expectType<string>(res.status);
    expectType<string>(res.itemId);
    expectType<string>(res.skuId);
    expectType<string>(res.quantity);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.showSku.SuccessCallbackResult>>(tbShowSkuReturn);

const tbHideSkuReturn = Taro.tb.hideSku({
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbHideSkuReturn);
