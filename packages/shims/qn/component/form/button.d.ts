declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  import type { ButtonProps as OldProps } from "@tarojs/components/types/Button";
  interface ButtonProps extends Omit<OldProps, "type" | "size"> {
    /**
     * 按钮的尺寸 可选值: 'small', 'medium', 'large'
     * @default 'medium'
     */
    size?: string;

    /**
     * 按钮的类型 可选值: 'primary', 'secondary', 'normal'
     * @default 'normal'
     */
    type?: string;

    /**
     * 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小 可选值: 'xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'
     */
    iconSize?: string;

    /**
     * 设置标签类型 可选值: 'button', 'a'
     * @default "button"
     */
    component?: string;

    /**
     * 设置按钮的载入状态
     * @default false
     */
    loading?: boolean;

    /**
     * 是否为幽灵按钮 可选值: true, false, 'light', 'dark'
     * @default false
     */
    ghost?: boolean;

    /**
     * 是否为文本按钮
     * @default false
     */
    text?: boolean;

    /**
     * 是否为警告按钮
     * @default false
     */
    warning?: boolean;
  }
  export const Button: ComponentType<ButtonProps>;
}
