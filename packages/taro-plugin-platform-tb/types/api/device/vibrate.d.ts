import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace vibrate {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  namespace watchShake {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  interface TaroStatic {
    /** 调用振动功能 */
    vibrate(option?: vibrate.Option): Promise<TqtTBGeneral.CallbackResult>;

    /** 摇一摇功能 */
    watchShake(option?: watchShake.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
