/// <reference path="api/base/plugin.d.ts" />
/// <reference path="api/base/sub-package.d.ts" />
/// <reference path="api/device/auth-guide.d.ts" />
/// <reference path="api/device/os.d.ts" />
/// <reference path="api/device/server-time.d.ts" />
/// <reference path="api/device/sms.d.ts" />
/// <reference path="api/device/step.d.ts" />
/// <reference path="api/device/vibrate.d.ts" />
/// <reference path="api/e-business/address.d.ts" />
/// <reference path="api/e-business/cart.d.ts" />
/// <reference path="api/e-business/goods.d.ts" />
/// <reference path="api/e-business/message.d.ts" />
/// <reference path="api/e-business/order.d.ts" />
/// <reference path="api/e-business/shop.d.ts" />
/// <reference path="api/e-business/sku.d.ts" />
/// <reference path="api/media/image.d.ts" />
/// <reference path="api/network/request.d.ts" />
/// <reference path="api/network/upload.d.ts" />
/// <reference path="api/network/websocket.d.ts" />
/// <reference path="api/open-api/calendar.d.ts" />
/// <reference path="api/open-api/desktop.d.ts" />
/// <reference path="api/open-api/device.d.ts" />
/// <reference path="api/open-api/error-page.d.ts" />
/// <reference path="api/open-api/light-app.d.ts" />
/// <reference path="api/open-api/login.d.ts" />
/// <reference path="api/open-api/menu.d.ts" />
/// <reference path="api/open-api/navigation.d.ts" />
/// <reference path="api/open-api/route.d.ts" />
/// <reference path="api/open-api/security.d.ts" />
/// <reference path="api/ui/canvas.d.ts" />
/// <reference path="api/ui/city-picker.d.ts" />
/// <reference path="api/ui/date-picker.d.ts" />
/// <reference path="api/ui/interaction.d.ts" />
/// <reference path="api/ui/navigation-bar.d.ts" />
/// <reference path="api/authorize.d.ts" />
/// <reference path="api/data-security.d.ts" />
/// <reference path="api/location.d.ts" />
/// <reference path="api/storage.d.ts" />
/// <reference path="api/runtime.d.ts" />
/// <reference path="api/webview.d.ts" />
/// <reference path="api/widget.d.ts" />

import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface tb {}
  interface TaroStatic {
    tb: tb;
    /**
     * 开始原生全局事件监听
     */
    on(eventName: string, callback: (...args: Array<unknown>) => void): { remove: () => void };
    /**
     * 取消原生全局事件监听
     */
    off(eventName: string, callback: (...args: Array<unknown>) => void): void;
  }
}
