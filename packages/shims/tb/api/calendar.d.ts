import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.addCalendarPlan {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 提醒的开始时间，格式`yyyy-MM-dd HH:mm:ss` */
      startDate: string;
      /** 提醒的结束时间，格式`yyyy-MM-dd HH:mm:ss` */
      endDate: string;
      /** 提醒的标题 */
      title: string;
      /** 提醒的描述 */
      description?: string;
      /** 提前多久开始提醒（单位：分钟） */
      remind?: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace tb.checkCalendarPlanIsExist {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 要查询的提醒开始时间，格式`yyyy-MM-dd HH:mm:ss` */
      startDate: string;
      /** 要查询的提醒结束时间，格式`yyyy-MM-dd HH:mm:ss` */
      endDate: string;
      /** 要查询的提醒标题 */
      title: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 是否已设置提醒 */
      isExist: boolean;
    }
  }

  namespace tb.cancelCalendarPlan {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 要取消的原提醒开始时间，格式`yyyy-MM-dd HH:mm:ss` */
      startDate: string;
      /** 要取消的原提醒结束时间，格式`yyyy-MM-dd HH:mm:ss` */
      endDate: string;
      /** 要取消的原提醒标题 */
      title: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  interface tb {
    /**
     * 添加日历提醒
     */
    addCalendarPlan(option: tb.addCalendarPlan.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 查询设置过的日历提醒
     */
    checkCalendarPlanIsExist(
      option: tb.checkCalendarPlanIsExist.Option,
    ): Promise<tb.checkCalendarPlanIsExist.SuccessCallbackResult>;
    /**
     * 取消日历提醒异步接口
     */
    cancelCalendarPlan(option: tb.cancelCalendarPlan.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
