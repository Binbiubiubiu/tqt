import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.collectGoods {
    interface Option {
      /** 商品id */
      id: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace tb.unCollectGoods {
    interface Option {
      /** 商品id */
      id: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace tb.checkGoodsCollectedStatus {
    interface Option {
      /**
       * 商品id
       *
       */
      id: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 商品id */
      id: number;
      /** 是否收藏了该商品 */
      isCollect: boolean;
    }
  }

  namespace tb.openDetail {
    interface Option {
      /**
       * 商品id
       *
       */
      id: number;
      /**
       * 是否打开H5类型的商品详情面
       *
       */
      forceH5?: boolean;
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
     * 收藏商品
     */
    collectGoods(option: tb.collectGoods.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 取消收藏商品
     */
    unCollectGoods(option: tb.unCollectGoods.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 检查商品是否被收藏
     *
     */
    checkGoodsCollectedStatus(
      option: tb.checkGoodsCollectedStatus.Option,
    ): Promise<tb.checkGoodsCollectedStatus.SuccessCallbackResult>;
    /**
     * 打开商品详情页
     *
     */
    openDetail(option: tb.openDetail.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
