
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require("../../../npm/babel-runtime/regenerator/index");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("../../../npm/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("../../../npm/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("../../../npm/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("../../../npm/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("../../../npm/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class; // 此文件是由模板文件 ".dtpl/page/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

var _base = require("../../../base/index");

var _helper = require("../../../utils/helper/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (_dec = (0, _base.pagify)(), _dec(_class = function (_MyPage) {
  (0, _inherits3.default)(_default, _MyPage);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.pageName = 'home/index', _this.data = {
      userList: {},
      eleList: [{ price: '50元', type: '包季' }, { price: '1元', type: '2小时/次' }, { price: '20元', type: '包月' }, { price: '2元', type: '充满' }],
      activeIndex: -1
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_default, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getUserInfo();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'choseType',
    value: function choseType(e) {
      var price = e.currentTarget.dataset.price;
      var type = e.currentTarget.dataset.type;
      this.setDataSmart({
        activeIndex: e.currentTarget.dataset.index
      });
      _base.wxp.navigateTo({
        url: (0, _helper.getPageConfig)('user/pay').url + '?type=' + type + '&price=' + price
      });
    }
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res = _base.wxp.getStorageSync('userinfo');

                this.setDataSmart({
                  userList: res.userInfo
                });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserInfo() {
        return _ref3.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: 'call',
    value: function call(e) {
      var phone = e.currentTarget.dataset.phone;
      _base.wxp.makePhoneCall({
        phoneNumber: phone
      });
    }
  }]);
  return _default;
}(_base.MyPage)) || _class);

exports.default = _default;
