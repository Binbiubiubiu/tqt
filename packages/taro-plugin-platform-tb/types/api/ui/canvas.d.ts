import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace createCanvas {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** canvas 标签id */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.IAnyObject) => void;
    }
  }

  interface TaroStatic {
    /** 同层渲染 Canvas */
    createCanvas(option: createCanvas.Option): Promise<TqtTBGeneral.IAnyObject>;
    /** 离屏 Canvas */
    createOffscreenCanvas(width: number, height: number): Promise<TqtTBGeneral.IAnyObject>;
  }
}
