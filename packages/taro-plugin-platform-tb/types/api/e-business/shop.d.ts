import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.favorShop {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 店铺归属的卖家Id */
      id: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  namespace tb.checkShopFavoredStatus {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 商品id */
      id: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 店铺归属的卖家Id */
      id: number;
      /** 是否关注了该店铺 */
      isFavor: boolean;
    }
  }

  namespace tb.unFavorShop {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 店铺归属的卖家Id */
      id: number;
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
     * 关注店铺
     *
     */
    favorShop(option: tb.favorShop.Option): Promise<TqtTBGeneral.CallbackResult>;
    /**
     * 查询店铺关注状态
     *
     */
    checkShopFavoredStatus(
      option: tb.checkShopFavoredStatus.Option,
    ): Promise<tb.checkShopFavoredStatus.SuccessCallbackResult>;
    /**
     * 取消关注店铺
     *
     */
    unFavorShop(option: tb.unFavorShop.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
