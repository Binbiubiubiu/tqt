/// <reference path="../../setup.d.ts" />

import React from "react";
import { Tab, TabItem } from "@tarojs/components";
import { expectType } from "tsd";

<Tab
  activeKey="1"
  size="medium"
  shape="pure"
  defaultActiveKey=""
  animation
  excessMode="slide"
  tabPosition="top"
  triggerType="click"
  onClick={() => {}}
  onChange={(e) => {
    expectType<string>(e.detail.value);
  }}
  onClose={(e) => {
    expectType<string>(e.detail.value);
  }}
>
  <TabItem title="title" itemKey="key" closeable disabled />
</Tab>;
