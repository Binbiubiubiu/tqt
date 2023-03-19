import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace datePicker {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /**
       * 返回的日期格式， yyyy-MM-dd（默认） HH:mm yyyy-MM-dd HH:mm yyyy-MM （最低基础库：1.1.1, 可用 canIUse('datePicker.object.format.yyyy-MM') 判断） yyyy （最低基础库：1.1.1,可用 canIUse('datePicker.object.format.yyyy') 判断）
       */
      format?: string;
      /**
       * 初始选择的日期时间,默认当前时间
       */
      currentDate?: string;
      /**
       * 最小日期时间
       */
      startDate?: string;
      /**
       * 最大日期时间
       */
      endDate?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 选择的日期 */
      date: string;
    }
  }
  interface TaroStatic {
    /** 打开日期选择列表 */
    datePicker(option?: datePicker.Option): Promise<datePicker.SuccessCallbackResult>;
  }
}
