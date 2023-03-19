import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace authorizes {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 授权类型，目前支持的授权请查看文档：https://miniapp.open.taobao.com/docV3.htm?docId=119119&docType=1&tag=dev */
      scopes: string;
      /** 接口调用成功的回调函数 */
      success?: (res: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtQNGeneral.CallbackResult {
      /** 授权码。PC千牛上授权不返回该参数 */
      accessToken: string;
      /** 成功的授权 scope */
      authSucessScope: Array<string>;
      /** 授权出错详情对象 */
      authErrorScope: TqtQNGeneral.IAnyObject;
    }
  }

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

  interface TaroStatic {
    /**
     * 发起用户授权
     */
    authorize(option: authorizes.Option): Promise<authorizes.SuccessCallbackResult>;
  }
}
