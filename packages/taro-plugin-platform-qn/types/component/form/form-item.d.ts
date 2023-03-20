declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { FormItemProps as OldProps, StandardProps } from "@tarojs/components/types/common";

  interface FormItemProps extends OldProps, StandardProps {
    /**
     * label 标签的文本
     */
    label?: string;

    /**
     * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。 可选值: 'large', 'small', 'medium'
     */
    size?: keyof FormProps.Size;

    /**
     * 自定义提示信息，如不设置，则会根据校验规则自动生成.
     * @default 'left'
     */
    help?: string;

    /**
     * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面
     */
    extra?: string;

    /**
     * 校验状态，如不设置，则会根据校验规则自动生成 可选值: 'error'(失败) 'success'(成功) 'loading'(校验中)
     */
    validateState?: keyof FormItemProps.ValidateState;

    /**
     * 标签的位置 可选值: 'top'(上) 'left'(左) 'inset'(内)
     */
    labelAlign?: keyof FormProps.LabelAlign;

    /**
     * 标签的左右对齐方式 可选值: 'left'(左) 'right'(右)
     */
    labelTextAlign?: keyof FormProps.LabelTextAlign;

    /**
     * [表单校验] 不能为空
     */
    required?: boolean;

    /**
     * required 的星号是否显示
     */
    asterisk?: boolean;

    /**
     * required 自定义错误信息
     */
    requiredMessage?: string;
  }
  namespace FormItemProps {
    interface ValidateState {
      /** 失败 */
      error: any;
      /** 成功 */
      success: any;
      /** 校验中 */
      loading: any;
    }
  }
  export const FormItem: ComponentType<FormItemProps>;
}
