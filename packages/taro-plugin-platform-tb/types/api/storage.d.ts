import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface TaroStatic {
    getStorageInfo(option?: getStorageInfo.Option): Promise<getStorageInfo.SuccessCallbackOption>;
  }
}
