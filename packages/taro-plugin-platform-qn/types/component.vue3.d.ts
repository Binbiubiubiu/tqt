/// <reference path="component.d.ts" />
import * as CSS from "csstype";
import {
  VueComponentType,
  StandardProps,
  TransformReact2VueType,
  ElementAttrs,
  RemoveReactAttribute,
} from "@tarojs/components/types/index.vue3";
import type {
  /** 基础内容 */
  BalloonProps,
  TooltipProps,
  ColorPickerProps,
  MouseableViewProps,
  OverlayProps,
  ProgressProps,
  TabProps,
  TabItemProps,
  /** 表单 */
  ButtonProps,
  ButtonGroupProps,
  CheckboxGroupProps,
  CheckboxProps,
  DatePickerProps,
  MonthPickerProps,
  YearPickerProps,
  RangePickerProps,
  FormItemProps,
  FormProps,
  IconProps,
  InputProps,
  MenuButtonProps,
  MenuProps,
  ItemProps,
  SubMenuProps,
  GroupProps,
  DividerProps,
  PaginationProps,
  RadioGroupProps,
  RadioProps,
  SelectProps,
  OptionGroupProps,
  OptionProps,
  SwitchProps,
  TableProps,
  TableColumnProps,
  TextareaProps,
} from "@tarojs/components";

/** 联合类型不能用omit（比如picker） */
type DistributiveOmit<T, K extends keyof T> = T extends unknown ? Omit<T, K> : never;

interface SlimProps {
  class?: any;
  style?: CSS.Properties<string | number>;
  innerHTML?: string;
}

type TransformReact2VueType2<P extends Omit<StandardProps, "animation"> = Record<string, never>> =
  DistributiveOmit<P, RemoveReactAttribute> & SlimProps;

/** 基础内容 */
export declare const Balloon: VueComponentType<BalloonProps>;
export declare const Tooltip: VueComponentType<TooltipProps>;
export declare const ColorPicker: VueComponentType<ColorPickerProps>;
export declare const MouseableView: VueComponentType<MouseableViewProps>;
export declare const Overlay: VueComponentType<OverlayProps>;
export declare const Progress: VueComponentType<ProgressProps>;
export declare const Tab: VueComponentType<TabProps>;
export declare const TabItem: VueComponentType<TabItemProps>;
/** 表单 */
export declare const Button: VueComponentType<ButtonProps>;
export declare const ButtonGroup: VueComponentType<ButtonGroupProps>;
export declare const CheckboxGroup: VueComponentType<CheckboxGroupProps>;
export declare const Checkbox: VueComponentType<CheckboxProps>;
export declare const DatePicker: VueComponentType<DatePickerProps>;
export declare const MonthPicker: VueComponentType<MonthPickerProps>;
export declare const YearPicker: VueComponentType<YearPickerProps>;
export declare const RangePicker: VueComponentType<RangePickerProps>;
export declare const FormItem: VueComponentType<FormItemProps>;
export declare const Form: VueComponentType<FormProps>;
export declare const Icon: VueComponentType<IconProps>;
export declare const Input: VueComponentType<InputProps>;
export declare const MenuButton: VueComponentType<MenuButtonProps>;
export declare const Item: VueComponentType<ItemProps>;
export declare const Menu: VueComponentType<MenuProps>;
export declare const SubMenu: VueComponentType<SubMenuProps>;
export declare const Group: VueComponentType<GroupProps>;
export declare const Divider: VueComponentType<DividerProps>;
export declare const Pagination: VueComponentType<PaginationProps>;
export declare const RadioGroup: VueComponentType<RadioGroupProps>;
export declare const Radio: VueComponentType<RadioProps>;
export declare const Select: VueComponentType<SelectProps>;
export declare const Option: VueComponentType<OptionProps>;
export declare const OptionGroup: VueComponentType<OptionGroupProps>;
export declare const Switch: VueComponentType<SwitchProps>;
export declare const Table: VueComponentType<TableProps>;
export declare const TableColumn: VueComponentType<TableColumnProps>;
export declare const Textarea: VueComponentType<TextareaProps>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 基础内容 */
      balloon: ElementAttrs<TransformReact2VueType2<BalloonProps>>;
      tooltip: ElementAttrs<TransformReact2VueType2<TooltipProps>>;
      "color-picker": ElementAttrs<TransformReact2VueType<ColorPickerProps>>;
      "mouseable-view": ElementAttrs<TransformReact2VueType<MouseableViewProps>>;
      overlay: ElementAttrs<TransformReact2VueType2<OverlayProps>>;
      progress: ElementAttrs<TransformReact2VueType2<ProgressProps>>;
      tab: ElementAttrs<TransformReact2VueType2<TabProps>>;
      "tab-item": ElementAttrs<TransformReact2VueType2<TabItemProps>>;
      button: ElementAttrs<TransformReact2VueType<ButtonProps>>;
      "button-group": ElementAttrs<TransformReact2VueType<ButtonGroupProps>>;
      "checkbox-group": ElementAttrs<TransformReact2VueType<CheckboxGroupProps>>;
      checkbox: ElementAttrs<TransformReact2VueType<CheckboxProps>>;
      "date-picker": ElementAttrs<TransformReact2VueType<DatePickerProps>>;
      "month-picker": ElementAttrs<TransformReact2VueType<MonthPickerProps>>;
      "year-picker": ElementAttrs<TransformReact2VueType<YearPickerProps>>;
      "range-picker": ElementAttrs<TransformReact2VueType<RangePickerProps>>;
      "form-item": ElementAttrs<TransformReact2VueType2<FormItemProps>>;
      form: ElementAttrs<TransformReact2VueType<FormProps>>;
      icon: ElementAttrs<TransformReact2VueType<IconProps>>;
      input: ElementAttrs<TransformReact2VueType<InputProps>>;
      "menu-button": ElementAttrs<TransformReact2VueType<MenuButtonProps>>;
      item: ElementAttrs<TransformReact2VueType<ItemProps>>;
      menu: ElementAttrs<TransformReact2VueType<MenuProps>>;
      "sub-menu": ElementAttrs<TransformReact2VueType<SubMenuProps>>;
      group: ElementAttrs<TransformReact2VueType<GroupProps>>;
      divider: ElementAttrs<TransformReact2VueType<DividerProps>>;
      pagination: ElementAttrs<TransformReact2VueType<PaginationProps>>;
      "radio-group": ElementAttrs<TransformReact2VueType<RadioGroupProps>>;
      radio: ElementAttrs<TransformReact2VueType<RadioProps>>;
      select: ElementAttrs<TransformReact2VueType<SelectProps>>;
      option: ElementAttrs<TransformReact2VueType<OptionProps>>;
      "option-group": ElementAttrs<TransformReact2VueType<OptionGroupProps>>;
      switch: ElementAttrs<TransformReact2VueType<SwitchProps>>;
      table: ElementAttrs<TransformReact2VueType<TableProps>>;
      "table-column": ElementAttrs<TransformReact2VueType<TableColumnProps>>;
      textarea: ElementAttrs<TransformReact2VueType<TextareaProps>>;
    }
  }
}
