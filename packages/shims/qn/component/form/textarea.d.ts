declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  import type { CommonEventFunction } from "@tarojs/components/types/common";
  import type { TextareaProps as OldProps } from "@tarojs/components/types/Textarea";

  interface TextareaProps extends OldProps {
    /**
     * 初始化值
     */
    defaultValue?: string;

    /**
     * 是否展现最大长度样式
     * @default false
     */
    hasLimitHint?: boolean;

    /**
     * 当设置了maxLength时，是否截断超出字符串
     * @default true
     */
    cutString?: boolean;

    /**
     * 只读
     * @default false
     */
    readOnly?: boolean;

    /**
     * onChange返回会自动去除头尾空字符
     * @default false
     */
    trim?: boolean;

    /**
     * 状态 可选值: 'error'(错误)
     */
    state?: string;

    /**
     * 是否有边框
     * @default true
     */
    hasBorder?: boolean;

    /**
     * 多行文本框高度 (不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
     * @default 4
     */
    rows?: number;

    /**
     * 发生改变的时候触发的回调
     */
    onChange?: CommonEventFunction;

    /**
     * 键盘按下的时候触发的回调
     */
    onKeyDown?: CommonEventFunction;
  }

  export const Textarea: ComponentType<TextareaProps>;
}
