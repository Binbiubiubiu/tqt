import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.openMessage {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 卖家昵称 */
      sellerNick: string;
      /** 是否打开H5类型的页面 */
      forceH5?: boolean;
      /** 附加参数 */
      params?: Params;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }

    interface Params extends TqtTBGeneral.IUnknownObject {
      itemId: string;
    }
  }

  namespace tb.subscribe {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 订阅内容业务域(消息:message) */
      domainKey: string;
      /** 订阅内容资源点 */
      resourceKeys: TqtTBGeneral.IAnyObject;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 授权token，用于操作消息发送 */
      accessToken: string;
      /** 过期时间 */
      validTime: number;
      /** 授权结果信息 */
      resourceItems: TqtTBGeneral.IAnyObject;
    }
  }

  interface tb {
    /**
     * 打开BC客服聊天
     */
    openMessage(option: tb.openMessage.Option): Promise<TqtTBGeneral.CallbackResult>;
    /**
     * 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果
     */
    subscribe(option: tb.subscribe.Option): Promise<tb.subscribe.SuccessCallbackResult>;
  }
}
