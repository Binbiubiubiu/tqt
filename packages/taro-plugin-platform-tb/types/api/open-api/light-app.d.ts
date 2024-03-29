import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.checkAddedStatus {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 是否被关注 */
      isFollowed: boolean;
    }
  }

  interface tb {
    /**
     * 查询轻应用是否被添加
     */
    checkAddedStatus(
      option?: tb.checkAddedStatus.Option,
    ): Promise<tb.checkAddedStatus.SuccessCallbackResult>;
  }
}
