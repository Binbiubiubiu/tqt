declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  import type { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface PaginationProps extends StandardProps {
    /**
     * 分页组件大小 可选值: 'small', 'medium', 'large'
     * @default 'medium'
     */
    size?: string;

    /**
     * 分页组件类型 可选值: 'normal', 'simple', 'mini'
     * @default 'normal'
     */
    type?: string;

    /**
     * 前进后退按钮样式 可选值: 'normal', 'arrow-only', 'arrow-prev-only', 'no-border'
     * @default 'normal'
     */
    shape?: unknown;

    /**
     *（受控）当前页码
     */
    current?: number;

    /**
     *（非受控）初始页码
     * @default 1
     */
    defaultCurrent?: number;

    /**
     * 总记录数
     * @default 100
     */
    total?: number;

    /**
     * pageShowCount
     * @default 5
     */
    pageShowCount?: number;

    /**
     * 一页中的记录数
     * @default 10
     */
    pageSize?: number;

    /**
     * 每页显示选择器类型 可选值: false, 'filter', 'dropdown'
     * @default false
     */
    pageSizeSelector?: boolean | string;

    /**
     * 每页显示选择器可选值
     * @default [5, 10, 20]
     */
    pageSizeList?: Array<number>;

    /**
     * 每页显示选择器在组件中的位置 可选值: 'start', 'end'
     * @default 'start'
     */
    pageSizePosition?: string;

    /**
     * 存在每页显示选择器时是否使用浮动布局
     * @default false
     */
    useFloatLayout?: boolean;

    /**
     * 当分页数为1时，是否隐藏分页器
     * @default false
     */
    hideOnlyOnePage?: boolean;

    /**
     * type 设置为 normal 时，在页码数超过5页后，会显示跳转输入框与按钮，当设置 showJump 为 false 时，不再显示该跳转区域
     * @default true
     */
    showJump?: boolean;

    /**
     * 页码发生改变时的回调函数 签名: Function(current: Number, e: Object) => void 参数: current: {Number} 改变后的页码数 e: {Object} 点击事件对象
     */
    onChange?: CommonEventFunction;

    /**
     * 每页显示记录数量改变时的回调函数 签名: Function(pageSize: Number) => void 参数: pageSize: {Number} 改变后的每页显示记录数
     */
    onPageSizeChange?: CommonEventFunction;
  }

  export const Pagination: ComponentType<PaginationProps>;
}
