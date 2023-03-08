declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface DatePickerProps extends StandardProps {
    /**
     * 输入框尺寸 可选值: 'small', 'medium', 'large'
     * @default 'medium'
     */
    size?: string;

    /**
     * 输入框状态 可选值: 'success', 'loading', 'error'
     */
    state?: string;

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 日期值（受控） 由format字段给定的具体描述格式
     */
    value?: string;

    /**
     * 初始日期值 由format字段给定的具体描述格式
     */
    defaultValue?: string;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @default 'YYYY-MM-DD'
     */
    format?: string;

    /**
     * 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }
     * @default false
     */
    showTime?: boolean | TqtQNGeneral.IUnknownObject;

    /**
     * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
     * @default false
     */
    resetTime?: boolean;

    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     * @default true
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @default false
     */
    defaultVisible?: boolean;

    /**
     * 时间的可选范围，起始时间 格式与format保持一致，默认YYYY-MM-DD
     */
    startDate?: string;

    /**
     * 时间的可选范围，结束时间 格式与format保持一致，默认YYYY-MM-DD
     */
    endDate?: string;

    /**
     * 日期值改变时的回调 签名: Function(value: MomentObject/String) => void 参数: value: {MomentObject/String} 日期值
     */
    onChange?: CommonEventFunction;
  }

  export const DatePicker: ComponentType<DatePickerProps>;

  interface MonthPickerProps extends StandardProps {
    /**
     * 输入框尺寸 可选值: 'small', 'medium', 'large'
     * @default 'medium'
     */
    size?: string;

    /**
     * 输入框状态 可选值: 'success', 'loading', 'error'
     */
    state?: string;

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 日期值（受控） 由format字段给定的具体描述格式
     */
    value?: string;

    /**
     * 初始日期值 由format字段给定的具体描述格式
     */
    defaultValue?: string;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @default 'YYYY-MM-DD'
     */
    format?: string;

    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     * @default true
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @default false
     */
    defaultVisible?: boolean;

    /**
     * 日期值改变时的回调 签名: Function(value: MomentObject/String) => void 参数: value: {MomentObject/String} 日期值
     */
    onChange?: CommonEventFunction;

    /**
     * 弹层展示状态变化时的回调 签名: Function(visible: Boolean, reason: String) => void 参数: visible: {Boolean} 弹层是否显示 reason: {String} 触发弹层显示和隐藏的来源
     */
    onVisibleChange?: CommonEventFunction;
  }

  export const MonthPicker: ComponentType<MonthPickerProps>;

  interface RangePickerProps extends StandardProps {
    /**
     * 输入框尺寸 可选值: 'small', 'medium', 'large'
     * @default 'medium'
     */
    size?: string;

    /**
     * 日期范围值数组 [moment, moment]
     */
    value?: string;

    /**
     * 初始的日期范围值数组 [moment, moment]
     */
    defaultValue?: string;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @default 'YYYY-MM-DD'
     */
    format?: string;

    /**
     * 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }
     * @default false
     */
    showTime?: boolean | TqtQNGeneral.IUnknownObject;

    /**
     * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
     * @default false
     */
    resetTime?: boolean;

    /**
     * 输入框状态 可选值: 'success', 'loading', 'error'
     */
    state?: string;

    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     * @default true
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @default false
     */
    defaultVisible?: boolean;

    /**
     * 日期值改变时的回调 签名: Function(value: MomentObject/String) => void 参数: value: {MomentObject/String} 日期值
     */
    onChange?: CommonEventFunction;

    /**
     * 弹层展示状态变化时的回调 签名: Function(visible: Boolean, reason: String) => void 参数: visible: {Boolean} 弹层是否显示 reason: {String} 触发弹层显示和隐藏的来源
     */
    onVisibleChange?: CommonEventFunction;
  }

  export const RangePicker: ComponentType<RangePickerProps>;

  interface YearPickerProps extends StandardProps {
    /**
     * 输入框尺寸 可选值: 'small', 'medium', 'large'
     * @default 'medium'
     */
    size?: string;

    /**
     * 输入框状态 可选值: 'success', 'loading', 'error'
     */
    state?: string;

    /**
     * 输入提示
     */
    placeholder?: string;

    /**
     * 日期值（受控） 由format字段给定的具体描述格式
     */
    value?: string;

    /**
     * 初始日期值 由format字段给定的具体描述格式
     */
    defaultValue?: string;

    /**
     * 日期值的格式（用于限定用户输入和展示）
     * @default 'YYYY-MM-DD'
     */
    format?: string;

    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示清空按钮
     * @default true
     */
    hasClear?: boolean;

    /**
     * 弹层显示状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     * @default false
     */
    defaultVisible?: boolean;

    /**
     * 日期值改变时的回调 签名: Function(value: MomentObject/String) => void 参数: value: {MomentObject/String} 日期值
     */
    onChange?: CommonEventFunction;

    /**
     * 弹层展示状态变化时的回调 签名: Function(visible: Boolean, reason: String) => void 参数: visible: {Boolean} 弹层是否显示 reason: {String} 触发弹层显示和隐藏的来源
     */
    onVisibleChange?: CommonEventFunction;
  }

  export const YearPicker: ComponentType<YearPickerProps>;
}
