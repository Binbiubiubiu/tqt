import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace scanCode {
    interface OptionTB extends Option {
      /**
       * 扫码样式(默认 qr)： qr,扫码框样式为二维码扫码框 bar，扫码样式为条形码扫码框
       * @default 'qr'
       */
      type?: keyof ScanTypeTB;
      /**
       * 是否只能从相机扫码，不允许从相册选择图片
       * @default false
       */
      hideAlbum?: boolean;
    }
    interface SuccessCallbackResult {
      /** 扫码所得数据 */
      code: string;
      /** 扫描二维码时返回二维码数据 */
      qrCode: string;
      /** 扫描条形码时返回条形码数据 */
      barCode: string;
    }
    /** 扫码类型 */
    interface ScanTypeTB {
      /** 扫码框样式为二维码扫码框 */
      bar: any;
      /** 扫码样式为条形码扫码框 */
      qr: any;
    }
  }

  interface TaroStatic {
    scanCode(option: scanCode.OptionTB): Promise<scanCode.SuccessCallbackResult>;
  }
}
