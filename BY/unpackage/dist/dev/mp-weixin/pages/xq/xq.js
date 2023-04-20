"use strict";
const pages_apis_apis = require("../apis/apis.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "xq",
  setup(__props) {
    pages_apis_apis.typeone().then((res) => {
      console.log(res);
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/t/Desktop/小程序/uniapp/BY/pages/xq/xq.vue"]]);
wx.createPage(MiniProgramPage);
