import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.showErrorView {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 错误图片的url地址 */
      icon?: string;
      /** 错误原因 */
      reason?: string;
      /** 情感化错误描述文案 */
      message?: string;
      /** 后续行动点类型
       * - 1：刷新；
       * - 2：回上页；
       * - 3：去升级
       */
      action: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  namespace tb.hideErrorView {
    interface Option extends TqtTBGeneral.IUnknownObject {
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
     * 显示错误页
     */
    showErrorView(option: tb.showErrorView.Option): Promise<TqtTBGeneral.CallbackResult>;
    /**
     * 隐藏错误页
     */
    hideErrorView(option: tb.hideErrorView.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
