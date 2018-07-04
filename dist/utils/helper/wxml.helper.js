
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySelectorInfoAll = exports.querySelectorInfo = undefined;

var _regenerator = require("../../npm/babel-runtime/regenerator/index");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("../../npm/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require("../../npm/babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

/**
 * 获取单个节点信息
 * @function querySelectorInfo
 * @params {string} selector 选择器名
 * @params {object} [_this]  组件上下文
 * @returns {Promise<any>}
 */
var querySelectorInfo = exports.querySelectorInfo = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(selector) {
    var _this = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return $_$__$____$__$_$({ selector: selector, _this: _this, multi: false });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function querySelectorInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 获取多个节点信息
 * @function querySelectorInfo
 * @params {string} selector 选择器名
 * @params {object} [_this]  组件上下文
 * @return {Promise<any>}
 */


var querySelectorInfoAll = exports.querySelectorInfoAll = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(selector) {
    var _this = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return $_$__$____$__$_$({ selector: selector, _this: _this, multi: true });

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function querySelectorInfoAll(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _core = require("../../npm/@minapp/core/system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * WXML 节点查询助手函数
 */
var defaultOpts = {
  selector: '',
  _this: null,
  multi: false

  /**
   * @params {Object} opts 配置项
   */
};function $_$__$____$__$_$(opts) {
  opts = (0, _extends3.default)({}, defaultOpts, opts);

  if (!opts.selector || typeof opts.selector !== 'string') {
    throw TypeError('wxml.helper: 选择器节点查询必须传入一个 string 类型的 selector 参数');
  }

  return new Promise(function (resolve, reject) {
    var query = _core.wxp.createSelectorQuery();
    // 有传递 _this，将选择器的选取范围更改为自定义组件的上下文
    opts._this && query.in(opts._this);

    var wxml = opts.multi ? query.selectAll(opts.selector) : query.select(opts.selector);
    wxml.boundingClientRect(function (res) {
      resolve(res);
    }).exec();
  });
}
