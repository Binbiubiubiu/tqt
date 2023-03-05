import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.tb
  .chooseAddress({
    success(res: Taro.tb.chooseAddress.SuccessCallbackResult) {
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
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.chooseAddress.SuccessCallbackResult) => {});
