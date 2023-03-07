declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  import type { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface MouseableViewProps extends StandardProps {
    /**
     * 鼠标移入目标元素上方。鼠标移到其后代元素上时会触发。
     */
    onMouseover?: CommonEventFunction;
    /**
     * 鼠标移出目标元素上方。
     */
    onMouseout?: CommonEventFunction;
    /**
     * 鼠标移入元素范围内触发，该事件不冒泡，即鼠标移到其后代元素上时不会触发。
     */
    onMouseenter?: CommonEventFunction;
    /**
     * 鼠标移出元素范围时触发，该事件不冒泡，即鼠标移到其后代元素时不会触发。
     */
    onMouseleave?: CommonEventFunction;
    /**
     * 鼠标按钮被释放弹起时触发。
     */
    onMouseup?: CommonEventFunction;
    /**
     * 鼠标按钮被按下时触发。
     */
    onMousedown?: CommonEventFunction;
    /**
     * 鼠标在元素内部移动时不断触发。
     */
    onMousemove?: CommonEventFunction;
  }
  export const MouseableView: ComponentType<MouseableViewProps>;
}
