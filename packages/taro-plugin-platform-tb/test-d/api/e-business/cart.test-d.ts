/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbOpenCartReturn = Taro.tb.openCart({
  cartType: "tmail",
  forceH5: true,
  success(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  fail(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbOpenCartReturn);

const tbAddToCartReturn = Taro.tb.addToCart({
  itemIds: "574141925233_4018047819826_4",
  exts: "text:text|123:456",
  success(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  fail(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbAddToCartReturn);
