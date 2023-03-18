/// <reference path="../../setup.d.ts" />

import React from "react";
import { Balloon, Tooltip } from "@tarojs/components";

<Balloon
  type="normal"
  visible
  defaultVisible
  onVisibleChange={() => {}}
  alignEdge
  closable
  align="b"
  offset={[0, 0]}
  onClose={() => {}}
  needAdjust
  delay={0}
  onAfterClose={() => {}}
  autoFocus
  animation={{ in: "zoomIn", out: "zoomOut" }}
  followTrigger
/>;

<Tooltip align="t" triggerType="hover" followTrigger />;
