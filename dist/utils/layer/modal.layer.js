
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modal = undefined;

var _regenerator = require("../../npm/babel-runtime/regenerator/index");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("../../npm/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toast = require("./toast.layer");

var _core = require("../../npm/@minapp/core/system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: Cphayim
 * @Date: 2018-03-21 16:11:49
 * @Last Modified by: Cphayim
 * @Last Modified time: 2018-05-25 16:58:08
 */
function _showModal(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? '提示' : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === undefined ? '提示内容' : _ref$content,
      _ref$showCancel = _ref.showCancel,
      showCancel = _ref$showCancel === undefined ? true : _ref$showCancel,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === undefined ? '取消' : _ref$cancelText,
      _ref$cancelColor = _ref.cancelColor,
      cancelColor = _ref$cancelColor === undefined ? '#333' : _ref$cancelColor,
      _ref$confirmText = _ref.confirmText,
      confirmText = _ref$confirmText === undefined ? '确认' : _ref$confirmText,
      _ref$confirmColor = _ref.confirmColor,
      confirmColor = _ref$confirmColor === undefined ? '#54b4ef' : _ref$confirmColor;

  // 隐藏 toast 层
  _toast.toast.hide();
  return new Promise(function (resolve, reject) {
    _core.wxp.showModal({
      title: title,
      content: content,
      showCancel: showCancel,
      cancelText: cancelText,
      cancelColor: cancelColor,
      confirmText: confirmText,
      confirmColor: confirmColor,
      // 用户点击确定按钮返回 Promise.resolve(true)
      // 用户点击取消或点击遮罩层(安卓)返回 Promise.reject(false)
      success: function success(res) {
        return resolve(res.confirm);
      },
      fail: function fail(err) {
        return reject(err);
      }
    });
  });
}

var modal = exports.modal = {
  /**
   * 显示 alert 弹窗
   * @params {object} opts
   * @params {string} opts.title
   * @params {string} opts.content
   * @params {string} opts.confirmText
   * @return
   */
  alert: function alert(_ref2) {
    var _this = this;

    var _ref2$title = _ref2.title,
        title = _ref2$title === undefined ? '提示' : _ref2$title,
        _ref2$content = _ref2.content,
        content = _ref2$content === undefined ? '提示内容' : _ref2$content,
        _ref2$confirmText = _ref2.confirmText,
        confirmText = _ref2$confirmText === undefined ? '确认' : _ref2$confirmText;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', _showModal({
                title: title,
                content: content,
                showCancel: false,
                confirmText: confirmText
              }));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },


  /**
   * 显示 confirm 弹窗
   * @params {object} opts
   * @params {string} opts.title
   * @params {string} opts.content
   * @params {string} opts.confirmText
   * @params {string} opts.cancelText
   * @return Promise.state
   */
  confirm: function confirm(_ref3) {
    var _this2 = this;

    var _ref3$title = _ref3.title,
        title = _ref3$title === undefined ? '提示' : _ref3$title,
        _ref3$content = _ref3.content,
        content = _ref3$content === undefined ? '提示内容' : _ref3$content,
        _ref3$confirmText = _ref3.confirmText,
        confirmText = _ref3$confirmText === undefined ? '确认' : _ref3$confirmText,
        _ref3$cancelText = _ref3.cancelText,
        cancelText = _ref3$cancelText === undefined ? '取消' : _ref3$cancelText;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', _showModal({
                title: title,
                content: content,
                confirmText: confirmText,
                cancelText: cancelText
              }));

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
};
