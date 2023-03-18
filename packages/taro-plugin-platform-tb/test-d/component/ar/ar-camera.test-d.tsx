/// <reference path="../../setup.d.ts" />

import React from "react";
import { ArCamera, ArCameraProps } from "@tarojs/components";
import { expectType } from "tsd";

const markerImage: ArCameraProps.Marker = {
  url: "",
  height: 0,
  width: 0,
  identifier: "",
};

<ArCamera
  id="arcamera"
  mode="imageTracking"
  onARFrame={(e) => {
    const frame = e.detail;
    expectType<number>(frame.width);
    expectType<number>(frame.height);
    expectType<ArCameraProps.Anchor[]>(frame.anchors);
  }}
  onInit={() => {}}
  onStop={() => {}}
  onError={() => {}}
  marker={markerImage}
  useCapturedImage
/>;
