import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace connectSocket {
    interface Option {
      /**
       * 请求的参数
       */
      data?: TqtTBGeneral.IAnyObject;
      /**
       * 设置请求的头部
       */
      header?: TqtTBGeneral.IAnyObject;
    }
  }
}
