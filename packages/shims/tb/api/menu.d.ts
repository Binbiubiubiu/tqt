import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.setActionSheet {
    interface Option extends TqtGeneral.IAnyOption {
      /**
       * 接口调用成功的回调函数
       *
       */
      menuList: Array<MenuItem>;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }

    interface MenuItem {
      /**
       * 菜单项点击事件，点击后容器发送事件给前端，和openUrl必须二选一。可通过my.on监听。
       *
       */
      eventName?: string;
      /**
       * 菜单项点击跳转目标地址，和`eventName`必须二选一。地址支持内部页面路径、外部页面路径（需要申请权限）
       *
       */
      openUrl?: string;
      /**
       * 菜单项Logo的图片地址
       *
       */
      logo: string;
      /**
       * 菜单项名称
       *
       */
      name: string;
    }
  }

  interface tb {
    /**
     * 自定义更多菜单项
     */
    setActionSheet(option: tb.setActionSheet.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
