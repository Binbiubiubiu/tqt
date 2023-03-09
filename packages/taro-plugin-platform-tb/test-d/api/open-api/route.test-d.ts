/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbChooseAddressReturn = Taro.tb.chooseAddress({
  success(res) {
    expectType<Taro.tb.chooseAddress.SuccessCallbackResult>(res);
    expectType<string>(res.type);
    expectType<string>(res.name);
    expectType<string>(res.telNumber);
    expectType<string>(res.provinceName);
    expectType<string>(res.cityName);
    expectType<string>(res.countyName);
    expectType<string>(res.streetName);
    expectType<string>(res.streetCode);
    expectType<string>(res.detailInfo);
  },
  fail(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.chooseAddress.SuccessCallbackResult>>(tbChooseAddressReturn);
