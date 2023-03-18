/// <reference path="../../setup.d.ts" />

import React from "react";
import { Select, Option, OptionGroup } from "@tarojs/components";

<Select
  size="large"
  value=""
  defaultValue=""
  placeholder=""
  state="error"
  autoWidth
  readOnly
  followTrigger
  disabled
  dataSource={[]}
  mode="tag"
  onChange={() => {}}
>
  <OptionGroup label="group1">
    <Option value="small" disabled>
      Small
    </Option>
  </OptionGroup>
</Select>;
