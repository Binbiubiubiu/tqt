import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace chooseCity {
    interface Option extends TqtTBGeneral.IUnknownObject {
      cities: Array<City>;
      hotCities?: Array<City>;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends City, TqtTBGeneral.CallbackResult {}

    interface City {
      city: string;
      adCode: string;
      spell?: string;
    }
  }
  interface TaroStatic {
    /** 打开城市选择列表 */
    chooseCity(option: chooseCity.Option): Promise<chooseCity.SuccessCallbackResult>;
  }
}
