import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.qn
  .openChat({
    nick: "",
    text: "",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.qn
  .imGetActiveUser({
    success(res: Taro.qn.imGetActiveUser.SuccessCallbackResult) {
      expectType<string>(res.user_nick);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.qn.imGetActiveUser.SuccessCallbackResult) => {});

Taro.qn
  .changePrice({
    tid: "",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
