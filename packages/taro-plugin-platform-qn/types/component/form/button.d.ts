declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { ButtonProps as OldProps } from "@tarojs/components/types/Button";
  import { StandardProps } from "@tarojs/components/types/common";
  interface ButtonProps extends Omit<OldProps, "type" | "size"> {
    /**
     * 按钮的尺寸 可选值: 'small', 'medium', 'large'
     * @default 'medium'
     */
    size?: keyof FormProps.Size;

    /**
     * 按钮的类型 可选值: 'primary', 'secondary', 'normal'
     * @default 'normal'
     */
    type?: keyof ButtonProps.Type;

    /**
     * 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小 可选值: 'xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'
     */
    iconSize?: keyof IconProps.Size;

    /**
     * 设置标签类型 可选值: 'button', 'a'
     * @default "button"
     */
    component?: keyof ButtonProps.ComponentType;

    /**
     * 设置按钮的载入状态
     * @default false
     */
    loading?: boolean;

    /**
     * 是否为幽灵按钮 可选值: true, false, 'light', 'dark'
     * @default false
     */
    ghost?: boolean | keyof ButtonProps.Ghost;

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
  namespace ButtonProps {
    interface Type {
      primary: any;
      secondary: any;
      normal: any;
    }

    interface ComponentType {
      a: any;
      button: any;
    }

    interface Ghost {
      light: any;
      dark: any;
    }
  }
  export const Button: ComponentType<ButtonProps>;

  interface ButtonGroupProps extends StandardProps {
    /**
     * 按钮的尺寸 可选值: 'small', 'medium', 'large'
     * @default 'medium'
     */
    size?: keyof FormProps.Size;
  }

  export const ButtonGroup: ComponentType<ButtonGroupProps>;
}
