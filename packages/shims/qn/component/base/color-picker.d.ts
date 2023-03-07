declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  import type { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface ColorPickerProps extends StandardProps {
    /**
     * 16进制颜色值
     */
    color?: string;
    /**
     * 是否禁止Alpha选择
     * @default false
     */
    disableAlpha?: boolean;
    /**
     * 预设颜色值，String[]，数组元素为16进制颜色的字符串
     * @default [‘#D0021B’, ‘#F5A623’, ‘#F8E71C’, ‘#8B572A’, ‘#7ED321’, ‘#417505’, ‘#BD10E0’, ‘#9013FE’, ‘#4A90E2’, ‘#50E3C2’, ‘#B8E986’, ‘#000000’, ‘#4A4A4A’, ‘#9B9B9B’, ‘#FFFFFF’]
     */
    presetColors?: Array<string>;
    /**
     * 选择器的宽度
     * @default 200
     */
    width?: string;
    /**
     * 颜色发生改变时触发，返回改变的颜色值
     */
    onChange?: CommonEventFunction;
  }
  export const ColorPicker: ComponentType<ColorPickerProps>;
}
