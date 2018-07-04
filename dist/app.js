
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require("./npm/babel-runtime/regenerator/index");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("./npm/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("./npm/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("./npm/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("./npm/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("./npm/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class; /******************************************************************
                  MIT License http://www.opensource.org/licenses/mit-license.php
                  Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
                  *******************************************************************/

var _base = require("./base/index");

var _helper = require("./utils/helper/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (_dec = (0, _base.appify)({ pages: ["pages/home-pages/author/author","pages/home-pages/index/index","pages/code-pages/code/code","pages/user-pages/my/my","pages/user-pages/order-list/order-list","pages/user-pages/charging-record/charging-record","pages/home-pages/undone/undone","pages/user-pages/charging/charging","pages/user-pages/order-success/order-success","pages/user-pages/pay/pay"], tabBarList: [{"pagePath":"pages/home-pages/index/index","text":"首页","iconPath":"./images/index-1.png","selectedIconPath":"./images/index.png"},{"pagePath":"pages/code-pages/code/code","text":"扫码","iconPath":"./images/code.png","selectedIconPath":"./images/code.png"},{"pagePath":"pages/user-pages/my/my","text":"我的","iconPath":"./images/head.png","selectedIconPath":"./images/head.png"}] }), _dec(_class = function (_MyApp) {
  (0, _inherits3.default)(_default, _MyApp);

  function _default() {
    (0, _classCallCheck3.default)(this, _default);
    return (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  (0, _createClass3.default)(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var setting, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _base.wxp.getSetting();

              case 2:
                setting = _context.sent;

                if (!setting.authSetting['scope.userInfo']) {
                  _context.next = 10;
                  break;
                }

                _context.next = 6;
                return _base.wxp.getUserInfo();

              case 6:
                res = _context.sent;

                _base.wxp.switchTab({
                  url: '' + (0, _helper.getPageConfig)('home/index').url
                });
                _context.next = 11;
                break;

              case 10:
                console.log('没有获取到 userInfo，因为没有授权过');

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);
  return _default;
}(_base.MyApp)) || _class);

exports.default = _default;
