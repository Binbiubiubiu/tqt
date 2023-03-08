import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.onStartUp {
    interface Listener {
      (e: TqtQNGeneral.IAnyObject): void;
    }
  }

  namespace qn.onWindowResized {
    interface Listener {
      (e: TqtQNGeneral.IAnyObject): void;
    }
  }

  namespace qn.onImActiveContactChanged {
    interface Listener {
      (e: TqtQNGeneral.IAnyObject): void;
    }
  }

  interface qn {
    /**
     * 二次唤起通知（ `7.32.00N` 以上可用 `app.onShow` 代替
     */
    onStartUp(listener: qn.onStartUp.Listener): void;
    /**
     * 窗口大小变化
     */
    onWindowResized(listener: qn.onWindowResized.Listener): void;
    /**
     * 原插件事件 `wangwang.active_contact_changed`（不支持工作台小程序）
     */
    onImActiveContactChanged(listener: qn.onWindowResized.Listener): void;
  }
}
