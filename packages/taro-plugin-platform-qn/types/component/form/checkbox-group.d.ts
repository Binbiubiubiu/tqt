declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CheckboxGroupProps as OldProps } from "@tarojs/components/types/CheckboxGroup";

  interface CheckboxGroupProps extends OldProps {
    /**
     * 整体禁用
     */
    disabled?: boolean;

    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 ['apple', 'pear', 'orange'] 或者 [{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]
     * @default []
     */
    dataSource?: Array<TqtQNGeneral.IUnknownObject | string | number | boolean>;

    /**
     * 被选中的值列表
     */
    value?: string;

    /**
     * 默认被选中的值列表
     */
    defaultValue?: string;

    /**
     * 子项目的排列方式 - hoz: 水平排列 (default) - ver: 垂直排列 可选值: 'hoz', 'ver'
     * @default 'hoz'
     */
    itemDirection?: keyof CheckboxGroupProps.ItemDirection;
  }
  namespace CheckboxGroupProps {
    interface ItemDirection {
      hoz: any;
      ver: any;
    }
  }
  export const CheckboxGroup: ComponentType<CheckboxGroupProps>;
}
