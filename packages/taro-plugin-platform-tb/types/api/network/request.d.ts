import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.request {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 待请求的URL */
      url: string;
      /**
       * HTTP请求类型
       * @default GET
       */
      method?: string;
      /**
       * 请HTTP头
       * @default {'content-type': 'application/json'}
       */
      headers?: TqtTBGeneral.IAnyObject;
      /**
       * 云网关协议参数，`enableSystemParams`表示开启拼接系统参数和签名，`timeout`为HTTP请求超时时间
       * @default {'enableSystemParams': true, 'timeout': 6000}
       */
      options?: TqtTBGeneral.IAnyObject;
      /**
       * URL参数信息，会拼接在URL上进行请求
       * @default {}
       */
      params?: TqtTBGeneral.IAnyObject;
      /**
       * HTTP BODY信息，JSON格式
       * @default {}
       */
      body?: TqtTBGeneral.IAnyObject;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 返回的HTTP Status */
      code: string;
      /** 返回的HTTP 内容 */
      content: string;
    }
  }

  interface tb {
    /**
     * 发起http请求（仅限轻应用小程序使用）
     */
    request(option: tb.request.Option): Promise<tb.request.SuccessCallbackResult>;
  }
}
