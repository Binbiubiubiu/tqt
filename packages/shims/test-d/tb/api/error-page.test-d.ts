/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";

Taro.tb
  .showErrorView({
    reason: "应用未上线",
    message: "再等一下咯",
    action: 2,
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .hideErrorView({
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
