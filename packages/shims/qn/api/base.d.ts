import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.onStartUp {
    interface Listener {
      (): void;
    }
  }

  namespace qn.onWindowResized {
    interface ListenerArgs {
      /** 变化后的窗口宽度，单位 px */
      windowWidth: number;
      /** 变化后的窗口高度，单位 px */
      windowHeight: number;
    }
    interface Listener {
      (args: ListenerArgs): void;
    }
  }

  namespace qn.onImActiveContactChanged {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 当前IM旺旺联系人昵称，含站点，如 cntaboaoXXX */
      user_nick: string;
    }
  }

  interface qn {
    /**
     * 二次唤起通知（ `7.32.00N` 以上可用 `app.onShow` 代替
     * @since 7.12.00N
     */
    onStartUp(listener: qn.onStartUp.Listener): void;
    /**
     * 窗口大小变化
     * @since 7.33.00N
     */
    onWindowResized(listener: qn.onWindowResized.Listener): void;
    /**
     * 原插件事件 `wangwang.active_contact_changed`（不支持工作台小程序）
     * @since 7.12.00N
     */
    onImActiveContactChanged(
      option: qn.onImActiveContactChanged.Option,
    ): Promise<qn.onImActiveContactChanged.SuccessCallbackResult>;
  }
}
