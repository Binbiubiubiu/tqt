declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  interface ProgressProps {
    /**
     * 尺寸；可选值: `small`, `medium`, `large`
     * @defaultValue `medium`
     */
    size?: "small" | "medium" | "large";
    /**
     * 形态；可选值: `circle`, `line`
     * @defaultValue `line`
     */
    shape?: "circle" | "line";
    /**
     * 所占百分比
     * @defaultValue 0
     */
    percent?: number;
    /**
     * 进度状态, 显示优先级: `color` > `progressive` > `state`；可选值: `normal`, `success`, `error` Enum
     */
    state?: "normal" | "success" | "error";
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
    color?: boolean;
    /**
     * 背景色
     */
    backgroundColor?: boolean;
  }
  export const Progress: ComponentType<ProgressProps>;
}
