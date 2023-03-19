import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface WindowConfig {
    /** 是否显示首页导航栏上的AppLogo ，默认不显示。 */
    showNavigationBarLogo?: boolean;
    /** 默认false，若开启，则设置的二级页头部标题可展示。 */
    navigationBarForceEnable?: boolean;

    enableWK?: "YES" | "NO";
    enableDSL?: boolean | string;
    gpuAccelerate?: boolean | string;
    /** 支持 WebGL1.0 和 Canvas2D API */
    enableSkia?: boolean | string;
  }
}
