import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace getRunScene {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 小程序当前运行的版本，枚举类型：develop（开发版）、trial（体验版）、release（发布版） */
      envVersion: string;
    }
  }

  interface TaroStatic {
    /**
     * 非对称加密
     */
    getRunScene(option?: getRunScene.Option): Promise<getRunScene.SuccessCallbackResult>;
  }
}
