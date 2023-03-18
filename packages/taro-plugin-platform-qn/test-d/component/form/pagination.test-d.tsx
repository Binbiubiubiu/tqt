/// <reference path="../../setup.d.ts" />

import React from "react";
import { Pagination } from "@tarojs/components";

<Pagination
  size="large"
  type="mini"
  shape="no-border"
  current={1}
  defaultCurrent={0}
  onChange={() => {}}
  total={100}
  pageShowCount={100}
  pageSize={10}
  pageSizeSelector="dropdown"
  pageSizeList={[5, 10]}
  pageSizePosition="end"
  useFloatLayout
  onPageSizeChange={() => {}}
  hideOnlyOnePage
  showJump
/>;
