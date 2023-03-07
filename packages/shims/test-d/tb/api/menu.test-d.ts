/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";

Taro.tb
  .setActionSheet({
    menuList: [
      {
        name: "点击事件",
        logo: "https://img.alicdn.com/tfs/TB1OQrxrHr1gK0jSZFDXXb9yVXa-80-80.png",
        eventName: "menuItemClick",
        openUrl: "",
      },
    ],
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
