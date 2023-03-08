declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  import type { FormItemProps } from "@tarojs/components/types/common";
  import type { RadioProps as OldProps } from "@tarojs/components/types/Radio";

  interface RadioProps extends OldProps, FormItemProps {
    /**
     * 默认选中状态
     * @default false
     */
    defaultChecked?: boolean;
  }

  export const Radio: ComponentType<RadioProps>;
}
