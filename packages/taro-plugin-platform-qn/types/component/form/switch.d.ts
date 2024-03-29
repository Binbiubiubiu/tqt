declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { SwitchProps as OldProps } from "@tarojs/components/types/Switch";

  interface SwitchProps extends OldProps {
    /**
     * 打开时的内容
     */
    checkedChildren?: string;

    /**
     * switch的尺寸 可选值: 'medium'(正常大小) 'small'(缩小版大小)
     * @default 'medium'
     */
    size?: keyof FormProps.Size;

    /**
     * Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
     */
    unCheckedChildren?: string;

    /**
     * 开关默认值 (针对非受控组件)
     */
    defaultChecked?: boolean;
  }

  export const Switch: ComponentType<SwitchProps>;
}
