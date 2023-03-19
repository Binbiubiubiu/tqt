import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace createWebViewContext {
    interface WebViewContext {
      postMessage(msg: TqtTBGeneral.IUnknownObject): void;
    }
  }

  interface TaroStatic {
    /**
     * 通过创建webviewContext提供从小程序向web-view发送消息的能力。创建并返回 web-view 上下文 webViewContext 对象。
     */
    createWebViewContext(id: string): createWebViewContext.WebViewContext;

    /**
     * 在 H5 页面调用 my API 前需要在 H5 页面中引入 https://appx/web-view.min.js 依赖
     * H5的js代码中需要先定义my.onMessage 用于接收来自应用的消息。
     */
    onMessage: (e: TqtTBGeneral.IAnyObject) => void;

    /** H5向应用发送消息 */
    postMessage(msg: TqtTBGeneral.IUnknownObject): void;
  }
}
