import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.qn
  .openPlugin({
    appkey: "",
    category: "",
    param: "",
    appParam: "",
    directPage: "",
    pageName: "",
    directUrl: "",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.qn
  .openCategory({
    category: "",
    pageName: "",
    param: "",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.qn
  .changePrice({
    tid: "",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});