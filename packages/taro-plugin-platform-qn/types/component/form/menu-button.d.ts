declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";
  interface MenuButtonProps extends StandardProps {
    /**
     * 弹层默认是否展开
     */
    defaultVisible?: boolean;

    /**
     * 弹层展开状态
     */
    visible?: boolean;

    /**
     * 按钮上的文本内容
     */
    label?: string;

    /**
     * 弹层是否与按钮宽度相同
     * @default true
     */
    autoWidth?: boolean;

    /**
     * 子菜单打开的触发行为 可选值: 'click', 'hover'
     * @default ‘click’
     */
    popupTriggerType?: keyof MenuButtonProps.PopupTriggerType;

    /**
     * 弹层在显示和隐藏触发的事件 签名: Function() => void
     */
    onVisibleChange?: CommonEventFunction;

    /**
     * 点击菜单项后的回调，同 Menu 签名: Function() => void
     */
    onItemClick?: CommonEventFunction;
  }
  namespace MenuButtonProps {
    interface PopupTriggerType {
      click: any;
      hover: any;
    }
  }
  export const MenuButton: ComponentType<MenuButtonProps>;
}
