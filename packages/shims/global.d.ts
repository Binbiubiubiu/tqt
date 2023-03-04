declare namespace TqtGeneral {
  interface CallbackResult {
    /** 是否成功 */
    success?: boolean;
    /** 错误码 */
    error?: number;
    /** 错误信息 */
    errorMessage?: string;
  }
}
