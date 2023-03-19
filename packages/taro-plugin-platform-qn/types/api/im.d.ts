import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.openChat {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 聊天的对象的`nick`，`nick`前请带上`nick`域,
       *
       * 所属域可选值为：
       * - `cntaobao`:是淘宝用户
       * - `cnalichn`:是中文站用户
       * - `enaliint`:是国际站用户
       * */
      nick: string;
      /** 打开聊天窗，同时携带输入框文本 */
      text?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  namespace qn.imGetActiveUser {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtQNGeneral.CallbackResult {
      /** 当前IM旺旺联系人昵称，含站点，如 cntaboaoXXX */
      user_nick: string;
    }
  }

  interface qn {
    /**
     * 打开聊天窗口并输入待发送的信息
     *
     */
    openChat(option: qn.openChat.Option): Promise<TqtQNGeneral.CallbackResult>;
    /**
     * 获取当前IM旺旺联系人

     */
    imGetActiveUser(
      option: qn.imGetActiveUser.Option,
    ): Promise<qn.imGetActiveUser.SuccessCallbackResult>;
  }
}
