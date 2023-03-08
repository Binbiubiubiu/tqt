import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.cleanToken {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (res: TqtQNGeneral.CallbackResult) => void;
    }
  }

  namespace qn.showSubAccountAuth {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 需要授权的api权限点 */
      api: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  interface qn {
    /**
     * 清除用户授权Token
     *
     */
    cleanToken(option: qn.cleanToken.Option): Promise<TqtQNGeneral.CallbackResult>;
    /**
     * 弹出子账号授权框
     *
     */
    showSubAccountAuth(option: qn.showSubAccountAuth.Option): Promise<TqtQNGeneral.CallbackResult>;
  }
}
