import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace rsa {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 使用rsa加密还是rsa解密，encrypt加密，decrypt解密 */
      action: string;
      /** 要处理的文本，加密为原始文本，解密为Base64编码格式文本 */
      text: string;
      /** rsa秘钥，加密使用公钥，解密使用私钥 */
      key: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 经过处理过后得到的文本，加密为Base64编码文本，解密为原始文本 */
      text: string;
    }
  }

  interface TaroStatic {
    /**
     * 非对称加密
     */
    rsa(option: rsa.Option): Promise<rsa.SuccessCallbackResult>;
  }
}
