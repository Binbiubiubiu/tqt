declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { ProgressProps as OldProps } from "@tarojs/components/types/Progress";

  interface ProgressProps extends OldProps {
    /**
     * 尺寸；可选值: `small`, `medium`, `large`
     * @default `medium`
     */
    size?: keyof ProgressProps.Size;
    /**
     * 形态；可选值: `circle`, `line`
     * @default `line`
     */
    shape?: keyof ProgressProps.Shape;
    /**
     * 所占百分比
     * @default 0
     */
    percent?: number;
    /**
     * 进度状态, 显示优先级: `color` > `progressive` > `state`；可选值: `normal`, `success`, `error` Enum
     */
    state?: keyof ProgressProps.State;
    /**
     * 是否为色彩阶段变化模式, 显示优先级: `color` > `progressive` > `state`
     */
    progressive?: boolean;
    /**
     * 是否添加 `Border`（只适用于` Line Progress`)
     */
    hasBorder?: boolean;
    /**
     * 进度条颜色, 显示优先级: `color` > `progressive` > `state`
     */
    color?: string;
    /**
     * 背景色
     */
    backgroundColor?: string;
  }

  namespace ProgressProps {
    interface Size {
      small: any;
      medium: any;
      large: any;
    }

    interface Shape {
      circle: any;
      line: any;
    }

    interface State {
      normal: any;
      success: any;
      error: any;
    }
  }

  export const Progress: ComponentType<ProgressProps>;
}
