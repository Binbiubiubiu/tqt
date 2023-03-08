declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";
  import { TabItemProps as OldTabItemProps } from "@tarojs/components/types/TabItem";

  interface TabProps extends Omit<StandardProps, "animation"> {
    /**
     * 被激活的选项卡的 key, 赋值则tab为受控组件, 用户无法切换
     */
    activeKey?: string;
    /**
     * 尺寸 可选值: `small`, `medium`
     * @default `medium`
     */
    size?: string;
    /**
     * 外观形态 可选值: `pure`, `wrapped`, `text`,`capsule`
     * @default `pure`
     */
    shape?: string;
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
     * 选项卡过多时的滑动模式 可选值: 'slide', 'dropdown'
     * @default `slide`
     */
    excessMode?: string;
    /**
     * 导航选项卡的位置，只适用于包裹型（wrapped）选项卡 可选值: `top`, `bottom`, `left`,`right`
     * @default `top`
     */
    tabPosition?: string;
    /**
     * 进度条颜色, 显示优先级: `color` > `progressive` > `state`
     */
    triggerType?: string;
    /**
     * 点击单个选项卡时触发的回调 签名: Function() => void
     */
    onTap?: CommonEventFunction;
    /**
     * 选项卡发生切换时的事件回调 签名: Function(e) => void 参数: e.detail.value: {String/Number} 改变后的 key
     */
    onChange?: CommonEventFunction;
    /**
     * 选项卡被关闭时的事件回调 签名: Function(e) => void 参数: e.detail.value: {String/Number} 关闭的选项卡的 key
     */
    onClose?: CommonEventFunction;
  }
  export const Tab: ComponentType<TabProps>;

  interface TabItemProps extends OldTabItemProps {
    /**
     * 选项卡标题
     */
    title?: string;
    /**
     * 选项卡key
     */
    itemKey?: string;
    /**
     * 单个选项卡是否可关闭
     * @default false
     */
    closeable?: boolean;
    /**
     * 选项卡是否被禁用
     */
    disabled?: boolean;
  }
  export const TabItem: ComponentType<TabItemProps>;
}
