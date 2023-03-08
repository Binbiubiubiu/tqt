declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { RadioGroupProps as OldProps } from "@tarojs/components/types/RadioGroup";

  interface RadioGroupProps extends OldProps {
    /**
     * 与 shape 属性配套使用，shape设为button时有效 可选值: 'large'(大) 'medium'(中) 'small'(小)
     * @default 'medium'
     */
    size?: string;

    /**
     * 可以设置成 button 展示形状 可选值: 'button'(按钮状)
     */
    shape?: string;

    /**
     * radio group的选中项的值
     */
    value?: string;

    /**
     * String/Number/Boolean
     */
    defaultValue?: String | Number | Boolean;

    /**
     * 表示radio被禁用
     */
    disabled?: boolean;

    /**
     * 可选项列表, 数据项可为 String 或者 Object, 如 ['apple', 'pear', 'orange']
     * @default []
     */
    dataSource?: Array<String | Number | Boolean>;

    /**
     * 子项目的排列方式 - hoz: 水平排列 (default) - ver: 垂直排列 可选值: 'hoz', 'ver'
     * @default 'hoz'
     */
    itemDirection?: string;
  }

  export const RadioGroup: ComponentType<RadioGroupProps>;
}
