import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface TaroStatic {
    createArCameraContext(id: string): Promise<TqtTBGeneral.IAnyObject>;
  }
}
