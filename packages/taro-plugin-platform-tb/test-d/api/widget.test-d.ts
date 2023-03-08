/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbOpenScuCombinationReturn = Taro.tb.openScuCombination({
  productItems: [{ itemId: 627478204974 }],
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbOpenScuCombinationReturn);
