
"use strict";
/******************************************************************
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../../../../tslib/tslib");
function getPrototypeOf(obj) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(obj) : obj.__proto__;
}
exports.getPrototypeOf = getPrototypeOf;
/**
 * 遍历继承关系类的 prototype
 *
 * @export
 * @param {Function} callback - 回调函数，函数参数是遍历的每个实例的 prototype，函数如果返回 false，会终止遍历
 * @param {any} fromCtor  - 要遍历的起始 class 或 prototype
 * @param {any} toCtor    - 要遍历的结束 class 或 prototype
 * @param {boolean} [includeToCtor=true] - 是否要包含结束 toCtor 本身
 *
 * @example
 * A -> B -> C
 *
 * 在 C 中调用： iterateInheritedPrototype(fn, A, C, true)
 * 则，fn 会被调用三次，分别是 fn(A.prototype) fn(B.prototype) fn(C.prototype)
 */
function iterateInheritedPrototype(callback, fromCtor, toCtor, includeToCtor) {
    if (includeToCtor === void 0) { includeToCtor = true; }
    var proto = fromCtor.prototype || fromCtor;
    var toProto = toCtor.prototype || toCtor;
    while (proto) {
        if (!includeToCtor && proto === toProto)
            break;
        if (callback(proto) === false)
            break;
        if (proto === toProto)
            break;
        proto = getPrototypeOf(proto);
    }
}
exports.iterateInheritedPrototype = iterateInheritedPrototype;
/**
 *
 * 将一个可能包含原型链的对象扁平化成单个对象
 *
 * 如，现有这样的类的继承关系 A -> B -> C，当创建一个实例 a = new A() 时
 *
 * a 实例会存有 B、C 的原型链，使用此函数 newa = toObject(a) 之后，
 * newa 就会变成一个 PlainObject，但它有 A、B、C 上的所有属性和方法，
 * 当然不包括静态属性或方法
 *
 * 注意1：用此方法的话，尽量避免在类中使用胖函数，胖函数的 this 死死的绑定
 * 在原对象中，无法重新绑定
 *
 * 注意2：类继承的时候不要在函数中调用 super，toObject 之后是扁平的，没有 super 之说
 */
function toObject(something, options) {
    if (options === void 0) { options = {}; }
    var obj = {};
    if (!isObject(something))
        return obj;
    var excludes = options.excludes || ['constructor'];
    var _a = options.enumerable, enumerable = _a === void 0 ? true : _a, _b = options.configurable, configurable = _b === void 0 ? 0 : _b, _c = options.writable, writable = _c === void 0 ? 0 : _c;
    var defaultDesc = {};
    if (enumerable !== 0)
        defaultDesc.enumerable = enumerable;
    if (configurable !== 0)
        defaultDesc.configurable = configurable;
    if (writable !== 0)
        defaultDesc.writable = writable;
    iterateInheritedPrototype(function (proto) {
        Object.getOwnPropertyNames(proto).forEach(function (key) {
            if (excludes.indexOf(key) >= 0)
                return;
            if (obj.hasOwnProperty(key))
                return;
            var desc = Object.getOwnPropertyDescriptor(proto, key);
            var fnKeys = ['get', 'set', 'value'];
            fnKeys.forEach(function (k) {
                if (typeof desc[k] === 'function') {
                    var oldFn_1 = desc[k];
                    desc[k] = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return oldFn_1.apply(options.hasOwnProperty('bindTo') ? options.bindTo : this, args);
                    };
                }
            });
            Object.defineProperty(obj, key, tslib_1.__assign({}, desc, defaultDesc));
        });
    }, something, options.till || Object, false);
    return obj;
}
exports.toObject = toObject;
/**
 * 判断 something 是不是一个 JS Object (从 mora-script 中取过来的)
 *
 * 除了 null, 及字面量，其它一般都是 Object，包括 函数
 */
function isObject(something) {
    var type = typeof something;
    return something !== null && (type === 'function' || type === 'object');
}
exports.isObject = isObject;
function isPlainObject(something) {
    return Object.prototype.toString.call(something) === '[object Object]';
}
exports.isPlainObject = isPlainObject;

