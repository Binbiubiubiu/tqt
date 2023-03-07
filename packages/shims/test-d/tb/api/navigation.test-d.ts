/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";

Taro.tb
  .addMenu({
    event: "service",
    data: {
      sellerNick: "小程序测试qa",
      extData1: "自定义参数1",
      extData2: "自定义参数2",
    },
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
