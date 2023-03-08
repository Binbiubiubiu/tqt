declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction } from "@tarojs/components/types/common";
  import { InputProps as OldProps } from "@tarojs/components/types/Input";

  interface InputProps extends OldProps {
    /**
     * 初始化值
     */
    defaultValue?: string;

    /**
     * 尺寸 可选值: 'small'(小) 'medium'(中) 'large'(大)
     * @default 'medium'
     */
    size?: string;

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
     * 状态 可选值: 'error'(错误) 'loading'(校验中) 'success'(成功)
     */
    state?: string;

    /**
     * 是否出现clear按钮
     * @default false
     */
    hasClear?: boolean;

    /**
     * 水印 (Icon的type类型，和hasClear占用一个地方)
     */
    hint?: string;

    /**
     * 输入框前附加文字
     */
    addonTextBefore?: string;

    /**
     * 输入框后附加文字
     */
    addonTextAfter?: string;

    /**
     * 文本框的类型（支持password）
     */
    htmlType?: string;

    /**
     * 发生改变的时候触发的回调
     */
    onChange?: CommonEventFunction;

    /**
     * 键盘按下的时候触发的回调
     */
    onKeyDown?: CommonEventFunction;

    /**
     * 按下回车的回调
     */
    onPressEnter?: CommonEventFunction;
  }

  export const Input: ComponentType<InputProps>;
}
