import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.addMenu {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /**
       * 添加的按钮枚举值，支持`share`/`cart`/`service`
       */
      event: string;
      /**
       * 携带的参数，其中`event`为`service`时，需要传入`sellerNick`
       */
      data?: TqtTBGeneral.IAnyObject;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  interface tb {
    /**
     * 定制导航栏右侧按钮
     */
    addMenu(option: tb.addMenu.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
