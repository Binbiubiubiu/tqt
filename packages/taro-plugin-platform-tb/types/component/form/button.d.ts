import "@tarojs/components";

declare module "@tarojs/components" {
  // import { ComponentType } from "react";
  // import { ButtonProps as OldProps } from "@tarojs/components/types/Button";
  namespace ButtonProps {
    interface Type {
      /** 幽灵样式 */
      ghost: any;
    }
  }
}
