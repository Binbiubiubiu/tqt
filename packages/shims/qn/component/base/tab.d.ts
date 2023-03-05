declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  import type { TabsProps as OldTabsProps } from "@tarojs/components/types/Tabs";
  import type { TabItemProps as OldTabItemProps } from "@tarojs/components/types/TabItem";
  interface TabsProps extends Omit<OldTabsProps, "animation"> {
    /**
     * 被激活的选项卡的 key, 赋值则tab为受控组件, 用户无法切换
     */
    activeKey?: string;
    /**
     * 尺寸 可选值: `small`, `medium`
     * @default `medium`
     */
    size?: "small" | "medium";
    /**
     * 外观形态 可选值: `pure`, `wrapped`, `text`,`capsule`
     * @default `pure`
     */
    shape?: "pure" | "wrapped" | "text" | "capsule";
    /**
     * 初始化时被激活的选项卡的 key
     */
    defaultActiveKey?: string;
    /**
     * 是否开启动效
     * @default true
     */
    animation?: boolean | { actions: TaroGeneral.IAnyObject[] } | TaroGeneral.IAnyObject;
    /**
     * 导航选项卡的位置，只适用于包裹型（wrapped）选项卡 可选值: `top`, `bottom`, `left`,`right`
     * @default `top`
     */
    tabPosition?: "top" | "bottom" | "left" | "right";
    /**
     * 进度条颜色, 显示优先级: `color` > `progressive` > `state`
     */
    triggerType?: "click";
    /**
     * 背景色
     */
    backgroundColor?: boolean;
  }
  export const Tabs: ComponentType<TabsProps>;
}
