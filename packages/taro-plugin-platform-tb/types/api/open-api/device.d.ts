import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.getDeviceId {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 返回的设备Id */
      deviceId: string;
    }
  }

  interface tb {
    /**
     * 获取用户设备ID
     */
    getDeviceId(option?: tb.getDeviceId.Option): Promise<tb.getDeviceId.SuccessCallbackResult>;
  }
}
