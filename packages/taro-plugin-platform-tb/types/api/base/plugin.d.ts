import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace getParentAppIdSync {
    interface SyncResult extends TqtTBGeneral.IAnyObject {
      /** 使用该插件的小程序 appId。 */
      appId: string;
    }
  }
  namespace loadPlugin {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 插件appId */
      plugin: string;
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
     * 在插件中获取宿主小程序AppId
     */
    getParentAppIdSync(): getParentAppIdSync.SyncResult;
    /**
     * 加载动态插件
     */
    loadPlugin(option: loadPlugin.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
