declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface SelectProps extends StandardProps {
    /**
     * 选择器尺寸 可选值: 'small', 'medium', 'large'
     */
    size?: string;

    /**
     * 当前值，用于受控模式
     */
    value?: unknown;

    /**
     * 初始的默认值
     */
    defaultValue?: unknown;

    /**
     * 校验状态 可选值: 'error', 'loading'
     */
    state?: string;

    /**
     * 下拉菜单是否与选择器对齐，如果需要下拉区域自动撑开，需要配置为false
     * @default true
     */
    autoWidth?: boolean;

    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly?: boolean;

    /**
     * 是否跟随滚动
     * @default false
     */
    followTrigger?: boolean;

    /**
     * 是否禁用选择器
     */
    disabled?: boolean;

    /**
     * 传入的数据源
     */
    dataSource?: Array<TqtQNGeneral.IUnknownObject | string | boolean | number>;

    /**
     * 选择器模式 可选值: 'single', 'multiple', 'tag'
     * @default 'single'
     */
    mode?: string;

    /**
     * Select发生改变时触发的回调 参数: event event.detail.value:选中的值
     */
    onChange?: CommonEventFunction;
  }

  interface OptionGroupProps extends StandardProps {
    /**
     * 设置分组的文案
     */
    label?: string;
  }

  interface OptionProps extends StandardProps {
    /**
     * 选项值
     */
    value?: string;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
  }

  export const Select: ComponentType<SelectProps>;
  export const OptionGroup: ComponentType<OptionGroupProps>;
  export const Option: ComponentType<OptionProps>;
}
