import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface tb {}
  interface TaroStatic {
    tb: tb;
  }
}

/// <reference path="api/address.d.ts" />
/// <reference path="api/calendar.d.ts" />
/// <reference path="api/cart.d.ts" />
/// <reference path="api/desktop.d.ts" />
/// <reference path="api/device.d.ts" />
/// <reference path="api/error-page.d.ts" />
/// <reference path="api/goods.d.ts" />
/// <reference path="api/light-app.d.ts" />
/// <reference path="api/menu.d.ts" />
/// <reference path="api/message.d.ts" />
/// <reference path="api/navigation.d.ts" />
/// <reference path="api/order.d.ts" />
/// <reference path="api/request.d.ts" />
/// <reference path="api/route.d.ts" />
/// <reference path="api/security.d.ts" />
/// <reference path="api/shop.d.ts" />
/// <reference path="api/sku.d.ts" />
/// <reference path="api/step.d.ts" />
/// <reference path="api/widgets.d.ts" />
