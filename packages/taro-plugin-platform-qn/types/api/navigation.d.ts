import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.switchTabEx {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  namespace qn.showTabEx {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 要显示的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  namespace qn.hideTabEx {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 要隐藏的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  namespace qn.showTabBarRedDotEx {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 要显示红点的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  namespace qn.hideTabBarRedDotEx {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 要隐藏红点的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  namespace qn.setTabBarBadgeEx {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 要显示红点的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 要显示的文字，建议最多3位数字 */
      text: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  namespace qn.removeTabBarBadgeEx {
    interface Option extends TqtQNGeneral.IUnknownObject {
      /** 要移除红色提醒文字的菜单项，对应 tabBarEx 配置中的 id 字段 */
      id: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtQNGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtQNGeneral.CallbackResult) => void;
    }
  }

  interface qn {
    /**
     * 切换左侧导航条选中项
     */
    switchTabEx(options: qn.switchTabEx.Option): Promise<TqtQNGeneral.CallbackResult>;
    /**
     * 显示左侧导航条的某一菜单项
     */
    showTabEx(options: qn.showTabEx.Option): Promise<TqtQNGeneral.CallbackResult>;
    /**
     * 隐藏左侧导航条的某一菜单项
     */
    hideTabEx(options: qn.hideTabEx.Option): Promise<TqtQNGeneral.CallbackResult>;
    /**
     * 在左侧导航条的菜单项右侧显示红点
     */
    showTabBarRedDotEx(options: qn.showTabBarRedDotEx.Option): Promise<TqtQNGeneral.CallbackResult>;
    /**
     * 隐藏在左侧导航条的菜单项右侧的红点
     */
    hideTabBarRedDotEx(options: qn.hideTabBarRedDotEx.Option): Promise<TqtQNGeneral.CallbackResult>;
    /**
     * 在左侧导航条的菜单项右侧显示红色提醒文字
     */
    setTabBarBadgeEx(options: qn.setTabBarBadgeEx.Option): Promise<TqtQNGeneral.CallbackResult>;
    /**
     * 移除在左侧导航条的菜单项右侧的红色提醒文字
     */
    removeTabBarBadgeEx(
      options: qn.removeTabBarBadgeEx.Option,
    ): Promise<TqtQNGeneral.CallbackResult>;
  }
}
