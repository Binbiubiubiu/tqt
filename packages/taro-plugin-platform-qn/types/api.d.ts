/// <reference path="api/ui/interaction.d.ts" />
/// <reference path="api/ui/route.d.ts" />
/// <reference path="api/ui/tab-bar.d.ts" />
/// <reference path="api/authorize.d.ts" />
/// <reference path="api/base.d.ts" />
/// <reference path="api/database.d.ts" />
/// <reference path="api/file.d.ts" />
/// <reference path="api/im.d.ts" />
/// <reference path="api/plugin.d.ts" />

import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface TARO_ENV_TYPE {
    [TaroGeneral.ENV_TYPE.QN]: TaroGeneral.ENV_TYPE.QN;
  }

  interface qn {}
  interface TaroStatic {
    /** 获取基础库版本号 */
    SDKVersion: string;

    qn: qn;
    /**
     * 开始原生全局事件监听
     */
    on(eventName: string, callback: (...args: Array<unknown>) => void): { remove: () => void };
    /**
     * 取消原生全局事件监听
     */
    off(eventName: string, callback: (...args: Array<unknown>) => void): void;
  }
}

declare global {
  namespace TaroGeneral {
    enum ENV_TYPE {
      QN = "QN",
    }
  }
}
