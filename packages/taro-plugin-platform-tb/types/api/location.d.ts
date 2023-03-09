import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace getLocation {
    interface Option {
      /**
       * 经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位
       */
      cacheTimeout?: number;
    }
  }
}
