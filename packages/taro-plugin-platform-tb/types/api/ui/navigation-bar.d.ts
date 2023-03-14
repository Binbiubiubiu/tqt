import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace setNavigationBar {
    interface Option {
      /** 导航栏标题。 */
      title?: string;

      /** 导航栏标题。 */
      image?: string;

      /**
       * 导航栏背景色，支持十六进制颜色值。
       */
      backgroundColor?: string;

      /**
       * 手淘暂不支持。
       */
      borderBottomColor?: string;

      /**
       * 是否重置导航栏为默认配色，默认 false。
       */
      reset?: boolean;

      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  interface TaroStatic {
    /** 设置导航栏文字及样式 */
    setNavigationBar(option: setNavigationBar.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
