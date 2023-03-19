import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface SystemInfoTBExtra {
    /** 标题栏高度。 */
    titleBarHeight: number;
  }

  namespace getSystemInfo {
    interface Result extends SystemInfoTBExtra {}
  }

  namespace getSystemInfoSync {
    interface Result extends SystemInfoTBExtra {}
  }
}
