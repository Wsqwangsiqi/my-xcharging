
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _client = require("./client.config");

var _client2 = _interopRequireDefault(_client);

var _server = require("./server.config");

var _server2 = _interopRequireDefault(_server);

var _page = require("./page.config");

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = exports.config = {
  client: _client2.default,
  server: _server2.default,
  pageMap: _page2.default
};
/*
 * 配置项
 * @Author: Cphayim
 * @Date: 2018-03-19 17:51:19
 * @Last Modified by: Cphayim
 * @Last Modified time: 2018-03-21 17:51:25
 */
