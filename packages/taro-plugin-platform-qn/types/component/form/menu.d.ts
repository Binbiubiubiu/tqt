declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";
  interface MenuProps extends StandardProps {
    /**
     * 初始打开的子菜单的 key 值
     * @default []
     */
    defaultOpenKeys?: string | Array<string>;

    /**
     * 子菜单打开的模式 可选值: 'inline', 'popup'
     * @default ’inline‘
     */
    mode?: keyof MenuProps.Mode;

    /**
     * 子菜单打开的触发行为 可选值: 'click', 'hover'
     * @default ‘click’
     */
    triggerType?: keyof MenuProps.TriggerType;

    /**
     * 展开内连子菜单的模式，同时可以展开一个子菜单还是多个子菜单，该属性仅在 mode 为 inline 时生效 可选值: 'single', 'multiple'
     * @default multiple
     */
    openMode?: keyof MenuProps.OpenMode;

    /**
     * 弹出子菜单自定义 style
     */
    popupStyle?: string;

    /**
     * 当前选中菜单项的 key 值
     */
    selectedKeys?: string | Array<string>;

    /**
     * 选中模式，单选还是多选，默认无值，不可选 可选值: 'single', 'multiple'
     */
    selectMode?: keyof MenuProps.SelectMode;

    /**
     * 初始选中菜单项的 key 值
     * @default []
     */
    defaultSelectedKeys?: string | Array<string>;

    /**
     * 点击菜单项触发的回调函数 签名: Function(key: String, item: Object, event: Object) => void 参数: key: {String} 点击的菜单项的 key 值 item: {Object} 点击的菜单项对象 event: {Object} 点击的事件对象
     * @default () => {}
     */
    onItemTap?: CommonEventFunction;

    /**
     * 选中或取消选中菜单项触发的回调函数 签名: Function(selectedKeys: Array, item: Object, extra: Object) => void 参数: selectedKeys: {Array} 选中的所有菜单项的值 item: {Object} 选中或取消选中的菜单项 extra: {Object} 额外参数 extra.select: {Boolean} 是否是选中 extra.key: {Array} 菜单项的 key extra.label: {Object} 菜单项的文本 extra.keyPath: {Array} 菜单项 key 的路径
     * @default () => {}
     */
    onSelect?: CommonEventFunction;
  }
  namespace MenuProps {
    interface Mode {
      inline: any;
      popup: any;
    }

    interface TriggerType {
      click: any;
      hover: any;
    }
    interface OpenMode {
      single: any;
      multiple: any;
    }

    interface SelectMode {
      single: any;
      multiple: any;
    }
  }
  export const Menu: ComponentType<MenuProps>;

  interface ItemProps extends StandardProps {
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 帮助文本
     */
    helper?: string;
    /**
     * 唯一标识
     */
    index?: string;
  }
  export const Item: ComponentType<ItemProps>;

  interface SubMenuProps extends StandardProps {
    /**
     * 标签内容
     */
    label?: string;
    /**
     * 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效
     * @default false
     */
    selectable?: boolean;
    /**
     * 子菜单打开方式，如果设置会覆盖 Menu 上的同名属性 可选值: 'inline', 'popup'
     */
    mode?: keyof MenuProps.Mode;
  }
  export const SubMenu: ComponentType<SubMenuProps>;

  interface GroupProps extends StandardProps {
    /**
     * 标签内容
     */
    label?: string;
  }
  export const Group: ComponentType<GroupProps>;

  interface DividerProps extends StandardProps {}
  export const Divider: ComponentType<DividerProps>;
}
