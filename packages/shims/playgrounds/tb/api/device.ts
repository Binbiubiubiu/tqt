import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.tb
  .getDeviceId({
    success(res: Taro.tb.getDeviceId.SuccessCallbackResult) {
      expectType<string>(res.deviceId);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.getDeviceId.SuccessCallbackResult) => {});
