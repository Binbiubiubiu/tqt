import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.confirmCustomOrder {
    interface Option {
      /** 入参 */
      data: Data;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }

    interface Data {
      /** 商品id */
      itemid: number;
      /**
       * skuId
       * @default -1
       */
      skuId?: number;
      /**
       * 下单商品件数
       * @default 1
       */
      quantity?: number;
      /**
       * 定制信息
       * @default {}
       */
      customization?: TqtGeneral.IAnyObject;
    }
  }

  interface tb {
    /**
     * 获取用户设备ID
     */
    confirmCustomOrder(option: tb.confirmCustomOrder.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
