
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require("../../npm/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("../../npm/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("../../npm/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("../../npm/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class; // 此文件是由模板文件 ".dtpl/component/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

var _base = require("../../base/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (_dec = (0, _base.comify)(), _dec(_class = function (_MyComponent) {
  (0, _inherits3.default)(_default, _MyComponent);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.properties = {
      list: {
        type: Object,
        value: {}
      }

      /**
       * 组件的初始数据
       */
    }, _this.data = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /**
   * 组件的属性列表
   */


  (0, _createClass3.default)(_default, [{
    key: 'onPropUpdate',


    /**
     * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
     */
    value: function onPropUpdate(prop, newValue, oldValue) {}
  }]);
  return _default;
}(_base.MyComponent)) || _class);

exports.default = _default;
