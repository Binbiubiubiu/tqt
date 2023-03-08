declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction } from "@tarojs/components/types/common";
  import { CheckboxProps as OldProps } from "@tarojs/components/types/Checkbox";

  interface CheckboxProps extends OldProps {
    /**
     * 默认选中状态
     * @default false
     */
    defaultChecked?: boolean;

    /**
     * Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    indeterminate?: boolean;

    /**
     * Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    defaultIndeterminate?: boolean;

    /**
     * 状态变化时触发的事件
     */
    onChange?: CommonEventFunction;
  }

  export const Checkbox: ComponentType<CheckboxProps>;
}
