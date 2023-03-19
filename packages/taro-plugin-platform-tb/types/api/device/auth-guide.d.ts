import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace showAuthGuide {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /**
       * 引导的权限标识，用于标识该权限类型。目前支持："NOTIFICATION"（通知），"LBS"（位置），"CAMERA"（相机），"PHOTO"（相册），"ADDRESSBOOK"（通信录），"MICROPHONE"（麦克风）
       */
      authType: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }
  interface TaroStatic {
    showAuthGuide(option: showAuthGuide.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
