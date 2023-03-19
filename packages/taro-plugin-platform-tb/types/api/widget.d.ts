import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.openScuCombination {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 商品 */
      productItems: Array<ProductItem>;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }

    interface ProductItem {
      /** 商品id */
      itemId: number;
    }
  }

  interface tb {
    /**
     * 打开组合购
     */
    openScuCombination(option: tb.openScuCombination.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
