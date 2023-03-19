import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace uploadFile {
    interface Option {
      /**
       * image
       */
      fileType?: string;
    }
  }
}
