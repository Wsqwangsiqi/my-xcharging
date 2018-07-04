
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rpx2px = rpx2px;

var _core = require("../../npm/@minapp/core/system");

/*
 * 转换器助手函数模块
 */

var BASE_WIDTH = 750;

/**
 * 将 rpx 根据当前设备转换为 px
 * @param {number} rpx
 */
function rpx2px(rpx) {
  var width = _core.wxp.getSystemInfoSync().windowWidth;
  return width / BASE_WIDTH * rpx;
}
