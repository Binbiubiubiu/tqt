import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.addToDesktop {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 桌面快捷方式的名字 */
      iconName: string;
      /** 桌面快捷方式的图标的URL */
      iconUrl: string;
      /** 桌面快捷方式点击后跳转的URL */
      targetUrl: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  interface tb {
    /**
     * 获取用户设备ID
     */
    addToDesktop(option: tb.addToDesktop.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
