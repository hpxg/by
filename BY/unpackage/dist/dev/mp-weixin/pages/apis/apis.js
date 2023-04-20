"use strict";
const common_vendor = require("../../common/vendor.js");
const typeone = () => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: "/api/detail?goodId=1",
      success: (res) => resolve(res)
    });
  });
};
const shocj = () => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: "/api/getTypeOne",
      success: (res) => resolve(res)
    });
  });
};
exports.shocj = shocj;
exports.typeone = typeone;
