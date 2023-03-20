/// <reference path="component.d.ts" />

import {
  ElementAttrs,
  TransformReact2VueType,
  VueComponentType,
} from "@tarojs/components/types/index.vue3";
import type { ArCameraProps } from "@tarojs/components";

export declare const ArCamera: VueComponentType<ArCameraProps>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ar-camera": ElementAttrs<TransformReact2VueType<ArCameraProps>>;
    }
  }
}
