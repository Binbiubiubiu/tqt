import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace hideLoading {
    interface Option {
      /**
       * 具体指当前page实例，某些场景下，需要指明在哪个page执行hideLoading
       */
      page?: TqtQNGeneral.IAnyObject;
    }
  }
}
