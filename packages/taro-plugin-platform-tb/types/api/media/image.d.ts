import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace compressImage {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 压缩级别，支持 0 ~ 4 的整数，默认 4。0：低质量；1：中等质量；2：高质量；3：不压缩；4：根据网络适应； */
      compressLevel?: number;
    }

    interface SuccessCallbackResult {
      /** 压缩后的路径数组 */
      apFilePaths: Array<string>;
    }
  }

  namespace saveImage {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /** 要保存的图片链接(仅支持阿里系域名) */
      url: string;
      /**
       * 是否显示图片操作菜单
       * @default true
       */
      showActionSheet?: boolean;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  interface TaroStatic {
    /** 保存图片到相册 */
    saveImage(option: saveImage.Option): Promise<TqtTBGeneral.CallbackResult>;
  }
}
