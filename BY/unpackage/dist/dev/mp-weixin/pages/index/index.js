"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const pages_apis_apis = require("../apis/apis.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let zgflas = common_vendor.ref(true);
    let zgqh = () => {
      zgflas.value = false;
    };
    let one = common_vendor.ref([]);
    pages_apis_apis.shocj().then((res) => {
      let one2 = res.data;
      one2.value = one2;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => common_vendor.unref(zgqh) && common_vendor.unref(zgqh)(...args)),
        b: common_vendor.n(common_vendor.unref(zgflas) ? "zhegai-box" : "zhegai-box yin"),
        c: common_assets._imports_0,
        d: common_vendor.o((...args) => _ctx.sou && _ctx.sou(...args)),
        e: common_vendor.f(common_vendor.unref(one), (item, index, i0) => {
          return {
            a: index
          };
        }),
        f: _ctx.indicatorDots,
        g: _ctx.autoplay,
        h: _ctx.interval,
        i: _ctx.duration
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/t/Desktop/小程序/uniapp/BY/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
