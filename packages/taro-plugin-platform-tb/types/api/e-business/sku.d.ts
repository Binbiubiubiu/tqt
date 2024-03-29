import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.showSku {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 商品ID */
      itemId: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 固定值：`addCartSuccess` */
      status: string;
      /** 商品ID */
      itemId: string;
      /** skuId */
      skuId: string;
      /** 加购数量 */
      quantity: string;
    }
  }

  namespace tb.hideSku {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  interface tb {
    /**
     * 显示指定商品 SKU 选择器
     */
    showSku(option: tb.showSku.Option): Promise<tb.showSku.SuccessCallbackResult>;
    /**
     * 隐藏正在展示的商品 SKU 选择
     */
    hideSku(option?: tb.hideSku.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
