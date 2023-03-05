import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.tb
  .showSku({
    itemId: "",
    success(res: Taro.tb.showSku.SuccessCallbackResult) {
      expectType<string>(res.status);
      expectType<string>(res.itemId);
      expectType<string>(res.skuId);
      expectType<string>(res.quantity);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.showSku.SuccessCallbackResult) => {});

Taro.tb
  .hideSku({
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
