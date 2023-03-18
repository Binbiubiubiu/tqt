/// <reference path="../../setup.d.ts" />

import React from "react";
import { Overlay } from "@tarojs/components";

<Overlay
  visible
  onRequestClose={() => {}}
  align="tl bl"
  offset={[0, 0]}
  container=""
  hasMask
  canCloseByEsc
  canCloseByOutSideClick
  canCloseByMask
  onOpen={() => {}}
  onClose={() => {}}
  onPosition={() => {}}
  shouldUpdatePosition
  autoFocus
  needAdjust
  disableScroll
  cache
  safeNode=""
  wrapperClassName=""
  wrapperStyle=""
  animation={{ in: "expandInDown", out: "expandOutUp" }}
/>;
