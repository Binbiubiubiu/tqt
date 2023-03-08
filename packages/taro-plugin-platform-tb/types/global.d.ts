declare namespace TqtTBGeneral {
  type IAnyObject = Record<string, any>;
  type IUnknownObject = Record<string, unknown>;
  interface CallbackResult extends IAnyObject {
    /** 是否成功 */
    success?: boolean;
    /** 错误码 */
    error?: number;
    /** 错误信息 */
    errorMessage?: string;
  }
}
