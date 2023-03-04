import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.setActionSheet {
    interface Option {
      /**
       * 接口调用成功的回调函数
       * @基础库最低版本 8.12.0
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
       * @基础库最低版本 8.12.0
       */
      eventName?: string;
      /**
       * 菜单项点击跳转目标地址，和`eventName`必须二选一。地址支持内部页面路径、外部页面路径（需要申请权限）
       * @基础库最低版本 8.12.0
       */
      openUrl?: string;
      /**
       * 菜单项Logo的图片地址
       * @基础库最低版本 8.12.0
       */
      logo: string;
      /**
       * 菜单项名称
       * @基础库最低版本 8.12.0
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
