import { mergeReconciler, mergeInternalComponents } from "@tarojs/shared";
import {
  components as aliComponents,
  hostConfig,
  initNativeApi,
} from "@tarojs/plugin-platform-alipay/dist/runtime-utils";
import { initApi } from "./apis";
import { qn as qnComponents } from "./components";

// 支付宝真机只有 navigator.swuserAgent
const { userAgent } = navigator;
Object.defineProperty(navigator, "userAgent", {
  configurable: true,
  enumerable: true,
  get() {
    return userAgent || (navigator as any).swuserAgent || "";
  },
});

hostConfig.initNativeApi = function (taro) {
  initNativeApi(taro);
  initApi(taro);
};

mergeReconciler(hostConfig);
mergeInternalComponents(aliComponents);
mergeInternalComponents(qnComponents);
