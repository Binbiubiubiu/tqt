declare module "@tarojs/components" {
  import type { IconProps as OldProps } from "@tarojs/components/types/Icon";
  import type { ComponentType } from "react";
  interface IconProps extends Omit<OldProps, "type"> {
    /**
     * 指定图标大小,可选值: 'xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'inherit'
     * @defaultValue 'medium'
     */
    size?: string;

    /**
     * 指定显示哪种图标，支持的type详见https://fusion.design/pc/component/basic/icon#%E5%9B%BE%E6%A0%87%E5%88%97%E8%A1%A8
     */
    type?: keyof OldProps.TIconType | string;

    /**
     * 标识自定义图标
     */
    custom?: boolean;
  }
  export const Icon: ComponentType<IconProps>;
}
