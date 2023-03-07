import { capitalize, toCamelCase } from "@tarojs/shared";
import { RecursiveTemplate } from "@tarojs/shared/dist/template";

export class Template extends RecursiveTemplate {
  exportExpr = "export default";
  supportXS = true;
  Adapter = {
    if: "a:if",
    else: "a:else",
    elseif: "a:elif",
    for: "a:for",
    forItem: "a:for-item",
    forIndex: "a:for-index",
    key: "a:key",
    xs: "sjs",
    type: "qn",
  };

  buildXsTemplate() {
    return '<import-sjs name="xs" from="./utils.sjs" />';
  }

  replacePropName(name, value, compName, componentAlias) {
    if (value === "eh") return name.replace("bind", "on");

    if (compName === "map") {
      const polygonsAlias = componentAlias.polygons;
      if (value.includes(polygonsAlias)) {
        name = "polygon";
      }
    }

    return name;
  }

  getEvents() {
    return {
      onTap: "eh",
      onTouchMove: "eh",
      onTouchEnd: "eh",
      onTouchCancel: "eh",
      onLongTap: "eh",
    };
  }

  buildThirdPartyAttr(attrs: Set<string>) {
    return [...attrs].reduce((str, attr) => {
      if (attr.startsWith("@")) {
        return `${str}on${capitalize(attr.slice(1))}="eh" `;
      } else if (attr.startsWith("bind")) {
        return `${str}${attr}="eh" `;
      } else if (attr.startsWith("on")) {
        return `${str}${attr}="eh" `;
      }

      return `${str}${attr}="{{ i.${toCamelCase(attr)} }}" `;
    }, "");
  }

  createMiniComponents(components): any {
    const result = super.createMiniComponents(components);

    // 兼容支付宝 2.0 构建
    delete result.slot;
    delete result["slot-view"];
    delete result["native-slot"];

    return result;
  }

  modifyLoopBody = (child: string, nodeName: string) => {
    if (nodeName === "picker-view") {
      return `<picker-view-column class="{{item.cl}}" style="{{item.st}}">
        <view a:for="{{item.cn}}" a:key="sid">
          ${child}
        </view>
      </picker-view-column>`;
    }

    return child;
  };

  modifyLoopContainer = (children: string, nodeName: string) => {
    if (nodeName === "picker") {
      return `
  <view>${children}</view>
  `;
    }

    if (nodeName === "tab") {
      return `
      <block a:for="{{xs.f(i.cn)}}" a:key="sid">
        <tab-item title="{{item.p3}}" itemKey="{{item.p2}}" closeable="{{xs.b(item.p0,false)}}" disabled="{{xs.b(item.p1,false)}}" class="{{item.cl}}" style="{{item.st}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
          <block a:for="{{item.cn}}" a:key="sid">
            <template is="{{xs.e(0)}}" data="{{i:item}}" />
          </block>
        </tab-item>
      </block>
    `;
    }
    return children;
  };

  modifyTemplateResult = (res: string, nodeName: string) => {
    if (nodeName === "picker-view-column" || nodeName === "tab-item") return "";
    if (nodeName === "tab") {
      const tT = res
        .replace("<tab", '<tab a:if="{{i.p0!==undefined}}"')
        .replace("</template>", "")
        .trimEnd();
      const elseT = res
        .replace('activeKey="{{i.p0}}"', "a:else")
        .replace(/\<template name=\".*\"\>/, "")
        .trimStart();
      return `${tT}\n${elseT}`;
    }
    return res;
  };

  modifyThirdPartyLoopBody = () => {
    // 兼容支付宝 2.0 构建
    const slot = this.componentsAlias.slot;
    const slotAlias = slot._num;
    const slotNamePropAlias = slot.name;

    return `<view a:if="{{item.nn==='${slotAlias}'}}" slot="{{item.${slotNamePropAlias}}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
        <block a:for="{{item.cn}}" a:key="sid">
          <template is="{{xs.e(0)}}" data="{{i:item}}" />
        </block>
      </view>
      <template a:else is="{{xs.e(0)}}" data="{{i:item}}" />`;
  };

  buildXSTmpExtra() {
    const tabItemAlias = this.componentsAlias["tab-item"]._num;
    return `f: function (l) {
    return l.filter(function (i) {return i.nn === '${tabItemAlias}'})
  }`;
  }
}
