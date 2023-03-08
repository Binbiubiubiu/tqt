import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.navigateToWebPage {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 打开页面的H5链接 */
      url: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.navigateToQAP {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 跳转到qap的url，注意：url中请不要传入.js后缀 */
      url: string;
      /** 页面名称 */
      title?: string;
      /** 页面参数 */
      query?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.closeQAP {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  interface qn {
    /**
     * 在千牛工作台打开网页
     *
     */
    navigateToWebPage(options: qn.navigateToWebPage.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 在小程序中唤起插件页面
     *
     */
    navigateToQAP(options: qn.navigateToQAP.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 关闭由 `Taro.qn.navigateToQAP` 打开的页面
     *
     */
    closeQAP(options: qn.closeQAP.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
