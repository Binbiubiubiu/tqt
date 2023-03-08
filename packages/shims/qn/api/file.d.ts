import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.chooseFile {
    interface Option extends TqtGeneral.IUnknownObject {
      /**
       * 最大文件数。如果用户选择的文件数多于 count，只返回 count 个。
       * @default 1
       */
      count?: number;
      /**
       * 图片=`0x01`，文档=`0x02`，多媒体=`0x04`，按“位或”自由组合
       * @default 0x01
       */
      type?: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 返回 Array of String，每个元素为一个编码后的文件路径，此路径可以用于其他文件相关的 API 的 apFilePath 入参 */
      apFilePaths: Array<string>;
    }
  }

  namespace qn.chooseFileAndGetContent {
    interface Option extends TqtGeneral.IUnknownObject {
      /**
       * 最大文件数。如果用户选择的文件数多于 count，只返回 count 个。
       * @default 1
       */
      count?: number;
      /**
       * 图片=`0x01`，文档=`0x02`，多媒体=`0x04`，按“位或”自由组合
       * @default 0x01
       */
      type?: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 返回一个数组，数组的每个元素是文件内容经过 Base64 编码后的结果（未来将下线，请使用 fileContentMap） */
      fileContentList: Array<string>;
      /** 返回一个对象，其键值为不含路径的原始文件名，内容为文件内容经过 Base64 编码后的结果（7.25.00N 开始支持） */
      fileContentMap: Record<string, string>;
    }
  }

  namespace qn.saveFileToDisk {
    interface Option extends TqtGeneral.IUnknownObject {
      /**
       * 要保存的文件路径
       */
      apFilePath: string;
      /**
       * 默认文件名
       */
      defaultFileName?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  interface qn {
    /**
     * 选择文件
     */
    chooseFile(option: qn.chooseFile.Option): Promise<qn.chooseFile.SuccessCallbackResult>;
    /**
     * 选择文件并读取文件内容
     */
    chooseFileAndGetContent(
      option: qn.chooseFileAndGetContent.Option,
    ): Promise<qn.chooseFileAndGetContent.SuccessCallbackResult>;
    /**
     * 第保存文件到磁盘
     */
    saveFileToDisk(option: qn.saveFileToDisk.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
