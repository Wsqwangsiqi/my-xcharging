
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = undefined;

var _core = require("../../npm/@minapp/core/system");

/*
 * Toast 模块
 * @Author: Cphayim
 * @Date: 2018-03-21 16:08:28
 * @Last Modified by: Cphayim
 * @Last Modified time: 2018-05-25 16:56:48
 */

/**
 * 显示等待
 * @params {string} text 显示文字 [default='加载中...']
 */
function loading() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';

  _core.wxp.showToast({
    title: text,
    icon: 'loading',
    duration: 60000,
    mask: true
  });
}
/**
 * 显示成功
 * @params {string} text 显示文字 [default='']
 */
function success() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

  _core.wxp.showToast({
    title: text,
    icon: 'success',
    duration: duration,
    mask: false
  });
}
/**
 * 显示无图标
 * @params {string} text 显示文字 [default='']
 */
function show() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

  _core.wxp.showToast({
    title: text,
    icon: 'none',
    duration: duration,
    mask: false
  });
}
/**
 * 隐藏
 */
function hide() {
  _core.wxp.hideToast();
}

var toast = exports.toast = {
  loading: loading,
  success: success,
  show: show,
  hide: hide
};
