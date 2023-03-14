import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace chooseCity {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /**
       * 是否显示当前定位城市
       * @default false
       */
      showLocatedCity?: boolean;
      /**
       * 是否显示热门城市
       * @default true
       */
      showHotCities?: boolean;
      /**
       * 是否修改当前定位城市，如果 showLocatedCity 为 false，此设置无效。
       * @default false
       */
      setLocatedCity?: boolean;
      /** 自定义城市列表 */
      cities?: Array<City>;
      /** 自定义热门城市列表 */
      hotCities?: Array<City>;
      /** 自定义历史访问城市列表 */
      customHistoryCities?: Array<City>;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 城市名 */
      city: string;
      /** 行政区划代码 */
      adCode: string;
      /** 经度（注意：仅用户选择当前定位城市才会返回）。 */
      longitude: number;
      /** 纬度（注意：仅用户选择当前定位城市才会返回）。 */
      latitude: number;
    }

    interface City {
      /** 城市名 */
      city: string;
      /**
       * 行政区划代码。不同行政区域对应的代码可查看 [中华人民共和国县以上行政区划代码](https://www.mca.gov.cn/article/sj/xzqh/2020/2020/202007170301.html)。
       */
      adCode: string;
      /** 城市名对应拼音拼写，方便用户搜索 */
      spell: string;
    }
  }
  interface TaroStatic {
    /** 打开城市选择列表 */
    chooseCity(option?: chooseCity.Option): Promise<chooseCity.SuccessCallbackResult>;
  }
}
