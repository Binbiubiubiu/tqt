import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.switchTabEx {
    interface Option {
      /** 对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.showTabEx {
    interface Option {
      /** 要显示的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.hideTabEx {
    interface Option {
      /** 要隐藏的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.showTabBarRedDotEx {
    interface Option {
      /** 要显示红点的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.hideTabBarRedDotEx {
    interface Option {
      /** 要隐藏红点的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.setTabBarBadgeEx {
    interface Option {
      /** 要显示红点的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 要显示的文字，建议最多3位数字 */
      text: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  interface qn {
    /**
     * 切换左侧导航条选中项
     * @since 7.18.00N
     */
    switchTabEx(options: qn.switchTabEx.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 显示左侧导航条的某一菜单项
     * @since 7.25.00N
     */
    showTabEx(options: qn.showTabEx.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 隐藏左侧导航条的某一菜单项
     * @since 7.25.00N
     */
    hideTabEx(options: qn.hideTabEx.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 在左侧导航条的菜单项右侧显示红点
     * @since 7.31.00N
     */
    showTabBarRedDotEx(options: qn.showTabBarRedDotEx.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 隐藏在左侧导航条的菜单项右侧的红点
     * @since 7.31.00N
     */
    hideTabBarRedDotEx(options: qn.hideTabBarRedDotEx.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 在左侧导航条的菜单项右侧显示红色提醒文字
     * @since 7.31.00N
     */
    showTabBarRedDotEx(options: qn.showTabBarRedDotEx.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 移除在左侧导航条的菜单项右侧的红色提醒文字
     * @since 7.31.00N
     */
    hideTabBarRedDotEx(options: qn.hideTabBarRedDotEx.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
