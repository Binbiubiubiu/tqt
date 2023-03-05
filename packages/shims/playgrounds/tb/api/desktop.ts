import Taro from "@tarojs/taro";

Taro.tb
  .addToDesktop({
    iconName: "",
    iconUrl: "",
    targetUrl: "",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
