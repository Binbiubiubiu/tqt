import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace loadSubPackage {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 子包名 */
      packages: Array<string>;
      /** preload: 'wifi'，加上此字段表示下载需要要考虑网络网络，不加此字段表示不管什么网络都预下载 */
      preload?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  interface TaroStatic {
    /**
     * 非对称加密
     */
    loadSubPackage(option: loadSubPackage.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
