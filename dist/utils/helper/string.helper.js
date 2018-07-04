
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obj2QueryStr = obj2QueryStr;
exports.trim = trim;
exports.delNosupport = delNosupport;
/*
 * 字符串操作助手函数
 */

/**
 * 对象转为查询字符串
 * @function obj2QueryStr
 * @params {Object} data
 * @return string
 * @example
 * ```javascript
 * obj2QueryStr({name:'Cphayim', age: 18})
 * // => 'name=Cphayim&age=18'
 * ```
 */
function obj2QueryStr(data) {
  var str = '';
  if (!data) return str;
  var keys = Object.keys(data);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      str += key + '=' + data[key].toString() + '&';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return str.slice(0, -1);
}

/**
 * 去掉首尾空格
 * @function trim
 * @export
 * @param {any} str
 * @returns
 */
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

/**
 * 删除不支持的子串
 * @function delNosupport
 * @param {string} str
 * @returns
 */
function delNosupport(str) {
  return str.replace(/translateZ\(\s*[^)]+\)/ig, '');
}
