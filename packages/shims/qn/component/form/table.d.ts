declare module "@tarojs/components" {
  import type { ComponentType } from "react";
  import type { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface TableProps extends StandardProps {
    /**
     * 表格展示的数据源
     */
    dataSource?: Array<TqtGeneral.IAnyObject>;

    /**
     * 表格是否具有边框
     * @default true
     */
    hasBorder?: boolean;

    /**
     * 表格是否具有头部
     * @default true
     */
    hasHeader?: boolean;

    /**
     * 表格是否是斑马线
     * @default false
     */
    isZebra?: boolean;

    /**
     * 表格是否在加载中
     * @default false
     */
    loading?: boolean;

    /**
     * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
     */
    fixedHeader?: boolean;

    /**
     * 最大内容区域的高度,在fixedHeader为true的时候,超过这个高度会出现滚动条
     */
    maxBodyHeight?: number;

    /**
     * 表头是否是sticky
     */
    stickyHeader?: boolean;

    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop?: number;

    /**
     * 设置了此属性,将表格的选择状态变为受控状态,接收值为该行数据的key的值
     */
    selectedRowKeys?: Array<unknown>;

    /**
     * 选择selection的模式。可选值为single,multiple
     * @default 'multiple'
     */
    mode?: string;

    /**
     * 选择改变的时候触发的事件，注意: 其中records只会包含当前dataSource的数据，很可能会小于selectedRowKeys的长度。参数: e.detail.values: [selectedRowKeys, records] selectedRowKeys: Array,已经选择行的key records: Array 已经选择的行记录对象
     */
    onChange?: CommonEventFunction;

    /**
     * 用户手动选择/取消选择某行的回调。参数: e.detail.values: [selected, record, records]
     */
    onSelect?: CommonEventFunction;

    /**
     * 用户手动选择/取消选择所有行的回调。参数: e.detail.values: [selected, records]
     */
    onSelectAll?: CommonEventFunction;

    /**
     * 当具有 resizeable 的column移动时触发的事件。参数: e.detail.values: [id, width] id: string,触发resize的column id 。width: number resize后的width
     */
    onResizeChange?: CommonEventFunction;

    /**
     * 点击列排序触发的事件。参数: e.detail.values: [id, sortKey] id: string,触发sort的column id sortKey: sort的方向，asc和desc
     */
    onSort?: CommonEventFunction;

    /**
     * 点击过滤确认按钮触发的事件。参数: e.detail.values: [id, filterKey] id: string,触发sort的column id filterKey: 筛选的参数
     */
    onFilter?: CommonEventFunction;

    /**
     * 在内容区域滚动的时候触发的函数
     */
    onBodyScroll?: CommonEventFunction;
  }
  export const Table: ComponentType<TableProps>;
}
