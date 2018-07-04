
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../npm/@minapp/core/system");

/*
 * 服务器相关配置

 */

// 是否为生产环境
var isProd = false;

// 请求主机名
var host = isProd ? '' // 生产环境
: ''; // 测试环境

// extConfig 默认配置
var extDefault = isProd ? {} // 生产环境
: {}; // 测试环境

// 获取 extConfig
var extConfig = function () {
  var eC = _core.wxp.getExtConfigSync();
  return Object.keys(eC).length ? eC : extDefault;
}();

// 响应错误码
var errorcode = {
  ERR_OK: 0, // ok
  ERR_AUTH: 40003 // 登录态过期
};

exports.default = {
  host: host,
  errorcode: errorcode,
  extConfig: extConfig
};
